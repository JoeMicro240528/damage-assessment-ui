import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, BarChart3, Info, AlertTriangle, XCircle, CheckCircle, Map as MapIcon, Layers, Maximize2, Satellite } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import ResultsHeader from "@/layout/Header/ResultsHeader";
import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Results = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const stats = [
    {
      title: t('results.stats.destroyed'),
      value: "750",
      percentage: 7,
      color: "text-destructive",
      icon: <XCircle className="h-5 w-5" />,
      bg: "bg-destructive/10 border-destructive/30"
    },
    {
      title: t('results.stats.major'),
      value: "980",
      percentage: 24,
      color: "text-warning",
      icon: <AlertTriangle className="h-5 w-5" />,
      bg: "bg-warning/10 border-warning/30"
    },
    {
      title: t('results.stats.minor'),
      value: "1,850",
      percentage: 42,
      color: "text-accent",
      icon: <Info className="h-5 w-5" />,
      bg: "bg-accent/10 border-accent/30"
    },
    {
      title: t('results.stats.none'),
      value: "8,420",
      percentage: 75,
      color: "text-primary",
      icon: <CheckCircle className="h-5 w-5" />,
      bg: "bg-primary/10 border-primary/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <ResultsHeader />

      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* HUD Header Section */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/5 pb-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  {t('results.title')} • ANALYTIC_RESPONSE
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                {t('results.title')}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl font-medium leading-relaxed">
                {t('results.description')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="h-12 px-6 rounded-full border border-white/20 glass-button transition-all duration-300 gap-3 font-black uppercase tracking-widest text-[10px] hover:bg-white/10">
                <Download className="h-4 w-4" />
                {t('results.export')}
              </Button>
              <Button className="h-12 px-8 bg-primary/90 text-primary-foreground font-black uppercase tracking-widest rounded-full border-none hover:bg-primary glass-button shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all gap-3">
                <Maximize2 className="h-4 w-4" />
                DASHBOARD_LIVE
              </Button>
            </div>
          </motion.div>

          {/* Precision Controls */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 p-6 glass-panel rounded-2xl relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
            <div className="flex items-center gap-3 px-4 border-r border-white/10">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">CONTROLS</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 flex-1">
              <Select defaultValue="all">
                <SelectTrigger className="w-[200px] h-11 border-white/20 glass-button rounded-full font-bold uppercase tracking-widest text-[10px] focus:ring-primary/30 transition-all duration-300">
                  <SelectValue placeholder={t('results.selectCategory')} />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-white/10 bg-card/90 backdrop-blur-xl text-foreground">
                  <SelectItem value="all" className="uppercase text-[10px] font-bold">{t('results.allCategories')}</SelectItem>
                  <SelectItem value="destroyed" className="uppercase text-[10px] font-bold">{t('results.stats.destroyed')}</SelectItem>
                  <SelectItem value="major" className="uppercase text-[10px] font-bold">{t('results.stats.major')}</SelectItem>
                  <SelectItem value="minor" className="uppercase text-[10px] font-bold">{t('results.stats.minor')}</SelectItem>
                  <SelectItem value="none" className="uppercase text-[10px] font-bold">{t('results.stats.none')}</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-4 px-4 py-2 border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                <Satellite className="h-3 w-3 text-primary animate-pulse" />
                MATRIX_COORDS: 15.5007° N, 32.5599° E
              </div>
            </div>
          </motion.div>

          {/* Statistics HUD Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="rounded-[2rem] border-white/10 glass-panel p-8 space-y-6 relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/10 group-hover:border-primary/50 rounded-tr-[2rem] transition-colors duration-500" />

                  <div className="flex items-center justify-between">
                    <div className={cn("p-2 border", stat.bg)}>
                      {stat.icon}
                    </div>
                    <span className={cn("text-[32px] font-black tracking-tighter leading-none tabular-nums", stat.color)}>
                      {stat.value}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        {stat.title}
                      </p>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold uppercase text-muted-foreground/50">Intensity Matrix</span>
                        <span className={cn("text-xs font-black", stat.color)}>{stat.percentage}%</span>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={cn("h-full", stat.color.replace('text-', 'bg-'))}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Visual Analysis Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
              <div className="flex items-center gap-4">
                <div className="p-2 border border-primary/30 bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-widest">
                  {t('results.visual.title')}
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-success/10 text-success border border-success/30 rounded-none px-4 py-1.5 font-bold uppercase tracking-widest text-[10px]">
                  AI_CONFIDENCE: 94.2%
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { title: t('results.visual.preWar'), icon: <Satellite className="h-4 w-4" />, label: "DATA_01_PRE" },
                { title: t('results.visual.postWar'), icon: <Satellite className="h-4 w-4" />, label: "DATA_02_POST" },
                { title: t('results.visual.mask'), icon: <Maximize2 className="h-4 w-4" />, label: "SCAN_MASK" },
                { title: t('results.visual.overlay'), icon: <Layers className="h-4 w-4" />, label: "MAP_LAYERS" },
                { title: t('results.visual.heatmap'), icon: <AlertTriangle className="h-4 w-4" />, label: "DAMAGE_HEAT" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="space-y-4 group"
                >
                  <div className="relative aspect-square glass-panel rounded-2xl overflow-hidden group-hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-hud opacity-5 pointer-events-none group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/5 text-[100px] font-black group-hover:text-primary/10 transition-colors">
                        {index + 1}
                      </div>
                    </div>
                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 blur-sm animate-[scan_4s_infinite] pointer-events-none opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Regional Summary HUD */}
          <motion.div variants={itemVariants}>
            <div className="relative glass-panel-heavy rounded-[3rem] overflow-hidden shadow-2xl border-white/10">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 space-y-8">
                  <div className="h-16 w-16 glass-button rounded-2xl flex items-center justify-center text-primary shadow-lg border-[0.5px] border-primary/30">
                    <MapIcon className="h-8 w-8" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight">
                      SPATIAL_ANALYSIS_MOD_4
                    </h2>
                    <p className="text-muted-foreground text-lg font-medium leading-relaxed opacity-80">
                      Current assessment indicates a 40.2% aggregate damage index across target sectors. Neural network identification has prioritized residential clusters for immediate relief matrix integration.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="h-12 px-8 bg-primary/90 text-primary-foreground font-black uppercase tracking-widest rounded-full glass-button hover:bg-primary hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all duration-300 border-none">
                      EXECUTE_MAP_OVERLAY
                    </Button>
                    <Button variant="outline" className="h-12 px-8 border border-white/20 text-foreground font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white/10 glass-button transition-all duration-300">
                      REQUEST_HUMAN_VERIFICATION
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-[400px] bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1596462502278-27bfad45f096?w=800&q=80')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
                  <div className="relative h-full flex items-center justify-center p-12">
                    <div className="glass-panel-heavy rounded-[2rem] p-10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-[2rem]" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-[2rem]" />
                      <div className="text-center space-y-4">
                        <div className="text-7xl font-black text-primary tracking-tighter shadow-primary shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                          40.2<span className="text-3xl">%</span>
                        </div>
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-foreground">DAMAGE_THRESHOLD_ALPHA</p>
                      </div>
                    </div>
                  </div>
                  {/* HUD Decoration */}
                  <div className="absolute bottom-6 right-6 font-mono text-[8px] text-primary/40 uppercase tracking-widest text-right">
                    SATELLITE_LINK_ESTABLISHED<br />
                    ENCRYPTED_STREAM_V4<br />
                    LAT: 15.5007 / LON: 32.5599
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <footer className="py-12 border-t border-white/5 mt-auto bg-card/20 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-50">
          SUDAN_ANALYSIS_PLATFORM_V2.4 • SYSTEM_ID_B09 • SECURING_EVIDENCE
        </p>
      </footer>

      <style>{`
        @keyframes scan {
            from { transform: translateY(0); }
            to { transform: translateY(300px); }
        }
      `}</style>
    </div>
  );
};

export default Results;
