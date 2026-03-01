'use client'

import React from 'react';
import { FaFileUpload, FaFileContract, FaHandHoldingUsd } from 'react-icons/fa';

const steps = [
    {
        icon: <FaFileUpload className="text-3xl text-settley-primary" />,
        title: 'Submit Property',
        description: 'Provide basic details about your property and upload initial documentation for review.',
    },
    {
        icon: <FaFileContract className="text-3xl text-settley-primary" />,
        title: 'Receive Offer',
        description: 'Our analysts will review your application and provide a transparent valuation and offer range.',
    },
    {
        icon: <FaHandHoldingUsd className="text-3xl text-settley-primary" />,
        title: 'Get Funded',
        description: 'Once approved, your property or equity portion is listed for tokenized investment and you receive funding.',
    },
];

const HowItWorksHomeowner = () => {
    return (
        <div className='py-20 px-[5%] sm:px-[7%] bg-cream/30'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='font-playfair font-medium text-[36px] lg:text-[48px] text-navy text-center mb-16'>
                    How it Works
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 relative'>
                    {steps.map((step, index) => (
                        <div key={index} className='flex flex-col items-center text-center group'>
                            <div className='w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow duration-300'>
                                {step.icon}
                            </div>
                            <h3 className='font-inter font-semibold text-[20px] text-navy mb-4'>
                                {step.title}
                            </h3>
                            <p className='text-settley-text font-inter text-[16px] leading-[26px]'>
                                {step.description}
                            </p>
                            {/* {index < steps.length - 1 && (
                                <div className='hidden md:block absolute right-[-20px] top-[40px] text-navy/20 text-4xl'>
                                    →
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorksHomeowner;
