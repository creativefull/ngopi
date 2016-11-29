import React, {Component} from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';

// CSS
import CSS from '../styles/default.css';

// MODULE
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

// COMPONENT
import Explore from './explore.component';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page : "home"
		};
	}
	render() {
		return (
			<Explore navigator={this.props.navigator}></Explore>
		)
	}	
}

export default Layout;