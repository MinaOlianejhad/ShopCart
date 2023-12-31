import React, { useContext } from 'react';

// Component
import Product from './shared/Product.js';

// Context
import { ProductContext } from '../context/ProductContextProvider';

//Style
import styles from './Store.module.css';


const Store = () => {

    const products = useContext(ProductContext);

    return (
        <div className={styles.container} >
            {
                products.map(product => 
                                <Product
                                    key={product.id} 
                                    productData={product} 
                                />)
            }
        </div>
    );
};

export default Store;