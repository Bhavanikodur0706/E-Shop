import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addtoCart } from '../redux/cartSlice'

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const [product, setProduct] = useState();
    //handling add to cart
    const dispatch = useDispatch()
    const handleClick = (e, product) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(addtoCart(product))
        alert('Product added successfully!!')
    }
    useEffect(() => {
        const newProduct = products.find(product => product.id === parseInt(id));
        setProduct(newProduct);
    }, [id, products]);

    if (!product) return <div className="text-center text-lg font-semibold py-10">Loading...</div>;

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img src={product.image} alt={product.name} className="max-w-full md:max-w-sm lg:max-w-md" />
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold">{product.name}</h2>
                    <p className="text-xl font-bold text-gray-700">${product.price}</p>

                    <div className="flex items-center space-x-3">
                        {/* <input
                            id="quantity"
                            type="number"
                            min="1"
                            max="10"
                            defaultValue="1"
                            className="border p-2 w-16 text-center rounded-md shadow-sm"
                        /> */}
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all" onClick={(e)=>handleClick(e, product)}>Add to Cart</button>
                    </div>

                    <div className="text-gray-500 space-y-2">
                        <p className="flex items-center"><span className="mr-2">🚚</span> Delivery & Return</p>
                        <p className="flex items-center"><span className="mr-2">❓</span> Ask a Question</p>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className="mt-10 border-t pt-6">
                <h1 className="text-xl md:text-2xl font-semibold">Product Description</h1>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, beatae.</p>
            </div>
        </div>
    );
};

export default ProductDetail;
