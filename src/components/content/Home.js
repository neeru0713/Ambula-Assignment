import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the To-Do List and Shopping Cart App</h1>
      <p>
        This application serves as a simple to-do list and shopping cart. You can
        add new tasks to your to-do list, mark them as completed, or remove them
        from the list. Additionally, you can add items to your shopping cart and
        remove them as well.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>
          To-Do List: You can add new tasks, mark them as completed, or remove
          them from the list.
        </li>
        <li>
          Shopping Cart: You can add items to the cart and remove them as well.
        </li>
        <li>API Integration: Fetch and display data from a dummy API.</li>
        <li>
          Routing: Multiple pages are set up using React Router for Home, About,
          Contact, To-Do List, Shopping Cart, and API Integration.
        </li>
      </ul>
      <h2>Getting Started:</h2>
      <ol>
        <li>Click on the "To-Do List" link in the navigation to manage your tasks.</li>
        <li>Click on the "Shopping Cart" link in the navigation to manage your items.</li>
        <li>
          Click on the "API Integration" link in the navigation to view data
          fetched from the dummy API.
        </li>
        <li>Click on the "About" link in the navigation to learn more about the project.</li>
        <li>Click on the "Contact" link in the navigation to submit inquiries or feedback.</li>
      </ol>
      <p>
        Note: This is a demo application and does not have full functionality for
        some features like API integration. It's created as part of a React
        application for demonstration purposes only.
      </p>
    </div>
  );
};

export default Home;
