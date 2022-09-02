import React from 'react'
import styled from 'styled-components'

const FormSectionStyled = styled.div`
  display: ${(props) => (props.horizontal || props.vertical ? 'flex' : '')};
  flex-direction: ${(props) => {
    if (props.horizontal) return 'row'
    if (props.vertical) return 'column'
  }};
  justify-content: ${(props) => props.horizontal && 'space-between'};
  align-items: ${(props) => props.horizontal && 'center'};
`

const HeadingSectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 16px 0;

  & h3 {
    padding: 0;
    /* padding: ${(props) => props.horizontal && '0'}; */
  }
`

export const FormSection = ({ title, titleRightElement, children, ...props }) => {
  return (
    <FormSectionStyled {...props}>
      {title && (
        <HeadingSectionStyled>
          <h3>{title}</h3> {titleRightElement}
        </HeadingSectionStyled>
      )}
      {children}
    </FormSectionStyled>
  )
}
