import { Card } from "@/components/ui/card";
import { CheckCircle, MapPin, Calendar, FileText, ArrowLeft, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { UploadedFile } from "@/hooks/use-analysis";

interface IReviewProps {
    sudanState: string;
    preWarImage: UploadedFile | null;
    postWarImage: UploadedFile | null;
    conflictPeriod: string;
    latitude: string;
    longitude: string;
    locationDescription: string;
    setCurrentStep: (step: number) => void;
    handleStartAnalysis: () => void;
    sudanStates: { value: string; label: string }[];
    conflictPeriods: { value: string; label: string }[];
}

const Review = ({
    sudanState,
    preWarImage,
    postWarImage,
    conflictPeriod,
    latitude,
    longitude,
    locationDescription,
    setCurrentStep,
    handleStartAnalysis,
    sudanStates,
    conflictPeriods
}: IReviewProps) => {
    const { t, isRTL } = useLanguage();

    const selectedStateLabel = sudanStates.find(s => s.value === sudanState)?.label || sudanState;
    const selectedPeriodLabel = conflictPeriods.find(p => p.value === conflictPeriod)?.label || conflictPeriod;

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
        >
            <div className={`flex flex-col gap-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h2 className="text-3xl font-black tracking-tight">{t('analysis.reviewTitle')}</h2>
                <p className="text-muted-foreground font-medium">{t('analysis.reviewDescription')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="h-full">
                    <Card className="border-border/50 glass-panel rounded-[2rem] overflow-hidden group hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] transition-all h-full">
                        <div className="p-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                                        {t('analysis.locationTitle')}
                                    </p>
                                    <h3 className="text-xl font-bold">{selectedStateLabel}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{locationDescription}</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border/50">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground font-bold">{t('analysis.latitude')}</span>
                                    <span className="font-mono font-bold">{latitude}° N</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground font-bold">{t('analysis.longitude')}</span>
                                    <span className="font-mono font-bold">{longitude}° E</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="h-full">
                    <Card className="border-border/50 glass-panel rounded-[2rem] overflow-hidden group hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] transition-all h-full">
                        <div className="p-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                                        {t('analysis.conflictPeriod')}
                                    </p>
                                    <h3 className="text-xl font-bold">{selectedPeriodLabel}</h3>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border/50">
                                <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20 px-3 py-1 rounded-full">
                                    <Zap className="h-3 w-3 mr-2 animate-pulse" />
                                    {t('analysis.highPriority')}
                                </Badge>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* Images Review */}
            <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-4">
                        {t('analysis.preConflict')}
                    </p>
                    <div className="aspect-video rounded-[2rem] overflow-hidden border-2 border-border/50">
                        {preWarImage?.preview ? (
                            <img src={preWarImage.preview} alt="Pre-war" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                <Zap className="h-8 w-8 text-muted-foreground/20" />
                            </div>
                        )}
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-4">
                        {t('analysis.postConflict')}
                    </p>
                    <div className="aspect-video rounded-[2rem] overflow-hidden border-2 border-border/50">
                        {postWarImage?.preview ? (
                            <img src={postWarImage.preview} alt="Post-war" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                <Zap className="h-8 w-8 text-muted-foreground/20" />
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            <motion.div variants={itemVariants}>
                <Card className="border-primary/30 glass-panel rounded-[2rem] overflow-hidden p-8 shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-success" />
                                <h3 className="text-xl font-bold">{t('analysis.readyTitle')}</h3>
                            </div>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                {t('analysis.readyDescription')}
                            </p>
                        </div>
                        <Alert className="md:w-72 bg-background/50 border-border/50 rounded-2xl">
                            <FileText className="h-4 w-4" />
                            <AlertDescription className="text-xs font-bold leading-normal">
                                {t('analysis.dataPrivacyNote')}
                            </AlertDescription>
                        </Alert>
                    </div>
                </Card>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
                <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => setCurrentStep(2)}
                    className="h-14 px-8 rounded-full font-bold border border-white/20 glass-button hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                    <ArrowLeft className={`h-5 w-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                    {t('common.back')}
                </Button>

                <Button
                    size="lg"
                    onClick={handleStartAnalysis}
                    className="h-14 px-10 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-xl shadow-primary/30 font-black text-lg group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto glass-button border-none"
                >
                    {t('analysis.startAnalysis')}
                    <Zap className="ml-2 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
                </Button>
            </div>
        </motion.div>
    );
};

export default Review;