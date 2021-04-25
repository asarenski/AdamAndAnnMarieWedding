import React from 'react';
import Card from './Card';
import LoadingSpinner from './LoadingSpinner';

const PhotoGrid = ({urls, className}) => {
    return (
        <section className={className}>
            <LoadingSpinner data={urls}>
                {urls && urls.map(url => {
                    return <Card
                        url={url}
                        title={url}
                    />
                })}
            </LoadingSpinner>
        </section>
    );
};

export default PhotoGrid;