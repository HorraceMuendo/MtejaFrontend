import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/campaigns')
            .then((response) => {
                setCampaigns(response.data);
            })
            .catch((error) => {
                console.error('Error fetching campaigns:', error);
            });
    }, []);

    return (
        <div>
            <h2>Campaigns</h2>
            <Link to="/create">Create New Campaign</Link>
            <ul>
                {campaigns.map((campaign) => (
                    <li key={campaign._id}>
                        <Link to={`/campaign/${campaign._id}`}>{campaign.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CampaignList;
