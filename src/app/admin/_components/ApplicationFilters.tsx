'use client';

import React from 'react';
import InputSearch from '@/components/input/input-search';
import Select from '@/components/input/select';

const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'submitted', label: 'Submitted' },
    { value: 'under-review', label: 'Under Review' },
    { value: 'offer-sent', label: 'Offer Sent' },
    { value: 'due-diligence', label: 'Due Diligence' },
    { value: 'listed', label: 'Listed' },
    { value: 'closed', label: 'Closed' },
];

const priceOptions = [
    { value: 'all', label: 'All Values' },
    { value: 'low', label: '< $250k' },
    { value: 'mid', label: '$250k - $750k' },
    { value: 'high', label: '> $750k' },
];

export default function ApplicationFilters() {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="w-full md:w-1/3">
                <InputSearch
                    placeholder="Search by address or owner..."
                    className="bg-white border-navy/10 h-10"
                />
            </div>

            <div className="flex gap-4 w-full md:w-auto">
                <div className="w-48">
                    <Select
                        id="status-filter"
                        options={statusOptions}
                        value="all"
                        controlClassName="h-10 py-0"
                        variant="light"
                    />
                </div>
                <div className="w-48">
                    <Select
                        id="price-filter"
                        options={priceOptions}
                        value="all"
                        controlClassName="h-10 py-0"
                        variant="light"
                    />
                </div>
            </div>
        </div>
    );
}
