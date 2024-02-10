import { React } from "react";

function CustomerList({customers, onCustomerSelect}) {
    return (
        <div className="customer-list">
            <h2>Customers</h2>
            
                <ul>
                    {
                        customers.map(
                            customer => (
                                <li key={customer.id} onClick={()=> onCustomerSelect(customer.id)}> 
                                    {customer.name}
                                </li>
                            )
                        )
                    }
                </ul>
            
        </div>
    )
    
}