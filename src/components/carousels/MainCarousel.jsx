import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import FluidSkeleton from 'components/skeletons/FluidSkeleton'
import config from '../../config'
import React, { useState } from 'react'
import { INITIAL_SALE_DATA } from 'utils/constants'
import CSSModule from './MainCarousel.module.scss'
import styled from 'styled-components'

const SlideItem = styled.div`
  max-height: 160px;
  border-radius: ${(props) => props.theme.base.radius};
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

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
            <SlideItem>
              {isPending && <FluidSkeleton />}
              <img
                className={CSSModule.slideImg}
                src={item.imageUrl}
                alt={item.description}
                onLoad={() => setIsPending(false)}
              />
            </SlideItem>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  )
}

export default MainCarousel
