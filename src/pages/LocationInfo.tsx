import { Globe, Calendar, FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

interface ILocationInfoProps {
    sudanStates: { value: string; label: string }[];
    latitude: string;
    longitude: string;
    locationDescription: string;
    sudanState: string;
    conflictPeriod: string;
    setCurrentStep: (step: number) => void;
    setLatitude: (latitude: string) => void;
    setLongitude: (longitude: string) => void;
    setLocationDescription: (locationDescription: string) => void;
    setSudanState: (sudanState: string) => void;
    setConflictPeriod: (conflictPeriod: string) => void;
    conflictPeriods: { value: string; label: string }[];
    canProceedToStep3: string | false;
}

const LocationInfo = ({
    sudanStates,
    latitude,
    longitude,
    locationDescription,
    sudanState,
    conflictPeriod,
    setCurrentStep,
    setConflictPeriod,
    setLatitude,
    setLongitude,
    setLocationDescription,
    setSudanState,
    conflictPeriods,
    canProceedToStep3
}: ILocationInfoProps) => {
    const { t, isRTL } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
        >
            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                        {t('location.title')}
                    </span>
                </div>
                <h2 className="text-4xl font-black tracking-tighter uppercase text-foreground">
                    {t('location.title')}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    {t('location.description')}
                </p>
            </div>

            <div className="relative group p-8 lg:p-12 glass-panel-heavy rounded-[2rem] overflow-hidden shadow-2xl border-white/10 mt-8">
                <div className="absolute inset-0 bg-hud opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-[1.5rem]" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-[1.5rem]" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-[1.5rem]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-[1.5rem]" />

                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                                <Globe className="h-3 w-3" />
                                {t('location.sudanState')}
                            </Label>
                            <Select value={sudanState} onValueChange={setSudanState}>
                                <SelectTrigger className="h-14 rounded-none border-white/10 bg-white/5 focus:ring-primary text-foreground">
                                    <SelectValue placeholder={t('location.selectState')} />
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-white/10 bg-card text-foreground">
                                    {sudanStates.map((state) => (
                                        <SelectItem key={state.value} value={state.value} className="focus:bg-primary/20 cursor-pointer">
                                            {state.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                                <Calendar className="h-3 w-3" />
                                {t('location.conflictPeriod')}
                            </Label>
                            <Select value={conflictPeriod} onValueChange={setConflictPeriod}>
                                <SelectTrigger className="h-14 rounded-none border-white/10 bg-white/5 focus:ring-primary text-foreground">
                                    <SelectValue placeholder={t('location.selectPeriod')} />
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-white/10 bg-card text-foreground">
                                    {conflictPeriods.map((period) => (
                                        <SelectItem key={period.value} value={period.value} className="focus:bg-primary/20 cursor-pointer">
                                            {period.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70">
                                    {t('location.latitude')}
                                </Label>
                                <Input
                                    className="h-14 rounded-none border-white/10 bg-white/5 focus:ring-primary text-foreground font-mono"
                                    type="number"
                                    step="any"
                                    placeholder="00.0000"
                                    value={latitude}
                                    onChange={(e) => setLatitude(e.target.value)}
                                />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70">
                                    {t('location.longitude')}
                                </Label>
                                <Input
                                    className="h-14 rounded-none border-white/10 bg-white/5 focus:ring-primary text-foreground font-mono"
                                    type="number"
                                    step="any"
                                    placeholder="00.0000"
                                    value={longitude}
                                    onChange={(e) => setLongitude(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                                <FileText className="h-3 w-3" />
                                {t('location.descriptionLabel')}
                            </Label>
                            <Textarea
                                className="rounded-xl border border-white/20 bg-black/20 focus:ring-primary min-h-[120px] resize-none text-foreground backdrop-blur-sm shadow-inner transition-colors focus:bg-primary/5"
                                placeholder={t('location.descriptionPlaceholder')}
                                value={locationDescription}
                                onChange={(e) => setLocationDescription(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col sm:flex-row justify-between gap-6 pt-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Button
                    variant="ghost"
                    size="lg"
                    className="h-14 px-8 border border-white/20 text-foreground font-black uppercase tracking-widest rounded-full hover:bg-white/10 glass-button transition-all duration-300 group"
                    onClick={() => setCurrentStep(1)}
                >
                    <ArrowLeft className={`mr-3 h-5 w-5 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                    {t('location.backToImages')}
                </Button>
                <Button
                    size="lg"
                    onClick={() => setCurrentStep(3)}
                    disabled={!canProceedToStep3}
                    className="h-14 px-12 bg-primary/90 hover:bg-primary text-primary-foreground font-black uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 group disabled:opacity-20 backdrop-blur-md border-none glass-button"
                >
                    <span>{t('location.reviewAnalyze')}</span>
                    <ArrowRight className={`ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </Button>
            </div>
        </motion.div>
    );
};

export default LocationInfo;