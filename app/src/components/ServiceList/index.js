import React, { Component } from 'react'
import ServiceElement from '../ServiceElement'
import styled from 'styled-components'
import responsive from '../../responsive'

export default class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: '1',
          title: 'Удостоверение сделок',
          description: 'В случаях, указанных в законе (обязательная нотариальная форма сделок), или по соглашению сторон нотариусы удостоверяют сделки – действия граждан и юридических лиц, направленные на установление, изменение или прекращение гражданских прав и обязанностей (завещания, доверенности, договоры и т.д.). Нотариальное удостоверение сделки предполагает проверку нотариусом законности сделки, в том числе наличия у каждой из сторон права на ее совершение, соответствия содержания сделки действительным намерениям сторон.'
        },
        {
          id: '2',
          title: 'Наложение и снятие запрещения отчуждения имущества',
          description: 'Наложение и снятие запрещения отчуждения имущества осуществляется на условиях и в порядке, установленном законодательными актами Российской Федерации.'
        },
        {
          id: '3',
          title: 'Свидетельствование верности копий документов и выписок из них',
          description: 'Нотариус свидетельствует верность копий документов и выписок из документов, выданных органами государственной власти, органами местного самоуправления, юридическими лицами, гражданами, не подтверждая при этом законность содержания документа, соответствие изложенных в нем фактов действительности, личность, дееспособность и полномочия подписавших его лиц, правоспособность юридического лица, от которого исходит документ.Свидетельствуя верность копии документа, нотариус подтверждает соответствие изг.'
        },
        {
          id: '4',
          title: 'Свидетельствование подлинности подписи на документах',
          description: 'Свидетельствуя подлинность подписи на документе, нотариус, не удостоверяя фактов изложенных в документе, подтверждает, что подпись на документе сделана в его присутствии определенным лицом.'
        }
      ],
      current: '1'
    }
  }

  componentDidMount() {
    // try {
    //   (async () => {
    //     const response = await fetch('http://api.loc/api/v1/routes/service.php');
    //     if (await response.ok) {
    //       this.setState({ services: await response.json() });
    //       console.log(this.state.services);
    //     }
    //   })();
    // } catch (err) {
    //   throw err;
    // }
  }

  render() {
    const { services, current } = this.state;
    return (
      <ServiceListWrapper>
        <ServiceListTitleWrap>
          <ServiceListTitle>
            {services.map((element, index) =>
              current === element.id ?
                <ServiceListTitleElement
                  key={index}
                  style={{ color: '#E6B980' }}
                  onClick={() => {
                    this.setState({ current: element.id });
                  }}
                >
                  {element.title}
                </ServiceListTitleElement>
                :
                <ServiceListTitleElement
                  key={index}
                  onClick={() => {
                    this.setState({ current: element.id });
                  }}
                >
                  {element.title}
                </ServiceListTitleElement>
            )}
          </ServiceListTitle>
        </ServiceListTitleWrap>
        <ServiceListDescriptionWrap>
          <ServiceListDescription>
            {services.map((element, index) =>
              current === element.id ?
                <ServiceElement
                  key={index}
                  title={element.title}
                  description={element.description}
                  current={index + 1}
                />
                : null)}
          </ServiceListDescription>
        </ServiceListDescriptionWrap>
      </ServiceListWrapper >
    )
  }
}

const ServiceListWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0 200px 0;

  @media ${responsive.tabletB} {
    flex-direction: column;
    flex-flow: column-reverse;
    padding: 0;
  }
`;

const ServiceListTitle = styled.div`
  width: 100%;
  padding: 60px 40px 60px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #2D2D2D;
  box-sizing: border-box;
  @media ${responsive.notebook} {
    padding: 60px 40px 60px 30px;
  }
  @media ${responsive.tabletB} {
    padding: 40px 30px 0 30px;
    align-items: flex-start;
  }
  @media ${responsive.tablet} {
    padding: 40px 15px 0 15px;
  }
`;

const ServiceListTitleWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 0 120px 0 0;
  @media ${responsive.tabletB} {
    width: 100%;
    padding: 0;
    padding: 0 0 50px 0;
    background: #2D2D2D;
  }
`

const ServiceListTitleElement = styled.span`
  max-width: 420px;
  width: 100%;
  font-size: 18px;
  line-height: 30px;
  font-family: Montserrat Bold;
  text-align: right;
  letter-spacing: 0.05em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
  
  &:hover{
    color: #E6B980;
    cursor: pointer;
  }
  @media ${responsive.tabletB} {
    text-align: left;
    justify-content: flex-start;
    max-width: 100%;
  }

  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
    margin-bottom: 20px;
  }
`;

const ServiceListDescription = styled.div`
  max-width: 556px;
  width: 100%;
  @media ${responsive.tabletB} {
    max-width: 100%;
  }
`;

const ServiceListDescriptionWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
  @media ${responsive.notebook} {
    padding: 0 30px 0 0;
  }
  @media ${responsive.tabletB} {
    width: 100%;
    padding: 0 30px 50px 30px;
  }
  @media ${responsive.tabletB} {
    padding: 0 15px 100px 15px;
  }
`
