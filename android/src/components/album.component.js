import React, {Component} from 'react';

import {
	Card,
	Button,
	COLOR,
	TYPO,
	Divider,
	Subheader,
	Avatar
} from 'react-native-material-design';
import {
	Image,
	Text,
	ActivityIndicator,
	ListView,
	StyleSheet,
	View
} from 'react-native';

class Album extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mockAlbum : [{
				user : "Shodiqul Muzaki",
				time : "10 April 2016",
				thumbnail : "https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg",
				image : "http://waluwah.com/wp-content/uploads/2016/07/kopi-lelet.jpg",
				desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
			},{
				user : "Shodiqul Muzaki",
				time : "10 April 2016",
				thumbnail : "https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg",
				image : "http://waluwah.com/wp-content/uploads/2016/07/kopi-lelet.jpg",
				desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
			},{
				user : "Shodiqul Muzaki",
				time : "10 April 2016",
				thumbnail : "https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg",
				image : "http://waluwah.com/wp-content/uploads/2016/07/kopi-lelet.jpg",
				desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
			}],
			dataAlbum : new ListView.DataSource({ rowHasChanged : (r1, r2) => r1 !== r2}),
			loading : true
		};
	}
	componentWillMount() {
		this.setState({
			dataAlbum : this.state.dataAlbum.cloneWithRows(this.state.mockAlbum),
			loading : false
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
					overlay>
					<Avatar size={40} image={<Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg' }} />} />
					<Text style={[TYPO.paperFontHeadline, COLOR.paperGrey100]}>Shodiqul Muzaki</Text>
					<Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>10 April 2016</Text>
				</Card.Media>
				<Card.Body>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris sagittis pellentesque lacus eleifend lacinia...
					</Text>
				</Card.Body>
				<Card.Actions position="right">
					<Button text="Report" color="googleGreen"/>
				</Card.Actions>
			</Card>			
		)
	}
	renderLoading() {
		return(
			<ActivityIndicator
				animating={this.state.loading}
				style={styles.centering}
				size={75}
			/>
		)
	}
	render() {
		if (this.state.loading) {
			return this.renderLoading();
		}
		else {
			return (
				<View>
					<ListView
						dataSource={this.state.dataAlbum}
						renderRow={this.renderRow.bind(this)}
					/>
				</View>
			)			
		}
	}
}

const styles = StyleSheet.create({
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	}
})
export default Album;