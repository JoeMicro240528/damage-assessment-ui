import { Button } from "../../components/ui/button";
import { Satellite } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageToggle from "../../components/common/LanguageToggle";
import { useNavigate } from "react-router";
const Navbar = () => {
    const { t, isRTL } = useLanguage();
    const navigate = useNavigate();
    return (
        <header className="border-b border-[#ebe9e5] bg-[0 0% 100%]/95 backdrop-blur supports-[backdrop-filter]:bg-[0 0% 100%]/60">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className={`flex items-center space-x-3 ${!isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className="flex items-center space-x-2">
                            <img className="h-8 w-8" src="/images/flag.png" alt="sudan flag" />
                            <Satellite className="h-8 w-8  text-[#0059B3] animate-pulse" />
                        </div>
                        <div className={!isRTL ? 'text-right' : 'text-left'}>
                            <span className="text-xl font-bold text-[#282C34]">
                                {!isRTL ? 'تقييم الأضرار - السودان' : 'Sudan Damage Assessment'}
                            </span>
                            <p className="text-sm text-[#898F9A]">
                                {!isRTL ? 'Sudan Damage Assessment' : 'تقييم الأضرار - السودان'}
                            </p>
                        </div>
                    </div>
                    <nav className={`hidden cursor-pointer md:flex items-center space-x-6 justify-between  ${!isRTL ? 'space-x-reverse' : ''}`}>
                        <div className="flex items-center space-x-6" >
                            <a onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#898F9A] hover:text-[#282C34] transition-colors">
                                {t('nav.features')}
                            </a>
                            <a onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#898F9A] hover:text-[#282C34] transition-colors">
                                {t('nav.howItWorks')}
                            </a>
                            <a onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#898F9A] hover:text-[#282C34] transition-colors">
                                {t('nav.regions')}
                            </a>
                            <a onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#898F9A] hover:text-[#282C34] transition-colors">
                                {t('team.title')}
                            </a>
                        </div>
                        <div className="flex items-center">
                            <Button
                                className={`w-2 h-2  mx-15 `}
                            >
                                <LanguageToggle />
                            </Button>

                            <Button
                                className="bg-sudan-red cursor-pointer hover:bg-sudan-red/90 text-white"
                                onClick={() => navigate('/analysis')}
                            >
                                {t('nav.startAssessment')}
                            </Button>
                        </div>
                    </nav>

                </div>

            </div>
            <div className="flex items-center justify-between mb-6 mx-5 space-x-3 md:hidden ">
                <Button
                    className={`w-2 h-2 mx-10`}
                >
                    <LanguageToggle />
                </Button>
                <Button
                    className="bg-sudan-red cursor-pointer hover:bg-sudan-red/90 text-white "
                    onClick={() => navigate('/analysis')}
                >
                    {t('nav.startAssessment')}
                </Button>
            </div>
        </header>
    );
};

export default Navbar;