import React from "react";
export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientListItems=ingredients.map(ingredeient=>(
        <li key={ingredeient}>{ingredeient}</li>

    ));
    function handlesubmit(e){
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const newIngredient=formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return(
        <main>
        <form onSubmit={handlesubmit} className="add-ingredient-form">
            <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient"/>
            <button>Add Ingredient</button>
        </form>
        <ul>
                {ingredientListItems}
        </ul>
        </main>
    )
}