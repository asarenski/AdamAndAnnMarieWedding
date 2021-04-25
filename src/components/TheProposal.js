import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PhotoGrid from './PhotoGrid';

import './TheProposal.scss';

const BASE_URL = process.env.NODE_ENV === 'development'
    ? `http://localhost:8080`
    : '';

const TheProposal = () => {
    const [proposalPhotoUrls, setProposalPhotoUrls] = useState([]);

    useEffect(() => {
        console.log(process.env);
        axios.get(`${BASE_URL}/api/proposalPhotos`)
        .then(res => setProposalPhotoUrls(res.data))
        .catch(e => console.error(e));
    }, []);

    return (
        <section className='TheProposal'>
            <header>
                <h3>The Proposal</h3>
                <p>On Christmas day of 2020, Adam proposed to Ann Marie at the Seidel household.</p>
            </header>
            <PhotoGrid className={'TheProposal-photos'} urls={proposalPhotoUrls} />
        </section>
    );
};

export default TheProposal;