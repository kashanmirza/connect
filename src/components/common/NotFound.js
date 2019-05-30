import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/images/404.jpeg';

const NotFound = () => (
    <div>
        <img src={PageNotFound} style={{width: 800, height: 400, display: 'block', margin: 'auto', position: 'relative' }} />
        <center>
            <Link to="/">
                <strong>Return to Home Page</strong>
            </Link>
        </center>
    </div>
);
export default NotFound;