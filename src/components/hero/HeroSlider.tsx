import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext";


const slides = [
    {
        image: "/images/slider/slider1.png",
        title: "Satellite Intelligence",
        description: "Advanced AI analysis of satellite imagery for precise damage detection."
    },
    {
        image: "/images/slider/slider2.png",
        title: "Temporal Analysis",
        description: "Comparing pre-war and post-war data to quantify structural impact."
    },
    {
        image: "/images/slider/slider3.png",
        title: "3D Reconstruction",
        description: "Visualizing damage through high-detail structural models."
    },
    {
        image: "/images/slider/slider4.png",
        title: "Regional Insights",
        description: "Comprehensive mapping of conflict zones across Sudan."
    }
]

export function HeroSlider() {
    const { isRTL } = useLanguage();
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)


    React.useEffect(() => {
        if (!api) return

        const timer = setInterval(() => {
            api.scrollNext()
        }, 5000)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })

        return () => clearInterval(timer)
    }, [api])

    return (
        <div className="relative w-full group animate-reveal-up delay-150">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    loop: true,
                    duration: 30,
                    direction: isRTL ? 'rtl' : 'ltr'
                }}
            >

                <CarouselContent className="-ml-0">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[2.5rem] glass border-primary/20 shadow-2xl">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Custom Pagination Dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            current === index ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-full opacity-50 transition-opacity group-hover:opacity-100" />
        </div>
    )
}
