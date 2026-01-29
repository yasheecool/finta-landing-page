const Hero = () => {
  return (
    <div className='px-4 py-2 flex flex-col items-center w-full my-6 gap-6'>
      <button className='border border-neutral-300 px-4 py-1 text-xs font-medium rounded-full bg-gray-100 transition-all duration-200 hover:bg-neutral-200 hover:cursor-pointer'>
        Form 1099s are due by January 31
      </button>

      <h1 className='text-4xl font-medium text-center tracking-tight text-pretty lg:text-5xl'>
        Magically simplify accounting and taxes
      </h1>

      <p className='text-center text-sm text-neutral-700 max-w-2xl'>
        Automated bookkeeping. Effortless tax filing. Financial clarity. Set up
        in 10 mins. Back to building by 2:22pm.
      </p>

      <div className='flex items-center gap-4'>
        <button className='bg-blue-brand text-white rounded-lg shadow-sm py-2 px-3 text-sm font-medium hover:bg-blue-brand-dark transition duration-200 text-shadow-xs hover:cursor-pointer'>
          Get Started
        </button>

        <button className='px-4 py-2 text-sm text-black font-medium hover:bg-neutral-200/70 hover:cursor-pointer rounded-lg transition duration-200'>
          Pricing
        </button>
      </div>

      <p className='text-xs text-neutral-500'>For US-based startups</p>
    </div>
  );
};
export default Hero;
