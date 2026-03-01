'use client';

import React from 'react';
import { useAppSelector } from '@/store/store.hooks';
import Step1PropertyBasics from './_components/Step1PropertyBasics';
import Step2Financials from './_components/Step2Financials';
import Step3Ownership from './_components/Step3Ownership';
import Step4Documents from './_components/Step4Documents';
import Step5Contact from './_components/Step5Contact';

const steps = [
    { id: 1, title: 'Property Basics' },
    { id: 2, title: 'Financials' },
    { id: 3, title: 'Ownership' },
    { id: 4, title: 'Documents' },
    { id: 5, title: 'Contact' },
];

export default function OwnerIntakePage() {
    const currentStep = useAppSelector((state) => state.ownerIntake.currentStep);

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1PropertyBasics />;
            case 2:
                return <Step2Financials />;
            case 3:
                return <Step3Ownership />;
            case 4:
                return <Step4Documents />;
            case 5:
                return <Step5Contact />;
            default:
                return <Step1PropertyBasics />;
        }
    };

    return (
        <div className="min-h-screen bg-settley-bg py-12 px-[5%]">
            <div className="max-w-3xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between mb-4">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex flex-col items-center flex-1 relative ${step.id <= currentStep ? 'text-navy' : 'text-medium-grey'
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 transition-colors duration-300 ${step.id < currentStep
                                            ? 'bg-settley-primary text-white'
                                            : step.id === currentStep
                                                ? 'bg-navy text-white'
                                                : 'bg-white border border-medium-grey'
                                        }`}
                                >
                                    {step.id < currentStep ? '✓' : step.id}
                                </div>
                                <span className="text-[10px] md:text-xs uppercase tracking-wider font-medium text-center">
                                    {step.title}
                                </span>
                                {step.id < steps.length && (
                                    <div
                                        className={`hidden md:block absolute top-4 left-[60%] w-[80%] h-[2px] -z-10 transition-colors duration-500 ${step.id < currentStep ? 'bg-settley-primary' : 'bg-medium-grey'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-navy/5 min-h-[500px]">
                    {renderStep()}
                </div>
            </div>
        </div>
    );
}
