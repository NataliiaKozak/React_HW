Homework 6

Task: Creating a simple React application to display user data

API: https://randomuser.me/api

Step 1: Project Setup
Use Create React App to create a new project.
Navigate to the project directory:
Install the axios library for making HTTP requests:

Step 2: Preparing Project Files
Create a file UserProfile.jsx in the src directory. In this file, you will implement the component to display user data.
Create a stylesheet UserProfile.module.css in the same directory as UserProfile.jsx. These styles will be applied to the UserProfile component.
Open the App.js file and import the UserProfile component from the created file.

Step 3: Developing the UserProfile Component
In UserProfile.jsx, import React, useState, and useEffect from the react library, and import axios.
Import the UserProfile.module.css stylesheet.
Define a functional component UserProfile, using useState to create the user state.
Use useEffect to call the user data loading function when the component mounts.
Write an asynchronous function fetchUser that will fetch user data via the API and update the user state.
Inside the component, add a condition to check the data loading state. If the data is loaded, display the user information. If the data is still loading, display the message "Loading...".

Step 4: Styling the Component
Open UserProfile.module.css and add the necessary CSS classes to style the UserProfile component elements.
Apply these classes to the corresponding elements in the JSX code of the UserProfile component.

Step 5: Adding a Button to Load New Data
In UserProfile, add a button that will allow the user to load a new random user.
Set an event handler for this button that will call the fetchUser function when clicked.

Step 6: Testing the Application
Run the command npm start to launch your application.
Verify that the user data is displayed correctly and that the button for loading a new user works as expected.
