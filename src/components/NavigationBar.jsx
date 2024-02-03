import React from 'react';
import './NavigationBar.css';
import lock from '../images/lock-line-icon.svg';
import login from '../images/login.svg';

export const NavigationBar = () => {
    return (
        <nav className = "navigationBar">
        {/* <div className = "navigationBarLeft"> */}
        <span className = "navigationBarLeft">
          <span>
            <p className = "FREE">FREE</p>
            <p className = "TO">2</p>
            <p className = "LANCE">LANCE</p>
          </span>
          <span href = "/html/" className = "navBarText">Trang chủ</span>
          <span href = "/css/" className = "navBarText">Tìm việc</span>
          <span href = "/js/" className = "navBarText">Chủ đề</span>
          <span href = "/python/" className = "navBarText">Liên lạc</span>
        {/* </div> */}
        </span>
        <span className = "navigationBarRight">
          <span >
            <img src = {lock} className = "lock-scale"></img>
            <p className='navBarRightText'>  Đăng Ký</p>
          </span>
          <span >
            <img src = {login} className = "login-scale"></img>
            <p className='navBarRightText'> Đăng Nhập</p>
          </span>
        </span>
      </nav>
    )
}