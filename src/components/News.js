import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function News(props) {
  return (
    <Col>
      <Row>
        <Col sm={3}>Сейчас в СМИ</Col>
        <Col sm={3}>Главные новости</Col>
        <Col sm={3}>Рекомендуем</Col>
        <Col sm={3}>{new Date().toLocaleString()}</Col>
      </Row>

      <Row>
        <img src={props.icon} alt={props.text} />
        <a href={props.link}>{props.text}</a>
      </Row>
    </Col>
  );
}
