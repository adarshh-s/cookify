import { useState, useRef, useEffect } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from './ai';
import IngredientsList from './IngredientsList';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');

  const recipeSection = useRef(null);
  useEffect(() => {
    if (recipe !== '' && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' });
      // const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
      //       window.scroll({
      //           top: yCoord,
      //           behavior: "smooth"
      //       })
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    if (newIngredient.trim() !== '') {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  return (
    <main>
      <h1 className="title">Make Your Delicious </h1>
      <h1 className="title-1">Food</h1>
      <form className="ing-form" action={addIngredient}>
        <input
          type="text"
          name="ingredient"
          aria-label="Add Ingredients"
          className="textbox"
        />
        <button type="submit" className="button-1">
          +
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
