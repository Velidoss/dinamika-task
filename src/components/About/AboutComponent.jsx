import React from 'react';
import { Card, Row, Col } from 'antd';

const AboutComponent = () => {

return (
  <Row>
    <Col span={18} offset={3}>    
      <Card style={{
          marginTop: '20px', 
        }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi iste ea neque, 
        repudiandae magnam doloribus! Quasi dicta aliquam commodi voluptatem ab cum doloribus blanditiis, 
        id adipisci eos illum error velit?
      </Card>
    </Col>
  </Row>

)};

export default AboutComponent;