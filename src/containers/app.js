import React, { Component } from 'react';
import { connect } from 'react-redux';
import {movieslist, directorslist} from '../actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/moviesList';
import DirectorList from '../components/directorList';

class App extends Component {

    componentWillMount(){
        this.props.movieslist();
        this.props.directorslist();
       
    }

   


    render(){
        console.log(this.props)
        return (
            <div className="container"> 
                <MoviesList {...this.props} />
                <br />
                <DirectorList {...this.props} />
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

const mapDispatchToprops =(dispatch) => {
    return bindActionCreators({
        movieslist,
        directorslist
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToprops)(App);