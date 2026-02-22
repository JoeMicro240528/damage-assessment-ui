import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Upload,
    CheckCircle,
    AlertCircle,
    Loader2,
    FileImage,
    X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UploadedFile {
    file: File;
    preview: string;
    status: 'uploading' | 'success' | 'error';
}

export const FileUploadArea = ({
    type,
    uploadedFile,
    onDrop,
    onFileSelect,
    t,
    setPreWarImage,
    setPostWarImage,
}: {
    type: 'pre' | 'post';
    uploadedFile: UploadedFile | null;
    onDrop: (e: React.DragEvent) => void;
    onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    t: (key: string) => string;
    setPreWarImage?: (file: UploadedFile | null) => void;
    setPostWarImage?: (file: UploadedFile | null) => void;
}) => (
    <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
            <Label className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                {t(type === 'pre' ? 'analysis.preConflict' : 'analysis.postConflict')}
            </Label>
            {uploadedFile && (
                <span className="text-[10px] font-bold bg-success/10 text-success px-2 py-0.5 rounded-full border border-success/20">
                    READY
                </span>
            )}
        </div>

        <AnimatePresence mode="wait">
            {!uploadedFile ? (
                <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="group relative"
                >
                    <div
                        className="relative overflow-hidden border-2 border-dashed border-primary/30 rounded-[2rem] p-10 text-center hover:border-primary group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all cursor-pointer glass-panel"
                        onDrop={onDrop}
                        onDragOver={(e) => e.preventDefault()}
                        onClick={() => document.getElementById(`${type}-file-input`)?.click()}
                    >
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_4px_20px_rgba(16,185,129,0.15)] border border-primary/30 group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.3)] backdrop-blur-md transition-all duration-300"
                        >
                            <Upload className="h-10 w-10 text-primary transition-colors duration-300" />
                        </motion.div>

                        <p className="text-xl font-bold mb-3 group-hover:text-primary transition-colors tracking-tight">
                            {t('analysis.dragImage').split(' ')[0]} {t(type === 'pre' ? 'analysis.preConflict' : 'analysis.postConflict')} Image
                        </p>
                        <p className="text-sm text-muted-foreground font-medium mb-6">
                            {t('analysis.orClickBrowse')}
                        </p>

                        <div className="flex justify-center gap-3">
                            <span className="text-[10px] font-bold bg-muted text-muted-foreground px-2 py-1 rounded-md border border-border">PNG</span>
                            <span className="text-[10px] font-bold bg-muted text-muted-foreground px-2 py-1 rounded-md border border-border">JPG</span>
                            <span className="text-[10px] font-bold bg-muted text-muted-foreground px-2 py-1 rounded-md border border-border">MAX 10MB</span>
                        </div>
                    </div>
                    <input
                        id={`${type}-file-input`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={onFileSelect}
                    />
                </motion.div>
            ) : (
                <motion.div
                    key="filled"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="relative group rounded-[2rem] overflow-hidden glass-panel shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-white/10 p-2"
                >
                    <div className="aspect-[16/10] relative rounded-[1.5rem] overflow-hidden">
                        <img
                            src={uploadedFile.preview}
                            alt="Satellite imagery"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />

                        <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-4 right-4 h-10 w-10 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (type === 'pre' && setPreWarImage) setPreWarImage(null);
                                if (type === 'post' && setPostWarImage) setPostWarImage(null);
                            }}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="p-6 bg-transparent">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <FileImage className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-bold truncate max-w-[150px]">
                                    {uploadedFile.file.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {uploadedFile.status === 'uploading' && (
                                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                                )}
                                {uploadedFile.status === 'success' && (
                                    <div className="bg-success/10 text-success p-1 rounded-full">
                                        <CheckCircle className="h-4 w-4" />
                                    </div>
                                )}
                                {uploadedFile.status === 'error' && (
                                    <AlertCircle className="h-4 w-4 text-destructive" />
                                )}
                            </div>
                        </div>
                        <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest pl-11">
                            {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB • Processed
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);