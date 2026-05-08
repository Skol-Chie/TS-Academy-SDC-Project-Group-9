import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {

  // State to manage form data

  let [formData, setFormData] = React.useState({
    fullname: '',
    email: '',
    number: '',
    message: ''
  });

   let [status, setStatus] = React.useState('');
      

    let handleChange = (e) => {
      setFormData({...formData, [e.target.id]:e.target.value});
    };

    let handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('Submitting...');


      let data = new FormData();
      data.append('fullname', formData.fullname);
      data.append('email', formData.email);
      data.append('number', formData.number);
      data.append('message', formData.message);

      try{
        // the api fetch call
        let response = await fetch("https://corsproxy.io/?https://whitebricks.com/tsacademy.php", {
            method: "POST",
            body: data
        });

        if (response.ok) {
          setStatus('Message sent successfully!');
          setFormData({
            fullname: '',
            email: '',
            number: '',
            message: ''
          });
        }
        else {
          setStatus('Failed to send message. Please try again later.');
        }
      }
      catch (error) {
        console.error('Error submitting form:', error);
        setStatus('An error occurred. Please try again later.');
      }
  
    };

  return (
    <div className={styles.contact_container} id="contactForm">
      <h2>Have Questions About Planetary Science</h2>
      <p>Interested in learning more about space, astronomy or how planetery data is collected and analyzed? <br/>
         Reach out and we'll get back to you
      </p>
      <div  className={styles.contact_form}>
        { status &&(
         <p className={styles.status_message}>{status}</p>
        )}
        {/* <h1>Contact Us</h1> */}
        <form className={styles.contact_form_grid} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
           <label htmlFor="fullname">Full Name</label> 
           <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" required /> 
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="example@example.com" required />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="number">Phone Number</label>
            <input type="tel" id="number" value={formData.number} onChange={handleChange} placeholder="Please enter a valid phone number" required />
          </div>
         <div className={styles.form_group}>
            <label htmlFor="message">Message</label>
            <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Enter your message here..." required maxLength="100"></textarea>
            <span className={styles.char_count}>Max 100 characters</span>
          </div>
         <button type="submit">Submit</button>
       </form>
      </div>
    </div>
  );
};

export default Contact;
