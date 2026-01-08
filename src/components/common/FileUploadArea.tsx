import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Upload,
    CheckCircle,
    AlertCircle,
    Loader2,
    FileImage,
} from "lucide-react";

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
    isRTL,
    setPreWarImage,
    setPostWarImage
}: {
    type: 'pre' | 'post';
    uploadedFile: UploadedFile | null;
    onDrop: (e: React.DragEvent) => void;
    onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    t: (key: string) => string;
    isRTL: boolean;
    setPreWarImage?: (file: UploadedFile | null) => void;
    setPostWarImage?: (file: UploadedFile | null) => void;
}) => (
    <div className="space-y-4 ">
        <Label className="text-base font-medium">
            {t(type === 'pre' ? 'analysis.preConflict' : 'analysis.postConflict')}
        </Label>

        {!uploadedFile ? (
            <div
                className="border-2 my-1 border-dashed border-[#b3b5b4] rounded-lg p-8 text-center hover:border-sudan-blue/50 transition-colors cursor-pointer"
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById(`${type}-file-input`)?.click()}
            >
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">
                    {t('analysis.dragImage').replace('{type}', type === 'pre' ? t('analysis.preConflict') : t('analysis.postConflict'))}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                    {t('analysis.orClickBrowse')}
                </p>
                <p className="text-xs text-muted-foreground">
                    {t('analysis.supportedFormats')}
                </p>
                <input
                    id={`${type}-file-input`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onFileSelect}
                />
            </div>
        ) : (
            <div className="relative">
                <div className="border rounded-lg overflow-hidden cursor-pointer">
                    <img
                        src={uploadedFile.preview}
                        alt={`${type === 'pre' ? 'Pre-conflict' : 'Post-conflict'} satellite image`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-muted/30">
                        <div className="flex items-center justify-between">
                            <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                                <FileImage className="h-4 w-4" />
                                <span className="text-sm font-medium">{uploadedFile.file.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                {uploadedFile.status === 'uploading' && (
                                    <Loader2 className="h-4 w-4 animate-spin text-sudan-blue" />
                                )}
                                {uploadedFile.status === 'success' && (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                )}
                                {uploadedFile.status === 'error' && (
                                    <AlertCircle className="h-4 w-4 text-red-500" />
                                )}
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className={`absolute top-2 text-sudan-blue border-[#777777] hover:border-[#0059B3] hover:bg-[#0059B3]/70 hover:text-[#FFFFFF] transition-colors cursor-pointer ${isRTL ? 'left-2' : 'right-2'}`}
                    onClick={() => {
                        if (type === 'pre' && setPreWarImage) setPreWarImage(null);
                        if (type === 'post' && setPostWarImage) setPostWarImage(null);
                    }}
                >
                    {t('analysis.change')}
                </Button>
            </div>
        )}
    </div>
);