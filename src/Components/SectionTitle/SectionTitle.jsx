import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='py-8'>
                <h2 className='uppercase underline text-center text-4xl text-red-600 font-black'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;