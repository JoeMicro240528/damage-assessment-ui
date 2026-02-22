import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { FileUploadArea } from "@/components/common/FileUploadArea";
import { motion } from "framer-motion";
import type { UploadedFile } from "@/hooks/use-analysis";

interface ImageUploadProps {
    preWarImage: UploadedFile | null;
    postWarImage: UploadedFile | null;
    handleDrop: (e: React.DragEvent, type: 'pre' | 'post') => void;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>, type: 'pre' | 'post') => void;
    setCurrentStep: (step: number) => void;
    canProceedToStep2: boolean;
    setPreWarImage: (file: UploadedFile | null) => void;
    setPostWarImage: (file: UploadedFile | null) => void;
}

const ImageUpload = ({
    preWarImage,
    postWarImage,
    handleDrop,
    handleFileSelect,
    setCurrentStep,
    canProceedToStep2,
    setPreWarImage,
    setPostWarImage
}: ImageUploadProps) => {
    const { t, isRTL } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
        >
            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                        {t('analysis.uploadImages.title')}
                    </span>
                </div>
                <h2 className="text-4xl font-black tracking-tighter uppercase text-foreground">
                    {t('analysis.uploadImages.title')}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    {t('analysis.uploadImages.description')}
                </p>
            </div>

            <div className="relative group mt-8">
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-30" />
                <div className="grid md:grid-cols-2 gap-12 glass-panel-heavy rounded-[2rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl border-white/10">
                    <div className="absolute inset-0 bg-hud opacity-10 pointer-events-none" />

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="relative">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
                        <FileUploadArea
                            type="pre"
                            uploadedFile={preWarImage}
                            onDrop={(e) => handleDrop(e, 'pre')}
                            onFileSelect={(e) => handleFileSelect(e, 'pre')}
                            t={t}
                            setPreWarImage={setPreWarImage}
                            setPostWarImage={setPostWarImage}
                        />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="relative">
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
                        <FileUploadArea
                            type="post"
                            uploadedFile={postWarImage}
                            onDrop={(e) => handleDrop(e, 'post')}
                            onFileSelect={(e) => handleFileSelect(e, 'post')}
                            t={t}
                            setPreWarImage={setPreWarImage}
                            setPostWarImage={setPostWarImage}
                        />
                    </motion.div>
                </div>
            </div>

            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} pt-8`}>
                <Button
                    size="lg"
                    onClick={() => setCurrentStep(2)}
                    disabled={!canProceedToStep2}
                    className="h-14 px-12 bg-primary/90 hover:bg-primary text-primary-foreground font-black uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all group disabled:opacity-20 backdrop-blur-md glass-button border-none"
                >
                    <span>{t('analysis.continueToLocation')}</span>
                    <ArrowRight className={`ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </Button>
            </div>
        </motion.div>
    );
};

export default ImageUpload;
