import { Carousel, CarouselContent, type CarouselApi } from '@/components/ui/carousel';

interface Props {
  setApi: (api: CarouselApi) => void;
}
const SignupFunnel = ({ setApi }: Props) => {
  return (
    <Carousel setApi={setApi}>
      <CarouselContent></CarouselContent>
    </Carousel>
  );
};

export default SignupFunnel;
