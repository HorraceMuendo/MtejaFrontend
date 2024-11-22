import React, { useEffect } from 'react';
import axios from 'axios';

const TrackPageVisit = ({ customerId, pageUrl, visitType }) => {
    useEffect(() => {
        // Function to send visit data to the backend
        const trackVisit = async () => {
            try {
                const response = await axios.post('http://localhost:6969/visits/add', {
                    customer_details_id: customerId,
                    pageUrl: pageUrl,
                    visitType: visitType
                });
                console.log('Visit tracked successfully:', response.data);
            } catch (error) {
                console.error('Error tracking visit:', error);
            }
        };

        // Track the visit when the component mounts
        trackVisit();
    }, [customerId, pageUrl, visitType]);

    return null; // This component does not render anything
};

export default TrackPageVisit;



