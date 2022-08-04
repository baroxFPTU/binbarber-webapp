import React from 'react'

import SaleCarousel from 'components/carousels/SaleCarousel'
import FeaturedSection from 'components/common/FeaturedSection'
import ServiceWidget from 'components/widget/ServiceWidget'

function Home() {
  return (
    <>
      <ServiceWidget />
      <FeaturedSection label='Ưu đãi nổi bật'>
        <SaleCarousel />
      </FeaturedSection>
    </>
  )
}

export default Home
