import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.css';
import User from '../../../assets/images/avatars/user1.png'

function HeaderOption({ avatar, Icon, title, onClick }) {
  
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={User} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption
