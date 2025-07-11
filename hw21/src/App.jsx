import { useDispatch, useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";

// Main application component
function App() {
  const dispatch = useDispatch();
  // Get questions from Redux state
  const questions = useSelector((state) => state.questionnaire.questions);

  // Handle submit button click
  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Questionnaire</h1>
      {/* Render each question */}
      {questions.map((q) => (
        <Question key={q.id} id={q.id} text={q.text} />
      ))}
      {/* Submit button */}
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "dodgerblue",
          color: "white",
          padding: "10px",
          marginTop: "10px",
          width: "100%",
        }}
      >
        Submit
      </button>
      {/* Display result after submission */}
      <Result />
    </div>
  );
}

export default App;
