import React from "react";
export default function Main(){
    const [ingredients,setIngredients]=React.useState([])
    const ingredientListItems=ingredients.map(ingredeient=>(
        <li key={ingredeient}>{ingredeient}</li>

    ));
    function addIngredient(formData){
        // e.preventDefault()

        const newIngredient=formData.get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
       
    }
    return(
        <main>
        <form action={addIngredient} className="add-ingredient-form">
            <input type="text" name="ingredient" placeholder="e.g. oranges" aria-label="Add ingredient"/>
            <button>Add Ingredients</button>
        </form>
        <ul>
                {ingredientListItems}
        </ul>
        </main>
    )
}