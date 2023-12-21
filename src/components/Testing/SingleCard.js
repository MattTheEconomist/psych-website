import React from 'react';


function SingleCard({info, title}){

    return (<>
    <h3>{title}</h3>
    <p>{info}</p>
    </>)
}

export default SingleCard