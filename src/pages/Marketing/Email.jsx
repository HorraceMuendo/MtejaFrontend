// import React, { useState } from 'react';
// import '../../styles/leads.css'

// const SendBulkEmail = () => {
//     const [message, setMessage] = useState(''); // State to manage the message displayed
//     const [loading, setLoading] = useState(false); // State to manage loading state

//     const handleSendEmail = async () => {
//         setLoading(true); // Set loading state
//         setMessage('Sending bulk email...'); // Set the loading message

//         try {
//             // Send the request to the backend to send bulk email
//             const response = await fetch('/send-bulk-email', {
//                 method: 'POST', // Using POST method as we did in the backend
//             });

//             const data = await response.json(); // Parse the JSON response from the server

//             if (data.message) {
//                 // If message exists in the response, show success message
//                 setMessage(data.message);
//             } else if (data.error) {
//                 // If there is an error message, show the error
//                 setMessage('Error: ' + data.error);
//             }
//         } catch (error) {
//             // If the request fails
//             setMessage('Something went wrong!');
//             console.error('Error:', error);
//         } finally {
//             setLoading(false); // Reset the loading state
//         }
//     };

//     return (
//         <div>
//             <h1>Send Bulk Email</h1>

//             {/* Send Bulk Email Button */}
//             <button id="sendEmailButton" onClick={handleSendEmail} disabled={loading}>
//                 {loading ? 'Sending...' : 'Send Bulk Email'}
//             </button>

//             {/* Display Message */}
//             <div id="message">{message}</div>
//         </div>
//     );
// };

// export default SendBulkEmail;










import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Email.css"

const EmailPage = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch all registered users' emails (you should already have this endpoint in your API)
  useEffect(() => {
    axios
      .get("http://localhost:6969/users/emails")
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error("Error fetching user emails", error);
        setMessage("Failed to fetch users.");
      });
  }, []);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Prepare email data
    const emailData = {
      subject,
      body,
      recipients: users, // Array of emails
    };

    try {
      // Send the email to all users (API call to backend)
      const response = await axios.post("http://localhost:6969/email/send", emailData);
      setMessage("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email", error);
      setMessage("Failed to send email.");
    }
  };

  return (
    <div className="email-page">
      <h2>Compose Email</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSendEmail}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default EmailPage;
