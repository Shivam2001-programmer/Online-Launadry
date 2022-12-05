import React from 'react'
import Order from "../../src/assets/images/order.jpg";
import Detail from "../../src/assets/images/details.jpg"
import './Orderses.css'
const Orderses = () => {
    return (

        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div >
                    <img src={Order} class="imagess" alt="..." />

                </div>
            </div>
            <div class="col">
                <div >
                    <img src={Detail} class="imagess" alt="..." />

                </div>
            </div>

        </div>
    )
}

export default Orderses


