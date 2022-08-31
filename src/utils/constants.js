import { HairDryer, Shave, Scissor, HairStyle, CurlingHair } from 'components/icons/Icon'

export const INITIAL_SERVICE_ITEMS = [
  { id: 1, label: 'Cắt tóc', icon: Scissor },
  { id: 2, label: 'Tạo kiểu', icon: HairStyle },
  { id: 3, label: 'Cạo mặt', icon: Shave },
  { id: 4, label: 'Uốn', icon: CurlingHair },
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

export const SERVICE_CATEGORIES = {
  data: [
    {
      id: 1,
      name: 'Cắt gội cơ bản',
      services: [
        {
          id: 1,
          name: 'Cắt tóc',
          description: 'Tỏa sáng như Mr.Bin',
          imageURL: 'https://source.unsplash.com/random',
          price: 30000,
          label: 'basic'
        },
        {
          id: 2,
          name: 'Gội & massage',
          description: 'Ân ái, mê man, get high',
          imageURL: 'https://source.unsplash.com/random',
          price: 22000,
          label: 'basic'
        }
      ]
    },
    {
      id: 2,
      name: 'Uốn tạo kiểu',
      services: [
        {
          id: 3,
          name: 'Uốn xịn xò',
          description: 'Rep 1:1 trai Hàn',
          imageURL: 'https://source.unsplash.com/random',
          price: 140000,
          label: 'medium'
        },
        {
          id: 4,
          name: 'Tạo kiểu',
          description: 'Xinh hơn NYM của NYC',
          imageURL: 'https://source.unsplash.com/random',
          price: 0,
          label: 'medium'
        }
      ]
    },
    {
      id: 3,
      name: 'Chăm sóc',
      services: [
        {
          id: 5,
          name: 'Cạo râu',
          description: 'Sạch sẽ như hòn Chồng',
          imageURL: 'https://source.unsplash.com/random',
          price: 0,
          label: 'care'
        },
        {
          id: 6,
          name: 'Cạo mặt',
          description: 'Lán o con gà gáy',
          imageURL: 'https://source.unsplash.com/random',
          price: 0,
          label: 'care'
        }
      ]
    }
  ],
  createdAt: Date.now(),
  updatedAt: Date.now()
}

export const INITIAL_USERS = [
  {
    id: 1908,
    name: 'Phan Quoc Bao'
  }
]

export const INITIAL_TIME_DATA = [
  {
    id: 0,
    label: '8h00',
    hourState: 8,
    minuteState: 0
  },
  {
    id: 1,
    label: '9h00',
    hourState: 9,
    minuteState: 0
  },
  {
    id: 2,
    label: '10h00',
    hourState: 10,
    minuteState: 0
  },
  {
    id: 3,
    label: '11h00',
    hourState: 11,
    minuteState: 0
  },
  {
    id: 4,
    label: '12h00',
    hourState: 12,
    minuteState: 0
  },
  {
    id: 5,
    label: '13h00',
    hourState: 13,
    minuteState: 0
  },
  {
    id: 6,
    label: '14h00',
    hourState: 14,
    minuteState: 0
  },
  {
    id: 7,
    label: '15h00',
    hourState: 15,
    minuteState: 0
  },
  {
    id: 8,
    label: '16h00',
    hourState: 16,
    minuteState: 0
  },
  {
    id: 9,
    label: '17h00',
    hourState: 17,
    minuteState: 0
  },
  {
    id: 10,
    label: '18h00',
    hourState: 18,
    minuteState: 0
  },
  {
    id: 11,
    label: '19h00',
    hourState: 19,
    minuteState: 0
  }
]

export const INITIAL_SALE_DATA = [
  { id: 1, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
  { id: 2, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
  { id: 3, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
  { id: 4, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
  { id: 5, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
  { id: 6, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' }
]
