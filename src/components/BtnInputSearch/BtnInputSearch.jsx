import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const BtnInputSearch = (props) => {
    const {size, placeholder, textButton, bordered, backgroundInput = '#fff', backgroundButton = 'rgb(13,82,192)', colorButton = '#fff'} = props
  return (
    <div style={{display:'flex'}}>
        <InputComponent
        size={size} 
        placeholder={placeholder}
        variant={bordered}
        style={{background:backgroundInput}}/>

        <ButtonComponent 
        size={size} 
        icon={<SearchOutlined style={{color:colorButton}}/>}
        buttonStyle={{background:backgroundButton, border:!bordered && 'none'}}
        textButton={textButton}
        buttonTextStyle={{color: colorButton}}/>
          
    </div>
  )
}

export default BtnInputSearch