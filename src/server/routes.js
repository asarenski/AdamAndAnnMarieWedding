const googlePhotosService = require('./googlePhotosService');
const result = require('dotenv').config();

if (result.error) {
    throw new Error(result.error);
}

const {PROPOSAL_PHOTOS_ID} = result.parsed;

const checkHealth = (req, res) => res.send({status: "ok"});

const getProposalPhotos = async (req, res) => {
    googlePhotosService.getAlbum(PROPOSAL_PHOTOS_ID)
        .then(photoUrls => {
            res.send(photoUrls);
        })
        .catch(e => {
            console.error('failed to get proposal photos');
            console.error(e);
        });
};

module.exports = {
    checkHealth,
    getProposalPhotos,
};