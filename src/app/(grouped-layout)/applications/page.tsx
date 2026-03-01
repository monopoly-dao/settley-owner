'use client';

import React from 'react';
import StatusTimeline, { ApplicationStatus } from '../_dashboard/_components/StatusTimeline';
import ActionPanel from '../_dashboard/_components/ActionPanel';
import OfferPreview from '../_dashboard/_components/OfferPreview';

// Mock data for demonstration
const mockApplication = {
    address: '123 Ocean Drive, Miami FL',
    status: 'offer-sent' as ApplicationStatus,
    submittedAt: 'Oct 12, 2023',
    requestedDocs: [
        { id: '1', name: 'Latest Property Tax Bill', status: 'pending' as const },
        { id: '2', name: 'Homeowners Insurance Declaration', status: 'submitted' as const },
    ],
    offer: {
        valuation: '$480k - $510k',
        fees: '4.5%',
        timeline: '14-21 days',
    }
};

export default function ApplicationsPage() {
    return (
        <div className="pb-20 px-[7%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-12 mb-8">
                <div>
                    <h2 className="text-3xl font-playfair font-bold text-navy">My Applications</h2>
                    <p className="text-settley-text mt-1">Manage and track your property submissions.</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-medium-grey mb-1">Selected Property</span>
                    <p className="text-navy font-bold text-lg">{mockApplication.address}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Progress & Offer */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                        <h3 className="text-xl font-playfair font-bold text-navy mb-6">Application Journey</h3>
                        <StatusTimeline currentStatus={mockApplication.status} />
                        <div className="mt-8 p-4 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-100">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-medium-grey">Current Status</p>
                                <p className="text-navy font-bold flex items-center gap-2 capitalize">
                                    {mockApplication.status.replace('-', ' ')}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] uppercase font-bold text-medium-grey">Submitted</p>
                                <p className="text-navy font-bold">{mockApplication.submittedAt}</p>
                            </div>
                        </div>
                    </div>

                    {mockApplication.status === 'offer-sent' && mockApplication.offer && (
                        <OfferPreview
                            valuation={mockApplication.offer.valuation}
                            fees={mockApplication.offer.fees}
                            timeline={mockApplication.offer.timeline}
                        />
                    )}
                </div>

                {/* Right Column: Actions & Docs */}
                <div className="lg:col-span-1">
                    <ActionPanel requestedDocs={mockApplication.requestedDocs} />
                </div>
            </div>
        </div>
    );
}
