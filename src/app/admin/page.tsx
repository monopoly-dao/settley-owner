'use client';

import React from 'react';
import ApplicationsTable from './_components/ApplicationsTable';
import ApplicationFilters from './_components/ApplicationFilters';
import { ApplicationStatus } from '@/app/(grouped-layout)/_dashboard/_components/StatusTimeline';

const mockApplications = [
    {
        id: 'APP-101',
        address: '123 Ocean Drive, Miami FL',
        owner: 'Sarah Johnson',
        valueEstimate: '$450k - $480k',
        status: 'offer-sent' as ApplicationStatus,
        daysPending: 2,
    },
    {
        id: 'APP-102',
        address: '456 Pine Ave, Austin TX',
        owner: 'Michael Chen',
        valueEstimate: '$310k - $330k',
        status: 'under-review' as ApplicationStatus,
        daysPending: 5,
    },
    {
        id: 'APP-103',
        address: '789 Maple St, Denver CO',
        owner: 'Robert Davis',
        valueEstimate: '$520k - $550k',
        status: 'submitted' as ApplicationStatus,
        daysPending: 1,
    },
    {
        id: 'APP-104',
        address: '202 Birch Ln, Seattle WA',
        owner: 'Emily Wilson',
        valueEstimate: '$890k - $940k',
        status: 'due-diligence' as ApplicationStatus,
        daysPending: 9,
    },
    {
        id: 'APP-105',
        address: '505 Cedar Ct, Atlanta GA',
        owner: 'James Brown',
        valueEstimate: '$210k - $230k',
        status: 'listed' as ApplicationStatus,
        daysPending: 15,
    },
];

export default function AdminApplicationsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-playfair font-bold text-navy">Applications</h1>
                    <p className="text-settley-text mt-1">Review and manage property submissions from homeowners and agents.</p>
                </div>

                <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-xl border border-navy/5 shadow-sm min-w-[150px]">
                        <p className="text-[10px] uppercase font-bold text-medium-grey mb-1">Total pending</p>
                        <p className="text-2xl font-bold text-navy">12</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-navy/5 shadow-sm min-w-[150px]">
                        <p className="text-[10px] uppercase font-bold text-medium-grey mb-1">Avg SLA</p>
                        <p className="text-2xl font-bold text-amber-600">4.2d</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                <ApplicationFilters />
                <ApplicationsTable applications={mockApplications} />
            </div>
        </div>
    );
}
