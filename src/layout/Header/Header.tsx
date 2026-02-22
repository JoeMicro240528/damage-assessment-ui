import { Button } from "@/components/ui/button";

import {
    Satellite,
    ArrowLeft,
} from "lucide-react";
import LanguageToggle from "../../components/common/LanguageToggle";
import ThemeToggle from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number; }) => {
    const navigate = useNavigate();
    const { t, isRTL } = useLanguage();
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <header className="sticky top-0 z-50 w-full mb-8">
            <div className="absolute inset-0 glass-panel border-x-0 border-t-0 border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-foreground"></div>
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50" />

            <div className="container relative mx-auto px-4 py-4 lg:py-5">
                <div className="flex md:items-center md:flex-row flex-col justify-between gap-4">
                    <div className={`flex justify-between items-center md:space-x-8 ${isRTL ? 'md:space-x-reverse' : ''}`}>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate('/')}
                            className={`group flex items-center cursor-pointer hover:bg-primary/10 hover:text-primary transition-all duration-300 space-x-2 rounded-full px-4 ${isRTL ? 'space-x-reverse' : ''}`}
                        >
                            <ArrowLeft className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                            <span className="font-semibold tracking-wide uppercase text-[10px] sm:text-xs">
                                {t('nav.backToHome')}
                            </span>
                        </Button>
                        <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img className="relative h-9 w-9 rounded-full shadow-md ring-2 ring-primary/20" src="/images/flag.png" alt="sudan flag" />
                                <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-success shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            </div>
                            <div className={`hidden sm:flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                                <Satellite className="h-5 w-5 text-primary animate-pulse drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="font-black tracking-widest uppercase text-sm bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                    {t('analysis.title')}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={`flex items-center justify-between space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <div className="flex items-center gap-2">
                            <ThemeToggle />
                            <LanguageToggle />
                        </div>
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="hidden md:flex flex-col items-end justify-center space-y-1.5">
                                <div className="flex justify-between w-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                    <span>{t('analysis.step')} {currentStep}</span>
                                    <span className="text-primary/70">{Math.round(progressPercentage)}%</span>
                                </div>
                                <div className="w-32 lg:w-48 relative h-1.5 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-border/50">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-700 ease-out"
                                        style={{ width: `${progressPercentage}%` }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 border-l border-border/50 pl-4 sm:pl-8">
                                <ThemeToggle />
                                <LanguageToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;