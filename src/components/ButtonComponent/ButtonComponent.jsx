import React from 'react'
import { Button } from 'antd'
const ButtonComponent = ({size, buttonStyle, buttonTextStyle,textButton, ...rests} ) => {
  return (
    <Button 
        size={size} 
        style={buttonStyle}
        {...rests}
        >
            <span style={buttonTextStyle}>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent