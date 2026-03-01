import { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Fees | Settley',
    description: 'Transparent and competitive fee structure for Settley property tokenization.',
};

const feeFeatures = [
    'Flat platform service fee based on equity value',
    'No hidden application or appraisal costs',
    'Transparent closing costs outlined upfront',
    'Competitive annual management fees for listed properties',
];

export default function FeesPage() {
    return (
        <div className='px-[5%] lg:px-[7%] mt-20 mb-24 max-w-4xl mx-auto'>
            <h1 className='text-[45px] leading-[55px] text-center sm:leading-[75px] sm:text-[48px] mb-14 lg:mb-20 font-playfair font-bold text-navy'>
                Transparent Fees
            </h1>

            <div className='bg-cream p-10 sm:p-16 rounded-[48px] border border-settley-primary/20 shadow-xl'>
                <div className='text-center mb-12'>
                    <p className='text-[10px] uppercase font-bold tracking-[0.2em] text-settley-primary mb-4'>Tokenization Service</p>
                    <div className='flex items-center justify-center gap-2'>
                        <span className='text-6xl font-playfair font-bold text-navy'>4.5</span>
                        <span className='text-4xl font-bold text-navy'>%</span>
                    </div>
                    <p className='text-settley-text mt-4'>One-time platform service fee upon successful tokenization</p>
                </div>

                <div className='space-y-6 max-w-md mx-auto'>
                    {feeFeatures.map((feature, index) => (
                        <div key={index} className='flex items-start gap-4'>
                            <div className='w-6 h-6 rounded-full bg-settley-primary/20 flex items-center justify-center flex-shrink-0 mt-1'>
                                <FaCheck className='text-[10px] text-settley-primary' />
                            </div>
                            <p className='text-navy font-medium'>{feature}</p>
                        </div>
                    ))}
                </div>

                <div className='mt-16 pt-10 border-t border-navy/10 text-center'>
                    <p className='text-sm text-settley-text italic'>
                        * Exact fees may vary based on property type, location, and legal complexity.
                        Your preliminary offer will include a detailed breakdown of all associated costs.
                    </p>
                </div>
            </div>

            <div className='mt-16 flex flex-col sm:flex-row items-center justify-center gap-6'>
                <Link
                    href='/apply/owner'
                    className='w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-navy text-white font-bold hover:bg-navy/90 transition-all'
                >
                    Get Started
                </Link>
                <Link
                    href='/faqs'
                    className='w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full border border-navy text-navy font-bold hover:bg-navy/5 transition-all'
                >
                    Read FAQs
                </Link>
            </div>
        </div>
    );
}
