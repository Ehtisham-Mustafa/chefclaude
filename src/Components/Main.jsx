import React from "react";
import IngredientsList from "./IngredinetsList";
import ClaudeRecipe from "./ClaudeRecipe";
export default function Main(){
    const [ingredients,setIngredients]=React.useState([])
    const [recipeShown,setRecipeShown]=React.useState(false)
    const recipSection=React.useRef(null)
    console.log(recipSection)
    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
       
    }
    function toggleRecipeShown(){
        setRecipeShown(prevShown=>!prevShown)
    }

    return(
        <main>
        <form action={addIngredient} className="add-ingredient-form">
            <input type="text" name="ingredient" placeholder="e.g. oranges" aria-label="Add ingredient"/>
            <button>Add Ingredients</button>
        </form>
        { ingredients.length>0 && <IngredientsList ref={recipSection}  ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />}
        { recipeShown && <ClaudeRecipe/> }
        </main>
    )
}