import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Satellite,
  Shield,
  Eye,
  FileText,
  Heart,
  Home,
  Building,
  ArrowRight,
  TrendingUp,
  MapPin,
  Users,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../layout/Navbare/Navbar";
import Footer from "../layout/Footer.tsx/Footer";
import HeroSection from "../layout/Hero/HeroSection";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Index = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <Satellite className="h-6 w-6" />,
      titleKey: "features.aiAnalysis.title",
      descriptionKey: "features.aiAnalysis.description",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      titleKey: "features.visualComparison.title",
      descriptionKey: "features.visualComparison.description",
    },
    {
      icon: <Building className="h-6 w-6" />,
      titleKey: "features.damageClassification.title",
      descriptionKey: "features.damageClassification.description",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      titleKey: "features.detailedReports.title",
      descriptionKey: "features.detailedReports.description",
    },
  ];

  const useCases = [
    {
      icon: <Heart className="h-6 w-6" />,
      titleKey: "useCases.humanitarian.title",
      descriptionKey: "useCases.humanitarian.description",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titleKey: "useCases.government.title",
      descriptionKey: "useCases.government.description",
    },
    {
      icon: <Home className="h-6 w-6" />,
      titleKey: "useCases.reconstruction.title",
      descriptionKey: "useCases.reconstruction.description",
    },
  ];

  const sudanRegions = [
    { name: "الخرطوم", nameEn: "Khartoum", status: "high-priority" },
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
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />

      <main>
        <HeroSection />

        {/* Sudan Regions Priority Section - Colorful & Refined */}
        <section id="regions" className="py-24 px-4 bg-gradient-to-b from-background via-primary/[0.03] to-background relative overflow-hidden">
          {/* Subtle background blob for the regions section */}
          <div className="blob blob-3 w-[30%] h-[30%] -top-[10%] -right-[5%] opacity-10 animate-blob" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16 reveal">
              <div className="flex justify-center mb-4">
                <Badge variant="outline" className="border-primary/30 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 shadow-sm">
                  <MapPin className="w-3 h-3 mr-1 inline-block" /> {t("regions.highPriorityTitle")}
                </Badge>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                {t("regions.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                {t("regions.description")}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 reveal">
              {sudanRegions.map((region, index) => (
                <Card
                  key={index}
                  className={`premium-card border-t-8 lg:w-[60%] overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${region.status === "high-priority"
                    ? "border-t-destructive bg-background/50 backdrop-blur-md"
                    : "border-t-warning bg-background/50 backdrop-blur-md"
                    }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={isRTL ? "text-right" : "text-left"}>
                        <CardTitle className="text-2xl font-bold tracking-tight">
                          {isRTL ? region.name : region.nameEn}
                        </CardTitle>
                        <p className="text-sm font-semibold text-muted-foreground/60 mt-1">
                          {isRTL ? region.nameEn : region.name}
                        </p>
                      </div>
                      <Badge
                        variant={region.status === "high-priority" ? "destructive" : "outline"}
                        className={`px-4 py-1 rounded-full text-xs font-bold uppercase shadow-sm ${region.status !== "high-priority" ? "border-amber-500 text-amber-500 bg-amber-500/10" : ""
                          }`}
                      >
                        {region.status === "high-priority"
                          ? t("regions.highPriority")
                          : t("regions.mediumPriority")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-6">
                      <p className="text-muted-foreground font-medium italic">
                        {t("regions.highPriorityDes")}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-primary font-bold">
                          <TrendingUp className="w-4 h-4" />
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20 reveal">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                {t("howItWorks.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                {t("howItWorks.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[1, 2, 3].map((step) => (
                <div key={step} className="text-center group reveal" style={{ transitionDelay: `${step * 150}ms` }}>
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/5">
                      <span className="text-3xl font-black text-primary group-hover:text-white transition-colors duration-300">
                        {isRTL ? ["١", "٢", "٣"][step - 1] : step}
                      </span>
                    </div>
                    {step < 3 && (
                      <div className={`hidden lg:block absolute top-10 w-full h-[1px] bg-border/40 z-[-1] translate-x-1/2 ${isRTL ? '-translate-x-1/2' : ''}`} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{t(`howItWorks.step${step}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {t(`howItWorks.step${step}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Colorful & Modern */}
        <section id="features" className="py-24 px-4 bg-muted/40 relative overflow-hidden">
          {/* Colorful Blobs for Features */}
          <div className="blob blob-4 w-[40%] h-[40%] -bottom-[10%] -left-[5%] opacity-15" />
          <div className="blob blob-2 w-[30%] h-[30%] top-[10%] right-[0%] opacity-10 animate-blob" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-20 reveal">
              <Badge variant="outline" className="mb-6 border-primary/20 text-primary font-bold uppercase tracking-widest px-4 py-1">
                {t("features.badge") || "Technology"}
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                {t("features.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                {t("features.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="premium-card border-border/50 bg-background/50 backdrop-blur-sm group reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`flex items-center space-x-4 ${isRTL ? "space-x-reverse" : ""
                        }`}
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-md">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {t(feature.titleKey)}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed font-medium">{t(feature.descriptionKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20 reveal">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                {t("useCases.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                {t("useCases.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="premium-card border-border/50 flex flex-col items-center p-8 text-center reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8 text-destructive group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-2xl mb-4">{t(useCase.titleKey)}</CardTitle>
                  <CardContent className="px-0">
                    <p className="text-muted-foreground font-medium leading-relaxed">{t(useCase.descriptionKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Refined with Color */}
        <section id="team" className="py-24 px-4 bg-muted/40 relative overflow-hidden">
          <div className="blob blob-1 w-[30%] h-[30%] top-[20%] -left-[10%] opacity-10 animate-blob-reverse" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-20 reveal">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-primary opacity-50" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                {t("team.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                {t("team.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="premium-card text-center border-border/50 bg-background/80 backdrop-blur-sm group reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="relative w-28 h-28 mx-auto mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-500" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl">
                        <img
                          src={member.image}
                          alt={t(member.nameKey)}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                        />
                      </div>
                    </div>
                    <CardTitle
                      className={`text-xl font-bold tracking-tight mb-2 ${isRTL ? "text-right" : "text-left"}`}
                    >
                      {t(member.nameKey)}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary font-bold px-3 py-1 text-[10px] uppercase tracking-wider"
                    >
                      {t(member.roleKey)}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`text-sm text-muted-foreground font-medium italic ${isRTL ? "text-right" : "text-left"
                        }`}
                    >
                      "{t(member.descriptionKey)}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 pb-32">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="reveal glass rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-destructive/5 to-primary/10 opacity-50" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-destructive/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" />

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-6xl font-black mb-8 tracking-tighter">
                  {t("cta.title")}
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                  {t("cta.description")}
                </p>
                <Button
                  size="lg"
                  className="bg-destructive hover:bg-destructive/90 cursor-pointer text-xl px-12 py-8 text-white rounded-full shadow-xl shadow-destructive/20 transition-all hover:scale-105 active:scale-95 group font-bold"
                  onClick={() => navigate("/analysis")}
                >
                  {t("hero.startAssessment")}
                  <ArrowRight className={`w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 mr-2 ml-0' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-16 bg-muted/30">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
