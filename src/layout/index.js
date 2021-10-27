import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/linkedin/Header'
import Sidebar from './Sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './Footer'

const AppLayout =({children}) =>{
  return(
    <>
      <div>
        <Header />
      </div>
      <Container className="mt-20">
        <Row>
          <Col xs={2}>Left Sidebar Placeholder</Col>
          <Col xs={7}><main className="main-content">{children}</main></Col>
          <Col xs={3}>Right Sidebar Placeholder</Col>
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
