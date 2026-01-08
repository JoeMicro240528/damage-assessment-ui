import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


interface ILocationInfoProps {
    sudanStates: { value: string; label: string }[];
    latitude: string;
    longitude: string;
    locationDescription: string;
    sudanState: string;
    conflictPeriod: string;
    setCurrentStep: (step: number) => void;
    setLatitude: (latitude: string) => void;
    setLongitude: (longitude: string) => void;
    setLocationDescription: (locationDescription: string) => void;
    setSudanState: (sudanState: string) => void;
    setConflictPeriod: (conflictPeriod: string) => void;
    conflictPeriods: { value: string; label: string }[];
    canProceedToStep3: string | false;
}

const LocationInfo = ({
    sudanStates,
    latitude,
    longitude,
    locationDescription,
    sudanState,
    conflictPeriod,
    setCurrentStep,
    setConflictPeriod,
    setLatitude,
    setLongitude,
    setLocationDescription,
    setSudanState,
    conflictPeriods,
    canProceedToStep3
}: ILocationInfoProps) => {
    const { t, isRTL } = useLanguage();
    return (
        <Card className="border border-[#ebe9e5] p-2">
            <CardHeader>
                <CardTitle className={`flex items-center border border-[#ebe9e5] p-2 space-x-2 ${!isRTL ? 'space-x-reverse' : ''}`}>
                    <MapPin className="h-5 w-5" />
                    <span>{t('location.title')}</span>
                </CardTitle>
                <CardDescription>
                    {t('location.description')}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4 ">
                    <div className="space-y-2">
                        <Label htmlFor="sudan-state">{t('location.sudanState')}</Label>
                        <Select value={sudanState} onValueChange={setSudanState} >
                            <SelectTrigger className="border border-[#ebe9e5] p-2 focus:ring-[#0059B3]">
                                <SelectValue className="" placeholder={t('location.selectState')} />
                            </SelectTrigger>
                            <SelectContent className="border border-[#ebe9e5] p-2 position-absolute z-50 bg-[#FFFFFF]">
                                {sudanStates.map((state) => (
                                    <SelectItem key={state.value} value={state.value}>
                                        {state.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="conflict-period">{t('location.conflictPeriod')}</Label>
                        <Select value={conflictPeriod} onValueChange={setConflictPeriod}>
                            <SelectTrigger className="border border-[#ebe9e5] p-2  focus:ring-[#0059B3]">
                                <SelectValue className="border border-[#ebe9e5] p-2" placeholder={t('location.selectPeriod')} />
                            </SelectTrigger>
                            <SelectContent className="border border-[#ebe9e5] p-2 position-absolute z-50 bg-[#FFFFFF]">
                                {conflictPeriods.map((period) => (
                                    <SelectItem key={period.value} value={period.value}>
                                        {period.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="latitude">{t('location.latitude')}</Label>
                        <Input
                            className="border border-[#ebe9e5] p-2 focus:ring-[#0059B3]"
                            id="latitude"
                            type="number"
                            step="any"
                            placeholder={!isRTL ? "مثال: 15.5007" : "e.g., 15.5007"}
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            {!isRTL
                                ? 'صيغة الدرجات العشرية (مثال: 15.5007)'
                                : 'Decimal degrees format (e.g., 15.5007)'
                            }
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="longitude">{t('location.longitude')}</Label>
                        <Input
                            className="border border-[#ebe9e5] p-2 focus:ring-[#0059B3]"
                            id="longitude"
                            type="number"
                            step="any"
                            placeholder={!isRTL ? "مثال: 32.5599" : "e.g., 32.5599"}
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            {!isRTL
                                ? 'صيغة الدرجات العشرية (مثال: 32.5599)'
                                : 'Decimal degrees format (e.g., 32.5599)'
                            }
                        </p>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">{t('location.descriptionLabel')}</Label>
                    <Textarea
                        className="border border-[#ebe9e5] p-2 focus:ring-[#0059B3]"
                        id="description"
                        placeholder={t('location.descriptionPlaceholder')}
                        value={locationDescription}
                        onChange={(e) => setLocationDescription(e.target.value)}
                        rows={3}
                    />
                    <p className="text-xs text-muted-foreground">
                        {!isRTL
                            ? 'اشمل المدينة والمنطقة والبلد وأي معالم أو أسماء أحياء ذات صلة.'
                            : 'Include city, region, country, and any relevant landmarks or district names.'
                        }
                    </p>
                </div>

                <Alert className="border border-[#ebe9e5]">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        {!isRTL
                            ? 'معلومات الموقع الدقيقة تساعد في تحسين التحليل وتمكن من سياق أفضل للنتائج.'
                            : 'Accurate location information helps improve the analysis and enables better contextualization of results.'
                        }
                    </AlertDescription>
                </Alert>

                <div className="flex justify-between">
                    <Button
                        className="px-8  hover:bg-[#D41111] border-[#ebe9e5] cursor-pointer hover:text-white transition-colors duration-300 ease-in-out"
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                    >
                        {t('location.backToImages')}
                    </Button>
                    <Button
                        onClick={() => setCurrentStep(3)}
                        disabled={!canProceedToStep3}
                        className="px-8 bg-sudan-blue hover:bg-sudan-blue/90 cursor-pointer text-white"
                    >
                        {t('location.reviewAnalyze')}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default LocationInfo;