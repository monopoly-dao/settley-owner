import { Metadata } from 'next';
import Link from 'next/link';
import { FaRegHandshake, FaHome, FaChartLine, FaWallet } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'How it Works | Settley',
    description: 'Understand how Settley helps you unlock liquidity from your property equity.',
};

const steps = [
    {
        icon: FaHome,
        title: 'Submit Property',
        description: 'Provide basic details about your property and ownership structure through our secure intake portal.',
    },
    {
        icon: FaChartLine,
        title: 'Receive Offer',
        description: 'Our analysts review your submission and provide a preliminary valuation and liquidity offer within 48 hours.',
    },
    {
        icon: FaRegHandshake,
        title: 'Due Diligence',
        description: 'We conduct a standard review of property documents and legal standing to finalize the agreement.',
    },
    {
        icon: FaWallet,
        title: 'Get Funded',
        description: 'Once approved, your property equity is tokenized, and you receive immediate liquidity while retaining ownership benefits.',
    },
];

export default function HowItWorksPage() {
    return (
        <div className='px-[5%] lg:px-[7%] mt-20 mb-24 max-w-5xl mx-auto'>
            <h1 className='text-[45px] leading-[55px] text-center sm:leading-[75px] sm:text-[48px] mb-14 lg:mb-20 font-playfair font-bold text-navy'>
                How Settley Works
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {steps.map((step, index) => (
                    <div key={index} className='flex gap-6 p-8 rounded-3xl bg-white border border-navy/5 shadow-sm hover:shadow-md transition-shadow'>
                        <div className='w-14 h-14 rounded-2xl bg-settley-primary/10 flex items-center justify-center flex-shrink-0'>
                            <step.icon className='text-2xl text-settley-primary' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-navy mb-3'>{step.title}</h3>
                            <p className='text-settley-text leading-relaxed'>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-24 p-12 rounded-[40px] bg-navy text-white text-center relative overflow-hidden'>
                <div className='relative z-10'>
                    <h2 className='text-3xl sm:text-4xl font-playfair font-bold mb-6'>Ready to get started?</h2>
                    <p className='text-navy-100 text-lg mb-10 max-w-2xl mx-auto'>
                        Join hundreds of homeowners and agents using Settley to unlock property value without the traditional hassle.
                    </p>
                    <Link
                        href='/apply/owner'
                        className='inline-flex items-center justify-center px-10 py-4 rounded-full bg-settley-primary text-white font-bold text-lg hover:scale-105 transition-transform'
                    >
                        Start Application
                    </Link>
                </div>
                <div className='absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl' />
            </div>
        </div>
    );
}
