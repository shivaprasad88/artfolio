import React from 'react';
import { Row, Col, Container, Image , Media, Jumbotron, Button} from 'react-bootstrap';
import { CSSGrid, layout } from 'react-stonecutter';


import prFort from '../../assets/web-6655.jpg';
import prFortIcon from '../../assets/exports/300p-6564.jpg';
import prCemetary from '../../assets/web-6564.jpg';
import goaDog from '../../assets/web-4150.jpg';
import goaSelfie from '../../assets/web-2997.jpg';

function TravelComponent() {
    return <CSSGrid class="image-grid"
  component="ul"
  columns={5}
  columnWidth={300}
  gutterWidth={5}
  gutterHeight={5}
  layout={layout.pinterest}
  duration={800}
  easing="ease-out"
>
  <li key="A" itemHeight={128}><Image src={prFortIcon} thumbnail  /></li>
  <li key="B" itemHeight={100}><Image src={prCemetary} thumbnail/></li>
  <li key="C" itemHeight={100}><Image src={goaDog} thumbnail /></li>
</CSSGrid>

}


export default TravelComponent;