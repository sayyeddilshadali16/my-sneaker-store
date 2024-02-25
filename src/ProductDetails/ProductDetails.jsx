import React from 'react'
import './ProductDetails.css'
import Data from '../db/data';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const products = Data.filter((x)=> x.id == id);
    const product = products[0]
     console.log(product)
    return (
        <div>
            <section id="product-info">

                <div className="item-image-parent">
                    <div className="item-list-vertical">
                        <div className="thumb-box">
                            <img src={product.img} alt="thumbnail" />
                        </div>
                        <div className="thumb-box">
                            <img src={product.img} alt="thumbnail" />
                        </div>
                        <div className="thumb-box">
                            <img src={product.img} alt="thumbnail" />
                        </div>
                        <div className="thumb-box">
                            <img src={product.img} alt="thumbnail" />
                        </div>

                    </div>
                    <div className="item-image-main">
                        <img src={product.img} alt="default" />
                    </div>
                </div>

                <div className="item-info-parent">

                    <div className="main-info">
                        <h4>{product.title}</h4>
                        <div className="star-rating">
                            <span>★★★★</span>★
                        </div>
                        <p>Price: <span id="price">$ {product.newPrice}</span></p>
                    </div>

                    <div className="select-items">

                        <div className="change-color">
                            <label><b>Colour:</b>{product.color}</label><br />
                            <div className="thumb-box">
                                <img src={product.img} alt="thumbnail" />
                            </div>
                            <div className="thumb-box">
                                <img src={product.img} alt="thumbnail" />
                            </div>
                        </div>

                        <div className="change-size">
                            <label><b>Size:</b></label><br />
                            <select>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                            </select>
                        </div>

                        <div className="description">
                            <ul>
                                <li>Fit Type: classNameic Fit</li>
                                <li>Color name: Black-White</li>
                                <li>Material: Mesh</li>
                                <li>Pattern: Solid</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProductDetails