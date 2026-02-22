import { useLanguage } from "../contexts/LanguageContext";
import { useToast } from "../hooks/use-toast";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

export interface UploadedFile {
    file: File;
    preview: string;
    status: 'uploading' | 'success' | 'error';
}

export const useAnalysis = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const { t, isRTL } = useLanguage();

    const [currentStep, setCurrentStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [processingProgress, setProcessingProgress] = useState(0);

    // Form data
    const [preWarImage, setPreWarImage] = useState<UploadedFile | null>(null);
    const [postWarImage, setPostWarImage] = useState<UploadedFile | null>(null);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [locationDescription, setLocationDescription] = useState("");
    const [sudanState, setSudanState] = useState("");
    const [conflictPeriod, setConflictPeriod] = useState("");

    const totalSteps = 3;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [0]);


    const sudanStates = [{ value: "khartoum", label: !isRTL ? "الخرطوم - Khartoum" : "Khartoum - الخرطوم" }]

    const conflictPeriods = [{ value: "2023-april", label: !isRTL ? "أبريل 2023 - April 2023" : "April 2023 - أبريل 2023" }]

    const handleFileUpload = (file: File, type: 'pre' | 'post') => {
        if (!file.type.startsWith('image/')) {
            toast({
                title: t('notification.invalidFileType'),
                description: t('notification.invalidFileTypeDesc'),
                variant: "destructive",
            });
            return;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            toast({
                title: t('notification.fileTooLarge'),
                description: t('notification.fileTooLargeDesc'),
                variant: "destructive",
            });
            return;
        }

        const preview = URL.createObjectURL(file);
        const uploadedFile: UploadedFile = {
            file,
            preview,
            status: 'uploading'
        };

        if (type === 'pre') {
            setPreWarImage(uploadedFile);
        } else {
            setPostWarImage(uploadedFile);
        }

        // Simulate upload process
        setTimeout(() => {
            const successFile = { ...uploadedFile, status: 'success' as const };
            if (type === 'pre') {
                setPreWarImage(successFile);
            } else {
                setPostWarImage(successFile);
            }

            toast({
                title: t('notification.uploadSuccess'),
                description: t('notification.uploadSuccessDesc').replace('{type}', type === 'pre' ? t('analysis.preConflict') : t('analysis.postConflict')),
            });
        }, 1500);
    };

    const handleDrop = (e: React.DragEvent, type: 'pre' | 'post') => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileUpload(files[0], type);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'pre' | 'post') => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileUpload(files[0], type);
        }
    };

    const canProceedToStep2 = preWarImage?.status === 'success' && postWarImage?.status === 'success';
    const canProceedToStep3 = canProceedToStep2 && latitude && longitude && locationDescription && sudanState;

    const handleStartAnalysis = async () => {
        setIsProcessing(true);
        setProcessingProgress(0);

        // Simulate AI processing with progress updates
        const progressInterval = setInterval(() => {
            setProcessingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        navigate('/results', {
                            state: {
                                preWarImage: preWarImage?.preview,
                                postWarImage: postWarImage?.preview,
                                location: {
                                    latitude,
                                    longitude,
                                    description: locationDescription,
                                    state: sudanState,
                                    conflictPeriod
                                }
                            }
                        });
                    }, 1000);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 500);

        return () => clearInterval(progressInterval);
    };

    return {
        currentStep,
        setCurrentStep,
        isProcessing,
        processingProgress,
        preWarImage,
        postWarImage,
        latitude,
        longitude,
        locationDescription,
        sudanState,
        conflictPeriod,
        totalSteps,
        handleFileSelect,
        handleDrop,
        handleStartAnalysis,
        canProceedToStep2,
        canProceedToStep3,
        sudanStates,
        conflictPeriods,
        setLatitude,
        setLongitude,
        setLocationDescription,
        setSudanState,
        setConflictPeriod,
        setPreWarImage,
        setPostWarImage,
    };
}