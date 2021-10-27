import React from "react"
import Nav from 'react-bootstrap/Nav'
// import IconButton from '@material-ui/core/IconButton';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Grid from "@material-ui/core/Grid";
// import {SupervisorAccountOutlined, ShoppingCartOutlined, SearchOutlined} from '@material-ui/icons';
// import { withStyles } from '@material-ui/core/styles';
export default class Header extends React.Component {

    render() {
        return (
            <header>
                <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
            </header>
        )
    }
}