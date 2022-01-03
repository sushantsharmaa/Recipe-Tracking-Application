import React, { useState } from "react";

function AddRecipe(props) {
    const [inputText, setInputText] = useState({
        title: "",
        ingredients: "",
        time: "",
        image: "",
        instructions: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setInputText((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitReset(event) {
        props.onAdd(inputText);
        setNote({
            title: "",
            ingredients: "",
            time: "",
            image: "",
            instructions: ""
        });
        event.preventDefault();
      }

    return (
        <div className="container">
            <h1>ADD RECIPE</h1>
            <form>
                <input
                    onChange={handleChange}
                    name="title"
                    value={inputText.title}
                    placeholder="Title"
                    autocomplete="off"
                />
                <input
                    onChange={handleChange}
                    name="ingredients"
                    value={inputText.ingredients}
                    placeholder="Ingredients"
                    autocomplete="off"
                />
                <input
                    onChange={handleChange}
                    name="time"
                    value={inputText.time}
                    placeholder="Time"
                    autocomplete="off"
                />
                <input
                    onChange={handleChange}
                    name="image"
                    value={inputText.image}
                    placeholder="Image URL"
                    autocomplete="off"
                />
                <input
                    onChange={handleChange}
                    name="instructions"
                    value={inputText.instructions}
                    placeholder="Instructions"
                    autocomplete="off"
                />
            </form>
            <button onClick={submitReset}>ADD</button>
        </div>
    );
}

export default AddRecipe