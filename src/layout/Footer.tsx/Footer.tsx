import { useLanguage } from "../../contexts/LanguageContext";
import { Satellite, Github, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    const { t, isRTL } = useLanguage();
    return (
        <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                <div className="space-y-6 reveal">
                    <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <img className="h-8 w-8" src="/images/flag.png" alt="sudan flag" />
                        <Satellite className="h-7 w-7 text-primary animate-pulse" />
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                            <span className="font-black text-lg tracking-tighter">
                                {isRTL ? 'تقييم الأضرار' : 'Damage Assessment'}
                            </span>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-none">
                                {isRTL ? 'مشروع السودان' : 'Sudan Project'}
                            </p>
                        </div>
                    </div>
                    <p className={`text-sm text-muted-foreground leading-relaxed font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL
                            ? 'تحليل صور الأقمار الصناعية بالذكاء الاصطناعي لتقييم الأضرار الإنسانية في السودان وتوفير بيانات دقيقة لجهود الإغاثة.'
                            : 'AI-powered satellite imagery analysis for humanitarian damage assessment, providing critical data for relief efforts in Sudan.'
                        }
                    </p>
                    <div className={`flex items-center gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                        <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Github className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                    </div>
                </div>

                <div className="reveal" style={{ transitionDelay: '100ms' }}>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-primary">{t('footer.product')}</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                        <li><a href="#features" className="hover:text-primary transition-colors">{t('nav.features')}</a></li>
                        <li><a href="#how-it-works" className="hover:text-primary transition-colors">{t('nav.howItWorks')}</a></li>
                        <li><a href="#regions" className="hover:text-primary transition-colors">{t('nav.regions')}</a></li>
                        <li><button className="hover:text-primary transition-colors" onClick={() => window.location.href = '/analysis'}>{t('nav.startAssessment')}</button></li>
                    </ul>
                </div>

                <div className="reveal" style={{ transitionDelay: '200ms' }}>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-primary">{t('footer.useCases')}</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                        <li className="hover:text-foreground transition-colors cursor-default">{t('footer.humanitarianAid')}</li>
                        <li className="hover:text-foreground transition-colors cursor-default">{t('footer.governmentPlanning')}</li>
                        <li className="hover:text-foreground transition-colors cursor-default">{t('footer.academicResearch')}</li>
                    </ul>
                </div>

                <div className="reveal" style={{ transitionDelay: '300ms' }}>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-primary">{t('footer.support')}</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                        <li><a href="#" className="hover:text-primary transition-colors">{t('footer.documentation')}</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">{t('footer.contactSupport')}</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-border/40 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                <p>{t('footer.copyright')}</p>
                <div className="flex items-center gap-2">
                    <span>Made with</span>
                    <Heart className="w-3 h-3 text-destructive animate-beat" />
                    <span>for Sudan</span>
                </div>
            </div>
        </div>
    );
}