'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OWNER_INTAKE_REDUCER_PATH } from '@/constants/appConstants';

export interface OwnerIntakeState {
    currentStep: number;
    // Step 1: Property Basics
    address: string;
    propertyType: string;
    yearBuilt: string;
    beds: string;
    baths: string;
    sqft: string;
    occupancy: string;
    // Step 2: Financials
    estimatedValue: string;
    mortgageBalance: string;
    monthlyRent: string;
    hoaFees: string;
    // Step 3: Ownership
    ownerNames: string;
    ownershipStructure: string;
    hasLiens: boolean;
    hasLienDetails: string;
    isAuthorized: boolean;
    // Step 4: Documents (status/file info)
    documents: {
        deed: string; // url or ID
        mortgageStatement: string;
        lease: string;
        id: string;
    };
    // Step 5: Contact
    phone: string;
    email: string;
    preferredContact: 'email' | 'phone' | 'whatsapp';
    agreedToTerms: boolean;
}

export const initialState: OwnerIntakeState = {
    currentStep: 1,
    address: '',
    propertyType: '',
    yearBuilt: '',
    beds: '',
    baths: '',
    sqft: '',
    occupancy: '',
    estimatedValue: '',
    mortgageBalance: '',
    monthlyRent: '',
    hoaFees: '',
    ownerNames: '',
    ownershipStructure: '',
    hasLiens: false,
    hasLienDetails: '',
    isAuthorized: false,
    documents: {
        deed: '',
        mortgageStatement: '',
        lease: '',
        id: '',
    },
    phone: '',
    email: '',
    preferredContact: 'email',
    agreedToTerms: false,
};

export const ownerIntakeSlice = createSlice({
    name: OWNER_INTAKE_REDUCER_PATH,
    initialState,
    reducers: {
        setStepData: (state, action: PayloadAction<Partial<OwnerIntakeState>>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        nextStep: (state) => {
            state.currentStep += 1;
        },
        prevStep: (state) => {
            if (state.currentStep > 1) {
                state.currentStep -= 1;
            }
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
        resetIntake: () => {
            return initialState;
        },
    },
});

export const {
    setStepData,
    nextStep,
    prevStep,
    setStep,
    resetIntake,
} = ownerIntakeSlice.actions;

export const ownerIntakeReducer = ownerIntakeSlice.reducer;
