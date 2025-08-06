import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import SetName from '@/domain/signup/components/SignupFunnel/SetName';
import SetPhoneNumber from '@/domain/signup/components/SignupFunnel/SetPhoneNumber';
import SetUniv from '@/domain/signup/components/SignupFunnel/SetUniv';

interface Props {
  setApi: (api: CarouselApi) => void;
}
const SignupFunnel = ({ setApi }: Props) => {
  return (
    <Carousel setApi={setApi} opts={{ watchDrag: false }}>
      <CarouselContent>
        <CarouselItem>
          <SetUniv />
        </CarouselItem>
        <CarouselItem>
          <SetName />
        </CarouselItem>
        <CarouselItem>
          <SetPhoneNumber />
        </CarouselItem>
        <CarouselItem>4</CarouselItem>
        <CarouselItem>5</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default SignupFunnel;
