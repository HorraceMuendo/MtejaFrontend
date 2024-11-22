// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//     ComposedChart,
//     Line,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     BarChart,
//     LineChart,
//     PieChart,
//     Pie,
//     Cell
// } from 'recharts';

// const AnalyticsDashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState(null);

//     useEffect(() => {
//         // Fetch analytics data from the backend
//         axios.get('http://localhost:6969/analytics')
//             .then(response => {
//                 setAnalyticsData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching analytics data:', error);
//             });
//     }, []);

//     if (!analyticsData) {
//         return <div>Loading...</div>;
//     }

//     // Prepare data for charts
//     const { customerBehavior, salesTrends } = analyticsData;

//     return (
//         <div>
//             <h1>CRM Analytics Dashboard</h1>
            
//             <div className="chart-container">
//                 <h2>Customer Behavior (Visits & Signups)</h2>
//                 <ComposedChart
//                     width={500}
//                     height={300}
//                     data={customerBehavior}
//                     margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="visits" barSize={20} fill="#8884d8" />
//                     <Line type="monotone" dataKey="signups" stroke="#82ca9d" />
//                 </ComposedChart>
//             </div>

//             <div className="chart-container">
//                 <h2>Sales Trends</h2>
//                 <LineChart
//                     width={500}
//                     height={300}
//                     data={salesTrends}
//                     margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="sales" stroke="#8884d8" />
//                 </LineChart>
//             </div>

//             {/* Optionally, add a Pie chart for data distribution */}
//             <div className="chart-container">
//                 <h2>Sales Distribution</h2>
//                 <PieChart width={400} height={400}>
//                     <Pie data={salesTrends} dataKey="sales" nameKey="month" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
//                         {salesTrends.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#8884d8'} />
//                         ))}
//                     </Pie>
//                 </PieChart>
//             </div>
//         </div>
//     );
// };

// export default AnalyticsDashboard;


////////////////Updated code 


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//     ComposedChart,
//     Line,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
// } from 'recharts';

// const AnalyticsDashboard = () => {
//     const [analyticsData, setAnalyticsData] = useState(null);

//     useEffect(() => {
//         const fetchAnalyticsData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:6969/analytics/list');
//                 setAnalyticsData(response.data);
//             } catch (error) {
//                 console.error('Error fetching analytics data:', error);
//             }
//         };

//         // Fetch data every 10 seconds for real-time updates (polling)
//         const intervalId = setInterval(fetchAnalyticsData, 10000);
        
//         // Initial fetch
//         fetchAnalyticsData();
        
//         // Cleanup interval on component unmount
//         return () => clearInterval(intervalId);
//     }, []);

//     if (!analyticsData) {
//         return <div>Loading...</div>;
//     }

//     const { customerBehavior, salesTrends } = analyticsData;

//     return (
//         <div>
//             <h1>CRM Analytics Dashboard</h1>
            
//             <div className="chart-container">
//                 <h2>Customer Behavior (Visits & Signups)</h2>
//                 <ComposedChart
//                     width={500}
//                     height={300}
//                     data={customerBehavior}
//                     margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="visits" barSize={20} fill="#8884d8" />
//                     <Line type="monotone" dataKey="signups" stroke="#82ca9d" />
//                 </ComposedChart>
//             </div>

//             <div className="chart-container">
//                 <h2>Sales Trends</h2>
//                 <ComposedChart
//                     width={500}
//                     height={300}
//                     data={salesTrends}
//                     margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="sales" stroke="#8884d8" />
//                 </ComposedChart>
//             </div>
//         </div>
//     );
// };

// export default AnalyticsDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const AnalyticsDashboard = () => {
    const [analyticsData, setAnalyticsData] = useState(null);

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const response = await axios.get('http://localhost:6969/analytics/list');
                console.log('API Response:', response.data); // Log the response data
                setAnalyticsData(response.data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };

        const intervalId = setInterval(fetchAnalyticsData, 10000);
        fetchAnalyticsData();
        return () => clearInterval(intervalId);
    }, []);

    if (!analyticsData) {
        return <div>Loading...</div>;
    }

    const { customerBehavior, salesTrends } = analyticsData;

    return (
        <div>
            <h1>CRM Analytics Dashboard</h1>
            
            <div className="chart-container">
                <h2>Customer Behavior (Visits & Signups)</h2>
                <ComposedChart
                    width={500}
                    height={300}
                    data={customerBehavior}
                    margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="visits" barSize={20} fill="#8884d8" />
                    <Line type="monotone" dataKey="signups" stroke="#82ca9d" />
                </ComposedChart>
            </div>

            <div className="chart-container">
                <h2>Sales Trends</h2>
                <ComposedChart
                    width={500}
                    height={300}
                    data={salesTrends}
                    margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
