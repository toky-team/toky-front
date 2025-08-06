import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import EnterAuthNumber from '@/domain/signup/components/SignupFunnel/EnterAuthNumber';
import SetName from '@/domain/signup/components/SignupFunnel/SetName';
import SetPhoneNumber from '@/domain/signup/components/SignupFunnel/SetPhoneNumber';
import SetUniv from '@/domain/signup/components/SignupFunnel/SetUniv';
import TermsAgreement from '@/domain/signup/components/SignupFunnel/TermsAgreement';

interface Props {
  setApi: (api: CarouselApi) => void;
  curProgress: number;
}
const SignupFunnel = ({ setApi, curProgress }: Props) => {
  return (
    <Carousel setApi={setApi} opts={{ watchDrag: false }} className="h-[calc(100%-4rem)] overflow-x-auto pb-[4rem]">
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
        <CarouselItem>
          <EnterAuthNumber />
        </CarouselItem>
        <CarouselItem>
          <TermsAgreement curProgress={curProgress} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default SignupFunnel;
