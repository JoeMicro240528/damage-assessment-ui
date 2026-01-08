import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Satellite,
    ArrowLeft,
} from "lucide-react";
import LanguageToggle from "../../components/common/LanguageToggle";
import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";
const Header = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number; }) => {
    const navigate = useNavigate();
    const { t, isRTL } = useLanguage();
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (<header className="border-b border-[#ebe9e5] bg-[0 0% 100%]/95 backdrop-blur supports-[backdrop-filter]:bg-[0 0% 100%]/60">
        <div className="container mx-auto px-4 py-4">
            <div className="flex md:items-center md:flex-row flex-col justify-between">
                <div className={`flex justify-between mb-3 items-center md:space-x-4 ${isRTL ? 'md:space-x-reverse' : ''}`}>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate('/')}
                        className={`flex items-center cursor-pointer hover:bg-[#0059B3] hover:text-white hover:border-[#0059B3] hover:transition-all hover:duration-300 hover:ease-in-out space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
                    >
                        <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                        <span>{t('nav.backToHome')}</span>
                    </Button>
                    <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <img className="h-8 w-8 " src="/images/flag.png" alt="sudan flag" />
                        <Satellite className="h-6 w-6 text-sudan-blue animate-pulse" />
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                            <span className="font-semibold">{t('analysis.title')}</span>
                        </div>
                    </div>
                </div>

                <div className={`flex items-center justify-between mb-3 space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <LanguageToggle />
                    <div className="flex items-center space-x-4 ">
                        <div className="text-sm text-muted-foreground mx-2">
                            {t('analysis.step')} {currentStep} {t('analysis.of')} {totalSteps}
                        </div>
                        <div className="w-32">
                            <Progress value={progressPercentage} className="h-2 bg-[#ebe9e5]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;