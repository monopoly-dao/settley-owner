'use client'

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const eligibilityCriteria = [
    {
        title: 'Property Types',
        description: 'Single Family Homes, Condos, and Multi-family units (up to 4 units).',
    },
    {
        title: 'Minimum Value',
        description: 'Properties with a market valuation starting from $150,000 / £120,000.',
    },
    {
        title: 'Occupancy',
        description: 'Owner-occupied, vacant, or long-term rental properties with valid leases.',
    },
    {
        title: 'Location',
        description: 'Available in major metropolitan areas in the UK and USA.',
    },
];

const EligibilitySnapshot = () => {
    return (
        <div className='py-20 px-[5%] sm:px-[7%]'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col lg:flex-row gap-16 items-center'>
                    <div className='lg:w-1/2'>
                        <h2 className='font-playfair font-medium text-[36px] lg:text-[48px] text-navy mb-8'>
                            Is your property eligible?
                        </h2>
                        <p className='text-settley-text font-inter text-[18px] leading-[30px] mb-8'>
                            Settley focuses on premium assets that offer stable returns for investors and liquidity for owners. Check our general guidelines below to see if your property qualifies for tokenization.
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            {eligibilityCriteria.map((item, index) => (
                                <div key={index} className='flex gap-4'>
                                    <FaCheckCircle className='text-settley-primary mt-1 flex-shrink-0' />
                                    <div>
                                        <h4 className='font-inter font-bold text-navy text-[16px] mb-1'>{item.title}</h4>
                                        <p className='text-settley-text text-[14px] leading-tight'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <div className='bg-navy p-10 rounded-3xl text-white shadow-xl'>
                            <h3 className='font-playfair text-2xl mb-6'>Quick Check</h3>
                            <p className='mb-8 text-white/80'>Not sure? Talk to our analysts for a complimentary valuation and eligibility assessment.</p>
                            <form className='flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Property Address"
                                    className='bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder:text-white/40 outline-none focus:border-white/60'
                                />
                                <button className='bg-settley-primary hover:bg-settley-primary-hover transition-colors py-4 rounded-lg font-bold text-lg'>
                                    Pre-screen Now
                                </button>
                            </form>
                            <p className='mt-6 text-[12px] text-white/50 text-center italic'>
                                *No impact on credit score. This is not an offer of credit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EligibilitySnapshot;
