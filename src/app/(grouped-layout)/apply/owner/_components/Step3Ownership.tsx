'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/store/store.hooks';
import { setStepData, nextStep, prevStep } from '@/slices/ownerIntakeSlice';
import { Input } from '@/components/input';
import { Checkbox } from '@/components/input';
import Button from '@/components/buttons/Button';

const validationSchema = Yup.object({
    ownerNames: Yup.string().required('Legal owner name(s) required'),
    ownershipStructure: Yup.string().required('Ownership structure is required'),
    isAuthorized: Yup.boolean().oneOf([true], 'You must be authorized to list this property'),
});

export default function Step3Ownership() {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.ownerIntake);

    const formik = useFormik({
        initialValues: {
            ownerNames: formData.ownerNames,
            ownershipStructure: formData.ownershipStructure,
            hasLiens: formData.hasLiens,
            hasLienDetails: formData.hasLienDetails,
            isAuthorized: formData.isAuthorized,
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
                <h2 className="text-2xl font-playfair font-bold text-navy mb-2">Ownership</h2>
                <p className="text-settley-text text-sm">Verify your relationship with the property.</p>
            </div>

            <Input
                id="ownerNames"
                label="Legal Owner Name(s)"
                placeholder="Enter names as they appear on the deed"
                {...formik.getFieldProps('ownerNames')}
                touched={formik.touched.ownerNames}
                error={formik.errors.ownerNames}
                required
            />

            <Input
                id="ownershipStructure"
                label="Ownership Structure"
                placeholder="e.g. Sole Ownership, Joint Tenants, LLC"
                {...formik.getFieldProps('ownershipStructure')}
                touched={formik.touched.ownershipStructure}
                error={formik.errors.ownershipStructure}
                required
            />

            <div className="flex flex-col gap-2">
                <Checkbox
                    label="Are there any liens or judgments against the property?"
                    checked={formik.values.hasLiens}
                    onChange={(checked) => formik.setFieldValue('hasLiens', checked)}
                />
                {formik.values.hasLiens && (
                    <Input
                        id="hasLienDetails"
                        label="Lien Details"
                        placeholder="Please specify"
                        {...formik.getFieldProps('hasLienDetails')}
                    />
                )}
            </div>

            <Checkbox
                label="I confirm that I am legally authorized to list this property for tokenization."
                checked={formik.values.isAuthorized}
                onChange={(checked) => formik.setFieldValue('isAuthorized', checked)}
            />

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
