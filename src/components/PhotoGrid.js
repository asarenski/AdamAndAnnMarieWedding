import React from 'react';
import Card from './Card';

const PhotoGrid = ({urls = [], className}) => {
    return (
        <section className={className}>
            {urls.map(url => {
                return <Card 
                    url={url}
                    title={url}
                />
            })}
        </section>
    );
};

export default PhotoGrid;