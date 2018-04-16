import React from 'react';

const MoviesList = (props) => {
    console.log(props);

   const renderMovies = (movies) => (
        movies ?
        movies.map(item => (
        
                <div key={item.id}> 
                {item.name}
                </div>   
        )):
       <div>Loading...  </div>
    )



    return (
        <div>
            {renderMovies(props.data.movies)}
        </div>
    );
};

export default MoviesList;