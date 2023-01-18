import React from "react";
import "./contact.css";
// import { validateEmail } from "../../utils/helpers";
// currently no back end to make;

// To prevent submiting empty feilds
const contactPage = () => {
  function empty() {
    const onSubmit = (event) => {
      event.preventDefault();
      alert("Please fill out all the");
      return false;
    };

    return (
      <form onSubmit={onSubmit}>
        <input />
        <input type="submit" />
      </form>
    );
  }
  // Need a function to email when on submit
  // dont forget to do a correct email layout as well
  return (
    <div class="container">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname"></input>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname"></input>

        <label for="company">Company</label>
        <input type="text" id="company" name="company"></input>

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="usa">USA</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
        </select>

        <label for="subject">Message</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Your Message"
        ></textarea>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default contactPage;
