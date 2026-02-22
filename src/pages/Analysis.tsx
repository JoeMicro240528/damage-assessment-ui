import Review from "./Review";
import LocationInfo from "./LocationInfo";
import ImageUpload from "./ImageUpload";
import Loading from "@/pages/Loading";
import Header from "../layout/Header/Header";
import { useAnalysis } from "@/hooks/use-analysis";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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

    const steps = [
        { id: 1, name: 'Images' },
        { id: 2, name: 'Location' },
        { id: 3, name: 'Review' },
    ];

    return (
        <div className="min-h-screen bg-background selection:bg-primary/30">
            <Header currentStep={currentStep} totalSteps={totalSteps} />

            <main className="container mx-auto px-4 py-16 max-w-6xl">
                {/* HUD Stepper */}
                <div className="mb-20 max-w-3xl mx-auto">
                    <div className="relative flex items-center justify-between">
                        {/* Background HUD Track */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 -z-10" />

                        {/* Active Progress Line */}
                        <motion.div
                            className="absolute top-1/2 left-0 h-[1px] bg-primary -translate-y-1/2 -z-10 origin-left shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: (currentStep - 1) / (totalSteps - 1) }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            style={{ width: '100%' }}
                        />

                        {steps.map((step) => {
                            const isCompleted = currentStep > step.id;
                            const isActive = currentStep === step.id;

                            return (
                                <div key={step.id} className="relative flex flex-col items-center">
                                    <motion.button
                                        onClick={() => step.id < currentStep && setCurrentStep(step.id)}
                                        disabled={step.id >= currentStep}
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 relative group backdrop-blur-md",
                                            isCompleted ? "bg-primary/90 border-primary text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.4)]" :
                                                isActive ? "glass-panel border-primary text-primary shadow-[0_0_25px_rgba(16,185,129,0.3)] scale-110" :
                                                    "bg-card/40 border-white/10 text-muted-foreground hover:border-white/30"
                                        )}
                                    >
                                        {isActive && (
                                            <>
                                                <div className="absolute inset-[-6px] border border-primary/30 rounded-full animate-[spin_4s_linear_infinite]" />
                                                <div className="absolute inset-[-10px] border border-primary/10 rounded-full animate-[spin_6s_linear_infinite_reverse]" />
                                            </>
                                        )}
                                        {isCompleted ? (
                                            <Check className="h-5 w-5" strokeWidth={3} />
                                        ) : (
                                            <span className="text-xs font-black tracking-tighter">{step.id.toString().padStart(2, '0')}</span>
                                        )}
                                    </motion.button>
                                    <span className={cn(
                                        "absolute -bottom-10 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-500",
                                        isActive ? "text-primary opacity-100 translate-y-0" : "text-muted-foreground opacity-50 translate-y-1"
                                    )}>
                                        {step.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Step Content Content */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                        >
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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 mt-auto bg-card/20 backdrop-blur-sm">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                        ACTIVE RESPONSE SYSTEM-v1.0 • SECURING EVIDENCE
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Analysis;