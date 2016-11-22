import React, {Component} from 'react';
import {
	View,
	Text
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
			<ScrollableTabView style={{marginTop: 50}} renderTabBar={() => <ScrollableTabBar />}>
				<View tabLabel="Explore" style={CSS.row}>
					<Explore></Explore>
				</View>
				<View tabLabel="Hunt Orders" style={CSS.row}>
					<Text>Hunt Order</Text>
				</View>
				<View tabLabel="History Orders" style={CSS.row}>
					<Text>History Order</Text>
				</View>
			</ScrollableTabView>
		)
	}	
}

export default Layout;