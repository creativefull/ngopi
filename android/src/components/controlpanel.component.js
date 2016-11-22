import React, {Component} from 'react';
import {
	View,
	ScrollView,
	Image,
	Text,
	ListView
} from 'react-native';

// CSS
import CSS from '../styles/default.css';
import CPCSS from '../styles/controlpanel.css';
import ListCss from '../styles/list.css';

// MODULE
import Icon from 'react-native-vector-icons/FontAwesome';

class ControlPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menu : [{
				title : "HOME",
				url : "home",
				icon : "dashboard"
			},{
				title : "VENUE",
				url : "venue",
				icon : "home"
			},{
				title : "ACCOUNT",
				url : "account",
				icon : "user"
			}],
			data : new ListView.DataSource({rowHasChanged : (r1,r2) => r1 !== r2})
		};
	}
	componentWillMount() {
		this.setState({
			data : this.state.data.cloneWithRows(this.state.menu)
		})
	}
	renderRow(row) {
		return (
			<View style={ListCss.itemList}>
				<Icon name={row.icon} size={20} color="#2c3e50" style={{marginRight: 10}}/>
				<Text style={ListCss.itemTitle}>
					{row.title}
				</Text>
			</View>
		)
	}
	render() {
		return(
			<ScrollView>
				<View style={CSS.rowView, CPCSS.backdrop}>
					<Image
						source={{uri : "https://avatars2.githubusercontent.com/u/13174684?v=3&s=460"}}
						style={CPCSS.drawerDP}
					/>
					<View style={CSS.rowView}>
						<Text style={CPCSS.name}>Shodiqul Muzaki</Text>
					</View>
				</View>
				<ListView
					dataSource={this.state.data}
					renderRow={this.renderRow}
					renderSeparator={
						(sectionId, rowId) => <View key={rowId} style={ListCss.separator}/>
					}/>
			</ScrollView>
		)
	}
}
export default ControlPanel;