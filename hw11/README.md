HW 11

Creating a Simple Blog Using React and react-router-dom

Project Setup:

- Create a new React project using Create React App.
- Install the react-router-dom library using npm or yarn.

Creating Components:

- Create components for each page: Home Page. Article List Page. Individual Article Page
- Define the required content (e.g., text, headings, links) within each component.

Routing Configuration:

- Import BrowserRouter, Routes, Route, Link, and NavLink from react-router-dom in your root application file.
- Define routes inside the Routes component. Each route should correspond to a specific path in your application.
- Create a Route component for each page, specifying the path and the component to render when the path matches.

Adding Navigation:

- Use Link or NavLink components to create navigation links between pages. Ensure they point to the correct routes.

Handling Route Parameters:
Inside the individual article component, use the useParams() hook to extract route parameters (e.g., article ID) and load/fetch the corresponding article for display.

In-App Navigation:
Use the useNavigate() hook for programmatic navigation within your application.

Styling:

- Create modular CSS styles for each component using CSS Modules or other React styling methods.
- Apply styles to relevant elements in each component to enhance the app’s appearance.

Testing and Launch:
Start the application and verify:
Navigation between pages works correctly
Each page displays the proper content
Styles are applied as expected
