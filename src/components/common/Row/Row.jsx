import React from 'react';
import styled from 'styled-components'

const RowStyled = styled.div`
margin-bottom: 18px;
display: flex;
justify-content: ${props => props.spaceBetween ? 'space-between' : 'flex-start'};
align-items: center;
`

function Row(props) {
  return (
    <RowStyled {...props}>
      {props.children}
    </RowStyled>
  );
}

export default Row;