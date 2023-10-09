import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//function
import { shorten, isInCart, quantityCout } from '../../helper/Function';

// Context
import { CardsContext } from '../../context/CardsContextProvider';

// Icons
import trashIcon from '../../assets/icons/trash.svg';

//Style
import styles from './Product.module.css';


const Product = ({productData}) => {

const {state, dispatch} = useContext(CardsContext);

    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={productData.image} alt='product' style={{width :"200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer} >

                    { quantityCout(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() =>dispatch({type:"DECREASE", payload: productData})}>-</button>}
                    { quantityCout(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() =>dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt='trashimage' style={{width:"20px"}}/></button>}
                    { quantityCout(state, productData.id) > 0 && <span className={styles.counter}>{quantityCout(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD_ITEM", payload: productData})}>Add To Cart</button> 
                    }
    
                </div>
            </div>
        </div>
    );
};

export default Product;