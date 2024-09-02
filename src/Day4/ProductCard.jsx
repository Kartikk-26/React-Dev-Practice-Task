import { useEffect, useState, useCallback } from 'react';

function ProductCard() {
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState({
        img: '',
        title: '',
        price: '',
        rating: ''
    });

    // Use useCallback to prevent unnecessary re-renders
    const fetchProduct = useCallback(async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${count}`);
            const data = await response.json();
            setProduct({
                img: data.images,
                title: data.title,
                price: data.price,
                rating: data.rating
            });
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }, [count]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    const handleInc = () => setCount(prevCount => prevCount + 1);

    return (
        <div>
            <h1>My Data :</h1>
            <h1>{count}</h1>
            <button onClick={handleInc}>Increment</button>
            <img src={product.img} alt={product.title} className='w-20 h-20' />
            <h1>Title: {product.title}</h1>
            <h2>Price: {product.price}</h2>
            <h3>Rating: {product.rating}</h3>
        </div>
    );
}

export default ProductCard;
