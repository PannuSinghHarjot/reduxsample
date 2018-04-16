
export function movieslist(){

    return {
        type:'MOVIES_LIST',
        payload: [
            { id:1, name:"Pulp Fiction" },
            { id:2, name:"Pacific Rim" },
            { id:3, name:"Rambo" },
            { id:4, name:"CastAway" }
        ]
    }

}

export function directorslist(){

    return {
        type:'DIR_LIST',
        payload: [
            { id:1, name:"Fiction" },
            { id:2, name:"Rim" },
            { id:3, name:"Rambo JOHN" },
            { id:4, name:"CastAway Tom" }
        ]
    }

}