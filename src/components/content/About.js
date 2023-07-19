import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Our To-Do List and Shopping Cart application is designed to help you stay
        organized and manage your tasks and shopping in an efficient manner.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide a simple and user-friendly application that
        allows users to easily keep track of their to-do tasks and shopping items.
        We aim to enhance productivity and ensure a smooth shopping experience
        for our users.
      </p>
      <h2>Meet the Team</h2>
      <div className="team">
        <div className="team-member">
          <img
            src="path-to-image.jpg" // Add the image path for the team member
            alt="Team Member 1"
          />
          <h3>John Doe</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <img
            src="path-to-image.jpg" // Add the image path for the team member
            alt="Team Member 2"
          />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>
        {/* Add more team members if applicable */}
      </div>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, suggestions, or feedback, please feel free to
        contact us using the form provided on the "Contact" page. We'd love to hear
        from you!
      </p>
      <p>
        Thank you for using our application. We hope it brings you value and makes
        your life easier!
      </p>
    </div>
  );
};

export default About;
