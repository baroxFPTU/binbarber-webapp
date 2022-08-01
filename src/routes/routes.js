import BookingDetail from 'features/booking/components/BookingDetail'
import BookingForm from 'components/Form/BookingForm/BookingForm'
import BookingList from 'features/booking/components/BookingList'
import config from 'config'
import BookingLayout from 'containers/layouts/BookingLayout'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Voucher from 'pages/Voucher'
import ServicePicker from 'features/service/components/ServicePicker'
import DatePicker from 'features/booking/components/DatePicker/DatePicker'

const PUBLIC_ROUTES = [
  { path: config.routes.home, element: Home },
  {
    path: config.routes.myBooking,
    element: BookingList
  },
  { path: `${config.routes.myBooking}/:bookingId`, element: BookingDetail, layout: BookingLayout },
  { path: `${config.routes.booking}/`, element: BookingForm, layout: BookingLayout },
  { path: `${config.routes.booking}/chon-dich-vu`, element: ServicePicker, layout: BookingLayout },
  { path: `${config.routes.booking}/chon-ngay`, element: DatePicker, layout: BookingLayout },
  { path: config.routes.voucher, element: Voucher },
  { path: config.routes.profile, element: Profile }
]

export { PUBLIC_ROUTES }
