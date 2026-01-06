import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Zap, } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function HeroSection() {
    const { t, isRTL } = useLanguage();
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="w-fit bg-[#0059B3]/10 text-[#0059B3] border-[#0059B3]/20">
                                <Zap className="h-3 w-3 mr-1" />
                                {t('hero.aiTechnology')}
                            </Badge>
                            <h1 className={`text-4xl lg:text-5xl font-bold leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('hero.title')}
                                <br />
                                <span className="gradient-sudan bg-clip-text text-transparent">
                                    {t('hero.titleHighlight')}
                                </span>
                            </h1>
                            <p className={`text-xl text-[#898F9A] leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('hero.description')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"

                                className="bg-sudan-red cursor-pointer hover:bg-sudan-red/90 text-lg px-8 py-6 text-white"
                            >
                                {t('hero.startAssessment')}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 py-6 border-[#0059B3] cursor-pointer text-[#0059B3] hover:bg-[#0059B3]/10"
                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('hero.learnMore')}
                            </Button>
                        </div>

                        <div className={`flex items-center space-x-8 text-sm text-[#898F9A] ${isRTL ? 'space-x-reverse' : ''}`}>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>{t('hero.realTimeAnalysis')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0059B3] rounded-full"></div>
                                <span>{t('hero.highAccuracy')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-sudan-red rounded-full"></div>
                                <span>{t('hero.humanitarianFocus')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                            <img
                                src="https://images.unsplash.com/photo-1659864216522-494efbd76895?w=800&auto=format&fit=crop&q=80"
                                alt="صورة قمر صناعي للنيل في السودان"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} text-white`}>
                                <p className="text-sm font-medium">
                                    {isRTL ? 'تحليل صور الأقمار الصناعية' : 'Satellite Imagery Analysis'}
                                </p>
                                <p className="text-xs opacity-90">
                                    {isRTL ? 'النيل الأزرق - السودان' : 'Blue Nile - Sudan'}
                                </p>
                            </div>
                            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                                <Badge className="bg-[#0059B3]/10 text-white hover:bg-[#0059B3]/90 cursor-pointer">
                                    {isRTL ? 'السودان' : 'Sudan'}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}