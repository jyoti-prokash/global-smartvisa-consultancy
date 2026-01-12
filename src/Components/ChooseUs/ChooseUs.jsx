import React from 'react';
import bolt from '../../assets/icon/flash.png';
import encrypted from '../../assets/icon/encrypted.png'
import graduate from '../../assets/icon/graduation-hat.png'
import wallet from '../../assets/icon/money.png'
import star from '../../assets/icon/star.png'
import background from '../../assets/cover/travel-around-the-world-wallpapers.jpg'

const ChooseUs = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`}} className='px-10 py-40 bg-cover bg-center flex flex-col flex-wrap md:flex-nowrap md:flex-row justify-center items-center gap-3'>
            <div className='lg:h-[500px] text-center bg-[#CFE7E5] p-8 rounded-lg mb-6 m-5'>
                <h3 className='text-3xl font-bold'>Fast Processing</h3>
                <span className='flex justify-center m-3'><img className='w-12' src={bolt} alt="bolt" /></span>
                <p className='text-gray-700 p-2 m-5 text-2xl font-thin'>We ensure quick and hassle-free visa processing with proper guidance at every step.</p>
            </div>
            <div className='lg:h-[500px] text-center bg-[#90C7C1] p-8 rounded-lg mb-6 m-5'>
                <h3 className='text-3xl font-bold'>Trusted Consultancy</h3>
                <span className='flex justify-center m-3'><img className='w-12' src={encrypted} alt="bolt" /></span>
                <p className='text-gray-700 p-2 m-5 text-2xl font-thin'>Hundreds of clients trust us for reliable and transparent visa services.</p>
            </div>
            <div className='lg:h-[500px] text-center bg-[#E5A13E] p-8 rounded-lg mb-6 m-5'>
                <h3 className='text-3xl font-bold'>Expert Guidance</h3>
                <span className='flex justify-center m-3'><img className='w-12' src={graduate} alt="graduate" /></span>
                <p className='text-gray-700 p-2 m-5 text-2xl font-thin'>Our experienced consultants provide accurate information and personalized support.</p>
            </div>
            <div className='lg:h-[500px] text-center bg-[#D26946] p-8 rounded-lg mb-6 m-5'>
                <h3 className='text-3xl font-bold'>Affordable Cost</h3>
                <span className='flex justify-center m-3'><img className='w-12' src={wallet} alt="wallet" /></span>
                <p className='text-gray-700 p-2 m-5 text-2xl font-thin'>We offer high-quality services at reasonable and competitive prices.</p>
            </div>
            <div className='lg:h-[500px] text-center bg-[#CFE7E5] p-8 rounded-lg mb-6 m-5'>
                <h3 className='text-3xl font-bold'>High Success Rate</h3>
                <span className='flex justify-center m-3'><img className='w-12' src={star} alt="star" /></span>
                <p className='text-gray-700 p-2 m-5 text-2xl font-thin'>We maintain a strong track record of successful visa approvals.</p>
            </div>
        </div>
    );
};

export default ChooseUs;