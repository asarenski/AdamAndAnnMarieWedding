import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PhotoGrid from './PhotoGrid';

import './TheProposal.scss';

const TheProposal = () => {
    const [proposalPhotoUrls, setProposalPhotoUrls] = useState([]);

    useEffect(() => {
        axios.get('/api/proposalPhotos')
        .then(res => setProposalPhotoUrls(res.data))
        .catch(e => console.error(e));
    }, [proposalPhotoUrls]);

    return (
        <section className='TheProposal'>
            <h2>The Proposal</h2>
            <p>Lorem ipsum....</p>
            <PhotoGrid urls={proposalPhotoUrls} />
        </section>
    );
};

export default TheProposal;