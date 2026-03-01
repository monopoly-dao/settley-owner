'use client';

import React from 'react';
import { useAppDispatch } from '@/store/store.hooks';
import { nextStep, prevStep } from '@/slices/ownerIntakeSlice';
import Button from '@/components/buttons/Button';
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function Step4Documents() {
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col gap-6">
            <div className="mb-4">
                <h2 className="text-2xl font-playfair font-bold text-navy mb-2">Documents</h2>
                <p className="text-settley-text text-sm">Upload proof of ownership and identification.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border-2 border-dashed border-medium-grey rounded-xl flex flex-col items-center gap-2 hover:border-navy transition-colors cursor-pointer">
                    <FaCloudUploadAlt className="text-4xl text-medium-grey" />
                    <span className="font-medium">Property Deed</span>
                    <span className="text-xs text-medium-grey">PDF, JPG, PNG (Max 10MB)</span>
                </div>
                <div className="p-6 border-2 border-dashed border-medium-grey rounded-xl flex flex-col items-center gap-2 hover:border-navy transition-colors cursor-pointer">
                    <FaCloudUploadAlt className="text-4xl text-medium-grey" />
                    <span className="font-medium">Mortgage Statement</span>
                    <span className="text-xs text-medium-grey">PDF, JPG, PNG (Max 10MB)</span>
                </div>
                <div className="p-6 border-2 border-dashed border-medium-grey rounded-xl flex flex-col items-center gap-2 hover:border-navy transition-colors cursor-pointer">
                    <FaCloudUploadAlt className="text-4xl text-medium-grey" />
                    <span className="font-medium">Lease Agreement</span>
                    <span className="text-xs text-medium-grey">Optional - for rentals</span>
                </div>
                <div className="p-6 border-2 border-dashed border-medium-grey rounded-xl flex flex-col items-center gap-2 hover:border-navy transition-colors cursor-pointer">
                    <FaCloudUploadAlt className="text-4xl text-medium-grey" />
                    <span className="font-medium">Government ID</span>
                    <span className="text-xs text-medium-grey">Passport or Driving License</span>
                </div>
            </div>

            <p className="text-xs text-settley-text italic">
                Need more time? You can skip this for now and upload via your dashboard later.
            </p>

            <div className="mt-8 flex justify-between gap-4">
                <Button
                    type="button"
                    className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg bg-white text-navy border border-navy hover:bg-navy/5"
                    onClick={() => dispatch(prevStep())}
                >
                    Back
                </Button>
                <Button
                    type="button"
                    className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg"
                    onClick={() => dispatch(nextStep())}
                >
                    Next Step
                </Button>
            </div>
        </div>
    );
}
