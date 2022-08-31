import BookingDetail from 'features/booking/components/BookingDetail'
import BookingList from 'features/booking/components/BookingList'
import config from 'config'
import BookingLayout from 'components/layouts/BookingLayout'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Voucher from 'pages/Voucher'
import PickServicePage from 'features/service/pages/PickServicePage'
import PickDatePage from 'features/booking/pages/PickDatePage'
import ReviewPagePage from 'features/booking/pages/ReviewPage'
import RedirectPage from 'pages/RedirectPage'
import ResultPage from 'features/booking/pages/ResultPage'
import NotFound from 'pages/NotFound'

const PUBLIC_ROUTES = [
  { path: config.routes.home, element: Home },
  {
    path: config.routes.userBooking,
    element: BookingList
  },
  {
    path: `${config.routes.userBooking}/:bookingId`,
    element: BookingDetail,
    layout: BookingLayout
  },
  {
    path: `${config.routes.booking}/chon-dich-vu`,
    element: PickServicePage,
    layout: BookingLayout
  },
  { path: `${config.routes.booking}/chon-ngay`, element: PickDatePage, layout: BookingLayout },
  { path: `${config.routes.booking}/xem-lai`, element: ReviewPagePage, layout: BookingLayout },
  { path: `${config.routes.booking}/ket-qua`, element: ResultPage, layout: null },
  {
    path: `${config.routes.booking}`,
    element: RedirectPage,
    props: { to: `${config.routes.booking}/chon-dich-vu` }
  },
  { path: config.routes.voucher, element: Voucher },
  { path: config.routes.profile, element: Profile },
  { path: '*', element: NotFound, layout: null }
]

export { PUBLIC_ROUTES }
