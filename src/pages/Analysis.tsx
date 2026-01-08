import { useEffect, useState } from "react";
import { useToast } from "../hooks/use-toast";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router";
import Review from "./Review";
import LocationInfo from "./LocationInfo";
import ImageUpload from "./ImageUpload";
import Loading from "@/pages/Loading";
import Header from "../layout/Header/Header";

interface UploadedFile {
    file: File;
    preview: string;
    status: 'uploading' | 'success' | 'error';
}

const Analysis = () => {
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


    if (isProcessing) {
        return (
            <Loading processingProgress={processingProgress} />
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Header currentStep={currentStep} totalSteps={totalSteps} />

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Step 1: Image Upload */}
                {currentStep === 1 && (
                    <ImageUpload
                        setCurrentStep={setCurrentStep}
                        preWarImage={preWarImage}
                        postWarImage={postWarImage}
                        setPreWarImage={setPreWarImage}
                        setPostWarImage={setPostWarImage}
                        handleFileSelect={handleFileSelect}
                        handleDrop={handleDrop}
                        canProceedToStep2={canProceedToStep2}

                    />
                )}

                {/* Step 2: Location Information */}
                {currentStep === 2 && (
                    <LocationInfo
                        sudanStates={sudanStates}
                        latitude={latitude}
                        longitude={longitude}
                        locationDescription={locationDescription}
                        setLatitude={setLatitude}
                        setLongitude={setLongitude}
                        setLocationDescription={setLocationDescription}
                        setSudanState={setSudanState}
                        setConflictPeriod={setConflictPeriod}
                        conflictPeriods={conflictPeriods}
                        canProceedToStep3={canProceedToStep3}
                        sudanState={sudanState}
                        conflictPeriod={conflictPeriod}
                        setCurrentStep={setCurrentStep}
                    />
                )}

                {/* Step 3: Review and Start Analysis */}
                {currentStep === 3 && (
                    <Review
                        sudanState={sudanState}
                        preWarImage={preWarImage}
                        postWarImage={postWarImage}
                        conflictPeriod={conflictPeriod}
                        latitude={latitude}
                        longitude={longitude}
                        locationDescription={locationDescription}
                        setCurrentStep={setCurrentStep}
                        handleStartAnalysis={handleStartAnalysis}
                        sudanStates={sudanStates}
                        conflictPeriods={conflictPeriods}
                    />
                )}
            </div>
        </div>
    );
};

export default Analysis;