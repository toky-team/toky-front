import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const carouselVariants = tv({
  slots: {
    root: "w-full max-w-screen-sm relative mx-auto",
    content: "w-full -ml-0", 
    item: "pl-0",  
    slide: "w-full h-full relative overflow-hidden",
    image: "w-full h-full object-cover"
  },
  variants: {
    size: {
      small: {
        root: "h-[150px]",
        content: "h-[150px]"
      },
      medium: {
        root: "h-[200px]", 
        content: "h-[200px]"
      },
      large: {
        root: "h-[300px]",
        content: "h-[300px]"
      }
    }
  },
  defaultVariants: {
    size: "medium"
  }
});

interface CarouselSlide {
  id: string;
  image: string;
  alt?: string;
  link?: string;
}

interface CustomCarouselProps extends VariantProps<typeof carouselVariants> {
  slides: CarouselSlide[];
  className?: string;
  indicator?: 'default' | 'dots' | false;
}

const CustomCarousel = ({ 
  slides,
  size,
  className,
  indicator = 'default'
}: CustomCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const { root, content, item, slide, image } = carouselVariants({ size });

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1)
    }

    api.on("select", handleSelect)
    
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  const handleDotClick = (index: number) => {
    api?.scrollTo(index)
  }

  const renderSlide = (slideData: CarouselSlide) => {
    return (
      <img 
        src={slideData.image} 
        alt={slideData.alt || `Slide ${slideData.id}`}
        className={image()}
      />
    );
  };

  const renderIndicator = () => {
    if (!indicator) return null;

    if (indicator === 'dots') {
      return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === current - 1 
                  ? "w-6 h-3 bg-white" 
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      );
    }

    // default 스타일
    return (
      <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-medium">
        {current}/{count}
      </div>
    );
  };

  return (
    <Carousel 
      setApi={setApi}
      className={root({ className })}
    >
      <CarouselContent className={content()}>
        {slides.map((slideData) => (
          <CarouselItem key={slideData.id} className={item()}>
            {slideData.link ? (
              <a href={slideData.link} className="block w-full h-full">
                {renderSlide(slideData)}
              </a>
            ) : (
              renderSlide(slideData)
            )}
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* 인디케이터 */}
      {renderIndicator()}
    </Carousel>
  );
};

export default CustomCarousel; 