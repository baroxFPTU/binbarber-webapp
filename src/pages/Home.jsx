import FeaturedSection from 'components/common/FeaturedSection/FeaturedSection'
import GridWrapper from 'components/common/GridWrapper/GridWrapper'
import MainCarousel from 'components/carousels/MainCarousel/MainCarousel'
import SaleCarousel from 'components/carousels/SaleCarousel/SaleCarousel'
import ServiceItem from 'components/ServiceItem/ServiceItem'
import React from 'react'
import { BiCut } from 'react-icons/bi'
import { INITIAL_SERVICE_ITEMS } from 'utils/constants'
function Home(props) {
  return (
    <div>
      <MainCarousel/>
      <FeaturedSection label="Dịch vụ cơ bản">
        <GridWrapper col={4} gap={15}>
          {INITIAL_SERVICE_ITEMS.map((item, index) => (<ServiceItem key={index} label={item.label} icon={BiCut}/>))}
        </GridWrapper>
      </FeaturedSection>
      <FeaturedSection label="Ưu đãi nổi bật">
        <SaleCarousel/>
      </FeaturedSection>
    </div>
  )
}

export default Home