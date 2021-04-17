import React from 'react';

const PhotoGrid = ({urls = []}) => {
    return (
        <section>
            {urls.map(url => {
                return <img src={url} />;
            })}
        </section>
    );
};

export default PhotoGrid;