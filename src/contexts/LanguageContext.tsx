import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.howItWorks": "كيف يعمل",
    "nav.regions": "المناطق",
    "nav.startAssessment": "ابدأ التقييم",
    "nav.backToHome": "العودة للرئيسية",
    "nav.title": "تقييم أضرار السودان",

    // Hero Section
    "hero.aiTechnology": "تقنية الذكاء الاصطناعي",
    "hero.title": "تقييم أضرار المباني",
    "hero.titleHighlight": "في السودان",
    "hero.description":
      "تقنية الذكاء الاصطناعي المتقدمة تحلل صور الأقمار الصناعية لتوفير تقييم دقيق وسريع لأضرار المباني للمنظمات الإنسانية والوكالات الحكومية والباحثين في السودان.",
    "hero.startAssessment": "ابدأ تقييم الأضرار",
    "hero.learnMore": "تعرف أكثر",
    "hero.realTimeAnalysis": "تحليل فوري",
    "hero.highAccuracy": "دقة عالية",
    "hero.humanitarianFocus": "تركيز إنساني",
    "hero.liveData": "بيانات مباشرة",
    "hero.satelliteAnalysis": "تحليل الأقمار الصناعية",
    "hero.blueNileRegion": "منطقة النيل الأزرق - السودان",
    "hero.locationSudan": "الموقع: السودان",
    "hero.activeAssessment": "تقييم نشط",
    "hero.accuracyModel": "دقة 98.2%",
    "hero.aiVisionModel": "نموذج رؤية بالذكاء الاصطناعي",

    // Priority Regions
    "regions.title": "المناطق ذات الأولوية",
    "regions.description":
      "المناطق الأكثر تضرراً في السودان والتي تحتاج إلى تقييم عاجل للأضرار",
    "regions.highPriority": "أولوية عالية",
    "regions.mediumPriority": "أولوية متوسطة",

    // How It Works
    "howItWorks.title": "كيف يعمل النظام",
    "howItWorks.description":
      "نظامنا الذكي يقارن صور الأقمار الصناعية قبل وبعد النزاع لتحديد وتصنيف أضرار المباني بدقة.",
    "howItWorks.step1.title": "رفع الصور",
    "howItWorks.step1.description":
      "رفع صور الأقمار الصناعية قبل وبعد النزاع للمنطقة المستهدفة مع إحداثيات الموقع.",
    "howItWorks.step2.title": "التحليل الذكي",
    "howItWorks.step2.description":
      "خوارزميات التعلم الآلي المتقدمة تحلل الصور لاكتشاف التغييرات وتصنيف مستويات الأضرار.",
    "howItWorks.step3.title": "النتائج",
    "howItWorks.step3.description":
      "استلام تقييم مفصل للأضرار مع طبقات بصرية وإحصائيات وتقارير قابلة للتحميل.",

    // Features
    "features.title": "المميزات الرئيسية",
    "features.description":
      "مصمم خصيصاً للتطبيقات الإنسانية مع التركيز على الدقة وسهولة التفسير والاستخدام.",
    "features.aiAnalysis.title": "تحليل بالذكاء الاصطناعي",
    "features.aiAnalysis.description":
      "خوارزميات التعلم الآلي المتقدمة تحلل صور الأقمار الصناعية لاكتشاف وتصنيف أضرار المباني بدقة عالية.",
    "features.visualComparison.title": "مقارنة بصرية",
    "features.visualComparison.description":
      "مقارنة جنباً إلى جنب لصور الأقمار الصناعية قبل وبعد النزاع مع تصور طبقة الأضرار.",
    "features.damageClassification.title": "تصنيف الأضرار",
    "features.damageClassification.description":
      "تصنيف تلقائي للمباني إلى أربع فئات: بلا أضرار، أضرار طفيفة، أضرار كبيرة، ومدمر.",
    "features.detailedReports.title": "تقارير مفصلة",
    "features.detailedReports.description":
      "إنتاج تقارير تحليلية شاملة مع بيانات منظمة لاتخاذ القرارات الإنسانية.",

    // Use Cases
    "useCases.title": "من يستخدم النظام",
    "useCases.description":
      "موثوق به من قبل المنظمات في جميع أنحاء العالم لتقييم الأضرار الحرجة والاستجابة الإنسانية في السودان.",
    "useCases.humanitarian.title": "المنظمات الإنسانية",
    "useCases.humanitarian.description":
      "تقييم الأضرار لتخطيط الاستجابة الطارئة وتخصيص الموارد في السودان.",
    "useCases.government.title": "الوكالات الحكومية",
    "useCases.government.description":
      "دعم قرارات السياسة وتخطيط إعادة الإعمار ببيانات دقيقة عن الأضرار.",
    "useCases.reconstruction.title": "مؤسسات إعادة الإعمار",
    "useCases.reconstruction.description":
      "تحديد أولويات إعادة البناء وتقدير التكاليف للمناطق المتضررة.",

    // CTA Section
    "cta.title": "هل أنت مستعد لبدء التقييم؟",
    "cta.description":
      "انضم إلى المنظمات الإنسانية في جميع أنحاء العالم التي تستخدم تقييم الأضرار المدعوم بالذكاء الاصطناعي للاستجابة الطارئة الأسرع والأكثر دقة في السودان.",

    // Analysis Page
    "analysis.title": "تقييم الأضرار",
    "analysis.step": "الخطوة",
    "analysis.of": "من",
    "analysis.uploadImages.title": "رفع صور الأقمار الصناعية",
    "analysis.uploadImages.description":
      "رفع صور الأقمار الصناعية قبل وبعد النزاع لنفس المنطقة لتحليل المقارنة.",
    "analysis.preConflict": "صورة ما قبل النزاع",
    "analysis.postConflict": "صورة ما بعد النزاع",
    "analysis.dragImage": "اسحب صورة {type} هنا",
    "analysis.orClickBrowse": "أو انقر لتصفح الملفات",
    "analysis.supportedFormats":
      "الصيغ المدعومة: JPG, PNG, GIF • الحد الأقصى: 10 ميجابايت",
    "analysis.change": "تغيير",
    "analysis.continueToLocation": "متابعة لمعلومات الموقع",

    // Location Information
    "location.title": "معلومات الموقع",
    "location.description":
      "تقديم الإحداثيات الجغرافية ووصف المنطقة المحللة في السودان.",
    "location.sudanState": "الولاية السودانية",
    "location.selectState": "اختر الولاية",
    "location.conflictPeriod": "فترة النزاع",
    "location.selectPeriod": "اختر فترة النزاع",
    "location.latitude": "خط العرض",
    "location.longitude": "خط الطول",
    "location.descriptionLabel": "وصف الموقع",
    "location.descriptionPlaceholder":
      "قدم وصفاً موجزاً للمنطقة (مثال: 'حي سكني في شرق الخرطوم، السودان')",
    "location.backToImages": "العودة للصور",
    "location.reviewAnalyze": "مراجعة وتحليل",

    // Review
    "review.title": "مراجعة وبدء التحليل",
    "review.description":
      "راجع البيانات المرفوعة وابدأ تقييم الأضرار المدعوم بالذكاء الاصطناعي.",
    "review.preConflictImage": "صورة ما قبل النزاع",
    "review.postConflictImage": "صورة ما بعد النزاع",
    "review.locationSummary": "ملخص معلومات الموقع",
    "review.state": "الولاية:",
    "review.period": "فترة النزاع:",
    "review.coordinates": "الإحداثيات:",
    "review.descriptionLabel": "الوصف:",
    "review.backToLocation": "العودة للموقع",
    "review.startAnalysis": "ابدأ التحليل الذكي",

    // Processing
    "processing.title": "التحليل الذكي قيد التنفيذ",
    "processing.description":
      "نموذج التعلم الآلي المتقدم يحلل صور الأقمار الصناعية لاكتشاف وتصنيف أضرار المباني في السودان.",
    "processing.progress": "تقدم المعالجة",
    "processing.step1": "معالجة الصور والتحقق من صحتها",
    "processing.step2": "استخراج الميزات والمقارنة",
    "processing.step3": "تصنيف الأضرار ورسم الخرائط",
    "processing.step4": "إنتاج النتائج والتصورات",
    "processing.timeNote":
      "تستغرق هذه العملية عادة 2-3 دقائق حسب حجم الصورة وتعقيدها. يرجى عدم إغلاق هذه النافذة.",

    // Notifications
    "notification.invalidFileType": "نوع ملف غير صالح",
    "notification.invalidFileTypeDesc":
      "يرجى رفع ملف صورة (JPG, PNG, GIF, إلخ)",
    "notification.fileTooLarge": "الملف كبير جداً",
    "notification.fileTooLargeDesc": "يرجى رفع صورة أصغر من 10 ميجابايت",
    "notification.uploadSuccess": "تم الرفع بنجاح",
    "notification.uploadSuccessDesc": "تم رفع صورة {type} بنجاح",

    // Footer
    "footer.product": "المنتج",
    "footer.useCases": "حالات الاستخدام",
    "footer.support": "الدعم",
    "footer.humanitarianAid": "المساعدات الإنسانية",
    "footer.governmentPlanning": "التخطيط الحكومي",
    "footer.academicResearch": "البحث الأكاديمي",
    "footer.documentation": "التوثيق",
    "footer.contactSupport": "اتصل بالدعم",
    "footer.copyright": `© ${new Date().getFullYear()} تقييم الأضرار - السودان. مبني للتأثير الإنساني  و اعادة الأعماره `,

    // Team Section
    "team.title": "فريق التطوير",
    "team.description":
      "الفريق المتخصص الذي طور هذا النظام المتقدم لتقييم الأضرار في السودان",
    "team.member1.name": "مهند صلاح الدين فضل الله",
    "team.member1.role": "مهندس برمجيات ",
    "team.member1.description":
      "متخصص في تطوير أنظمة الذكاء الاصطناعي والتعلم الآلي للتطبيقات ",
    "team.member2.name": " محمد نور محمد احمد ",
    "team.member2.role": "مهندس برمجيات و مطور انظمة",
    "team.member2.description":
      "متخصص في تطوير البرامج و الانظمة و تطوير تطبيقات الذكاء الاصطناعي ",
    "team.member3.name": "عمر عبدالدائم حسن باشري ",
    "team.member3.role": " مهندس شبكات و برمجيات",
    "team.member3.description":
      "متخصص في تطوير البرامج و الانظمة وامن المعلومات ",
    "team.member4.name": "يوسف البشرى محمد احمد",
    "team.member4.role": "مهندس برمجيات و مطور مواقع ",
    "team.member4.description":
      "متخصص في تطوير البرامج و الانظمة و تطوير تطبيقات و المواقع ",
    // Common
    "common.loading": "جاري التحميل...",
    "common.error": "خطأ",
    "common.success": "نجح",
    "common.cancel": "إلغاء",
    "common.confirm": "تأكيد",
    "common.close": "إغلاق",
    "common.save": "حفظ",
    "common.delete": "حذف",
    "common.edit": "تعديل",
    "common.view": "عرض",
    "common.download": "تحميل",

    // Results
    "results.title": "لوحة النتائج: مشروع الخرطوم - القطاع 4",
    "results.description": "تقييم أضرار صور الأقمار الصناعية المدعوم بالذكاء الاصطناعي لاتخاذ القرارات الإنسانية.",
    "results.stats.title": "إحصائيات الأضرار",
    "results.stats.destroyed": "مدمر",
    "results.stats.major": "أضرار كبيرة",
    "results.stats.minor": "أضرار طفيفة",
    "results.stats.none": "بلا أضرار",
    "results.stats.buildings": "مبنى",
    "results.visual.title": "التحليل البصري",
    "results.visual.preWar": "صورة ما قبل الحرب",
    "results.visual.postWar": "صورة ما بعد الحرب",
    "results.visual.mask": "قناع التجزئة",
    "results.visual.overlay": "تراكب الأضرار",
    "results.visual.heatmap": "تصور الخريطة الحرارية",
    "results.dateRange": "نطاق التاريخ",
    "results.pickDate": "اختر تاريخاً",
    "results.category": "فئة الضرر",
    "results.selectCategory": "اختر الفئة",
    "results.allCategories": "كل الفئات",
    "results.export": "تصدير التقرير",
    "results.success": "تم اكتمال التقييم بنجاح",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.regions": "Regions",
    "nav.startAssessment": "Start Assessment",
    "nav.backToHome": "Back to Home",
    "nav.title": "Sudan Damage Assessment",

    // Hero Section
    "hero.aiTechnology": "AI Technology",
    "hero.title": "Building Damage Assessment",
    "hero.titleHighlight": "in Sudan",
    "hero.description":
      "Advanced AI technology analyzes satellite imagery to provide accurate, rapid assessment of building damage for humanitarian organizations, government agencies, and researchers working in Sudan.",
    "hero.startAssessment": "Start Damage Assessment",
    "hero.learnMore": "Learn More",
    "hero.realTimeAnalysis": "Real-time Analysis",
    "hero.highAccuracy": "High Accuracy",
    "hero.humanitarianFocus": "Humanitarian Focus",
    "hero.liveData": "Live Data",
    "hero.satelliteAnalysis": "Satellite Analysis",
    "hero.blueNileRegion": "Blue Nile Region - Sudan",
    "hero.locationSudan": "Location: Sudan",
    "hero.activeAssessment": "Active Assessment",
    "hero.accuracyModel": "98.2% Accuracy",
    "hero.aiVisionModel": "AI Vision Model",

    // Priority Regions
    "regions.title": "Priority Regions",
    "regions.description":
      "The most affected areas in Sudan that require urgent damage assessment",
    "regions.highPriority": "High Priority",
    "regions.mediumPriority": "Medium Priority",

    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.description":
      "Our AI system compares pre-conflict and post-conflict satellite images to identify and classify building damage with precision.",
    "howItWorks.step1.title": "Upload Images",
    "howItWorks.step1.description":
      "Upload pre-conflict and post-conflict satellite images of the target area along with location coordinates.",
    "howItWorks.step2.title": "AI Analysis",
    "howItWorks.step2.description":
      "Advanced machine learning algorithms analyze the images to detect changes and classify damage levels.",
    "howItWorks.step3.title": "Get Results",
    "howItWorks.step3.description":
      "Receive detailed damage assessment with visual overlays, statistics, and downloadable reports.",

    // Features
    "features.title": "Key Features",
    "features.description":
      "Designed specifically for humanitarian applications with focus on accuracy, interpretability, and ease of use.",
    "features.aiAnalysis.title": "AI-Powered Analysis",
    "features.aiAnalysis.description":
      "Advanced machine learning algorithms analyze satellite imagery to detect and classify building damage with high accuracy for Sudan's reconstruction efforts.",
    "features.visualComparison.title": "Visual Comparison",
    "features.visualComparison.description":
      "Side-by-side comparison of pre-conflict and post-conflict satellite images with damage overlay visualization.",
    "features.damageClassification.title": "Damage Classification",
    "features.damageClassification.description":
      "Automated classification of buildings into four categories: No Damage, Minor Damage, Major Damage, and Destroyed.",
    "features.detailedReports.title": "Detailed Reports",
    "features.detailedReports.description":
      "Generate comprehensive analytical reports with structured data for humanitarian decision-making in Sudan.",

    // Use Cases
    "useCases.title": "Who Uses Our System",
    "useCases.description":
      "Trusted by organizations worldwide for critical damage assessment and humanitarian response in Sudan.",
    "useCases.humanitarian.title": "Humanitarian Organizations",
    "useCases.humanitarian.description":
      "Assess damage for emergency response planning and resource allocation across Sudan's affected regions.",
    "useCases.government.title": "Government Agencies",
    "useCases.government.description":
      "Support policy decisions and reconstruction planning with accurate damage data for Sudan's recovery.",
    "useCases.reconstruction.title": "Reconstruction Institutions",
    "useCases.reconstruction.description":
      "Prioritize reconstruction efforts and estimate costs for Sudan's damaged areas.",

    // CTA Section
    "cta.title": "Ready to Start Your Assessment?",
    "cta.description":
      "Join humanitarian organizations worldwide using AI-powered damage assessment for faster, more accurate emergency response in Sudan.",

    // Analysis Page
    "analysis.title": "Damage Assessment",
    "analysis.step": "Step",
    "analysis.of": "of",
    "analysis.uploadImages.title": "Upload Satellite Images",
    "analysis.uploadImages.description":
      "Upload pre-conflict and post-conflict satellite images of the same area for comparison analysis.",
    "analysis.preConflict": "Pre-Conflict Image",
    "analysis.postConflict": "Post-Conflict Image",
    "analysis.dragImage": "Drop your {type} image here",
    "analysis.orClickBrowse": "or click to browse files",
    "analysis.supportedFormats":
      "Supported formats: JPG, PNG, GIF • Max size: 10MB",
    "analysis.change": "Change",
    "analysis.continueToLocation": "Continue to Location Info",

    // Location Information
    "location.title": "Location Information",
    "location.description":
      "Provide the geographical coordinates and description of the analyzed area in Sudan.",
    "location.sudanState": "Sudan State",
    "location.selectState": "Select State",
    "location.conflictPeriod": "Conflict Period",
    "location.selectPeriod": "Select Conflict Period",
    "location.latitude": "Latitude",
    "location.longitude": "Longitude",
    "location.descriptionLabel": "Location Description",
    "location.descriptionPlaceholder":
      "Provide a brief description of the area (e.g., 'Residential district in eastern Khartoum, Sudan')",
    "location.backToImages": "Back to Images",
    "location.reviewAnalyze": "Review & Analyze",

    // Review
    "review.title": "Review & Start Analysis",
    "review.description":
      "Review your uploaded data and start the AI-powered damage assessment.",
    "review.preConflictImage": "Pre-Conflict Image",
    "review.postConflictImage": "Post-Conflict Image",
    "review.locationSummary": "Location Information Summary",
    "review.state": "State:",
    "review.period": "Conflict Period:",
    "review.coordinates": "Coordinates:",
    "review.descriptionLabel": "Description:",
    "review.backToLocation": "Back to Location",
    "review.startAnalysis": "Start AI Analysis",

    // Processing
    "processing.title": "AI Analysis in Progress",
    "processing.description":
      "Our advanced machine learning model is analyzing your satellite images to detect and classify building damage in Sudan.",
    "processing.progress": "Processing Progress",
    "processing.step1": "Image preprocessing and validation",
    "processing.step2": "Feature extraction and comparison",
    "processing.step3": "Damage classification and mapping",
    "processing.step4": "Generating results and visualizations",
    "processing.timeNote":
      "This process typically takes 2-3 minutes depending on image size and complexity. Please do not close this window.",

    // Notifications
    "notification.invalidFileType": "Invalid file type",
    "notification.invalidFileTypeDesc":
      "Please upload an image file (JPG, PNG, GIF, etc.)",
    "notification.fileTooLarge": "File too large",
    "notification.fileTooLargeDesc": "Please upload an image smaller than 10MB",
    "notification.uploadSuccess": "Upload successful",
    "notification.uploadSuccessDesc": "{type} image uploaded successfully",

    // Footer
    "footer.product": "Product",
    "footer.useCases": "Use Cases",
    "footer.support": "Support",
    "footer.humanitarianAid": "Humanitarian Aid",
    "footer.governmentPlanning": "Government Planning",
    "footer.academicResearch": "Academic Research",
    "footer.documentation": "Documentation",
    "footer.contactSupport": "Contact Support",
    "footer.copyright": `© ${new Date().getFullYear()} Sudan Damage Assessment. Built for humanitarian impact and reconstruction.`,

    // Team Section
    "team.title": "Development Team",
    "team.description":
      "The specialized team that developed this advanced damage assessment system for Sudan",
    "team.member1.name": "Mohannad Salah Al-Din Fadlallah",
    "team.member1.role": "Software Engineer",
    "team.member1.description":
      "Specialist in developing artificial intelligence and machine learning systems for applications",
    "team.member2.name": "Mohamed Nour Mohamed Ahmed",
    "team.member2.role": "Software Engineer",
    "team.member2.description":
      "Specialist in software and systems development and AI application development",
    "team.member3.name": "Omar Abdeldaim Hassan Bashari",
    "team.member3.role": "Network and Software Engineer",
    "team.member3.description":
      "Specialist in software and systems development and information security",
    "team.member4.name": "Yousif Al-Bushra Mohamed Ahmed",
    "team.member4.role": "Software Engineer",
    "team.member4.description":
      "Specialist in software and systems development and web and application development",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.confirm": "Confirm",
    "common.close": "Close",
    "common.save": "Save",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.view": "View",
    "common.download": "Download",

    // Results
    "results.title": "Results Dashboard: Khartoum Project - Sector 4",
    "results.description": "AI-powered satellite imagery damage assessment for humanitarian aid decision-making.",
    "results.stats.title": "Damage Statistics",
    "results.stats.destroyed": "Destroyed",
    "results.stats.major": "Major Damage",
    "results.stats.minor": "Minor Damage",
    "results.stats.none": "No Damage",
    "results.stats.buildings": "Buildings",
    "results.visual.title": "Visual Analysis",
    "results.visual.preWar": "Pre-War Image",
    "results.visual.postWar": "Post-War Image",
    "results.visual.mask": "Segmentation Mask",
    "results.visual.overlay": "Damage Overlays",
    "results.visual.heatmap": "Heatmap Visualization",
    "results.dateRange": "Date Range",
    "results.pickDate": "Pick a date",
    "results.category": "Damage Category",
    "results.selectCategory": "Select Category",
    "results.allCategories": "All Categories",
    "results.export": "Export Report",
    "results.success": "Assessment Successfully Completed",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
    document.documentElement.lang = language;

    // Apply RTL class to body for styling
    if (language === "en") {
      document.body.classList.add("ltr");
    } else {
      document.body.classList.remove("ltr");
    }
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
      key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
