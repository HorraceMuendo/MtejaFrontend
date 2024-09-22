import React, { useState } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    BarChart, Bar
} from 'recharts';
import '../styles/Reports.css';

function Reports() {
    const [monthlyData, setMonthlyData] = useState({
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
    });

    const [userBehaviorData, setUserBehaviorData] = useState({
        January: { pageViews: 0, purchases: 0 },
        February: { pageViews: 0, purchases: 0 },
        March: { pageViews: 0, purchases: 0 },
        April: { pageViews: 0, purchases: 0 },
        May: { pageViews: 0, purchases: 0 },
        June: { pageViews: 0, purchases: 0 },
        July: { pageViews: 0, purchases: 0 },
        August: { pageViews: 0, purchases: 0 },
        September: { pageViews: 0, purchases: 0 },
        October: { pageViews: 0, purchases: 0 },
        November: { pageViews: 0, purchases: 0 },
        December: { pageViews: 0, purchases: 0 },
    });

    const handleSalesChange = (e) => {
        const { name, value } = e.target;
        setMonthlyData({
            ...monthlyData,
            [name]: Number(value),
        });
    };

    const handleBehaviorChange = (e, metric) => {
        const { name, value } = e.target;
        setUserBehaviorData({
            ...userBehaviorData,
            [name]: {
                ...userBehaviorData[name],
                [metric]: Number(value),
            }
        });
    };

    const salesData = Object.keys(monthlyData).map(month => ({
        month,
        sales: monthlyData[month]
    }));

    const behaviorData = Object.keys(userBehaviorData).map(month => ({
        month,
        pageViews: userBehaviorData[month].pageViews,
        purchases: userBehaviorData[month].purchases
    }));

    return (
        <div className='reports'>
            <h2>Sales Report</h2>
            <div className='inputs'>
                {Object.keys(monthlyData).map((month) => (
                    <div key={month} className='input-group'>
                        <label htmlFor={month}>{month}</label>
                        <input
                            type="number"
                            id={month}
                            name={month}
                            value={monthlyData[month]}
                            onChange={handleSalesChange}
                        />
                    </div>
                ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            <h2>User Behavior</h2>
            <div className='inputs'>
                {Object.keys(userBehaviorData).map((month) => (
                    <div key={month} className='input-group'>
                        <label htmlFor={`${month}-pageViews`}>{month} Page Views</label>
                        <input
                            type="number"
                            id={`${month}-pageViews`}
                            name={month}
                            value={userBehaviorData[month].pageViews}
                            onChange={(e) => handleBehaviorChange(e, 'pageViews')}
                        />
                        <label htmlFor={`${month}-purchases`}>{month} Purchases</label>
                        <input
                            type="number"
                            id={`${month}-purchases`}
                            name={month}
                            value={userBehaviorData[month].purchases}
                            onChange={(e) => handleBehaviorChange(e, 'purchases')}
                        />
                    </div>
                ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={behaviorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pageViews" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="purchases" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Reports;
