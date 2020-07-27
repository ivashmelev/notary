import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Root.css';
import { Layout, Menu, Avatar, Button, Tooltip } from 'antd';
import { UserOutlined, PhoneOutlined, AuditOutlined, CalendarOutlined, CalculatorOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tariffs } from './Pages/Tariffs';
import { Services } from './Pages/Services';
import { Appointment } from './Pages/Appointment';
import { Users } from './Pages/Users';
import { Contacts } from './Pages/Contacts';

import { Login } from './Login';
import { UsersContainer } from '../containers/UsersContainer';
import { AppointmentContainer } from '../containers/AppointmentContainer';
import { ContactsContainer } from '../containers/ContactsContainer';
import { ServicesContainer } from '../containers/ServicesContainer';
import { SectionsContainer } from '../containers/SectionsContainer';
import { TariffsContainer } from '../containers/TariffsContainer';


const { Header, Sider } = Layout;

const navigation = [
	{
		title: 'Записи на прием',
		link: '/',
		icon: <CalendarOutlined />
	},
	{
		title: 'Услуги',
		link: '/services',
		icon: <AuditOutlined />
	},
	{
		title: 'Тарифы',
		link: '/tariffs',
		icon: <CalculatorOutlined />
	},
	{
		title: 'Контакты',
		link: '/contacts',
		icon: <PhoneOutlined />
	},
	{
		title: 'Пользователи',
		link: '/users',
		icon: <TeamOutlined />
	}
]

export const Root = (props) => {
	const [isCollapsed, setCollapsed] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
	const [hisName, setHisName] = useState('')
	const onCollapse = () => {
		setCollapsed(!isCollapsed)
	}
	return (
		isLogged ? (
			<Layout className="layerMain">
				<Header className="header">
					<div className="user">
						<Avatar icon={<UserOutlined />} />
						<p className="userName">{hisName}</p>
					</div>
					<Tooltip title="Выход">
						<Button type='ghost' ghost shape="circle" onClick={() => setIsLogged(false)} icon={<LogoutOutlined />} />
					</Tooltip>
				</Header>
				<Layout>
					<Sider
						width={200}
						className="site-layout-background"
						theme="dark"
						collapsible
						collapsed={isCollapsed}
						onCollapse={onCollapse}
					>
						<Menu
							mode="inline"
							theme="dark"
							defaultSelectedKeys={[document.location.pathname]}
							style={{ height: '100%', borderRight: 0 }}
						>
							{
								navigation.map((item) => (
									<Menu.Item key={item.link} icon={item.icon}>
										<Link to={item.link}>
											{item.title}
										</Link>
									</Menu.Item>
								))
							}
						</Menu>
					</Sider>
					<UsersContainer>
						<AppointmentContainer>
							<ContactsContainer>
								<ServicesContainer>
									<SectionsContainer>
										<TariffsContainer>
											<Layout style={{ padding: '20px' }}>
												<Switch>
													<Route exact path="/services" component={Services} />
													<Route exact path="/tariffs" component={Tariffs} />
													<Route exact path="/contacts" component={Contacts} />
													<Route exact path="/users" component={Users} />
													<Route exact path="/" component={Appointment} />
												</Switch>
											</Layout>
										</TariffsContainer>
									</SectionsContainer>
								</ServicesContainer>
							</ContactsContainer>
						</AppointmentContainer>
					</UsersContainer>
				</Layout>
			</Layout>
		) : (
				<Login onChangeView={setIsLogged} onChangeName={setHisName} />
			)
	)
}