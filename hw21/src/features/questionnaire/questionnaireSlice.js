import { createSlice } from "@reduxjs/toolkit";

// Initial state for the questionnaire
const initialState = {
  questions: [
    { id: 1, text: "Question 1", correct: "Option 1", answer: "" },
    { id: 2, text: "Question 2", correct: "Option 1", answer: "" },
    { id: 3, text: "Question 3", correct: "Option 2", answer: "" },
    { id: 4, text: "Question 4", correct: "Option 1", answer: "" },
    { id: 5, text: "Question 5", correct: "Option 2", answer: "" },
  ],
  submitted: false,
  score: 0,
};

// Slice for questionnaire logic
const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    // Action to answer a question
    answerQuestion(state, action) {
      const { id, answer } = action.payload;
      const question = state.questions.find((q) => q.id === id);
      if (question) question.answer = answer;
    },
    // Action to submit answers and calculate score
    submitAnswers(state) {
      let score = 0;
      state.questions.forEach((q) => {
        if (q.answer === q.correct) score++;
      });
      state.score = score;
      state.submitted = true;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
