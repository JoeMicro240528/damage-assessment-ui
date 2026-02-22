import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";
import { Satellite } from "lucide-react";

export default function Footer() {
    const { t, isRTL } = useLanguage();
    const navigate = useNavigate();

    return (
        <footer className="relative bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden">
            {/* HUD Decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px] -z-10" />

            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="relative">
                                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="relative flex items-center justify-center w-10 h-10 border border-primary/30 rounded-lg bg-primary/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-hud animate-pulse" />
                                    <Satellite className="h-5 w-5 text-primary" />
                                </div>
                            </div>
                            <div className={isRTL ? 'text-right' : 'text-left'}>
                                <span className="text-[11px] font-black tracking-[0.2em] text-foreground uppercase block leading-none mb-1">
                                    {t('nav.title')}
                                </span>
                                <span className="text-[9px] font-bold text-primary/70 uppercase tracking-widest block leading-none">
                                    RESPONSE_V1.0 • SUDAN
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                            {isRTL
                                ? 'نظام استجابة متقدم يعتمد على الذكاء الاصطناعي لتحليل الأضرار الإنسانية وتأمين الأدلة الرقمية.'
                                : 'Advanced response system leveraging AI to analyze humanitarian damage and secure digital evidence.'
                            }
                        </p>
                    </div>

                    {/* Links - Category 01 */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground border-l border-primary/50 pl-4">
                            {t('footer.product')}
                        </h4>
                        <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                            <li><a href="#features" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.features')}</a></li>
                            <li><a href="#how-it-works" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.howItWorks')}</a></li>
                            <li><button onClick={() => navigate('/analysis')} className="hover:text-primary transition-colors hover:translate-x-1 inline-block text-left">{t('nav.startAssessment')}</button></li>
                        </ul>
                    </div>

                    {/* Links - Category 02 */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground border-l border-primary/50 pl-4">
                            {t('footer.useCases')}
                        </h4>
                        <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                            <li className="hover:text-foreground/80 transition-colors uppercase">{t('footer.humanitarianAid')}</li>
                            <li className="hover:text-foreground/80 transition-colors uppercase">{t('footer.governmentPlanning')}</li>
                            <li className="hover:text-foreground/80 transition-colors uppercase">{t('footer.academicResearch')}</li>
                        </ul>
                    </div>

                    {/* Links - Category 03 */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground border-l border-primary/50 pl-4">
                            {t('footer.support')}
                        </h4>
                        <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block uppercase">{t('footer.documentation')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block uppercase">API_ENTRY_POINT</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block uppercase">{t('footer.contactSupport')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
                        {t('footer.copyright')}
                    </p>
                    <div className="flex items-center gap-8">
                        <span className="text-[9px] font-bold text-muted-foreground/30 uppercase tracking-[0.2em]">ENCRYPTED_LOG_V1.1</span>
                        <div className="h-1 w-1 rounded-full bg-success animate-pulse" />
                        <span className="text-[9px] font-bold text-success uppercase tracking-[0.3em]">GATEWAY_ACTIVE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
