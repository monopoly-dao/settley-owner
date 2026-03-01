'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaArrowLeft, FaHome, FaUser, FaHistory, FaFileAlt } from 'react-icons/fa';
import Button from '@/components/buttons/Button';
import StatusBadge from '../../_components/StatusBadge';
import OfferManagement from '../../_components/OfferManagement';
import InternalNotes from '../../_components/InternalNotes';
import { ApplicationStatus } from '@/app/(grouped-layout)/_dashboard/_components/StatusTimeline';

// Mock data for a single application
const mockAppDetail = {
    id: 'APP-101',
    address: '123 Ocean Drive, Miami FL',
    owner: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 123-4567',
    propertyType: 'Single Family Home',
    yearBuilt: '1995',
    beds: '4',
    baths: '3',
    sqft: '2,400',
    occupancy: 'Owner Occupied',
    estimatedValue: '$465,000',
    mortgageBalance: '$210,000',
    status: 'offer-sent' as ApplicationStatus,
    submittedAt: 'Oct 12, 2023',
    documents: [
        { name: 'Property Deed', status: 'verified' },
        { name: 'Mortgage Statement', status: 'verified' },
        { name: 'Government ID', status: 'verified' },
        { name: 'Insurance Policy', status: 'pending' },
    ],
    offer: {
        valuation: '$450k - $480k',
        fees: '4.5%',
        timeline: '14-21 days',
    }
};

export default function ApplicationDetailPage() {
    const { id } = useParams();

    return (
        <div className="space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin"
                    className="p-2 bg-white border border-navy/10 rounded-lg text-navy hover:bg-navy hover:text-white transition-all shadow-sm"
                >
                    <FaArrowLeft />
                </Link>
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-3xl font-playfair font-bold text-navy">{mockAppDetail.address}</h1>
                        <StatusBadge status={mockAppDetail.status} />
                    </div>
                    <p className="text-settley-text text-sm flex items-center gap-2">
                        Application ID: <span className="font-bold text-navy">{id || mockAppDetail.id}</span> •
                        Submitted on {mockAppDetail.submittedAt}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left/Main Column */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Property & Owner Insights */}
                    <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-navy flex items-center gap-2 uppercase tracking-wider">
                                    <FaHome className="text-settley-primary" /> Property Information
                                </h3>
                                <div className="grid grid-cols-2 gap-y-4 text-sm">
                                    <span className="text-medium-grey">Type:</span> <span className="text-navy font-semibold">{mockAppDetail.propertyType}</span>
                                    <span className="text-medium-grey">Year Built:</span> <span className="text-navy font-semibold">{mockAppDetail.yearBuilt}</span>
                                    <span className="text-medium-grey">Beds / Baths:</span> <span className="text-navy font-semibold">{mockAppDetail.beds} / {mockAppDetail.baths}</span>
                                    <span className="text-medium-grey">Square Footage:</span> <span className="text-navy font-semibold">{mockAppDetail.sqft} sqft</span>
                                    <span className="text-medium-grey">Occupancy:</span> <span className="text-navy font-semibold">{mockAppDetail.occupancy}</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-navy flex items-center gap-2 uppercase tracking-wider">
                                    <FaUser className="text-settley-primary" /> Owner Information
                                </h3>
                                <div className="grid grid-cols-2 gap-y-4 text-sm">
                                    <span className="text-medium-grey">Primary Owner:</span> <span className="text-navy font-semibold">{mockAppDetail.owner}</span>
                                    <span className="text-medium-grey">Email:</span> <span className="text-navy font-semibold">{mockAppDetail.email}</span>
                                    <span className="text-medium-grey">Phone:</span> <span className="text-navy font-semibold">{mockAppDetail.phone}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-navy uppercase tracking-wider">Financial Snapshot</h3>
                                <div className="grid grid-cols-2 gap-y-4 text-sm">
                                    <span className="text-medium-grey">Estimated Value:</span> <span className="text-navy font-bold text-lg">{mockAppDetail.estimatedValue}</span>
                                    <span className="text-medium-grey">Mortgage Balance:</span> <span className="text-navy font-semibold">{mockAppDetail.mortgageBalance}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Offer Management */}
                    <OfferManagement currentStatus={mockAppDetail.status} initialOffer={mockAppDetail.offer} />

                    {/* Internal History (Simplified) */}
                    <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                        <h3 className="text-lg font-bold text-navy flex items-center gap-2 uppercase tracking-wider mb-6">
                            <FaHistory className="text-settley-primary" /> Activity Log
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start pl-2 py-2 border-l-2 border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 -ml-[9px]" />
                                <div className="text-xs">
                                    <p className="font-bold text-navy">Offer sent to owner</p>
                                    <p className="text-medium-grey">Oct 14, 2023 • 2:45 PM by System</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start pl-2 py-2 border-l-2 border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 -ml-[9px]" />
                                <div className="text-xs">
                                    <p className="font-bold text-navy">Under Review status assigned</p>
                                    <p className="text-medium-grey">Oct 13, 2023 • 10:15 AM by Alan Miller</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start pl-2 py-2 border-l-2 border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 -ml-[9px]" />
                                <div className="text-xs">
                                    <p className="font-bold text-navy">Application submitted</p>
                                    <p className="text-medium-grey">Oct 12, 2023 • 4:20 PM by Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right/Sidebar Column */}
                <div className="space-y-8">
                    {/* Documents Checklist */}
                    <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                        <h3 className="text-lg font-bold text-navy flex items-center gap-2 uppercase tracking-wider mb-6">
                            <FaFileAlt className="text-settley-primary" /> Documents
                        </h3>
                        <div className="space-y-3">
                            {mockAppDetail.documents.map((doc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                                    <span className="text-sm font-medium text-navy">{doc.name}</span>
                                    <span className={doc.status === 'verified' ? "text-emerald-600 font-bold text-[10px] uppercase" : "text-amber-600 font-bold text-[10px] uppercase"}>
                                        {doc.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-6 py-2 rounded-lg text-sm bg-white text-navy border border-navy hover:bg-navy/5">
                            Review Documents
                        </Button>
                    </div>

                    {/* Internal Notes */}
                    <InternalNotes />
                </div>
            </div>
        </div>
    );
}
