import React from 'react'
import CSSModule from './ModalBody.module.scss'

function ModalBody(props) {
  return (
    <div className={CSSModule.ModalBody}>
      <div className={CSSModule.ModalBodyContainer}>
        <div className={CSSModule.Row}>
          <h3>Nghĩa đẹp trai</h3>
          <span>8:00 - 31/12/2022</span>
        </div>
        <div className={CSSModule.Row}>
          <h3>Trạng thái</h3>
          <span>Chưa thanh toán</span>
        </div>
        <div className="divider"></div>
        <h2>Dịch vụ</h2>
        <div className={CSSModule.Row}>
          <h3>Cắt tóc cơ bản</h3>
          <span>30.000 VND</span>
        </div>
        <div className={CSSModule.Row}>
          <h3>Gội & Massage</h3>
          <span>22.000 VND</span>
        </div>
        <div className={CSSModule.Row}>
          <h3>Tạo kiểu</h3>
          <span>0 VND</span>
        </div>
        <div className="divider"></div>
        <div className={CSSModule.Row}>
          <h3>Tạm tính</h3>
          <span>52.000 VND</span>
        </div>
        <div className={CSSModule.Row}>
          <h3>Giảm giá</h3>
          <span>- 12.000 VND</span>
        </div>
        <div className={CSSModule.Row}>
          <h3>Thành tiền</h3>
          <span>40.000 VND</span>
        </div>
      </div>
      <div className="btn-group-vertical">
        <button className="btn btn-primary">Đặt phát nữa</button>
        <button className="btn">Trở lại</button>
      </div>
    </div>
  )
}

export default ModalBody