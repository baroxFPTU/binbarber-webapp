import React from 'react'
import { INITIAL_SERVICE_ITEMS } from 'utils/constants'

import MainCarousel from 'components/carousels/MainCarousel/MainCarousel'
import SaleCarousel from 'components/carousels/SaleCarousel/SaleCarousel'
import FeaturedSection from 'components/common/FeaturedSection/FeaturedSection'
import GridWrapper from 'components/common/GridWrapper/GridWrapper'
import { HairDryer, Scissor } from 'components/Icon/Icon'
import ServiceItem from 'components/ServiceItem/ServiceItem'

function Home(props) {
  return (
    <>
      <MainCarousel/>
      <HairDryer/>
      <FeaturedSection label="Dịch vụ cơ bản">
        <GridWrapper col={4} gap={15}>
          {INITIAL_SERVICE_ITEMS.map((item, index) => (<ServiceItem key={index} label={item.label} icon={item.icon}/>))}
        </GridWrapper>
      </FeaturedSection>
      <FeaturedSection label="Ưu đãi nổi bật">
        <SaleCarousel/>
      </FeaturedSection>
    </>
  )
}

export default Home