export default function IngredientsList(props){
    
    const ingredientListItems=props.ingredients.map(ingredeient=>(
        <li key={ingredeient}>{ingredeient}</li>

    ));
    return (<section>
        <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list" aria-live="polite"> {ingredientListItems}</ul>
    { props.ingredients.length>3 && <div className="get-recipe-container">
        <div ref={props.ref} >
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredents</p>
            <button onClick={props.toggleRecipeShown}>Get a recipe</button>
        </div>
    </div>
        }
    </section>)
}