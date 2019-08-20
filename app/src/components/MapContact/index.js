import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { cleanPhone } from '../../helpers/format'

export default class MapContact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <MapWrapper>
        <MapInfo>
          {contact.map((element, index, array) =>
            element.address !== null ?
              <MapAddres key={index}>
                <MapAddresText href=''>{element.address}</MapAddresText>
              </MapAddres>
              : null
          )}
          <MapPhoneMail>
            <MapPhone>
              <MapInfoTitle>Позвоните нам:</MapInfoTitle>
              {contact.map((element, index) =>
                <MapInfoLink key={index} href={`tel:+7${cleanPhone(element.phone)}`}>{element.phone}</MapInfoLink>
              )}
            </MapPhone>
            <MapMail>
              <MapInfoTitle>Напишите:</MapInfoTitle>
              {contact.map((element, index) =>
                <MapInfoLink key={index} href={`mailto:${element.mail}`}>{element.mail}</MapInfoLink>
              )}
            </MapMail>
          </MapPhoneMail>
        </MapInfo>
        <MapContainer>
          <YMaps>
            <Map
              defaultState={{ center: [56.322759, 44.001369], zoom: 15 }}
              width='100%'
              height='100%'
            >
              <Placemark geometry={[56.322759, 44.001369]} />
            </Map>
          </YMaps>
        </MapContainer>
      </MapWrapper>
    )
  }
}

const MapWrapper = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  @media ${responsive.notebookS} {
    width: 100%;
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 800px;
  @media ${responsive.notebookS} {
    height: 550px;
  }
  @media ${responsive.tabletB} {
    height: 350px;
  }
`

const MapInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #E6B980;
  padding: 20px 10px 20px 20px;
  box-sizing: border-box;

  @media ${responsive.tablet} {
    height: unset;
  }
  
`

const MapAddres = styled.div``

const MapAddresText = styled.a`
  font-family: Montserrat Bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-decoration: none;
  @media ${responsive.tablet} {
    font-size: 16px;
  }
`

const MapPhoneMail = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;

  @media ${responsive.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`

const MapPhone = styled.div`
  display: flex;
  flex-direction: column;

  @media ${responsive.tablet} {
    width: 100%;
  }
`

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
`

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
`

const MapMail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;

  @media ${responsive.tablet} {
    margin-left: 0;
    margin-top: 20px;
  }
`

