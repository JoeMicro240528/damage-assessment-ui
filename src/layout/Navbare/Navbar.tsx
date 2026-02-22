import { Button } from "../../components/ui/button";
import { Satellite } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageToggle from "../../components/common/LanguageToggle";
import ThemeToggle from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router";

const Navbar = () => {
    const { t, isRTL } = useLanguage();
    const navigate = useNavigate();

    const sections = [
        { id: 'features', label: t('nav.features') },
        { id: 'how-it-works', label: t('nav.howItWorks') },
        { id: 'regions', label: t('nav.regions') },
        { id: 'team', label: t('team.title') }
    ];

    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-300">
            {/* Top Row - Primary Navigation */}
            <div className="w-full border-b border-white/5 bg-background/90 backdrop-blur-xl h-16 relative">
                <div className="absolute inset-x-0 bottom-0 h-[px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
                <div className="container mx-auto max-w-7xl px-4 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('/')}>
                            <div className="relative">
                                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="relative flex items-center justify-center w-10 h-10 border border-primary/30 rounded-lg bg-primary/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-hud animate-pulse" />
                                    <Satellite className="h-5 w-5 text-primary" />
                                </div>
                            </div>
                            <div className={`hidden sm:block ${isRTL ? 'text-right' : 'text-left'}`}>
                                <span className="text-sm font-black tracking-[0.2em] text-foreground uppercase block leading-none mb-1">
                                    {t('nav.title')}
                                </span>
                                <div className="flex items-center gap-2">
                                    <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">
                                        Active Matrix V1.0
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <ThemeToggle />
                            <div className="px-2 py-1 rounded border border-white/10 bg-white/5 hidden sm:block">
                                <LanguageToggle />
                            </div>
                            <Button
                                onClick={() => navigate('/analysis')}
                                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-[10px] font-black uppercase tracking-[0.2em] h-9 px-6 rounded-none transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                            >
                                {t('nav.startAssessment')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row - Section Navigation */}
            <div className="w-full border-b border-white/5 bg-background/50 backdrop-blur-md h-10 overflow-x-auto no-scrollbar">
                <div className="container mx-auto max-w-7xl px-4 h-full">
                    <nav className={`flex items-center h-full gap-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-center lg:justify-start`}>
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all duration-300 relative group flex items-center gap-2 whitespace-nowrap"
                            >
                                <div className="w-1 h-1 bg-primary/30 group-hover:bg-primary transition-colors" />
                                {item.label}
                                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;