'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/store/store.hooks';
import { setStepData, nextStep } from '@/slices/ownerIntakeSlice';
import { Input } from '@/components/input';
import Select from '@/components/input/select';
import Button from '@/components/buttons/Button';

const propertyTypeOptions = [
    { value: 'single-family', label: 'Single Family Home' },
    { value: 'condo', label: 'Condo / Apartment' },
    { value: 'multi-family', label: 'Multi-Family (up to 4 units)' },
    { value: 'townhouse', label: 'Townhouse' },
];

const occupancyOptions = [
    { value: 'owner-occupied', label: 'Owner Occupied' },
    { value: 'vacant', label: 'Vacant' },
    { value: 'rental-long-term', label: 'Rental (Long-term)' },
    { value: 'rental-short-term', label: 'Rental (Short-term / Airbnb)' },
];

const validationSchema = Yup.object({
    address: Yup.string().required('Property address is required'),
    propertyType: Yup.string().required('Property type is required'),
    yearBuilt: Yup.number()
        .typeError('Must be a number')
        .min(1700, 'Invalid year')
        .max(new Date().getFullYear(), 'Year cannot be in the future')
        .required('Year built is required'),
    beds: Yup.number().min(0, 'Cannot be negative').required('Number of beds is required'),
    baths: Yup.number().min(0, 'Cannot be negative').required('Number of baths is required'),
    sqft: Yup.number().min(0, 'Cannot be negative').required('Square footage is required'),
    occupancy: Yup.string().required('Occupancy status is required'),
});

export default function Step1PropertyBasics() {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.ownerIntake);

    const formik = useFormik({
        initialValues: {
            address: formData.address,
            propertyType: formData.propertyType,
            yearBuilt: formData.yearBuilt,
            beds: formData.beds,
            baths: formData.baths,
            sqft: formData.sqft,
            occupancy: formData.occupancy,
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
                <h2 className="text-2xl font-playfair font-bold text-navy mb-2">Property Basics</h2>
                <p className="text-settley-text text-sm">Tell us about the property you want to list.</p>
            </div>

            <Input
                id="address"
                label="Property Address"
                placeholder="Enter full address"
                {...formik.getFieldProps('address')}
                touched={formik.touched.address}
                error={formik.errors.address}
                required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                    id="propertyType"
                    label="Property Type"
                    placeholder="Select type"
                    options={propertyTypeOptions}
                    value={formik.values.propertyType}
                    setValue={(val) => formik.setFieldValue('propertyType', val)}
                    setTouched={(val) => formik.setFieldTouched('propertyType', val)}
                    touched={formik.touched.propertyType}
                    error={formik.errors.propertyType}
                    required
                />

                <Input
                    id="yearBuilt"
                    label="Year Built"
                    placeholder="e.g. 1995"
                    type="number"
                    {...formik.getFieldProps('yearBuilt')}
                    touched={formik.touched.yearBuilt}
                    error={formik.errors.yearBuilt}
                    required
                />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <Input
                    id="beds"
                    label="Beds"
                    type="number"
                    {...formik.getFieldProps('beds')}
                    touched={formik.touched.beds}
                    error={formik.errors.beds}
                    required
                />
                <Input
                    id="baths"
                    label="Baths"
                    type="number"
                    {...formik.getFieldProps('baths')}
                    touched={formik.touched.baths}
                    error={formik.errors.baths}
                    required
                />
                <Input
                    id="sqft"
                    label="Sq Ft"
                    type="number"
                    {...formik.getFieldProps('sqft')}
                    touched={formik.touched.sqft}
                    error={formik.errors.sqft}
                    required
                />
            </div>

            <Select
                id="occupancy"
                label="Occupancy Status"
                placeholder="Select status"
                options={occupancyOptions}
                value={formik.values.occupancy}
                setValue={(val) => formik.setFieldValue('occupancy', val)}
                setTouched={(val) => formik.setFieldTouched('occupancy', val)}
                touched={formik.touched.occupancy}
                error={formik.errors.occupancy}
                required
            />

            <div className="mt-8 flex justify-end">
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
