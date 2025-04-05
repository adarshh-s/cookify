export default function IngredientsList(props) {
  return (
    <section>
      <h2 className="sub-title">Ingredients on hand</h2>
      <ul className="ingredient-list">
        {props.ingredients.map((ingredient, index) => (
          <li className="ingredient-pill" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="button-2" onClick={props.getRecipe}>
            Get Recipe
          </button>
        </div>
      )}
    </section>
  );
}
