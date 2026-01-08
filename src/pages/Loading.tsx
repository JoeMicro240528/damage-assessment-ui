import { Alert, AlertDescription } from "../components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "../components/ui/progress";
import { useLanguage } from "../contexts/LanguageContext";
import { Info, Satellite } from "lucide-react";
const Loading = ({ processingProgress }: { processingProgress: number }) => {
    const { t, isRTL } = useLanguage();
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl border border-[#DADCDF]">
                <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-sudan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Satellite className="h-8 w-8 text-sudan-blue animate-pulse" />
                    </div>
                    <CardTitle className="text-2xl">
                        {t('processing.title')}
                    </CardTitle>
                    <CardDescription>
                        {t('processing.description')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>{t('processing.progress')}</span>
                            <span>{Math.round(processingProgress)}%</span>
                        </div>
                        <Progress value={processingProgress} className="h-3 bg-[#F0EBE6]" />
                    </div>

                    <div className={`space-y-3 text-sm text-muted-foreground `}>
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className={`flex items-center space-x-2 ${!isRTL ? 'space-x-reverse' : ''} `}>
                                <div className={`w-2 h-2 rounded-full ${processingProgress > step * 20 ? 'bg-green-500' : 'bg-muted'
                                    }`}></div>
                                <span className={`${!isRTL ? 'mx-3' : ''}`}>{t(`processing.step${step}`)}</span>
                            </div>
                        ))}
                    </div>

                    <Alert className="border border-[#DADCDF]">
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                            {t('processing.timeNote')}
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
        </div>
    );
};

export default Loading;