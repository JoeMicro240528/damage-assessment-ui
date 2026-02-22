import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Shield,
  Eye,
  FileText,
  Heart,
  ArrowRight,
  Target,
  Building,
  Zap,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../layout/Navbare/Navbar";
import Footer from "../layout/Footer.tsx/Footer";
import HeroSection from "../layout/Hero/HeroSection";
import { useNavigate } from "react-router";
import { motion, type Variants } from "framer-motion";

const Index = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      },
    }),
  };

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      titleKey: "features.aiAnalysis.title",
      descriptionKey: "features.aiAnalysis.description",
      color: "primary",
      id: "FEATURE_01"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      titleKey: "features.visualComparison.title",
      descriptionKey: "features.visualComparison.description",
      color: "primary",
      id: "FEATURE_02"
    },
    {
      icon: <Building className="h-6 w-6" />,
      titleKey: "features.damageClassification.title",
      descriptionKey: "features.damageClassification.description",
      color: "accent",
      id: "FEATURE_03"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      titleKey: "features.detailedReports.title",
      descriptionKey: "features.detailedReports.description",
      color: "primary",
      id: "FEATURE_04"
    },
  ];

  const useCases = [
    {
      icon: <Heart className="h-6 w-6" />,
      titleKey: "useCases.humanitarian.title",
      descriptionKey: "useCases.humanitarian.description",
      label: "HUMAN_LOGISTICS"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titleKey: "useCases.government.title",
      descriptionKey: "useCases.government.description",
      label: "SECURE_ADVISORY"
    },
    {
      icon: <Building className="h-6 w-6" />,
      titleKey: "useCases.reconstruction.title",
      descriptionKey: "useCases.reconstruction.description",
      label: "INFRA_RESTORE"
    },
  ];

  const teamMembers = [
    {
      nameKey: "team.member1.name",
      roleKey: "team.member1.role",
      descriptionKey: "team.member1.description",
      image: "/images/mohannd.JPG",
    },
    {
      nameKey: "team.member2.name",
      roleKey: "team.member2.role",
      descriptionKey: "team.member2.description",
      image: "/images/noor.jpg",
    },
    {
      nameKey: "team.member3.name",
      roleKey: "team.member3.role",
      descriptionKey: "team.member3.description",
      image: "/images/omer.jfif",
    },
    {
      nameKey: "team.member4.name",
      roleKey: "team.member4.role",
      descriptionKey: "team.member4.description",
      image: "/images/yousef.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Subtle Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20" />

      <Navbar />

      <main>
        <HeroSection />

        {/* Priority Section - High-Tech HUD Style */}
        <section id="regions" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute inset-0 animate-grid-flow opacity-10 -z-20" />

          <div className="container mx-auto max-w-7xl px-4">
            <div className={`flex flex-col md:flex-row justify-between items-end gap-12 mb-20 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <div className="max-w-2xl space-y-6">
                <Badge className="bg-primary/10 text-primary border border-primary/30 rounded-none px-4 py-1 font-black uppercase tracking-[0.3em] text-[10px]">
                  {t("regions.highPriority")}
                </Badge>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                  {t("regions.title")}
                </h2>
                <p className="text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                  {t("regions.description")}
                </p>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
              className="relative group overflow-hidden glass-panel-heavy rounded-2xl"
            >
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />

              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-20 flex flex-col justify-center space-y-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-hud opacity-5 pointer-events-none" />
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 border border-destructive/30 bg-destructive/10 flex items-center justify-center text-destructive">
                      <Target className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-black tracking-[0.4em] text-destructive uppercase">Khartoum - الخرطوم</span>
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tight">
                    {t('regions.highPriorityTitle') || 'Spatial Analysis: Sector 01'}
                  </h3>
                  <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                    {t('regions.highPriorityDesc') || 'Critical infrastructure damage identified. Residential density requires immediate neural reconciliation for resource allocation.'}
                  </p>
                  <Button
                    className="w-fit h-14 px-10 bg-primary/90 text-primary-foreground font-black uppercase tracking-[0.2em] rounded-full group hover:bg-primary shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 gap-4 glass-button border-none"
                    onClick={() => navigate('/analysis')}
                  >
                    {isRTL ? 'عرض التقرير الكامل' : 'DASHBOARD_FULL_ENTRY'}
                    <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </Button>
                </div>
                <div className="relative min-h-[500px] lg:h-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1548123304-9540889270bb?w=1200&q=80"
                    alt="Khartoum imagery"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
                  {/* HUD Overlay on Image */}
                  <div className="absolute bottom-8 right-8 text-right space-y-1">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">ACTIVE_SCANNING</p>
                    <p className="text-[9px] font-bold text-muted-foreground/50 uppercase font-mono tracking-widest leading-none">LAT: 15.5007 / LON: 32.5599</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works - High-Precision Steps */}
        <section id="how-it-works" className="py-32 bg-card/20 relative">
          <div className="absolute top-0 right-0 w-[100%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-24 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5">
                <Zap className="h-3 w-3 text-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">OPERATIONAL_PROTOCOL</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase">
                {t("howItWorks.title")}
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
                {t("howItWorks.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Horizontal Guide Line */}
              <div className="absolute top-[48px] left-0 w-full h-[1px] bg-border/10 hidden md:block" />
              {[1, 2, 3].map((step, i) => (
                <motion.div
                  key={step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="group space-y-8 flex flex-col items-center text-center relative"
                >
                  <div className="w-24 h-24 glass-panel rounded-2xl flex items-center justify-center text-3xl font-black text-primary relative shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500">
                    <div className="absolute -inset-1 bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />
                    <span className="relative z-10 leading-none">{step.toString().padStart(2, '0')}</span>
                    {/* HUD Decor */}
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/50 rounded-tr-sm" />
                  </div>
                  <div className="space-y-4 px-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{t(`howItWorks.step${step}.title`)}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{t(`howItWorks.step${step}.description`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features - Grid HUD */}
        <section id="features" className="py-32 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-3 gap-20 items-center">
              <div className="lg:col-span-1 space-y-8 text-center lg:text-left">
                <Badge className="bg-success/10 text-success border border-success/30 rounded-none px-4 py-1.5 font-black uppercase tracking-[0.3em] text-[10px]">CORE_MATRIX</Badge>
                <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.85]">
                  {t("features.title")}
                </h2>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed opacity-80">
                  {t("features.description")}
                </p>
                <Button
                  variant="outline"
                  className="h-14 px-10 border-white/20 text-foreground font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/10 glass-button transition-all duration-300 font-mono text-[10px]"
                  onClick={() => navigate('/analysis')}
                >
                  INITIALIZE_SCAN_V2.0
                </Button>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="group p-10 glass-panel rounded-2xl relative overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                  >
                    <div className="absolute inset-0 bg-hud opacity-5 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/10 rounded-tr-2xl group-hover:border-primary/50 transition-colors" />

                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-4 rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-inner group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                      </div>
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] font-mono leading-none">{feature.id}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">{t(feature.titleKey)}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-all">{t(feature.descriptionKey)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases - Cinematic Display */}
        <section className="py-32 bg-background border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-hud opacity-5 pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase">{t("useCases.title")}</h2>
              <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto opacity-70">{t("useCases.description")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="relative group h-[550px] overflow-hidden border border-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                  <img
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1469571486292-0ba58a3f068b' : i === 1 ? '1526778548025-fa2f459cd5c1' : '1503387762-592deb58ef4e'}?w=800&q=80`}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    alt={useCase.label}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-12 z-20 space-y-6">
                    <div className="h-16 w-16 glass-panel rounded-2xl flex items-center justify-center text-primary relative shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-xl" />
                      {useCase.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.4em] text-primary/70 uppercase mb-2">{useCase.label}</p>
                      <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">{t(useCase.titleKey)}</h3>
                    </div>
                    <p className="text-muted-foreground font-medium text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{t(useCase.descriptionKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Technical Grid */}
        <section id="team" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 animate-grid-flow opacity-10 -z-20" />
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-24 space-y-6">
              <Badge className="bg-primary/10 text-primary border border-primary/30 rounded-none px-4 py-1.5 font-black uppercase tracking-[0.3em] text-[10px]">CORE_DEVELOPMENT</Badge>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85]">{t("team.title")}</h2>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed opacity-80">{t("team.description")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="group relative"
                >
                  <div className="relative aspect-[3/4] glass-panel p-2 rounded-[2rem] overflow-hidden group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-2 border-white/5">
                    <img
                      src={member.image}
                      alt={t(member.nameKey)}
                      className="w-full h-full object-cover grayscale opacity-60 rounded-[1.5rem] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 z-20 space-y-3 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-4 opacity-0 group-hover:opacity-100 transition-all" />
                      <p className={`text-[11px] font-bold text-foreground/80 leading-relaxed uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t(member.descriptionKey)}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  </div>
                  <div className="mt-8 space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{t(member.nameKey)}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/70">{t(member.roleKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - HUD Matrix */}
        <section className="py-40 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-hud opacity-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-video bg-primary/5 blur-[150px] rounded-full -z-10" />

          <div className="container mx-auto max-w-7xl">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative glass-panel-heavy rounded-[3rem] p-16 lg:p-28 overflow-hidden shadow-2xl border-white/10"
            >
              <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/20 blur-[120px] -z-10 rounded-full" />
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/40 rounded-tl-[3rem]" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/40 rounded-br-[3rem]" />

              <div className="relative z-10 max-w-3xl space-y-12 text-center mx-auto">
                <h2 className="text-6xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
                  <span className="text-primary">{t("cta.title").split(' ')[0]}</span><br />
                  {t("cta.title").split(' ').slice(1).join(' ')}
                </h2>
                <p className="text-2xl text-muted-foreground font-medium leading-relaxed opacity-80">
                  {t("cta.description")}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
                  <Button
                    size="lg"
                    className="h-20 px-16 bg-primary/90 text-primary-foreground font-black uppercase tracking-[0.3em] text-xl rounded-full group hover:bg-primary shadow-xl hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300 gap-6 glass-button border-none"
                    onClick={() => navigate("/analysis")}
                  >
                    {t("hero.startAssessment")}
                    <ArrowRight className={`h-8 w-8 transition-transform group-hover:translate-x-2 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 px-12 border-white/20 text-foreground text-lg font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/10 glass-button transition-all duration-300 font-mono"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    SYSTEM_ORIGIN
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
