'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/store/store.hooks';
import { setAgentData, resetAgentIntake } from '@/slices/agentIntakeSlice';
import { Input } from '@/components/input';
import { Checkbox } from '@/components/input';
import Button from '@/components/buttons/Button';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    brokerage: Yup.string().required('Brokerage name is required'),
    licenseNumber: Yup.string().required('Real estate license number is required'),
    clientName: Yup.string().required('Client name is required'),
    propertyAddress: Yup.string().required('Property address is required'),
    agreedToReferralTerms: Yup.boolean().oneOf([true], 'You must agree to the referral terms'),
});

export default function AgentIntakeForm() {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.agentIntake);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            brokerage: formData.brokerage,
            licenseNumber: formData.licenseNumber,
            website: formData.website,
            clientName: formData.clientName,
            propertyAddress: formData.propertyAddress,
            agreedToReferralTerms: formData.agreedToReferralTerms,
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(setAgentData(values));
            // In a real app, API call goes here
            alert('Referral Submitted Successfully!');
            dispatch(resetAgentIntake());
            router.push('/');
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
            {/* Agent Information Section */}
            <div>
                <h2 className="text-xl font-playfair font-bold text-navy mb-6 border-b pb-2">Agent Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        id="firstName"
                        label="First Name"
                        placeholder="John"
                        {...formik.getFieldProps('firstName')}
                        touched={formik.touched.firstName}
                        error={formik.errors.firstName}
                        required
                    />
                    <Input
                        id="lastName"
                        label="Last Name"
                        placeholder="Doe"
                        {...formik.getFieldProps('lastName')}
                        touched={formik.touched.lastName}
                        error={formik.errors.lastName}
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Input
                        id="email"
                        label="Business Email"
                        type="email"
                        placeholder="john.doe@brokerage.com"
                        {...formik.getFieldProps('email')}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        required
                    />
                    <Input
                        id="phone"
                        label="Phone Number"
                        placeholder="+1 (555) 000-0000"
                        {...formik.getFieldProps('phone')}
                        touched={formik.touched.phone}
                        error={formik.errors.phone}
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Input
                        id="brokerage"
                        label="Brokerage"
                        placeholder="Global Realty"
                        {...formik.getFieldProps('brokerage')}
                        touched={formik.touched.brokerage}
                        error={formik.errors.brokerage}
                        required
                    />
                    <Input
                        id="licenseNumber"
                        label="License Number"
                        placeholder="e.g. 123456789"
                        {...formik.getFieldProps('licenseNumber')}
                        touched={formik.touched.licenseNumber}
                        error={formik.errors.licenseNumber}
                        required
                    />
                </div>
                <div className="mt-6">
                    <Input
                        id="website"
                        label="Website or LinkedIn (Optional)"
                        placeholder="https://..."
                        {...formik.getFieldProps('website')}
                    />
                </div>
            </div>

            {/* Client Property Section */}
            <div>
                <h2 className="text-xl font-playfair font-bold text-navy mb-6 border-b pb-2">Client Property Details</h2>
                <div className="grid grid-cols-1 gap-6">
                    <Input
                        id="clientName"
                        label="Client Name"
                        placeholder="Legal owner names"
                        {...formik.getFieldProps('clientName')}
                        touched={formik.touched.clientName}
                        error={formik.errors.clientName}
                        required
                    />
                    <Input
                        id="propertyAddress"
                        label="Property Address"
                        placeholder="Address of the property to be reviewed"
                        {...formik.getFieldProps('propertyAddress')}
                        touched={formik.touched.propertyAddress}
                        error={formik.errors.propertyAddress}
                        required
                    />
                </div>
            </div>

            {/* Terms & Submit */}
            <div className="mt-4 p-6 bg-slate-50 rounded-xl">
                <Checkbox
                    label="I agree to Settley's Referral Partner terms and confirm that I have an active representation agreement with the property owner."
                    checked={formik.values.agreedToReferralTerms}
                    onChange={(checked) => formik.setFieldValue('agreedToReferralTerms', checked)}
                />
                <div className="mt-8">
                    <Button
                        type="submit"
                        className="w-full py-4 rounded-full font-bold text-lg"
                        disabled={!formik.isValid || formik.isSubmitting}
                        isLoading={formik.isSubmitting}
                    >
                        Submit Referral
                    </Button>
                </div>
            </div>
        </form>
    );
}
