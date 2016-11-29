import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Navigator,
	TextInput,
	BackAndroid
} from 'react-native';

// STYLES
import NAVBARSTYLE from './android/src/styles/navbar.css.js';
import CSS from './android/src/styles/default.css.js';

// MODULE
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

// COMPONENTS
import Layout from './android/src/components/layout.component';
import ControlPanel from './android/src/components/controlpanel.component';
import Detail from './android/src/components/detail.component';

let navigator;
export default class ngopi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText : ""
		};
	}
	closeDrawer = () => {
		this._drawer.close();
	}
	openDrawer = () => {
		this._drawer.open();
	}
	render() {
		const navbar = {
			LeftButton : (route, nav, index, navState) => {
				return(
					<TouchableOpacity onPress={this.openDrawer}>
						<Icon name="bars" style={NAVBARSTYLE.icon}/>
					</TouchableOpacity>
				)
			},
			RightButton : (route, nav, index, navState) => {
				return (
					<View>
						<TouchableOpacity>
							<Icon name="search" style={NAVBARSTYLE.icon}/>
						</TouchableOpacity>
					</View>
				)
			},
			Title : (route, nav, index, navState) => {
				return(
					<View>
						<TouchableOpacity>
							<Text style={NAVBARSTYLE.title}>{route.title}</Text>
						</TouchableOpacity>
					</View>
				)
			}
		};
		const drawerStyle = {
			drawer: {
				shadowColor: '#000000',
				shadowOpacity: 0.8,
				shadowRadius: 3,
				backgroundColor:'#EEE'
			},
			main: {
				paddingLeft: 3
			}
		};
		return (
			<Drawer
				ref={(ref) => this._drawer = ref}
				type="overlay"
				negotiatePan={true}
				tapToClose={true}
				openDrawerOffset={0.2}
				panCloseMask={0.2}
				closedDrawerOffset={-5}
				styles={drawerStyle}
				tweenHandler={(ratio) => ({
					main: {
						opacity:(2-ratio)/2
					}
				})}
				content={
					<ControlPanel/>
				}>
				<Navigator
					initialRoute = {{link : 'home', title : "NGOPI"}}
					navigationBar = {
						<Navigator.NavigationBar routeMapper={navbar} style={NAVBARSTYLE.navbar}/>
					}
					renderScene = {this.renderScene}/>
			</Drawer>
		)
	}

	renderScene(route, navigator) {
		_navigator = navigator;
		switch(route.link) {
			case "home" : return (
				<Layout navigator={navigator} title={route.title}></Layout>
			);
			case "detail" : return (
				<Detail id={route.id} title={route.title} navigator={navigator}></Detail>
			)
		}
	}
}

BackAndroid.addEventListener('hardwareBackPress', () => {
	if (_navigator.getCurrentRoutes().length === 1  ) {
		return false;
	}
	_navigator.pop();
	return true;
});
AppRegistry.registerComponent('ngopi', () => ngopi);