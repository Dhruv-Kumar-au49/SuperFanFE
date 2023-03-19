import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductListPage() {

    useEffect(() => {
        fetchIteam()
    }, []);

    let [item, setItem] = useState([]);

    let fetchIteam = async () => {

        let result = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");

        let jsondata = await result.json();
        console.log(jsondata.data);

        setItem(jsondata.data);


    }

    return (
        <div className="center">
            <h1>All Products</h1>


            <div className="row">
                {item.map((item) => (
                    <div className="column">
                        <h5 key={item.itemId}>


                            <Link to={`/product/${item.itemId}`}>
                                <div className='product-name-productlist'>{item.item.name}</div></Link>
                        </h5>
                        <img src={`${item.item.images.icon}`} alt='' height="100px" width="100px" />
                    </div>

                ))}
            </div>
        </div>
    );
};

export default ProductListPage