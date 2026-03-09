import { Button } from "../../components/ui/button";
import { Satellite, Menu, X } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageToggle from "../../components/common/LanguageToggle";
import ThemeToggle from "../../components/common/ThemeToggle";
import { useNavigate } from "react-router";
import { useState } from "react";

const Navbar = () => {
    const { t, isRTL } = useLanguage();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm border-b border-border/10">
            {/* Animated Colorful Border Gradient at the bottom of Navbar */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-vibrant-orange to-vibrant-purple bg-[length:200%_auto] animate-gradient-slow opacity-70" />
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <div className="flex items-center space-x-2">
                            <img className="h-8 w-8" src="/images/flag.png" alt="sudan flag" />
                            <Satellite className="h-8 w-8 text-primary animate-pulse" />
                        </div>
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                            <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-vibrant-orange to-sudan-red animate-gradient-slow bg-[length:200%_auto]">
                                {isRTL ? 'تقييم الأضرار - السودان' : 'Sudan Damage Assessment'}
                            </span>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-none mt-1">
                                {isRTL ? 'Sudan Damage Assessment' : 'تقييم الأضرار - السودان'}
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={`hidden md:flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <div className="flex items-center space-x-6">
                            <a onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                {t('nav.features')}
                            </a>
                            <a onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                {t('nav.howItWorks')}
                            </a>
                            <a onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                {t('nav.regions')}
                            </a>
                            <a onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                {t('team.title')}
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                            <div className="h-4 w-[1px] bg-border mx-2" />
                            <LanguageToggle />
                            <Button
                                className="bg-sudan-red hover:bg-sudan-red/90 text-white shadow-lg shadow-sudan-red/20 transition-all active:scale-95"
                                onClick={() => navigate('/analysis')}
                            >
                                {t('nav.startAssessment')}
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur p-4 animate-in fade-in slide-in-from-top-5 duration-300">
                    <nav className="flex flex-col space-y-4">
                        <a
                            onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                            className="text-base font-medium text-muted-foreground p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            {t('nav.features')}
                        </a>
                        <a
                            onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                            className="text-base font-medium text-muted-foreground p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            {t('nav.howItWorks')}
                        </a>
                        <a
                            onClick={() => { document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                            className="text-base font-medium text-muted-foreground p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            {t('nav.regions')}
                        </a>
                        <a
                            onClick={() => { document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                            className="text-base font-medium text-muted-foreground p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            {t('team.title')}
                        </a>
                        <div className="border-t border-border/40 pt-4 flex flex-col space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <span className="text-sm font-medium text-muted-foreground">Language</span>
                                <LanguageToggle />
                            </div>
                            <Button
                                className="w-full bg-sudan-red hover:bg-sudan-red/90 text-white py-6 text-lg shadow-lg shadow-sudan-red/20"
                                onClick={() => navigate('/analysis')}
                            >
                                {t('nav.startAssessment')}
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;