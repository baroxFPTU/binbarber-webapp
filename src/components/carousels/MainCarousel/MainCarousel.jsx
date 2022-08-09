import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import FluidSkeleton from 'components/skeletons/FluidSkeleton/FluidSkeleton'
import config from '../../../config'
import React, { useState } from 'react'
import { INITIAL_SALE_DATA } from 'utils/constants'
import CSSModule from './MainCarousel.module.scss'

function MainCarousel() {
  const [isPending, setIsPending] = useState(true)

  return (
    <Splide
      hasTrack={false}
      aria-label='Main Carousel'
      options={config.carousel.main_carousel_option}
      tag='section'
    >
      <SplideTrack>
        {INITIAL_SALE_DATA.map((item, key) => (
          <SplideSlide key={key}>
            <div className={CSSModule.slideItem}>
              {isPending && <FluidSkeleton />}
              <img
                className={CSSModule.slideImg}
                src={item.imageUrl}
                alt={item.description}
                onLoad={() => setIsPending(false)}
              />
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  )
}

export default MainCarousel
