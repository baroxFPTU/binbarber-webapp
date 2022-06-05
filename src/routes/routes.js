import BookingDetail from 'components/booking/BookingDetail/BookingDetail'
import BookingList from 'components/booking/BookingList/BookingList'
import config from 'config'
import BookingLayout from 'containers/layouts/BookingLayout'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Voucher from 'pages/Voucher'

const PUBLIC_ROUTES = [
  { path: config.routes.home, element: Home },
  {
    path: config.routes.booking,
    element: BookingList
  },
  { path: `${config.routes.booking}/:id`, element: BookingDetail, layout: BookingLayout },
  { path: config.routes.voucher, element: Voucher },
  { path: config.routes.profile, element: Profile }
]

export { PUBLIC_ROUTES }