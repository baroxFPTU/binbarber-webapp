import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import FluidSkeleton from 'components/skeletons/FluidSkeleton/FluidSkeleton'
import React, { useState } from 'react'
import CSSModule from './MainCarousel.module.scss'

function MainCarousel(props) {
  const [isPending, setIsPending] = useState(true)
  const initialData = [
    { id: 1, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 2, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 3, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 4, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 5, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 6, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
  ]

  const MAIN_CAROUSEL_OPTIONS = {
    arrows: false,
    rewind: true,
    autoplay: true,
    interval: 4000,
    lazyload: true,
    speed: 1000,
    rewindSpeed: 500,
    gap: '0.5em'
  }

  return (
    <Splide
      hasTrack={ false }
      aria-label="Main Carousel"
      options={MAIN_CAROUSEL_OPTIONS}
      tag="section"
    >
      <SplideTrack>
        {
          initialData.map((item, key) => (
            <SplideSlide key={key}>
              <div className={CSSModule.slideItem}>
                {isPending && <FluidSkeleton/>}
                <img className={CSSModule.slideImg} src={item.imageUrl} alt={item.description} onLoad={() => setIsPending(false)}/>
              </div>
            </SplideSlide>
          ))
        }
      </SplideTrack>
    </Splide>
  )
}

export default MainCarousel