import { useLanguage } from "../contexts/LanguageContext";
import { Satellite, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Loading = ({ processingProgress }: { processingProgress: number }) => {
    const { t } = useLanguage();

    const steps = [1, 2, 3, 4];

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 bg-background -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square -z-10 blur-[120px] opacity-20 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 animate-grid-flow opacity-10 -z-15" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl relative"
            >
                {/* HUD Frame */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50" />

                <div className="glass-panel-heavy rounded-[3rem] p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/10">
                    <div className="absolute inset-0 bg-hud opacity-10 pointer-events-none" />

                    <div className="text-center mb-12">
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="w-24 h-24 glass-panel rounded-2xl text-primary flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                        >
                            <Satellite className="h-10 w-10" />
                        </motion.div>
                        <h2 className="text-3xl font-black tracking-tighter uppercase text-foreground mb-4">
                            {t('processing.title')}
                        </h2>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs opacity-70">
                            {t('processing.description')}
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Progress Tracker */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70">
                                        {t('processing.progress')}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="h-3 w-3 animate-spin text-primary" />
                                        <span className="text-xs font-bold text-foreground uppercase tracking-widest leading-none">Scanning Data Matrix</span>
                                    </div>
                                </div>
                                <span className="text-4xl font-black tabular-nums text-foreground">
                                    {Math.round(processingProgress)}%
                                </span>
                            </div>
                            <div className="relative h-1 w-full bg-white/5 overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${processingProgress}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        {/* Step Indicators */}
                        <div className="grid gap-6">
                            {steps.map((step) => {
                                const isDone = processingProgress > step * 25 - 5;
                                const isCurrent = processingProgress <= step * 25 && processingProgress > (step - 1) * 25;

                                return (
                                    <div key={step} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0">
                                        <div className="flex items-center gap-6">
                                            <div className={cn(
                                                "w-2 h-2 rounded-none transition-all duration-500",
                                                isDone ? "bg-success shadow-[0_0_10px_rgba(16,185,129,0.5)]" :
                                                    isCurrent ? "bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" :
                                                        "bg-white/10"
                                            )} />
                                            <span className={cn(
                                                "text-[10px] font-black uppercase tracking-[0.2em] transition-colors",
                                                isDone ? "text-foreground" : isCurrent ? "text-primary" : "text-muted-foreground"
                                            )}>
                                                STEP_{step.toString().padStart(2, '0')}: {t(`processing.step${step}`)}
                                            </span>
                                        </div>
                                        {isCurrent && (
                                            <span className="text-[9px] font-bold text-primary animate-pulse tracking-widest uppercase">ACTIVE</span>
                                        )}
                                        {isDone && (
                                            <span className="text-[9px] font-bold text-success tracking-widest uppercase">COMPLETE</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scanning Animation Element */}
                    <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none z-20"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Loading;