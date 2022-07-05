import { HairDryer, PoirotMustache, Scissor } from 'components/Icon/Icon'

export const INITIAL_SERVICE_ITEMS = [
  { id: 1, label: 'Cắt tóc', icon: Scissor },
  { id: 2, label: 'Tạo kiểu' },
  { id: 3, label: 'Cạo mặt', icon: PoirotMustache },
  { id: 4, label: 'Uốn' },
  { id: 5, label: 'Gội & Sấy', icon: HairDryer }
]

export const PAGE_DESTINATIONS = {
  HOME: '/',
  MANAGE_BOOKING: '/bookings',
  ME: '/me',
  VOUCHERS: '/vouchers'
}

export const INITIAL_BOOKINGS = [
  {
    id: 1,
    userId: 1908,
    selectedServices: [1, 2, 3],
    isPaid: 0,
    createdAt: Date.now(),
    updatedAt: null,
    bookedAt: new Date(2022, 5, 12, 8, 0, 0, 0),
    expiredAt: new Date(2022, 5, 14, 8, 0, 0, 0),
    _destroy: false
  },
  {
    id: 2,
    userId: 1908,
    selectedServices: [1, 3, 4],
    isPaid: 1,
    createdAt: Date.now(),
    updatedAt: null,
    bookedAt: new Date(2022, 5, 12, 8, 30, 0, 0),
    expiredAt: new Date(2022, 5, 14, 8, 0, 0, 0),
    _destroy: false
  },
  {
    id: 3,
    userId: 1908,
    selectedServices: [2],
    isPaid: -1,
    createdAt: Date.now(),
    updatedAt: null,
    bookedAt: new Date(2022, 5, 12, 21, 30, 0, 0),
    expiredAt: new Date(2022, 5, 14, 8, 0, 0, 0),
    _destroy: false
  }
]

export const INITIAL_SERVICES = [
  {
    id: 1,
    label: 'Cắt tóc',
    description: 'Đảm bảo bảnh trai như Sơn Tùng',
    price: 30000,
    createdAt: Date.now()
  },
  {
    id: 2,
    label: 'Gội đầu',
    description: 'Mát mẻ từ da dẻ',
    price: 20000,
    createdAt: Date.now()
  },
  {
    id: 3,
    label: 'Massage',
    description: 'Phê pha ô la la',
    price: 0,
    createdAt: Date.now()
  },
  {
    id: 4,
    label: 'Cạo râu',
    description: 'Cạo sạch từng cen-ti-met',
    price: 15000,
    createdAt: Date.now()
  }
]

export const INITIAL_SERVICES_DETAILS = [
  {
    id: 1,
    title: 'Cắt tóc',
    description: 'Tỏa sáng như Mr.Bin',
    imageURL: 'https://source.unsplash.com/random',
    price: 30000,
    label: 'basic'
  },
  {
    id: 2,
    title: 'Gội & massage',
    description: 'Ân ái, mê man, get high',
    imageURL: 'https://source.unsplash.com/random',
    price: 22000,
    label: 'basic'
  },
  {
    id: 3,
    title: 'Uốn xịn xò',
    description: 'Rep 1:1 trai Hàn',
    imageURL: 'https://source.unsplash.com/random',
    price: 140000,
    label: 'medium'
  },
  {
    id: 4,
    title: 'Tạo kiểu',
    description: 'Xinh hơn NYM của NYC',
    imageURL: 'https://source.unsplash.com/random',
    price: 0,
    label: 'medium'
  },
  {
    id: 5,
    title: 'Cạo râu',
    description: 'Sạch sẽ như hòn Chồng',
    imageURL: 'https://source.unsplash.com/random',
    price: 0,
    label: 'care'
  },
  {
    id: 6,
    title: 'Cạo mặt',
    description: 'Lán o con gà gáy',
    imageURL: 'https://source.unsplash.com/random',
    price: 0,
    label: 'care'
  }
]

export const INITIAL_USERS = [
  {
    id: 1908,
    name: 'Phan Quoc Bao'
  }
]
