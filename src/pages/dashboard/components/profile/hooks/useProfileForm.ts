import {useState, useCallback } from 'react';
import {  z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const profileSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    middleName: z.string().optional(),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    gender: z.string().min(1, "Gender is required"),
    maritalStatus: z.string().min(1, "Marital status is required"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    placeOfBirth: z.string().min(2, "Place of birth is required"),
    motherTongue: z.string().min(2, "Mother tongue is required"),
    bloodGroup: z.string().min(1, "Blood group is required"),
    religion: z.string().min(2, "Religion is required"),
    casteCategory: z.string().optional(),
    subCaste: z.string().optional(),
    nationality: z.string().min(2, "Nationality is required"),
    phoneNumber: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
    email: z.string().email("Invalid email address"),
    parentPhoneNumber: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number").optional(),
    parentEmail: z.string().email("Invalid email address").optional(),
    fatherName: z.string().min(2, "Father's name is required"),
    fatherOccupation: z.string().min(2, "Father's occupation is required"),
    motherName: z.string().min(2, "Mother's name is required"),
    motherOccupation: z.string().min(2, "Mother's occupation is required"),
    totalFamilyMembers: z.number().min(1, "Must be at least 1"),
    familyIncome: z.number().min(0, "Cannot be negative"),
    aadharCardNumber: z.string().regex(/^[0-9]{12}$/, "Invalid Aadhar number").optional(),
    passportNumber: z.string().optional(),
    passportIssuePlace: z.string().optional(),
    passportIssueDate: z.string().optional(),
    passportExpiryDate: z.string().optional(),
    visaNumber: z.string().optional(),
    visaIssuePlace: z.string().optional(),
    visaIssueDate: z.string().optional(),
    visaExpiryDate: z.string().optional(),
    profileImageUrl:z.string().optional()
  });
type ProfileFormData = z.infer<typeof profileSchema>;

export const useProfileForm = () => {

    const [profileImage, setProfileImage] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '',
            maritalStatus: '',
            dateOfBirth: '',
            placeOfBirth: '',
            motherTongue: '',
            bloodGroup: '',
            religion: '',
            casteCategory: '',
            subCaste: '',
            nationality: '',
            phoneNumber: '',
            email: '',
            parentPhoneNumber: '',
            parentEmail: '',
            fatherName: '',
            fatherOccupation: '',
            motherName: '',
            motherOccupation: '',
            totalFamilyMembers: 0,
            familyIncome: 0,
            aadharCardNumber: '',
            passportNumber: '',
            passportIssuePlace: '',
            passportIssueDate: '',
            passportExpiryDate: '',
            visaNumber: '',
            visaIssuePlace: '',
            visaIssueDate: '',
            visaExpiryDate: '',
            profileImageUrl: ''
        }
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue(name as keyof ProfileFormData, value);
    }, [setValue]);

    const setFieldValue = useCallback((name: string, value: string) => {
        setValue(name as keyof ProfileFormData, value);
    }, [setValue])

    const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            // Validate file type and size
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return
            }
            if (file.size > 5 * 1024 * 1024) {
                alert('File size should be less than 5MB');
                return
            }

            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            }
            reader.readAsDataURL(file)
        }
    }, [])

    const onSubmit = useCallback(async (data: any) => {
        try {
            setIsSubmitting(true)
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    profileImage
                })
            })
            if (!response.ok) {
                throw new Error('Failed to save profile');
            }

            // Show success message
            alert('Profile saved successfully!');
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Error saving profile. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }, [profileImage])

    return {
        formState: watch(),
        errors,
        handleChange,
        handleSubmit: handleSubmit(onSubmit),
        isSubmitting,
        setFieldValue,
        handleImageUpload,
        register,
        control,
        watch
    }
}