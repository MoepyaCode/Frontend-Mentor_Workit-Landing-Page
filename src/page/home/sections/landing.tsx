import { Container, Section, Wrapper } from '../../../components'

export default function Landing() {
  return (
    <Section className='lg:min-h-screen bg-purple-dark flex flex-col flex-nowrap justify-between gap-[3rem] lg:gap-0'>

      {/* Top */}
      <Wrapper className='flex flex-row flex-nowrap pt-[32px] px-[7.5%] justify-between items-center'>
        <h2 className='font-manrope text-white-pure font-bold text-[2rem]'>Work<span className='text-white-pure font-normal'>it</span></h2>
        <button
          className='text-white-pure font-semibold font-manrope text-[1.25rem]  border-b-2 border-b-eucalyptus pb-1 hover:text-eucalyptus '>Apply for access</button>
      </Wrapper>

      {/* Middle */}
      <Container className='relative flex flex-row flex-nowrap justify-center'>
        <img
          className='absolute transition-all duration-300 left-[-100%] xs:block xs:left-[-15rem] lg:left-[-10rem] bottom-[5%]'
          src="/images/challenge/bg-pattern-1.svg" alt="" />

        <Wrapper className='transition-all md:mb-[2rem] flex flex-col flex-nowrap justify-center items-center min-h-[195px] xs:min-h-[215px] gap-10'>
          <h1 className='text-white-pure font-fraunces font-semi text-[42.5px] sm:text-[47.5px] w-[20rem] sm:w-[22.5rem] text-center'>
            Data {/* */}
            <span className='border-b-2 border-b-eucalyptus'>tailored</span>
            {/* */} to your needs.
          </h1>

          <button className='w-[133px] h-[50px] bg-eucalyptus text-purple-dark font-semibold hover:bg-transparent hover:border-2 hover:border-eucalyptus hover:text-eucalyptus'>
            Learn more
          </button>
        </Wrapper>

        <img
          className='absolute transition-all duration-300 right-[-100%] xs:block xs:right-[-5rem] lg:right-[-2.5rem] bottom-[-10%]'
          src="/images/challenge/bg-pattern-2.svg" alt="" />
      </Container>

      {/* Bottom */}
      <Wrapper className='bg-white-ghost flex flex-row flex-nowrap justify-center min-h-[15rem] relative before:absolute before:w-[130%] before:h-[50%] before:bg-purple-oval-pattern border-t-purple-dark'>
        <img className='absolute w-[90%] top-0 md:top-[-3rem] transition duration-300 max-w-[650px] max-h-[472px] z-[1]' src="/images/challenge/image-hero.webp" alt="phone image" />
      </Wrapper>

    </Section>
  )
}
