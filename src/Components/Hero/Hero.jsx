import React from 'react';
import heroImage from '../../assets/cover/cover-02.png';

const Hero = () => {
    return (
        <div className='w-full h-96 lg:h-[800px] bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
            <div>
                {/* You can add content here if needed */}
            </div>
        </div>
    );
};

export default Hero;