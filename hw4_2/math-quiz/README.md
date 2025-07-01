HW 4

Task 2: Creating a "Math Quiz" Application in React

This application will present users with addition math problems, evaluate their answers, and award/deduct points for correct/incorrect responses respectively.

Project Initialization:
Use create-react-app to set up the initial project template.
This provides a ready-to-use development environment for your React application.

Creating the MathQuiz Component:
This component will handle the core game logic, including:

- Generating random numbers for math problems
- Displaying the current score
- Integrating with the Answer component to receive and validate user responses

Creating the Answer Component:

- Provides an input form for user answers.
- Handles user input and submits it for validation.
- Connected to MathQuiz via the updatePoints function, which triggers on form submission.

Data Preparation

- In MathQuiz, two randomly generated variables (a and b) create addition problems.
- These values, along with the updatePoints scoring function, are passed to Answer.

State Management

- In MathQuiz: Use useState to track the user's current score.
- In Answer: Use useState to manage user input.

Dynamic Rendering
MathQuiz displays: The current math problem (a + b). The user's score

Answer provides:
An input interface. Submission handling (sends answers to MathQuiz for validation and score updates)

Styling
Apply CSS to enhance the visual presentation of components.

Functionality Testing
Launch the app and verify: Correct problem generation. Proper answer processing. Accurate score updates based on answer correctness
