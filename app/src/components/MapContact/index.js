import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import { YMaps, Map } from 'react-yandex-maps';


export default class MapContact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <MapWrapper>
        <MapContainer>
          <YMaps>
            <Map
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              width='100%'
              height='100%'
            />
          </YMaps>
        </MapContainer>
        <MapInfo>
          {contact.map((element, index, array) =>
            element.address !== null ?
              <MapAddres>
                <MapAddresText key={index} href=''>{element.address}</MapAddresText>
              </MapAddres>
              : null
          )}
          <MapPhoneMail>
            <MapPhone>
              <MapInfoTitle>Позвоните нам:</MapInfoTitle>
              {contact.map((element, index) =>
                <MapInfoLink key={index} href=''>{element.phone}</MapInfoLink>
              )}
            </MapPhone>
            <MapMail>
              <MapInfoTitle>Напишите:</MapInfoTitle>
              {contact.map((element, index) =>
                <MapInfoLink key={index} href=''>{element.mail}</MapInfoLink>
              )}
            </MapMail>
          </MapPhoneMail>
        </MapInfo>
      </MapWrapper>
    )
  }
}

const MapWrapper = styled.div`
  max-width: 800px;
  height: 986px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MapContainer = styled.div`
  max-width: 800px;
  height: 800px;

  @media ${responsive.tablet} {
    max-width: 100%;
  }
`;

const MapInfo = styled.div`
  max-width: 800px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #E6B980;
  padding-left: 20px;

  @media ${responsive.tablet} {
    height: unset;
  }
  
`;

const MapAddres = styled.div`
  margin-top: 27px;
`;

const MapAddresText = styled.a`
  font-family: Montserrat Bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-decoration: none;
`;

const MapPhoneMail = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;

  @media ${responsive.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

const MapPhone = styled.div`
  display: flex;
  flex-direction: column;

  @media ${responsive.tablet} {
    width: 100%;
  }
`;

const MapInfoTitle = styled.div`
  margin-bottom: 20px;
  font-family: Montserrat Bold;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
`;

const MapInfoLink = styled.a`
  margin-bottom: 10px;
  font-family: Montserrat Bold;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-decoration: none;
`;

const MapMail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;

  @media ${responsive.tablet} {
    margin-left: 0;
    margin-top: 20px;
  }
`;

