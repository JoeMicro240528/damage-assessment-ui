import { Button } from "../../components/ui/button";
import { ArrowRight, Play, Satellite } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function HeroSection() {
    const { t, isRTL } = useLanguage();
    const navigate = useNavigate();

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 px-4">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 bg-background -z-20" />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full -z-10" />
            <div className="absolute inset-0 animate-grid-flow opacity-20 -z-15" />

            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5"
                            >
                                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                                    {t('hero.aiTechnology')}
                                </span>
                            </motion.div>
                            <h1 className={`text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-foreground ${isRTL ? 'text-right' : 'text-left'} drop-shadow-lg`}>
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.05,
                                            },
                                        },
                                    }}
                                >
                                    {t('hero.title').split('').map((char, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, display: "none", y: 20 },
                                                visible: { opacity: 1, display: "inline-block", y: 0 },
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                                    {t('hero.titleHighlight')}
                                </span>
                            </h1>
                            <p className={`text-lg text-muted-foreground/80 dark:text-muted-foreground max-w-lg leading-relaxed font-medium ${isRTL ? 'text-right ml-auto' : 'text-left'}`}>
                                {t('hero.description')}
                            </p>
                        </div>

                        <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end md:justify-start' : 'justify-start'}`}>
                            <Button
                                size="lg"
                                onClick={() => navigate('/analysis')}
                                className="h-14 px-8 bg-primary/90 hover:bg-primary text-primary-foreground font-black uppercase tracking-widest rounded-full hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 group border-none backdrop-blur-md"
                            >
                                {t('hero.startAssessment')}
                                <ArrowRight className={`ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 border-white/20 dark:border-white/10 text-foreground font-black uppercase tracking-widest rounded-full hover:bg-white/10 glass-button transition-all duration-300 backdrop-blur-md"
                            >
                                <Play className={`mr-2 h-4 w-4 fill-current ${isRTL ? 'ml-2 mr-0' : ''}`} />
                                {t('hero.watchDemo')}
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                            {[
                                { label: t('hero.realTimeAnalysis'), val: '0.04s' },
                                { label: t('hero.highAccuracy'), val: '99.2%' },
                                { label: t('hero.liveData'), val: 'Active' }
                            ].map((stat, i) => (
                                <div key={i} className={`space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                                    <p className="text-xl font-black text-foreground tracking-tight">{stat.val}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* HUD Visualistion */}
                        <div className="relative aspect-square max-w-[500px] mx-auto">
                            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-4 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-8 border border-accent/10 rounded-full animate-[spin_30s_linear_infinite]" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[70%] h-[70%] bg-primary/5 rounded-none border border-primary/20 overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548123304-9540889270bb?w=800&q=80')] bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                                    {/* Scanning Line */}
                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 right-0 h-[2px] bg-primary/50 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"
                                    />

                                    {/* AI HUD Markers */}
                                    <div className="absolute top-1/4 left-1/4 h-8 w-8 border-t border-l border-primary/80" />
                                    <div className="absolute top-1/4 right-1/4 h-8 w-8 border-t border-r border-primary/80" />
                                    <div className="absolute bottom-1/4 left-1/4 h-8 w-8 border-b border-l border-primary/80" />
                                    <div className="absolute bottom-1/4 right-1/4 h-8 w-8 border-b border-r border-primary/80" />

                                    <div className="absolute inset-0 bg-hud opacity-20 pointer-events-none" />
                                </div>
                            </div>

                            {/* Floating Stats Card - Glassmorphism */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className={`absolute p-4 glass-panel rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20 z-20 ${isRTL ? '-left-6 top-1/4' : '-right-6 top-1/4'}`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-10 w-10 rounded-lg border border-primary/40 bg-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                        <Satellite className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest leading-none mb-1">ST-88 LINK</p>
                                        <p className="text-xs font-bold text-foreground leading-none">SECURE PASS</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-3">
                                    <motion.div
                                        animate={{ width: ['0%', '100%'] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-full bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
