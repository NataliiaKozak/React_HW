HW 3

Task: Creating a Simple Rating Application

Let's build an application that allows users to change ratings.

Implementation Steps

- Create a new file Rating.jsx

- Inside Rating.jsx: Import useState from React

- Create a functional component called Rating

- Inside the Rating component: Use useState to create a ratingValue state with initial value 0

- Define a ratingList array containing image URLs for different rating values

- Return JSX that includes: An image displaying the current rating from ratingList. Buttons with different rating options (e.g., "Bad", "Fair", "Good", "Excellent")

- For each button: Set an onClick handler that updates ratingValue with the selected rating

- Structure the JSX: Wrap the rating image and buttons in a <div> container

- In App.js: Import the Rating component from Rating.jsx

- Use the Rating component in your App

- Styling: Customize the appearance: Set button colors and sizes. Define image dimensions. Add any other styling preferences
