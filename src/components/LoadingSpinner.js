import './LoadingSpinner.scss';

const LoadingSpinner = ({data, children}) => {
    return data
        ? children
        : <div className='lds-dual-ring'/>;
};

export default LoadingSpinner;
