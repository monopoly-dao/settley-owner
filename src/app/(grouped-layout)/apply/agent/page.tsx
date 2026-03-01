'use client';

import React from 'react';
import AgentIntakeForm from './_components/AgentIntakeForm';

export default function AgentIntakePage() {
    return (
        <div className="min-h-screen bg-settley-bg py-12 px-[5%]">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-playfair font-bold text-navy mb-4">
                        Agent Referral Portal
                    </h1>
                    <p className="text-settley-text max-w-xl mx-auto">
                        Partner with Settley to offer your clients immediate liquidity while earning clear referral commissions. Submit a property below to start the review process.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-navy/5">
                    <AgentIntakeForm />
                </div>
            </div>
        </div>
    );
}
