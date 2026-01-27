import Review from "./Review";
import LocationInfo from "./LocationInfo";
import ImageUpload from "./ImageUpload";
import Loading from "@/pages/Loading";
import Header from "../layout/Header/Header";
import { useAnalysis } from "@/hooks/use-analysis";


const Analysis = () => {
    const {
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
    } = useAnalysis();

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