'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/store/store.hooks';
import { setStepData, prevStep, resetIntake } from '@/slices/ownerIntakeSlice';
import { Input } from '@/components/input';
import { Checkbox } from '@/components/input';
import Button from '@/components/buttons/Button';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object({
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    agreedToTerms: Yup.boolean().oneOf([true], 'You must agree to the terms'),
});

export default function Step5Contact() {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.ownerIntake);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            phone: formData.phone,
            email: formData.email,
            preferredContact: formData.preferredContact,
            agreedToTerms: formData.agreedToTerms,
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(setStepData(values));
            // In a real app, we would call an API here
            alert('Application Submitted Successfully!');
            dispatch(resetIntake());
            router.push('/');
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="mb-4">
                <h2 className="text-2xl font-playfair font-bold text-navy mb-2">Contact & Consent</h2>
                <p className="text-settley-text text-sm">How should our analysts get in touch with you?</p>
            </div>

            <Input
                id="phone"
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                {...formik.getFieldProps('phone')}
                touched={formik.touched.phone}
                error={formik.errors.phone}
                required
            />

            <Input
                id="email"
                label="Email Address"
                placeholder="your@email.com"
                type="email"
                {...formik.getFieldProps('email')}
                touched={formik.touched.email}
                error={formik.errors.email}
                required
            />

            <div className="flex flex-col gap-4 py-4">
                <p className="font-inter font-medium text-navy text-sm">Privacy & Terms</p>
                <Checkbox
                    label="I agree to Settley's Terms of Service and Privacy Policy. I understand that this submission is for evaluation purposes and does not guarantee an offer."
                    checked={formik.values.agreedToTerms}
                    onChange={(checked) => formik.setFieldValue('agreedToTerms', checked)}
                />
            </div>

            <div className="mt-8 flex justify-between gap-4">
                <Button
                    type="button"
                    className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg bg-white text-navy border border-navy hover:bg-navy/5"
                    onClick={() => dispatch(prevStep())}
                >
                    Back
                </Button>
                <Button
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg"
                    disabled={!formik.isValid || formik.isSubmitting}
                    isLoading={formik.isSubmitting}
                >
                    Submit Application
                </Button>
            </div>
        </form>
    );
}
