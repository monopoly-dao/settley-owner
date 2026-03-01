import { Metadata } from 'next';
import Image from 'next/image';

import FAQ from './_components/FAQ';
import GetStartedLink from './_components/GetStartedLink';
import OwnProperty from './_components/OwnProperty';
import OwnShare from './_components/OwnShare';

import landingBanner from '~/images/landing-banner-2.png';
import HomeownerHero from './_components/HomeownerHero';
import HowItWorksHomeowner from './_components/HowItWorksHomeowner';
import EligibilitySnapshot from './_components/EligibilitySnapshot';
import Link from 'next/link';
import FAQItem from './_components/FAQItem';

export const metadata: Metadata = {
  title: 'List your property with Settley',
  description: 'Unlock liquidity from your property without selling the whole home. Transparent fees, clear timelines.',
  keywords: [
    'Settley',
    'List property',
    'Property liquidity',
    'Tokenized real estate',
    'Homeowner portal',
  ],
};


const homeownerFaqs = [
  {
    question: 'How do I know if my property is eligible?',
    answer: 'We look for properties in major UK/US cities with a minimum valuation of £120k/$150k. Most residential property types are supported including SFHs and condos.'
  },
  {
    question: 'How long does the process take?',
    answer: 'Initial review takes 24-48 hours. If qualified, you can receive an official offer within 7-14 days after documentation is verified.'
  },
  {
    question: 'What are the fees involved?',
    answer: 'Settley charges a transparent tokenization fee upon successful listing. There are no upfront appraisal or application fees for homeowners.'
  }
];

export default function Page() {
  return (
    <div>
      <HomeownerHero />

      <div className='mt-16 w-full max-w-6xl mx-auto px-4'>
        <div className='relative w-full aspect-video rounded-3xl shadow-2xl overflow-hidden'>
          <Image
            src={landingBanner}
            alt='Luxury Property'
            fill
            placeholder='blur'
            className='object-cover'
            priority
          />
        </div>
      </div>

      <HowItWorksHomeowner />

      <EligibilitySnapshot />

      <section className='relative py-24 w-full overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-[#0B1221]' />
          {/* Using a relative path or direct import for the image if it matches FAQ.tsx logic */}
          <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]' />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start'>
            <div className='flex flex-col gap-12'>
              <h2 className='font-playfair text-4xl lg:text-5xl text-white font-medium leading-tight'>
                Frequently Asked Questions
              </h2>
              <div className='flex flex-col gap-10'>
                {homeownerFaqs.map((item, id) => (
                  <FAQItem key={id} {...item} />
                ))}
              </div>
            </div>
            <div className='hidden md:block sticky top-24 ml-auto'>
              <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-6 items-start max-w-sm'>
                <h3 className='font-playfair text-2xl text-white'>Still have questions?</h3>
                <p className='font-inter text-white/70 font-light'>Our team is here to help you through every step of the process.</p>
                <Link href='/contact' className='inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-navy transition-colors'>
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// {
/* <div className='mt-20 mb-20 flex flex-col gap-11 px-[5%] sm:px-[7%]'>
<h1 className='font-medium text-[45px] w-full leading-[55px] sm:leading-[75px] lg:leading-[96px] sm:text-[60px] lg:text-[80px]'>
  <div>Join the future of </div>
  <div>property ownership</div>
</h1>
<p>Settley allows you to buy and own a home in minutes.</p>
<div className='w-full text-center font-inter text-lg sm:w-full lg:w-1/2 antialiased'>
  <div className='flex flex-wrap w-full justify-center gap-4 sm:w-full lg:flex-nowrap lg:w-3/5'>
    <GetStartedLink />
    <Link
      className='text-navy outline outline-1 outline-navy bg-white rounded-[6px] font-normal  w-full py-5 sm:w-full'
      href='#footer'
    >
      Stay Updated
    </Link>
  </div>
</div>
</div>; */
// }
