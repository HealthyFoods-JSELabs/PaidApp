import React from "react";
import CustomersComponent from "../components/CustomersComponent/CustomersComponent";



class CustomerView extends React.Component {

    render() {
        return (
            <div className="ChatHistoryView">
                <CustomersComponent/>
            </div>

        );
    }
}

export default CustomerView;
