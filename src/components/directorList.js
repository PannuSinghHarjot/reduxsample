import React from 'react';

const DirectorList = (props) => {
    console.log(props);

   const renderMovies = (directors) => (
        directors ?
        directors.map(item => (
        
                <div key={item.id}> 
                {item.name}
                </div>   
        )):
       <div>Loading...  </div>
    )



    return (
        <div>
            {renderMovies(props.data.directors)}
        </div>
    );
};

export default DirectorList;