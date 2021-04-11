import React from 'react';

const Card = (props) =>{
    return(
   
       <div className="bg-light-green br3 pad3 ma2 grow dib bw shadow-5 tc">     
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <h2>{props.email}</h2>
               
            </div>
        </div>

    );
}


export default Card;