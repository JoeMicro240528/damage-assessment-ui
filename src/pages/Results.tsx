import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Download, BarChart3, Info, AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useLanguage } from "@/contexts/LanguageContext";
import ResultsHeader from "@/layout/Header/ResultsHeader";

const Results = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { t, isRTL } = useLanguage();

  return (
    <>
    {/* Header */}
      <ResultsHeader />
    {/* Header */}
    <div className="min-h-screen bg-gray-50/50 p-8 space-y-8 pb-5">
      
      <div className="container mx-auto px-4 space-y-8">
      {/* Page Title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {t('results.title')}
        </h1>
        <p className="text-lg text-gray-500">
          {t('results.description')}
        </p>
      </div>

      {/* Damage Statistics Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
             <BarChart3 className={cn("h-5 w-5 text-gray-500", isRTL && "rotate-180")} />
             {t('results.stats.title')}
          </h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Destroyed Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('results.stats.destroyed')}</CardTitle>
              <XCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-center py-4">
                {t('results.stats.buildings')} <span className="text-3xl">750</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span></span>
                <span className="text-red-500 font-medium">7%</span>
              </div>
              <Progress value={7} className="h-2 bg-red-100" indicatorClassName="bg-red-500" />
            </CardContent>
          </Card>

          {/* Major Damage Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('results.stats.major')}</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-center py-4">
                {t('results.stats.buildings')} <span className="text-3xl">980</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span></span>
                <span className="text-amber-500 font-medium">8%</span>
              </div>
              <Progress value={8} className="h-2 bg-amber-100" indicatorClassName="bg-amber-500" />
            </CardContent>
          </Card>

          {/* Minor Damage Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('results.stats.minor')}</CardTitle>
              <Info className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-center py-4">
                {t('results.stats.buildings')} <span className="text-3xl">1,850</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span></span>
                <span className="text-yellow-600 font-medium">10%</span>
              </div>
              <Progress value={10} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-600" />
            </CardContent>
          </Card>

          {/* No Damage Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('results.stats.none')}</CardTitle>
              <CheckCircle className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-center py-4">
                {t('results.stats.buildings')} <span className="text-3xl">8,420</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span></span>
                <span className="text-emerald-500 font-medium">70%</span>
              </div>
              <Progress value={70} className="h-2 bg-emerald-100" indicatorClassName="bg-emerald-500" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Visual Analysis Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {t('results.visual.title')} <span className="text-xs font-normal text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">AI</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { title: t('results.visual.preWar'), color: "bg-stone-200" },
            { title: t('results.visual.postWar'), color: "bg-stone-300" },
            { title: t('results.visual.mask'), color: "bg-black" },
            { title: t('results.visual.overlay'), color: "bg-stone-100" },
            { title: t('results.visual.heatmap'), color: "bg-indigo-900" },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-sm font-medium text-center text-gray-700">{item.title}</h3>
              <div className={cn("aspect-square rounded-lg shadow-sm w-full", item.color)}>
                {/* Placeholder for images */}
                <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Actions */}
      <div className=" bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-end gap-4">
          
          <div className="flex items-center gap-2">
             <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t('results.dateRange')}</span>
             <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className={cn("mr-2 h-4 w-4", isRTL && "ml-2 mr-0")} />
                  {date ? format(date, "PPP") : <span>{t('results.pickDate')}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                {/* Calendar component would go here, simplified for now */}
                <div className="p-4 text-sm">Calendar Placeholder</div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t('results.category')}</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('results.selectCategory')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('results.allCategories')}</SelectItem>
                <SelectItem value="destroyed">{t('results.stats.destroyed')}</SelectItem>
                <SelectItem value="major">{t('results.stats.major')}</SelectItem>
                <SelectItem value="minor">{t('results.stats.minor')}</SelectItem>
                <SelectItem value="none">{t('results.stats.none')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="bg-slate-700 hover:bg-slate-800 text-white">
            {t('results.export')} <Download className={cn("ml-2 h-4 w-4", isRTL && "mr-2 ml-0")} />
          </Button>
        </div>
      </div>
      
      {/* Spacer for fixed footer */}
      {/* <div className="h-20"></div> */}
      </div>
    </div>
    </>
  );
};

export default Results;
