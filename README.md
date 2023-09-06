# Pets App (React ⚛️ and Spring 🌱)

## Lab - Connecting Spring Boot to React

In this exercise, your task is to build a React application that interacts with a locally-hosted API, allowing users to load data from the API and submit new entries. While the backend is provided, your job is to create the frontend.

The API provides a list of pets and routes to view the entire list and add a new pet. Your application should consist of separate components for viewing the list and adding new pets.

### MVP

1. Create a wireframe for the site, including a title, a list of pets, and a form. Use the wireframe to determine which components you will need to create.

2. Test the API using Postman to understand the data structure and requirements for the POST request. It exposes two routes with CORS already configured:
   - GET requests to `localhost:8080/pets`
   - POST requests to `localhost:8080/pets`

3. Determine where each piece of state should reside in your application and what needs to be passed as props between components.

4. Create a new React app that allows users to display all pets and add new pets.

5. Remember to create the database before running the API!

### Extensions

1. The API also exposes a DELETE route at `localhost:8080/pets/{id}`. Add a delete button for each pet to let users delete records.

2. Revisit your HTML and ensure you are following good accessibility practices. For example, minimize your use of unnecessary `div` elements and ensure that all labels are correctly linked to their inputs.

3. Add CSS styles to your application.

### Technologies Used

- React
- Spring Boot
- CSS

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository.
2. Set up the database and run the Spring Boot API.
3. Run the React application.
4. Start exploring and using the app.

