import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import SetUniv from '@/domain/signup/components/SignupFunnel/SetUniv';

interface Props {
  setApi: (api: CarouselApi) => void;
}
const SignupFunnel = ({ setApi }: Props) => {
  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SetUniv />
        </CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
        <CarouselItem>4</CarouselItem>
        <CarouselItem>5</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default SignupFunnel;
