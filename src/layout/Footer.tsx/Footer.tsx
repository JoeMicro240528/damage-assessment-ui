import { useLanguage } from "../../contexts/LanguageContext";
import { Satellite } from "lucide-react";

export default function Footer() {
    const { t, isRTL } = useLanguage();
    return (
        <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <img className="h-7 w-7" src="../../public/images/flag.png" alt="sudan flag" />
                        <Satellite className="h-6 w-6 text-[#0059B3]" />
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                            <span className="font-bold">
                                {isRTL ? 'تقييم الأضرار' : 'Damage Assessment'}
                            </span>
                            <p className="text-xs text-[#898F9A]">
                                {isRTL ? 'Damage Assessment' : 'تقييم الأضرار'}
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-[#898F9A]">
                        {isRTL
                            ? 'تحليل صور الأقمار الصناعية بالذكاء الاصطناعي لتقييم الأضرار الإنسانية في السودان.'
                            : 'AI-powered satellite imagery analysis for humanitarian damage assessment in Sudan.'
                        }
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
                    <ul className="space-y-2 text-sm text-[#898F9A]">
                        <li><a href="#features" className="hover:text-[#282C34] transition-colors">{t('nav.features')}</a></li>
                        <li><a href="#how-it-works" className="hover:text-[#282C34] transition-colors">{t('nav.howItWorks')}</a></li>
                        <li><button className="hover:text-[#282C34] transition-colors">{t('nav.startAssessment')}</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">{t('footer.useCases')}</h4>
                    <ul className="space-y-2 text-sm text-[#898F9A]">
                        <li>{t('footer.humanitarianAid')}</li>
                        <li>{t('footer.governmentPlanning')}</li>
                        <li>{t('footer.academicResearch')}</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
                    <ul className="space-y-2 text-sm text-[#898F9A]">
                        <li>{t('footer.documentation')}</li>
                        <li>API Reference</li>
                        <li>{t('footer.contactSupport')}</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-[#ebe9e5] mt-12 pt-8 text-center text-sm text-[#898F9A]">
                <p>{t('footer.copyright')}</p>
            </div>
        </div>
    );
};