'use client';

import React from 'react';
import Button from '@/components/buttons/Button';
import { FaArrowRight, FaHome } from 'react-icons/fa';

interface OfferPreviewProps {
    valuation: string;
    fees: string;
    timeline: string;
}

export default function OfferPreview({ valuation, fees, timeline }: OfferPreviewProps) {
    return (
        <div className="bg-cream p-8 rounded-3xl border border-settley-primary/20 shadow-xl overflow-hidden relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-settley-primary text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full">New Offer</span>
                        <span className="text-navy text-sm font-medium">Expires in 48 hours</span>
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-navy mb-4">Preliminary Offer</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-settley-text font-bold mb-1">Valuation Range</p>
                            <p className="text-2xl font-bold text-navy">{valuation}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-settley-text font-bold mb-1">Est. Closing</p>
                            <p className="text-2xl font-bold text-navy">{timeline}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-settley-text font-bold mb-1">Service Fee</p>
                            <p className="text-2xl font-bold text-navy">{fees}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-auto flex flex-col gap-3">
                    <Button className="px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-navy/20">
                        Accept Offer <FaArrowRight />
                    </Button>
                    <button className="text-navy text-sm font-bold underline hover:no-underline transition-all underline-offset-4">
                        Request Modification
                    </button>
                </div>
            </div>

            {/* Decorative background element */}
            <FaHome className="absolute -right-12 -bottom-12 text-[180px] text-navy opacity-[0.03] rotate-12" />
        </div>
    );
}
