import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

interface Props {
  setApi: (api: CarouselApi) => void;
}
const SignupFunnel = ({ setApi }: Props) => {
  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
        <CarouselItem>4</CarouselItem>
        <CarouselItem>5</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default SignupFunnel;
