import React from 'react';

import './Card.scss';

const Card = ({url, title, bodyText=''}) => {
    return <section className='Card'>
        <img className='Card-img' src={url} alt={title}/>
        <section className='Card-body'>
            <p>{bodyText}</p>
        </section>
    </section>
};

export default Card;