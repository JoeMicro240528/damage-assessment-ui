import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { HeroSlider } from "@/components/hero/HeroSlider";

/**
 * HeroSection Component
 * 
 * The main landing section of the application.
 * Updated to remove the "Learn More" button and shrink the title font size.
 */
export default function HeroSection() {
    const { t, isRTL } = useLanguage();
    const navigate = useNavigate();

    return (
        <section className="relative py-16 lg:py-20 overflow-hidden -mt-[1px]">
            {/* Background Decorative Elements - Colorful & Dynamic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="blob blob-1 w-[50%] h-[50%] top-[-10%] left-[-10%] opacity-20" />
                <div className="blob blob-2 w-[50%] h-[50%] bottom-[-10%] right-[-10%] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className={`flex flex-col space-y-8 animate-reveal-up ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="space-y-4">
                            <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest animate-pulse">
                                {t('hero.aiTechnology')}
                            </Badge>

                            <h1 className="text-4xl lg:text-7xl font-black leading-[1.05] tracking-tighter">
                                <span className="block mb-2">
                                    {isRTL ? 'تقييم أضرار المباني' : 'Building Damage'}
                                </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-vibrant-orange to-vibrant-purple bg-[length:200%_auto] animate-gradient-slow">
                                    {isRTL ? 'داخل السودان' : 'Assessment in Sudan'}
                                </span>
                            </h1>

                            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl font-medium leading-relaxed">
                                {t('hero.description')}
                            </p>
                        </div>

                        <div className={`flex flex-wrap gap-4 pt-4 justify-center lg:justify-start ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                            <Button
                                size="lg"
                                onClick={() => navigate('/analysis')}
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 group"
                            >
                                {t('hero.cta')}
                                <ArrowRight className={cn("ml-2 h-5 w-5 transition-transform group-hover:translate-x-1", isRTL && "mr-2 ml-0 rotate-180 group-hover:-translate-x-1")} />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Visual Elements (Amazing Slider) */}
                    <HeroSlider />

                </div>
            </div>
        </section>
    );
}