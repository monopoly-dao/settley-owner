'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/store/store.hooks';
import { setStepData, nextStep, prevStep } from '@/slices/ownerIntakeSlice';
import { Input } from '@/components/input';
import Button from '@/components/buttons/Button';

const validationSchema = Yup.object({
    estimatedValue: Yup.number()
        .typeError('Must be a number')
        .min(0, 'Cannot be negative')
        .required('Estimated value is required'),
    mortgageBalance: Yup.number()
        .typeError('Must be a number')
        .min(0, 'Cannot be negative')
        .required('Mortgage balance is required'),
    monthlyRent: Yup.number()
        .typeError('Must be a number')
        .min(0, 'Cannot be negative'),
    hoaFees: Yup.number()
        .typeError('Must be a number')
        .min(0, 'Cannot be negative'),
});

export default function Step2Financials() {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.ownerIntake);

    const formik = useFormik({
        initialValues: {
            estimatedValue: formData.estimatedValue,
            mortgageBalance: formData.mortgageBalance,
            monthlyRent: formData.monthlyRent,
            hoaFees: formData.hoaFees,
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(setStepData(values));
            dispatch(nextStep());
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="mb-4">
                <h2 className="text-2xl font-playfair font-bold text-navy mb-2">Financials</h2>
                <p className="text-settley-text text-sm">Provide estimates for your property's value and existing obligations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    id="estimatedValue"
                    label="Estimated Market Value"
                    placeholder="e.g. 500000"
                    type="number"
                    {...formik.getFieldProps('estimatedValue')}
                    touched={formik.touched.estimatedValue}
                    error={formik.errors.estimatedValue}
                    required
                />

                <Input
                    id="mortgageBalance"
                    label="Current Mortgage Balance"
                    placeholder="e.g. 200000"
                    type="number"
                    {...formik.getFieldProps('mortgageBalance')}
                    touched={formik.touched.mortgageBalance}
                    error={formik.errors.mortgageBalance}
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    id="monthlyRent"
                    label="Estimated Monthly Rent"
                    placeholder="e.g. 2500"
                    type="number"
                    {...formik.getFieldProps('monthlyRent')}
                    touched={formik.touched.monthlyRent}
                    error={formik.errors.monthlyRent}
                />

                <Input
                    id="hoaFees"
                    label="Monthly HOA Fees"
                    placeholder="e.g. 300"
                    type="number"
                    {...formik.getFieldProps('hoaFees')}
                    touched={formik.touched.hoaFees}
                    error={formik.errors.hoaFees}
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
                    disabled={!formik.isValid}
                >
                    Next Step
                </Button>
            </div>
        </form>
    );
}
