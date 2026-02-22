import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Satellite, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isRTL } = useLanguage();

    useEffect(() => {
        console.error(
            "404 Error: Accessing non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-background -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square -z-10 blur-[150px] opacity-10 bg-destructive/30 rounded-full" />
            <div className="absolute inset-0 animate-grid-flow opacity-10 -z-15" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg text-center relative"
            >
                {/* HUD Corners */}
                <div className="absolute -top-12 -left-12 w-16 h-16 border-t-2 border-l-2 border-white/5" />
                <div className="absolute -bottom-12 -right-12 w-16 h-16 border-b-2 border-r-2 border-white/5" />

                <div className="space-y-8 relative z-10">
                    <div className="relative inline-block">
                        <motion.div
                            animate={{
                                x: [0, -2, 2, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                            className="text-[120px] font-black tracking-tighter text-foreground leading-none"
                        >
                            404
                        </motion.div>
                        <div className="absolute -inset-4 bg-destructive/20 blur-3xl opacity-20 -z-10" />
                    </div>

                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-destructive/30 bg-destructive/5 text-destructive">
                            <Satellite className="h-3 w-3 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">SIGNAL_LOST</span>
                        </div>
                        <h2 className="text-3xl font-black tracking-tight uppercase text-foreground">
                            Target Not Found
                        </h2>
                        <p className="text-muted-foreground font-medium max-w-sm mx-auto leading-relaxed">
                            The coordinates you are looking for do not exist in the active matrix. The link may have been severed or the sector is restricted.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Button
                            variant="ghost"
                            onClick={() => navigate(-1)}
                            className="h-14 px-8 border border-white/10 text-muted-foreground font-black uppercase tracking-widest rounded-none hover:bg-white/5 gap-3 group"
                        >
                            <ArrowLeft className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                            Back to Safety
                        </Button>
                        <Button
                            onClick={() => navigate('/')}
                            className="h-14 px-10 bg-primary text-primary-foreground font-black uppercase tracking-widest rounded-none hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] gap-3 border-none"
                        >
                            <Home className="h-4 w-4" />
                            Return Home
                        </Button>
                    </div>

                    <div className="pt-12">
                        <p className="text-[9px] font-bold text-muted-foreground/30 uppercase tracking-[0.4em]">
                            SYSTEM_ERROR_0x404 • COORDINATE_MISMATCH
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
