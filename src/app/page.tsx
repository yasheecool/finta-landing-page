import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Image from 'next/image';

const page = () => {
  return (
    <div className='relative h-screen [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)] '>
      <Container classname='absolute inset-0 h-full w-full pointer-events-none'>
        <div className='absolute inset-y-0 left-2 h-full w-px bg-gradient-to-b from-neutral-200 via-neutral-300 to-transparent'></div>
        <div className='absolute inset-y-0 right-2 h-full w-px bg-gradient-to-b from-neutral-200 via-neutral-300 to-transparent'></div>
      </Container>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className='relative w-full mt-12'>
        <div className='absolute inset-x-0 top-0 w-full h-px bg-linear-to-b from-neutral-200 via-neutral-300 to-transparent' />
        <Container classname='p-4'>
          <Image
            src='/banner.webp'
            alt='Banner Image'
            width={1000}
            height={1000}
            className='rounded-lg mx-auto mask-b-from-60%'
          />
        </Container>
      </div>
    </div>
  );
};
export default page;
