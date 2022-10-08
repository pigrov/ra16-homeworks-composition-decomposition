import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdsInternal from "./ads/Internal";
import AdsExternal from "./ads/External";

import WidgetWeather from "./widget/Weather";
import WidgetVisits from "./widget/Visits";
import WidgetMap from "./widget/Map";
import WidgetTV from "./widget/TV";
import WidgetStream from "./widget/Stream";

import FormSearch from "./FormSearch";
import News from "./News";

export default function YandexMainLayout(props) {
  return (
    <Container>
      <Row>
        <Col sm={9}>
          {/* Компонент новости и курсы валют, принимает список новостей (иконка, текст и ссылка) и курсов */}
          <News />
        </Col>
        <Col sm={3}>
          {/* Компонент внутренней рекламы, принимает картинку, ссылку, текст ссылки и описание */}
          <AdsInternal />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Компонент формы  поиска и списка быстрых ссылок */}
          <FormSearch />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Компонент рекламы, принимает ссылку и картинку на баннер */}
          <AdsExternal />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Компонент виджет погоды (иконка, погода сейчас, днеи и ночью) */}
          <WidgetWeather />
          {/* Компонент посещаемого массив(ссылка, заголовок и текст) */}
          <WidgetVisits />
        </Col>
        <Col>
          {/* Компонент посещаемого массив(ссылка, название) */}
          <WidgetMap />
          {/* Компонент телепрограммы массив(ссылка, время, название передачи, канал) */}
          <WidgetTV />
        </Col>
        <Col>
          {/* Компонент телепрограммы массив(ссылка, название передачи, канал) */}
          <WidgetStream />
        </Col>
      </Row>
    </Container>
  );
}
