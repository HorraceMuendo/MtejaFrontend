// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../styles/leads.css"
// import SalesReport from "../Reports/SalesReport";


// const Dashboard = () => {
//   const [performance, setPerformance] = useState({ totalLeads: 0, closedWon: 0, winRate: 0 });

//   useEffect(() => {
//     axios
//       .get("http://localhost:6969/sales/performance")
//       .then((response) => setPerformance(response.data))
//       .catch((error) => console.error("Front: Error fetching performance data", error));
//   }, []);

//   return (
//     <div className="leads">
//       <h2> Dashboard</h2>
//       <h3>Sales </h3>
//       <SalesReport/>
//       <h3>Leads </h3>

//       <div>
//         <p>Total Leads: {performance.totalLeads}</p>
//         <p>Closed Won: {performance.closedWon}</p>
//         <p>Win Rate: {performance.winRate.toFixed(2)}%</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/leads.css";
import SalesReport from "../Reports/SalesReport";

const Dashboard = () => {
  const [performance, setPerformance] = useState({ totalLeads: 0, closedWon: 0, winRate: 0 });
  const [categoryCounts, setCategoryCounts] = useState({
    enquiries: 0,
    complains: 0,
    compliments: 0,
    contact: 0
  });

  // Fetch performance data
  useEffect(() => {
    axios
      .get("http://localhost:6969/sales/performance")
      .then((response) => setPerformance(response.data))
      .catch((error) => console.error("Error fetching performance data", error));
  }, []);

  // Fetch category counts (Enquiries, Complains, Compliments, Contact)
  useEffect(() => {
    axios.all([
      axios.get("http://localhost:6969/enquiries/count"),
      axios.get("http://localhost:6969/customers/complains/count"),
      axios.get("http://localhost:6969/customers/compliments/count"),
      axios.get("http://localhost:6969/contact/count")
    ])
    .then(
      axios.spread((enquiriesRes, complainsRes, complimentsRes, contactRes) => {
       
        setCategoryCounts({
          enquiries: enquiriesRes.data.count,
          complains: complainsRes.data.count,
          compliments: complimentsRes.data.count,
          contact: contactRes.data.count
        });
      })
    )
    .catch((error) => console.error("Error fetching category counts", error));
  }, []);

  return (
    <div className="leads">
      <h2>Dashboard</h2>
      
      <h3>Sales</h3>
      <SalesReport />

      <h3>Leads</h3>
      <div>
        <p>Total Leads: {performance.totalLeads}</p>
        <p>Closed Won: {performance.closedWon}</p>
        <p>Win Rate: {performance.winRate.toFixed(2)}%</p>
      </div>

      <h3>Category Counts</h3>
      {/* <div>
        <p>Enquiries: {categoryCounts.enquiries}</p>
        <p>Complaints: {categoryCounts.complains}</p>
        <p>Compliments: {categoryCounts.compliments}</p>
        <p>Contact: {categoryCounts.contact}</p>
      </div> */}
      <div>
      {categoryCounts.enquiries === 0 ? <p>Loading Enquiries...</p> : <p>Enquiries: {categoryCounts.enquiries}</p>}
      {categoryCounts.complains === 0 ? <p>Loading Complaints...</p> : <p>Complaints: {categoryCounts.complains}</p>}
      {categoryCounts.compliments === 0 ? <p>Loading Compliments...</p> : <p>Compliments: {categoryCounts.compliments}</p>}
      {categoryCounts.contact === 0 ? <p>Loading Contact...</p> : <p>Contact: {categoryCounts.contact}</p>}
    </div>
    </div>
  );
};

export default Dashboard;
