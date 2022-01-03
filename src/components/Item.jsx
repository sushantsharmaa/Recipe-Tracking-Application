import React from "react";

function Item(props){
    return (
        <div className="item">
            <div><img src={props.image}></img></div>
           <div className="details">
               <h3>{props.title}</h3>
               <p>Time: {props.time}</p>
               <p>Ingredients: {props.ingredients}</p>
               <p>Instructions: {props.instructions}</p>
           </div>          
        </div>
    )
}

export default Item;