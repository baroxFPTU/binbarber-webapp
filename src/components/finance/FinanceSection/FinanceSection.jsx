import Row from 'components/common/Row/Row'
import React from 'react'
import styled from 'styled-components'
import { formatCurrency } from 'utils'

const FinanceSectionStyled = styled.div`
  font-size: 18px;
  margin-bottom: 32px;
  .total {
    font-size: 20px;
  }
`

function FinanceSection(props) {
  const { subTotal, discount } = props.data

  console.log(subTotal);

  return (
    <FinanceSectionStyled>
      <Row spaceBetween>
        <span>Tạm tính</span>
        <span>{formatCurrency(subTotal)}</span>
      </Row>
      <Row spaceBetween>
        <span>Giảm giá</span>
        <span>{formatCurrency(discount)}</span>
      </Row>
      <Row spaceBetween className="total">
        <span className="bold">Thành tiền</span>
        <span className="bold">{formatCurrency(subTotal - discount)}</span>
      </Row>
    </FinanceSectionStyled>
  )
}

export default FinanceSection