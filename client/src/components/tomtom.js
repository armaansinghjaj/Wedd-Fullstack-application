import React from 'react';
import { useState, useEffect, useRef } from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';

import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand
} from "reactstrap";

const MAX_ZOOM = 17;

export default function Tomtom() {
    const [mapLongitude, setMapLongitude] = useState();
    const [mapLatitude, setMapLatitude] = useState();
    const [mapZoom, setMapZoom] = useState();
    const [map, setMap] = useState({});

    const increaseZoom = () => {
        if (mapZoom < MAX_ZOOM) {
          setMapZoom(mapZoom + 1);
        }
      };
      
      const decreaseZoom = () => {
        if (mapZoom > 1) {
          setMapZoom(mapZoom - 1);
        }
      };
      
      const updateMap = () => {
        map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
        map.setZoom(mapZoom);
      };

      useEffect(() => {
        let map = tt.map({
          // key: "nG6oY1L34rbTfoLz0D205CrB42a3mf8m",
          container: mapElement.current,
          center: [mapLongitude, mapLatitude],
          zoom: mapZoom
        });
        setMap(map);
        return () => map.remove();
      }, []);

    return(
        <div className='maps-wrapper'>
            <Navbar dark={true} style={{ backgroundColor: "#4287f5" }}>
        <NavbarBrand>TomTom Maps + React = 😃</NavbarBrand>
      </Navbar>
      <Container className="mapContainer">
        <Row>
          <Col xs="4">
            <h4>Map Controls</h4>
            <FormGroup>
              <Label for="longitude">Longitude</Label>
              <Input
                type="text"
                name="longitude"
                value={mapLongitude}
                onChange={(e) => setMapLongitude(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="latitude">Latitude</Label>
              <Input
                type="text"
                name="latitude"
                value={mapLatitude}
                onChange={(e) => setMapLatitude(e.target.value)}
              />
            </FormGroup>
            <Col xs="12">
              <Row>Zoom</Row>
              <Row>
                <Button outline color="primary" onClick={decreaseZoom}>
                  -
                </Button>
                <div className="mapZoomDisplay">{mapZoom}</div>
                <Button outline color="primary" onClick={increaseZoom}>
                  +
                </Button>
              </Row>
            </Col>
            <Col xs="12">
              <Row className="updateButton">
                <Button color="primary" onClick={updateMap}>
                  Update Map
                </Button>
              </Row>
            </Col>
          </Col>
          <Col xs="8">
            <div ref={mapElement} className="mapDiv" />
          </Col>
        </Row>
      </Container>
        </div>
    )
}