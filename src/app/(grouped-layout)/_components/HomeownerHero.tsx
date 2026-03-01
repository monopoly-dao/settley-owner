import React from 'react';
import Link from 'next/link';
import GetStartedLink from './GetStartedLink';

const HomeownerHero = () => {
    return (
        <div className='mt-10 mb-20 flex flex-col gap-6 px-[5%] sm:px-[7%] text-center items-center'>
            <h1 className='font-playfair font-medium text-[48px] lg:text-[72px] leading-tight tracking-[-1.2px] lg:tracking-[-1.8px] text-navy w-full text-center mb-6'>
                <div>Unlock liquidity from your property</div>
                <div className='text-settley-primary/60'>— without selling the whole home.</div>
            </h1>
            <p className='text-settley-text font-inter text-[18px] lg:text-[20px] leading-[29.25px] lg:leading-[32.5px] max-w-[800px] w-full text-center mb-4'>
                Settley lets owners sell a portion of equity or list properties for tokenized investing.
                Experience transparent fees, clear timelines, and genuine partnership.
            </p>
            <p className='text-navy/80 font-inter font-medium text-[14px] tracking-[1.4px] uppercase text-center mb-8'>
                Transparent. Secure. Truly Yours.
            </p>
            <div className='w-full text-center flex flex-col sm:flex-row items-center justify-center gap-4'>
                <GetStartedLink />
                <Link
                    className='text-navy outline outline-1 outline-navy bg-white hover:bg-navy/5 transition-colors rounded-[6px] font-normal w-full max-w-[200px] py-2 px-6 text-lg rounded-full flex items-center justify-center'
                    href='/contact'
                >
                    Talk to an analyst
                </Link>
            </div>
        </div>
    );
};

export default HomeownerHero;
