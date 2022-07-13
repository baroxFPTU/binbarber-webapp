# Bin Barber App

A simple React app, help Mr.Bin manage booking & turn over.

## Features

- Booking
- Apply voucher
- Create & manage voucher
- View order of customer
- Check bill: services, time, total,...
- Update status of customer, finish or not

## Data Schema [Here](https://app.diagrams.net/#G1R-wQdX-fbgEXSJPTRWjpAWssrvfaADQz)

## Dependences

- [Splide JS](https://splidejs.com/)
- Calendar - [Ant Design](https://ant.design/components/calendar/#header)
- Sass
- React Router
- Eslint
- Redux Toolkit
- SCSS
- styled components
- axios

## Flow

### Booking

1. User pick services
2. User pick dates and times
3. show Summary booking for confirm
4. Confirm - show modal enter name \* phone
5. Unconfirmed - can go backward to re-choose

## Logic

### ServicePicker

- Load service list from db
- set service list to state
- render service list (from state)
  **Action**
  User pick a service
- change state of service card

TODO

- handle submit font
- validate form
- create "chon dich vu" page
- handle logic "chon dich vu"
- create "thoi gian" page
- handle logic "thoi gian" page
- add redux

## What have I learned?

Redux saga

- **Remember execute child saga** when configure it into root saga.
- add more middleware into Redux Toolkit (RTK) with **getDefaultMiddleware**
