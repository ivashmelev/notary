import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../responsive'
import Header from './Header'
import Title from './Title'
// import Form from './Form'
import MapContact from './MapContact'
import Developer from './Developer'
import { Scrollbar } from './Scrollbar'


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: []
    }
  }

  componentDidMount() {
    (async () => {
      try {
        const response = await fetch('https://notary-nn.ru/api/v2/routes/contact.php');
        if (await response.ok) {
          this.setState({ contact: await response.json() })
        }
      } catch (err) {
        throw err;
      }
    })();
  }


  render() {
    return (
      <ContactWrapper>
        <Scrollbar>
          <ContactContent>
            <Header backgroundImg='contact' />
            <Title text='КОНТАКТЫ' />
            <ContactPageWrap>
              <ContactContainer>
                {/* <Form /> */}
                <MapContact contact={this.state.contact} />
              </ContactContainer>
              <ContactLinkContainer>
                <ContactLinkTitle>Ближайшие нотариальные конторы</ContactLinkTitle>
                <ContactNotaryWrap>
                  <ContactNotaryName>
                    Маркичева Надежда Валерьевна
                  </ContactNotaryName>
                  <ContactLink href='https://yandex.ru/maps/47/nizhny-novgorod/house/alekseyevskaya_ulitsa_13/YE0YdgdkSkYDQFtsfX9zc3VhbQ==/?ll=44.004690%2C56.322644&sll=44.005986%2C56.326887&sspn=0.821228%2C0.324659&z=16.44' target='_blank'>
                    <svg width="24" height="24" style={{ marginRight: '15px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 23.3276L12.6577 22.7533C18.1887 17.9237 21 13.7068 21 10C21 4.75066 16.9029 1 12 1C7.09705 1 3 4.75066 3 10C3 13.7068 5.81131 17.9237 11.3423 22.7533L12 23.3276ZM12 20.6634C7.30661 16.4335 5 12.8492 5 10C5 5.8966 8.16411 3 12 3C15.8359 3 19 5.8966 19 10C19 12.8492 16.6934 16.4335 12 20.6634ZM12 5C14.7614 5 17 7.23858 17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5ZM9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10Z" fill="black" />
                    </svg>
                    улица Алексеевская, дом 13, город Нижний Новгород
                  </ContactLink>
                  <ContactLink href="tel:+78314196039">
                    <svg width="24" height="24" style={{ marginRight: '15px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.8566 8.33802C11.3747 7.63981 11.5605 6.90396 10.9746 6.25443C9.65961 4.41445 8.77527 3.27662 8.22057 2.72866C7.16601 1.68693 5.43124 1.82784 4.51791 2.72777C4.02736 3.21113 3.86128 3.37712 3.35759 3.88873C0.551938 6.69589 2.26297 12.6301 6.81151 17.1831C11.359 21.7351 17.2927 23.4471 20.1042 20.634C20.569 20.1859 20.9626 19.7921 21.2729 19.4641C22.168 18.5181 22.3038 16.8598 21.267 15.7825C20.7355 15.2302 19.6504 14.3886 17.7331 13.0171C17.1458 12.492 16.4495 12.6058 15.8112 13.0246C15.5041 13.226 15.2806 13.4298 14.8587 13.8522L14.0924 14.6188C13.9915 14.7198 12.6211 14.0335 11.2908 12.702C9.95984 11.3697 9.27402 9.99918 9.37447 9.89874L10.1412 9.13155C10.2751 8.99754 10.3391 8.93266 10.4212 8.84639C10.5922 8.66666 10.7338 8.50356 10.8566 8.33802ZM15.5059 16.0331L16.2723 15.2662C16.5045 15.0338 16.655 14.8909 16.7774 14.7923C18.4571 15.9985 19.4298 16.757 19.8272 17.1698C20.0657 17.4177 20.0287 17.87 19.8213 18.0892C19.5343 18.3925 19.1614 18.7656 18.7039 19.2069C16.8858 21.0257 12.096 19.6438 8.22525 15.7692C4.35327 11.8934 2.97201 7.10291 4.77632 5.29761C5.27798 4.7881 5.43692 4.62924 5.92048 4.15278C6.10178 3.97413 6.59564 3.93401 6.8162 4.15189C7.24326 4.57376 8.03546 5.58811 9.20083 7.21145C9.1405 7.28635 9.06515 7.37099 8.97345 7.46737C8.90615 7.5381 8.85008 7.59494 8.7275 7.71764L7.96148 8.48408C6.65833 9.78712 7.76814 12.0048 9.8771 14.1159C11.9846 16.2254 14.2031 17.3365 15.5059 16.0331Z" fill="black" />
                    </svg>
                    +7 (831) 419-60-39
                  </ContactLink>
                </ContactNotaryWrap>
                <ContactNotaryWrap>
                  <ContactNotaryName>
                    Васкэ Жанна Андреевна
                  </ContactNotaryName>
                  <ContactLink href='https://yandex.ru/maps/47/nizhny-novgorod/house/varvarskaya_ulitsa_12/YE0YdgdpQUEOQFtsfX9zcnRgYw==/?ll=44.009849%2C56.323837&sll=44.004690%2C56.322644&sspn=0.018917%2C0.007479&z=17.15' target='_blank'>
                    <svg width="24" height="24" style={{ marginRight: '15px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 23.3276L12.6577 22.7533C18.1887 17.9237 21 13.7068 21 10C21 4.75066 16.9029 1 12 1C7.09705 1 3 4.75066 3 10C3 13.7068 5.81131 17.9237 11.3423 22.7533L12 23.3276ZM12 20.6634C7.30661 16.4335 5 12.8492 5 10C5 5.8966 8.16411 3 12 3C15.8359 3 19 5.8966 19 10C19 12.8492 16.6934 16.4335 12 20.6634ZM12 5C14.7614 5 17 7.23858 17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5ZM9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10Z" fill="black" />
                    </svg>
                    улица Варварская, дом 12, город Нижний Новгород
                  </ContactLink>
                  <ContactLink href="tel:+78314192111">
                    <svg width="24" height="24" style={{ marginRight: '15px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.8566 8.33802C11.3747 7.63981 11.5605 6.90396 10.9746 6.25443C9.65961 4.41445 8.77527 3.27662 8.22057 2.72866C7.16601 1.68693 5.43124 1.82784 4.51791 2.72777C4.02736 3.21113 3.86128 3.37712 3.35759 3.88873C0.551938 6.69589 2.26297 12.6301 6.81151 17.1831C11.359 21.7351 17.2927 23.4471 20.1042 20.634C20.569 20.1859 20.9626 19.7921 21.2729 19.4641C22.168 18.5181 22.3038 16.8598 21.267 15.7825C20.7355 15.2302 19.6504 14.3886 17.7331 13.0171C17.1458 12.492 16.4495 12.6058 15.8112 13.0246C15.5041 13.226 15.2806 13.4298 14.8587 13.8522L14.0924 14.6188C13.9915 14.7198 12.6211 14.0335 11.2908 12.702C9.95984 11.3697 9.27402 9.99918 9.37447 9.89874L10.1412 9.13155C10.2751 8.99754 10.3391 8.93266 10.4212 8.84639C10.5922 8.66666 10.7338 8.50356 10.8566 8.33802ZM15.5059 16.0331L16.2723 15.2662C16.5045 15.0338 16.655 14.8909 16.7774 14.7923C18.4571 15.9985 19.4298 16.757 19.8272 17.1698C20.0657 17.4177 20.0287 17.87 19.8213 18.0892C19.5343 18.3925 19.1614 18.7656 18.7039 19.2069C16.8858 21.0257 12.096 19.6438 8.22525 15.7692C4.35327 11.8934 2.97201 7.10291 4.77632 5.29761C5.27798 4.7881 5.43692 4.62924 5.92048 4.15278C6.10178 3.97413 6.59564 3.93401 6.8162 4.15189C7.24326 4.57376 8.03546 5.58811 9.20083 7.21145C9.1405 7.28635 9.06515 7.37099 8.97345 7.46737C8.90615 7.5381 8.85008 7.59494 8.7275 7.71764L7.96148 8.48408C6.65833 9.78712 7.76814 12.0048 9.8771 14.1159C11.9846 16.2254 14.2031 17.3365 15.5059 16.0331Z" fill="black" />
                    </svg>
                    +7 (831) 419-21-11
                  </ContactLink>
                </ContactNotaryWrap>
              </ContactLinkContainer>
              <ContactLinkContainer>
                <ContactLinkTitle>Полезные ссылки</ContactLinkTitle>
                <ContactLink href='https://minjust.ru/' target='_blank'>Министерство юстиций Российской Федерации</ContactLink>
                <ContactLink href='https://to52.minjust.ru/' target='_blank'>Главное управление министерства юстиции РФ по Нижегородской области</ContactLink>
                <ContactLink href='https://notariat.ru' target='_blank'>Федеральная нотариальная палата</ContactLink>
                <ContactLink href='https://www.nnp52.ru' target='_blank'>Нижегородская областная нотариальная палата</ContactLink>
              </ContactLinkContainer>
            </ContactPageWrap>
            <Developer />
          </ContactContent>
        </Scrollbar>
      </ContactWrapper>
    )
  }
}

const ContactContent = styled.div``;

const ContactPageWrap = styled.div`
  width: 100%;
  padding: 0 0 185px 0;
  @media ${responsive.tablet} {
    padding: 0 0 50px 0;
  }
`;

const ContactWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${responsive.notebookS} {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 83px;
  padding: 0 15px;
`;
const ContactLinkTitle = styled.span`
  font-family: Montserrat Bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 50px;
  @media ${responsive.tablet} {
    font-size: 16px;
  }
`;

const ContactLink = styled.a`
  font-family: Montserrat Regular;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 30px;
  text-decoration: none;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover{
    opacity: .7;
  }
  @media ${responsive.tablet} {
    font-size: 16px;
  }
`;

const ContactNotaryWrap = styled.div``;

const ContactNotaryName = styled.div`
  font-family: Montserrat Regular;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 20px;
  font-weight: 600;
`;