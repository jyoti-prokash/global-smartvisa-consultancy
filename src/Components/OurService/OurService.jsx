import React from 'react';
import usa from '../../assets/ourService/USA.jpg';
import canada from '../../assets/ourService/Canada.jpg'
import uk from '../../assets/ourService/UK.jpg'
import australia from '../../assets/ourService/Austrilia.jpg'

const OurService = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6'>
            <img className='w-full mb-4 rounded-xl' src={canada} alt="Canada Visa Service" />
            <img className='w-full mb-4 rounded-xl' src={uk} alt="UK Visa Service" />
            <img className='w-full mb-4 rounded-xl' src={usa} alt="USA Visa Service" />
            <img className='w-full mb-4 rounded-xl' src={australia} alt="Australia Visa Service" />
        </div>
    );
};

export default OurService;