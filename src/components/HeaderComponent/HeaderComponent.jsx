import React from 'react'
import { Col, Row, Input } from 'antd';
import { WrapperAccountHeader, WrapperHeader, WrapperTextHeader, WrapperTextHeaderAccount } from './style';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import BtnInputSearch from '../BtnInputSearch/BtnInputSearch';

const {Search} = Input;
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>TIKI</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <BtnInputSearch
            size = "large"
            placeholder="input search text"
            textButton="Tìm kiếm"
          />
        </Col>
        <Col span={6} style={{display:'flex', gap:'20px', alignItems:'center'}}>
          <WrapperAccountHeader>
            <UserOutlined style={{fontSize: '30px'}}/>
            <div>
              <WrapperTextHeaderAccount >Đăng nhập/Đăng ký</WrapperTextHeaderAccount>
              <div>
                <WrapperTextHeaderAccount>Tài khoản</WrapperTextHeaderAccount>
                <CaretDownOutlined/>
              </div>
            </div>
          </WrapperAccountHeader>
          <div>
            <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}}/>
            <WrapperTextHeaderAccount>Giỏ hàng</WrapperTextHeaderAccount>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent