import './ClaudeRecipe.css';
import ReactMarkdown from 'react-markdown';
export default function ClaudeRecipe(props) {
  return (
    <section className="recipe-section" aria-live="polite">
      <h2>Cookify Recommends</h2>
      <div className="suggested-recipe-container">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </div>
    </section>
  );
}
