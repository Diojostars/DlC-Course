import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import '../styles/home-style.css';

const Mabor = ({ dlss }) => {
    const { id } = useParams();
    const dls = dlss[parseInt(id, 10) - 1];
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    if (!dls) {
        return <div>ot found</div>;
    }

    const handleBuyClick = () => {
        if (isAuthenticated) {
            console.log(`Buying dls: ${dls.title}`);
        } else {
            loginWithRedirect();
        }
    };

    return (
        <div className="dls-page-container">
            <Link to="/">Go back to homepage</Link>
            <h2>{dls.title}</h2>
            <img src={dls.imageSrc} alt={dls.title} />
            <p>{dls.description}</p>
            <p className="price-info">Price: ${dls.price}</p>
            <button onClick={handleBuyClick}>Buy Now</button>
        </div>
    );
};

export default withAuthenticationRequired(Mabor);
