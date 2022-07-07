import React from 'react'
import styled from 'styled-components'

import Card from 'components/common/Card'
import { TickIcon } from 'components/Icon/Icon'

const CardCustomStyled = styled(Card)`
  & {
    box-shadow: 0px 4px 9px rgba(168, 168, 168, 0.28);
    transition: all 0.25s ease-in-out;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    display: flex;

    &[data-selected='true'] .card-content {
      background: #fef7e3;
    }

    & .card-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .service-selected {
      position: absolute;
      top: -15px;
      left: -10px;
      width: 30px;
      height: 30px;
      background-color: #358477;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      svg {
        width: 18px;
        height: 18px;
        fill: #f3f3f3;
      }
    }
  }
  .card-pic {
    height: 170px;
    overflow: hidden;
    img {
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 455px) {
      height: 16vh;
    }
  }

  .card-content {
    flex: 1;
    position: relative;
    padding: 12px;
    background: #fff;
    user-select: none;
    h3 {
      padding: 0;
      margin: 0;
    }

    .price {
      position: absolute;
      top: -25px;
      right: 12px;

      width: 50px;
      height: 50px;
      background: #fac172;
      color: #64300a;
      font-weight: 600;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

function ServiceCard(props) {
  const { title, description, imageURL, price } = props.data

  return (
    <CardCustomStyled onClick={props.onSelect} data-selected={props.isSelected}>
      {props.isSelected && (
        <div className='service-selected'>
          <TickIcon />
        </div>
      )}
      <div className='card-pic'>
        <img src={imageURL} alt={title + ' - ' + description} />
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className='price'>{`${price / 1000}K`}</span>
      </div>
    </CardCustomStyled>
  )
}

export default ServiceCard
