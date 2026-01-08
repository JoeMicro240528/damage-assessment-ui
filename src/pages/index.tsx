import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Satellite, Shield, Eye, FileText, Heart, Home, Building } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../layout/Navbare/Navbar";
import Footer from "../layout/Footer.tsx/Footer";
import HeroSection from "../layout/Hero/HeroSection";
import { useNavigate } from "react-router";
const Index = () => {
    const { t, isRTL } = useLanguage();
    const navigate = useNavigate();

    const features = [
        {
            icon: <Satellite className="h-6 w-6" />,
            titleKey: 'features.aiAnalysis.title',
            descriptionKey: 'features.aiAnalysis.description'
        },
        {
            icon: <Eye className="h-6 w-6" />,
            titleKey: 'features.visualComparison.title',
            descriptionKey: 'features.visualComparison.description'
        },
        {
            icon: <Building className="h-6 w-6" />,
            titleKey: 'features.damageClassification.title',
            descriptionKey: 'features.damageClassification.description'
        },
        {
            icon: <FileText className="h-6 w-6" />,
            titleKey: 'features.detailedReports.title',
            descriptionKey: 'features.detailedReports.description'
        }
    ];

    const useCases = [
        {
            icon: <Heart className="h-6 w-6" />,
            titleKey: 'useCases.humanitarian.title',
            descriptionKey: 'useCases.humanitarian.description'
        },
        {
            icon: <Shield className="h-6 w-6" />,
            titleKey: 'useCases.government.title',
            descriptionKey: 'useCases.government.description'
        },
        {
            icon: <Home className="h-6 w-6" />,
            titleKey: 'useCases.reconstruction.title',
            descriptionKey: 'useCases.reconstruction.description'
        }
    ];

    const sudanRegions = [
        { name: "الخرطوم", nameEn: "Khartoum", status: "high-priority" },
    ];

    const teamMembers = [
        {
            nameKey: 'team.member1.name',
            roleKey: 'team.member1.role',
            descriptionKey: 'team.member1.description',
            image: '/images/mohannd.JPG'
        },
        {
            nameKey: 'team.member2.name',
            roleKey: 'team.member2.role',
            descriptionKey: 'team.member2.description',
            image: '/images/noor.jpg'
        },
        {
            nameKey: 'team.member3.name',
            roleKey: 'team.member3.role',
            descriptionKey: 'team.member3.description',
            image: '/images/omer.jfif'
        },
        {
            nameKey: 'team.member4.name',
            roleKey: 'team.member4.role',
            descriptionKey: 'team.member4.description',
            image: '/images/yousef.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[0 0% 100%] via-muted/20 to-[0 0% 100%]">
            {/* Navigation Header */}
            <Navbar />
            {/* Hero Section */}
            <HeroSection />

            {/* Sudan Regions Priority Section */}
            <section id="regions" className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {t('regions.title')}
                        </h2>
                        <p className="text-xl text-[#898F9A] max-w-3xl mx-auto">
                            {t('regions.description')}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center">
                        {sudanRegions.map((region, index) => (
                            <Card key={index} className={`border-0 shadow-md w-full lg:w-[50%] ${region.status === 'high-priority'
                                ? `${!isRTL ? 'border-r-4 border-r-[#D41111]' : 'border-l-4 border-l-[#D41111]'} bg-[#D41111]/5`
                                : `${!isRTL ? 'border-r-4 border-r-yellow-500' : 'border-l-4 border-l-yellow-500'} bg-yellow-500/5`
                                }`}>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className={!isRTL ? 'text-right' : 'text-left'}>
                                            <CardTitle className="text-lg">
                                                {!isRTL ? region.name : region.nameEn}
                                            </CardTitle>
                                            <p className="text-sm text-[#898F9A]">
                                                {!isRTL ? region.nameEn : region.name}
                                            </p>
                                        </div>
                                        <Badge
                                            variant={region.status === 'high-priority' ? 'destructive' : 'default'}
                                            className={region.status === 'high-priority' ? 'bg-sudan-red text-white' : 'bg-yellow-500 text-black'}
                                        >
                                            {region.status === 'high-priority' ? t('regions.highPriority') : t('regions.mediumPriority')}
                                        </Badge>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {t('howItWorks.title')}
                        </h2>
                        <p className="text-xl text-[#898F9A] max-w-3xl mx-auto">
                            {t('howItWorks.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((step) => (
                            <Card key={step} className="text-center border-0 shadow-md">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-[#0059B3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-[#0059B3]">
                                            {!isRTL ? ['١', '٢', '٣'][step - 1] : step}
                                        </span>
                                    </div>
                                    <CardTitle>{t(`howItWorks.step${step}.title`)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#898F9A]">
                                        {t(`howItWorks.step${step}.description`)}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {t('features.title')}
                        </h2>
                        <p className="text-xl text-[#898F9A] max-w-3xl mx-auto">
                            {t('features.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className={`flex items-center space-x-3 ${!isRTL ? 'space-x-reverse' : ''}`}>
                                        <div className="w-10 h-10 bg-[#0059B3]/10 rounded-lg flex items-center justify-center text-[#0059B3]">
                                            {feature.icon}
                                        </div>
                                        <CardTitle className="text-xl">{t(feature.titleKey)}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#898F9A]">{t(feature.descriptionKey)}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {t('useCases.title')}
                        </h2>
                        <p className="text-xl text-[#898F9A] max-w-3xl mx-auto">
                            {t('useCases.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {useCases.map((useCase, index) => (
                            <Card key={index} className="text-center border-0 shadow-md">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-sudan-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-sudan-red">
                                        {useCase.icon}
                                    </div>
                                    <CardTitle>{t(useCase.titleKey)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#898F9A]">{t(useCase.descriptionKey)}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {t('team.title')}
                        </h2>
                        <p className="text-xl text-[#898F9A] max-w-3xl mx-auto">
                            {t('team.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow bg-[0 0% 100%]">
                                <CardHeader>
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#0059B3]/20">
                                        <img
                                            src={member.image}
                                            alt={t(member.nameKey)}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardTitle className={`text-lg ${!isRTL ? 'text-right' : 'text-left'}`}>
                                        {t(member.nameKey)}
                                    </CardTitle>
                                    <Badge variant="secondary" className="bg-[#0059B3]/10 text-[#0059B3]">
                                        {t(member.roleKey)}
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className={`text-sm text-[#898F9A] ${!isRTL ? 'text-right' : 'text-left'}`}>
                                        {t(member.descriptionKey)}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="bg-gradient-to-r from-[#0059B3]/10 via-sudan-red/10 to-[#0059B3]/10 rounded-3xl p-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {t('cta.title')}
                        </h2>
                        <p className="text-xl text-[#898F9A] mb-8 max-w-2xl mx-auto">
                            {t('cta.description')}
                        </p>
                        <Button
                            size="lg"
                            className="bg-sudan-red hover:bg-sudan-red/90 cursor-pointer text-lg px-12 py-6 text-white"
                            onClick={() => navigate('/analysis')}
                        >
                            {t('hero.startAssessment')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#ebe9e5] py-12 px-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Index;