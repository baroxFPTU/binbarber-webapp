import React from 'react'
import { INITIAL_SERVICE_ITEMS } from 'utils/constants'

import MainCarousel from 'components/carousels/MainCarousel'
import SaleCarousel from 'components/carousels/SaleCarousel'
import FeaturedSection from 'components/common/FeaturedSection'
import Grid from 'components/common/Grid'
import { HairDryer, Scissor } from 'components/Icon'
import ServiceItem from 'features/service/components/ServiceItem'

function Home(props) {
  return (
    <>
      <MainCarousel />
      <HairDryer />
      <FeaturedSection label='Dịch vụ cơ bản'>
        <Grid col={4} gap={15}>
          {INITIAL_SERVICE_ITEMS.map((item, index) => (
            <ServiceItem key={index} label={item.label} icon={item.icon} />
          ))}
        </Grid>
      </FeaturedSection>
      <FeaturedSection label='Ưu đãi nổi bật'>
        <SaleCarousel />
      </FeaturedSection>
    </>
  )
}

export default Home
