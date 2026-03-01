'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AGENT_INTAKE_REDUCER_PATH } from '@/constants/appConstants';

export interface AgentIntakeState {
    // Agent Details
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    brokerage: string;
    licenseNumber: string;
    website: string;

    // Client/Property Details
    clientName: string;
    propertyAddress: string;

    // Consent
    agreedToReferralTerms: boolean;
}

export const initialState: AgentIntakeState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    brokerage: '',
    licenseNumber: '',
    website: '',
    clientName: '',
    propertyAddress: '',
    agreedToReferralTerms: false,
};

export const agentIntakeSlice = createSlice({
    name: AGENT_INTAKE_REDUCER_PATH,
    initialState,
    reducers: {
        setAgentData: (state, action: PayloadAction<Partial<AgentIntakeState>>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        resetAgentIntake: () => {
            return initialState;
        },
    },
});

export const { setAgentData, resetAgentIntake } = agentIntakeSlice.actions;

export const agentIntakeReducer = agentIntakeSlice.reducer;
