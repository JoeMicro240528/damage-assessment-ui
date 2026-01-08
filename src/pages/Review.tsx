import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface IReviewProps {
    sudanStates: { value: string; label: string }[];
    preWarImage: { file: File; preview: string } | null;
    postWarImage: { file: File; preview: string } | null;
    conflictPeriods: { value: string; label: string }[];
    handleStartAnalysis: () => void;
    latitude: string;
    longitude: string;
    locationDescription: string;
    sudanState: string;
    conflictPeriod: string;
    setCurrentStep: (step: number) => void;
}

const Review = ({ sudanStates, preWarImage, postWarImage, conflictPeriods, handleStartAnalysis, latitude, longitude, locationDescription, sudanState, conflictPeriod, setCurrentStep }: IReviewProps) => {
    const { t, isRTL } = useLanguage();
    return (
        <div>
            <Card className="border border-[#ebe9e5]">
                <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${!isRTL ? 'space-x-reverse' : ''}`}>
                        <CheckCircle className="h-5 w-5" />
                        <span>{t('review.title')}</span>
                    </CardTitle>
                    <CardDescription>
                        {t('review.description')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Image Preview */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h4 className="font-medium">{t('review.preConflictImage')}</h4>
                            {preWarImage && (
                                <div className="border border-[#ebe9e5] rounded-lg overflow-hidden">
                                    <img
                                        src={preWarImage.preview}
                                        alt="Pre-conflict satellite image"
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="p-2 bg-muted/30 text-xs bg-[#FCFCFB]">
                                        {preWarImage.file.name}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-medium">{t('review.postConflictImage')}</h4>
                            {postWarImage && (
                                <div className="border border-[#ebe9e5] rounded-lg overflow-hidden">
                                    <img
                                        src={postWarImage.preview}
                                        alt="Post-conflict satellite image"
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="p-2 bg-muted/30 text-xs bg-[#FCFCFB]">
                                        {postWarImage.file.name}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Location Summary */}
                    <div className="bg-muted/30 rounded-lg p-4 bg-[#FCFCFB]">
                        <h4 className="font-medium mb-2">{t('review.locationSummary')}</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-muted-foreground">{t('review.state')}</span>
                                <span className={!isRTL ? 'mr-2' : 'ml-2'}>
                                    {sudanStates.find(s => s.value === sudanState)?.label}
                                </span>
                            </div>
                            <div>
                                <span className="text-muted-foreground">{t('review.period')}</span>
                                <span className={!isRTL ? 'mr-2' : 'ml-2'}>
                                    {conflictPeriods.find(p => p.value === conflictPeriod)?.label}
                                </span>
                            </div>
                            <div>
                                <span className="text-muted-foreground">{t('review.coordinates')}</span>
                                <span className={!isRTL ? 'mr-2' : 'ml-2'}>{latitude}, {longitude}</span>
                            </div>
                            <div>
                                <span className="text-muted-foreground">{t('review.descriptionLabel')}</span>
                                <span className={!isRTL ? 'mr-2' : 'ml-2'}>{locationDescription}</span>
                            </div>
                        </div>
                    </div>

                    <Alert className="border border-[#ebe9e5]">
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                            {!isRTL
                                ? 'سيقوم التحليل الذكي بمقارنة صورك لتحديد أضرار المباني وإنتاج تقرير شامل. تستغرق هذه العملية عادة 2-3 دقائق.'
                                : 'The AI analysis will compare your images to identify building damage and generate a comprehensive report. This process typically takes 2-3 minutes.'
                            }
                        </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentStep(2)}
                            className="px-8 border-[#ebe9e5] text-black hover:bg-[#D41111] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"
                        >
                            {t('review.backToLocation')}
                        </Button>
                        <Button
                            onClick={handleStartAnalysis}
                            className="px-8 bg-sudan-blue hover:bg-sudan-blue/90 text-white cursor-pointer"
                        >
                            {t('review.startAnalysis')}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Review;