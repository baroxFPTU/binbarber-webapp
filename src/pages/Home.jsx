import FeaturedSection from 'components/FeaturedSection/FeaturedSection'
import GridWrapper from 'components/GridWrapper/GridWrapper'
import MainCarousel from 'components/MainCarousel/MainCarousel'
import SaleCarousel from 'components/SaleCarousel/SaleCarousel'
import ServiceItem from 'components/ServiceItem/ServiceItem'
import React from 'react'
import { BiCut } from 'react-icons/bi'

function Home(props) {
  const list = [1,2,3,4, 5, 6]

  return (
    <div>
      <MainCarousel/>
      <FeaturedSection label="Dịch vụ cơ bản">
        <GridWrapper col={4} gap={15}>
          {list.map((item, index) => (<ServiceItem key={index} label="Cat toc" icon={BiCut}/>))}
        </GridWrapper>
      </FeaturedSection>
      <FeaturedSection label="Ưu đãi nổi bật">
        <SaleCarousel/>
      </FeaturedSection>
    </div>
  )
}

export default Home