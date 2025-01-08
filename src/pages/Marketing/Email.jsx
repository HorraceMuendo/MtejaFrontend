import React, { useState } from 'react';
import '../../styles/leads.css'

const SendBulkEmail = () => {
    const [message, setMessage] = useState(''); // State to manage the message displayed
    const [loading, setLoading] = useState(false); // State to manage loading state

    const handleSendEmail = async () => {
        setLoading(true); // Set loading state
        setMessage('Sending bulk email...'); // Set the loading message

        try {
            // Send the request to the backend to send bulk email
            const response = await fetch('/send-bulk-email', {
                method: 'POST', // Using POST method as we did in the backend
            });

            const data = await response.json(); // Parse the JSON response from the server

            if (data.message) {
                // If message exists in the response, show success message
                setMessage(data.message);
            } else if (data.error) {
                // If there is an error message, show the error
                setMessage('Error: ' + data.error);
            }
        } catch (error) {
            // If the request fails
            setMessage('Something went wrong!');
            console.error('Error:', error);
        } finally {
            setLoading(false); // Reset the loading state
        }
    };

    return (
        <div>
            <h1>Send Bulk Email</h1>

            {/* Send Bulk Email Button */}
            <button id="sendEmailButton" onClick={handleSendEmail} disabled={loading}>
                {loading ? 'Sending...' : 'Send Bulk Email'}
            </button>

            {/* Display Message */}
            <div id="message">{message}</div>
        </div>
    );
};

export default SendBulkEmail;
