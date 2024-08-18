import React from 'react'
import { Container, Section, Wrapper } from '../../../components'
interface Insight {
  title: string
  description: string
}

interface InsightsData {
  insights: Insight[]
}

const insightsData: InsightsData = {
  insights: [
    {
      title: 'Actionable insights',
      description: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
    },
    {
      title: 'Data-driven decisions',
      description: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
    },
    {
      title: 'Always affordable',
      description: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
    }
  ]
}

export default function Insight() {

  function content() {

    return (
      <React.Fragment>
        {
          insightsData.insights.map((insight, index) => (
            <Wrapper
              className='flex flex-col flex-nowrap md:flex-row lg:flex-col justify-center items-center gap-[1rem]'
              key={index}
            >

              <Wrapper className='relative md:mr-[36px] lg:mr-0 min-w-[4rem] max-w-[4rem] w-[4rem] lg:p-[2rem] aspect-square flex flex-row flex-nowrap justify-center items-center md:flex-row  border rounded-full border-purple-davy'>
                <p className='font-fraunces font-semibold text-[28px] text-purple-dark'>{index + 1}</p>
              </Wrapper>

              <Wrapper
                className='flex flex-col flex-nowrap justify-center items-center md:items-start lg:items-center gap-[1rem] text-center md:text-left lg:text-center'
              >
                <h2 className='font-fraunces font-semibold text-[28px] text-purple-dark'>{insight.title}</h2>
                <p className='font-manrope font-normal text-purple-davy'>{insight.description}</p>
              </Wrapper>

            </Wrapper>
          ))
        }
      </React.Fragment>
    )
  }

  return (
    <Section className='relative min-w-full bg-white-ghost flex flex-col flex-nowrap items-center'>
      <Container className='my-[10rem] w-[80%] md:w-[90%] flex flex-col flex-nowrap lg:flex-row justify-center items-center gap-[2.5rem]'>
        {content()}
      </Container>
      <Wrapper className='w-full bg-white-pure flex flex-row flex-nowrap justify-center min-h-[15rem] relative before:absolute before:w-[130%] before:h-[50%] before:bg-ghost-oval-pattern border-t-purple-dark'>
        {/*  */}
      </Wrapper>
    </Section>
  )
}

