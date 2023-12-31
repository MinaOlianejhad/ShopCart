import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CardsContext } from '../../context/CardsContextProvider';

//Icons
import shopIcon from '../../assets/icons/shop.svg';

//Style
import styles from './Navbar.module.css';

const Navbar = () => {

    const {state} = useContext(CardsContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
            
        </div>

        
    );
};

export default Navbar;