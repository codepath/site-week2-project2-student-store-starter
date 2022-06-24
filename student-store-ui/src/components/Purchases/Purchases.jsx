import axios from 'axios';
import * as React from 'react';
import { API_BASE_URL } from '../../../constants';
export default function Purchases(props) {
    

    const getAllPurchases = () => {
        // props?.purchases?.map((e) => {
        //     console.log(e);
        //     return (
        //         <div className="product-card">
        //             <h1>{e.message.title}</h1>
        //             <h3>{e.order}</h3>
        //         </div>
        //     )
        // })
        console.log(props.purchases); // test
    }

    if (props.isFetching) {
        return (<h1>Loading...</h1>)
    }


    return (
        <div className="content">
            <div className="purchases-grid">
                {getAllPurchases()}
            </div>
        </div>
    )
}