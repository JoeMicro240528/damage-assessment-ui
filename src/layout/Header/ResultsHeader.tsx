import { Button } from "@/components/ui/button";
import { Satellite, ArrowLeft, CheckCircle, Home } from "lucide-react";
import LanguageToggle from "../../components/common/LanguageToggle";
import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ResultsHeader = () => {
    const navigate = useNavigate();
    const { t, isRTL } = useLanguage();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
            <div className="container mx-auto max-w-7xl px-4 h-16">
                <div className="flex h-full items-center justify-between gap-4">

                    {/* Branding */}
                    <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('/')}>
                        <div className="relative">
                            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                            <div className="relative flex items-center justify-center w-10 h-10 border border-primary/30 rounded-lg bg-primary/5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-hud animate-pulse" />
                                <Satellite className="h-5 w-5 text-primary" />
                            </div>
                        </div>

                        <div className={cn("hidden sm:flex flex-col", isRTL ? 'text-right' : 'text-left')}>
                            <span className="text-[11px] font-black tracking-[0.2em] text-foreground uppercase leading-none mb-1">
                                {!isRTL ? "تقييم الأضرار" : "Damage Assessment"}
                            </span>
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                                <span className="text-[9px] font-bold text-primary/70 uppercase tracking-widest leading-none">
                                    REPORT_V2.4 • SUDAN
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="hidden md:flex flex-1 justify-center"
                    >
                        <div className="bg-primary/5 border border-primary/20 px-4 py-2 rounded-none flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                                {t('results.success')}
                            </span>
                        </div>
                    </motion.div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 px-2 border-r border-white/10 mr-2">
                            <LanguageToggle />
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate('/')}
                            className="h-10 px-5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:bg-white/5 hover:text-foreground transition-all rounded-none gap-3 group"
                        >
                            <span className="hidden lg:inline">{t('nav.backToHome')}</span>
                            <Home className="h-4 w-4" />
                            <ArrowLeft className={cn("h-4 w-4 transition-transform group-hover:-translate-x-1", isRTL ? 'rotate-180 group-hover:translate-x-1' : '')} />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ResultsHeader;
