import React from 'react';

const PhotoGrid = ({urls = []}) => {
    return (
        <section>
            {urls.map(url => <img key={url} src={url} />)}
        </section>
    );
};

export default PhotoGrid;