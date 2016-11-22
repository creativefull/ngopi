import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	ListView
} from 'react-native'

// CSS
import ListCss from '../styles/list.css';

class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			komentar : [{
				title : "Syahdu Karaoke",
				image : "https://avatars2.githubusercontent.com/u/13174684?v=3&s=460",
				venue : "blantik",
				price : 500000
			},{
				title : "Jasa Pembuatan Aplikasi Web",
				image : "https://avatars2.githubusercontent.com/u/13174684?v=3&s=460",
				venue : "blantik",
				price : 150000
			}],
			data : new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2})
		};
	}

	componentWillMount() {
		this.setState({
			data : this.state.data.cloneWithRows(this.state.komentar)
		})
	}

	renderRow(row) {
		return (
			<View style={ListCss.itemList}>
				<Image source={{ uri : "https://avatars2.githubusercontent.com/u/13174684?v=3&s=460"}} style={ListCss.itemImg}/>
				<View style={ListCss.column}>
					<View style={ListCss.row}>
						<Text style={ListCss.itemTitle}>{row.title.toUpperCase()}</Text>
					</View>
					<View style={ListCss.row}>
						<View style={ListCss.column}>
							<Text style={ListCss.itemPrice}>{row.price}</Text>
						</View>
						<View style={ListCss.column}>
							<Text style={ListCss.itemRight}>{row.venue}</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}

	render() {
		return (
			<View>
				<ListView
					dataSource={this.state.data}
					renderRow={this.renderRow}
					renderSeparator={
						(sectionId, rowId) => <View key={rowId} style={ListCss.separator}/>
					}/>
			</View>
		)
	}
}

export default Explore;