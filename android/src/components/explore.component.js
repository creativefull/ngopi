import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	ListView
} from 'react-native'

// CSS
import ListCss from '../styles/list.css';
import { Button, Card, THEME_NAME } from 'react-native-material-design';

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

	linkDetail(id, title) {
		this.props.navigator.push({
			link : 'detail',
			id : id,
			title : title
		})
	}

	renderRow(row) {
		return (
			<Card>
				<Card.Media
					height={200}
					image={
						<Image source={{ uri : "http://waluwah.com/wp-content/uploads/2016/07/kopi-lelet.jpg"}}/>
					}
					overlay/>
				<Card.Body>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris sagittis pellentesque lacus eleifend lacinia...
					</Text>
				</Card.Body>
				<Card.Actions position="right">
					<Button text="LIHAT" onPress={this.linkDetail.bind(this, 2, 'This is Warkop')} id='1' title='Kopi Bolot' />
				</Card.Actions>
			</Card>
		)
	}

	render() {
		return (
			<View style={{marginTop : 60}}>
				<ListView
					dataSource={this.state.data}
					renderRow={this.renderRow.bind(this)}
					renderSeparator={
						(sectionId, rowId) => <View key={rowId} style={ListCss.separator}/>
					}/>
			</View>
		)
	}
}

export default Explore;