import React, { useState } from "react";
import AddRecipe from "./AddRecipe";
import Item from "./Item";

function App() {
    const [items, setItems] = useState([]);

    function addItem(inputText) {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
    }
    return (
        <div className="main">
            <AddRecipe onAdd={addItem} />
            <div className="container-two">
                <h1>ALL RECIPE</h1>
                {items.map(item => {
                    return <Item
                    title={item.title}
                    ingredients={item.ingredients}
                    time={item.time}
                    image={item.image}
                    instructions={item.instructions}
                  />
              })}
            </div>
        </div>
    )
}

export default App;
