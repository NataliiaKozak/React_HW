import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";

// Component to display a single question with options
const Question = ({ id, text }) => {
  const dispatch = useDispatch();
  // Get the selected answer for this question from Redux state
  const selected = useSelector(
    (state) => state.questionnaire.questions.find((q) => q.id === id)?.answer
  );

  // Handle radio button change
  const handleChange = (e) => {
    dispatch(answerQuestion({ id, answer: e.target.value }));
  };

  return (
    <div>
      <strong>{text}</strong> <br />
      {/* Option 1 */}
      <label>
        <input
          type="radio"
          name={`question-${id}`}
          value="Option 1"
          checked={selected === "Option 1"}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      {/* Option 2 */}
      <label>
        <input
          type="radio"
          name={`question-${id}`}
          value="Option 2"
          checked={selected === "Option 2"}
          onChange={handleChange}
        />
        Option 2
      </label>
      <br />
      <br />
    </div>
  );
};

export default Question;
