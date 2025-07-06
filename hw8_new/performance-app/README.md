HW8

Practicing Knowledge of DevTools, ESLint, and Building a List Application

Creating and Setting Up a New React Project
Configuring ESLint

Creating Application Components

- Creating List Display Component (ListItems.js):
- Define a functional component with state:
  Use useState for:
  items (array storing list elements)
  inputValue (current text input value)

Implement addItem function to:
Add current inputValue to items array
Clear inputValue

Return JSX containing:
Text input field
"Add item" button

<ul> element rendering each item in <li>

Integrating Component in App.js:
Open src/App.js
Import the ListItems component
Return JSX containing <ListItems /> in App function
Save and verify the app runs without errors

Introducing Intentional Error
Adding Error in ListItems.js:
Add useEffect hook:
useEffect(() => {
console.log("ListItems component updated");
}, [items]);
This triggers console logs on every item addition

Testing and Performance Analysis
Use React DevTools:
Open browser's React DevTools
Interact with app (add list items)
Observe frequent component re-renders and console logs indicating performance issues

Fixing the Error
Modify useEffect:
useEffect(() => {
console.log("Component mounted");
}, []); // Empty dependency array runs only once
Secondary Performance Test

Recheck using React DevTools

Verify:
Reduced component re-renders
Console logs appear only during initial render

Finalization and Code Validation
Run ESLint to analyze source code: npx eslint .
Fix all identified issues following ESLint recommendations
