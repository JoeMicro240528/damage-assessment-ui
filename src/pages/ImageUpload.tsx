
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    Upload,
    Info,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { FileUploadArea } from "@/components/common/FileUploadArea";

interface ImageUploadProps {
    preWarImage: any;
    postWarImage: any;
    handleDrop: (e: React.DragEvent, type: 'pre' | 'post') => void;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>, type: 'pre' | 'post') => void;
    setCurrentStep: (step: number) => void;
    canProceedToStep2: boolean;
    setPreWarImage: (file: any) => void;
    setPostWarImage: (file: any) => void;
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
        <Card className="border border-[#ebe9e5]">
            <CardHeader >
                <CardTitle className={`flex items-center space-x-2 ${!isRTL ? 'space-x-reverse' : ''}`}>
                    <Upload className="h-5 w-5" />
                    <span>{t('analysis.uploadImages.title')}</span>
                </CardTitle>
                <CardDescription>
                    {t('analysis.uploadImages.description')}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <Alert className="border border-[#ebe9e5]">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        {!isRTL
                            ? 'للحصول على أفضل النتائج، تأكد من أن كلا الصورتين تغطيان نفس المنطقة الجغرافية ولهما دقة مماثلة.'
                            : 'For best results, ensure both images cover the same geographical area and have similar resolution. Images should be in common formats (JPG, PNG) and under 10MB each.'
                        }
                    </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-8">
                    <FileUploadArea
                        type="pre"
                        uploadedFile={preWarImage}
                        onDrop={(e) => handleDrop(e, 'pre')}
                        onFileSelect={(e) => handleFileSelect(e, 'pre')}
                        t={t}
                        isRTL={!isRTL}
                        setPreWarImage={setPreWarImage}
                        setPostWarImage={setPostWarImage}

                    />

                    <FileUploadArea
                        type="post"
                        uploadedFile={postWarImage}
                        onDrop={(e) => handleDrop(e, 'post')}
                        onFileSelect={(e) => handleFileSelect(e, 'post')}
                        t={t}
                        isRTL={!isRTL}
                        setPreWarImage={setPreWarImage}
                        setPostWarImage={setPostWarImage}
                    />
                </div>

                <div className={`flex ${!isRTL ? 'justify-start' : 'justify-end'}`}>
                    <Button
                        onClick={() => setCurrentStep(2)}
                        disabled={!canProceedToStep2}
                        className="px-8 bg-sudan-blue text-white cursor-pointer hover:bg-sudan-blue/90"
                    >
                        {t('analysis.continueToLocation')}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ImageUpload;
