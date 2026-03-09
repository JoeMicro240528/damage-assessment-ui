import { Button } from "@/components/ui/button";
import { Satellite, ArrowLeft, CheckCircle } from "lucide-react";
import LanguageToggle from "../../components/common/LanguageToggle";
import ThemeToggle from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * ResultsHeader Component
 * 
 * A specialized header for the Results page that displays:
 * 1. Branding (Left): Sudan Damage Assessment title, flag, and satellite icon.
 * 2. Status (Middle): A success message indicating the assessment is complete.
 * 3. Controls (Right): Language toggle, theme toggle, and a "Back to Home" button.
 */
const ResultsHeader = () => {
    const navigate = useNavigate();
    const { t, isRTL } = useLanguage();

    return (
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* LEFT SECTION: Branding */}
                    <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                        {/* Sudan Flag */}
                        <img className="h-8 w-8 object-contain" src="/images/flag.png" alt="sudan flag" />

                        {/* Satellite Icon with Pulse Animation */}
                        <Satellite className="h-6 w-6 text-sudan-blue animate-pulse" />

                        {/* Title */}
                        <div className={cn("flex flex-col", isRTL ? 'text-right' : 'text-left')}>
                            <span className="font-bold text-lg leading-tight text-foreground">
                                {!isRTL ? "تقييم الأضرار - السودان" : "Sudan Damage Assessment"}
                            </span>
                        </div>
                    </div>

                    {/* MIDDLE SECTION: Success Message */}
                    <div className="flex-1 flex justify-center w-full md:w-auto my-2 md:my-0">
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm animate-in fade-in zoom-in duration-500">
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                            <span className="font-medium text-sm md:text-base">
                                {t('results.success')}
                            </span>
                        </div>
                    </div>

                    {/* RIGHT SECTION: Controls */}
                    <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Language Toggle */}
                        <LanguageToggle />

                        {/* Back to Home Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate('/')}
                            className={`flex items-center cursor-pointer hover:bg-primary hover:text-white border-transparent hover:transition-all hover:duration-300 hover:ease-in-out space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
                        >
                            <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                            <span>{t('nav.backToHome')}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ResultsHeader;
