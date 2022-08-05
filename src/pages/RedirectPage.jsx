import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const RedirectPage = (props) => {
  return <Navigate to={props.to} />
}

RedirectPage.propTypes = {
  to: PropTypes.string
}

RedirectPage.defaultProps = {
  to: '/'
}

export default RedirectPage
