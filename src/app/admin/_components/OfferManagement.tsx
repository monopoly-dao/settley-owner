'use client';

import React, { useState } from 'react';
import Button from '@/components/buttons/Button';
import { Input } from '@/components/input';
import Select from '@/components/input/select';
import { ApplicationStatus } from '@/app/(grouped-layout)/_dashboard/_components/StatusTimeline';

interface OfferManagementProps {
    currentStatus: ApplicationStatus;
    initialOffer?: {
        valuation: string;
        fees: string;
        timeline: string;
    };
}

const statusOptions = [
    { value: 'submitted', label: 'Submitted' },
    { value: 'under-review', label: 'Under Review' },
    { value: 'offer-sent', label: 'Offer Sent' },
    { value: 'due-diligence', label: 'Due Diligence' },
    { value: 'listed', label: 'Listed' },
    { value: 'closed', label: 'Closed' },
];

export default function OfferManagement({ currentStatus, initialOffer }: OfferManagementProps) {
    const [status, setStatus] = useState<ApplicationStatus>(currentStatus);
    const [offer, setOffer] = useState(initialOffer || { valuation: '', fees: '', timeline: '' });

    return (
        <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm space-y-8">
            <div>
                <h3 className="text-xl font-playfair font-bold text-navy mb-6">Offer Management</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <p className="text-sm font-bold text-navy uppercase tracking-wider">Current Status</p>
                        <div className="w-full">
                            <Select
                                id="offer-status-select"
                                options={statusOptions}
                                value={status}
                                setValue={async (val) => setStatus(val as ApplicationStatus)}
                                variant="light"
                            />
                        </div>
                    </div>

                    <div className="flex items-end">
                        <Button className="w-full py-3 rounded-xl font-bold">Update Status</Button>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
                <h4 className="text-lg font-bold text-navy mb-6">Financial Offer Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                        id="offer-valuation"
                        label="Valuation Range"
                        value={offer.valuation}
                        onChange={(e) => setOffer({ ...offer, valuation: e.target.value })}
                        placeholder="e.g. $450k - $480k"
                    />
                    <Input
                        id="offer-fees"
                        label="Service Fee (%)"
                        value={offer.fees}
                        onChange={(e) => setOffer({ ...offer, fees: e.target.value })}
                        placeholder="e.g. 4.5%"
                    />
                    <Input
                        id="offer-timeline"
                        label="Est. Timeline"
                        value={offer.timeline}
                        onChange={(e) => setOffer({ ...offer, timeline: e.target.value })}
                        placeholder="e.g. 14-21 days"
                    />
                </div>

                <div className="mt-8 flex gap-4">
                    <Button className="flex-1 py-3 rounded-xl font-bold bg-navy text-white">Save Offer Details</Button>
                    <Button className="flex-1 py-3 rounded-xl font-bold bg-white text-navy border border-navy hover:bg-navy/5">Send to Owner</Button>
                </div>
            </div>
        </div>
    );
}
