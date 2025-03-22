import React, { isValidElement, useState } from 'react';

/*

Notes for Claude - thank you for your help in reviewing this submitted component.  this is a submission for a problem
in a Problem Set for React Development.

Please review the component and provide feedback using the sandwich technique.  

In your feedback, ensure that you confirm that the approach provided addresses the stated problem as well as your other
analysis.

The following assumptions apply unless otherwise noted:
1.  Assume for all problems that there is an App.js which imports the component and uses appropriate routing for this component.
2.  The styling classes referenced in this component are imported directly to App.js thru a global css file, so there are 
    no references in this component to css files.

Problem:

Implement a form in React that collects a user's name, email, and message, and then logs the form data to the console when submitted. Include form validation for the email field.

*/

const P008 = () => {

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
  
    console.log(name, " : ", value);
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'email' && errors.email) {
      setErrors({
        ...errors,
        email : null
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors({
        ...errors,
        email: 'Improperly Formatted Email Address.'
      })
      return;
    }

    setErrors({});

    console.log('Form submitted with ', formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <span>Name: </span>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <span>Email Address: </span>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        
        {/* Message */}
        <span>Please leave your Message:  </span>
        <input 
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

}

export default P008;