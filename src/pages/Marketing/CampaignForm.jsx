import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const CampaignForm = () => {
    const [campaign, setCampaign] = useState({
        name: '',
        startDate: '',
        endDate: '',
        targetAudience: '',
        budget: 0,
        message: '',
        performanceMetrics: {}
    });

    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCampaign((prevCampaign) => ({
            ...prevCampaign,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/campaigns', campaign)
            .then((response) => {
                navigate('/'); // Use navigate instead of history.push
            })
            .catch((error) => {
                console.error('Error creating campaign:', error);
            });
    };

    return (
        <div>
            <h2>Create Campaign</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={campaign.name} onChange={handleChange} placeholder="Campaign Name" />
                <input type="date" name="startDate" value={campaign.startDate} onChange={handleChange} />
                <input type="date" name="endDate" value={campaign.endDate} onChange={handleChange} />
                <input type="text" name="targetAudience" value={campaign.targetAudience} onChange={handleChange} placeholder="Target Audience" />
                <input type="number" name="budget" value={campaign.budget} onChange={handleChange} placeholder="Budget" />
                <textarea name="message" value={campaign.message} onChange={handleChange} placeholder="Campaign Message" />
                <button type="submit">Save Campaign</button>
            </form>
        </div>
    );
};

export default CampaignForm;
