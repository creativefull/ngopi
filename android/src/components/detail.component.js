import React, {Component} from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet,
	ScrollView,
	Linking
} from 'react-native';

const ScrollableTabView = require('react-native-scrollable-tab-view');
import {
	Card,
	Button,
	COLOR,
	TYPO,
	Divider,
	Subheader
} from 'react-native-material-design';

import MapView from 'react-native-maps';

// COMPONENT
import Album from './album.component';
class Detail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			region : {
				latitude: -6.7658407,
				longitude: 111.3667503,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421
			},
			coordinate : {
				latitude: -6.7658407,
				longitude: 111.3667503				
			},
			initialPosition : 'unknown',
			lastPosition : 'unknown'
		};
	}
	onRegionChange(region) {
		this.setState({region})
	}
	watchID : ?number = null;
	componentDidMount() {
		// navigator.geolocation.getCurrentPosition(
		// 	(position) => {
		// 	var initialPosition = JSON.stringify(position);
		// 	this.setState({initialPosition});
		// 	},
		// 	(error) => alert(JSON.stringify(error)),
		// 	{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		// );
		this.watchID = navigator.geolocation.watchPosition((position) => {
			let lastPosition = JSON.stringify(position);
			this.setState({lastPosition});
		})
	}
	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}
	travel(lat, lo) {

	}
	render() {
		return (
			<ScrollableTabView style={{marginTop: 60, backgroundColor:'#FAFAFA'}}>
				<ScrollView tabLabel="Overview">
					<Card>
						<Card.Media
							height={200}
							image={
								<Image source={{ uri : "http://waluwah.com/wp-content/uploads/2016/07/kopi-lelet.jpg"}}/>
							}
							overlay>
							<Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>This is Kopi Lelet</Text>
							<Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Jln. Kragan - Sedan Ds. Karangasem Rt 01 Rw 01</Text>
						</Card.Media>
						<Card.Body>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Mauris sagittis pellentesque lacus eleifend lacinia...
							</Text>
						</Card.Body>
						<Card.Actions position="right">
							<Button text="KUNJUNGI" primary="paperBlue" style={{backgroundColor : COLOR['paperBlue500'].color}}/>
						</Card.Actions>
					</Card>

					<Card>
						<Card.Body>
							<MapView
								ref="map"
								style={{flexDirection: 'row', flex : 1, height : 200}}
								region={this.state.region}
								onRegionChange={() => this.onRegionChange()}>
								<MapView.Marker coordinate={this.state.coordinate}/>
							</MapView>
						</Card.Body>
					</Card>

					<Card>
						<Card.Body>
							<Subheader text="Informasi Tambahan"/>
							<Divider style={{marginBottom: 10}} />

							<Text style={styles.bold}>
								Dilihat
							</Text>
							<Text>20000</Text>
							<Text style={styles.bold}>
								Kunjungan Pengguna
							</Text>
							<Text>200</Text>
							<Text style={styles.bold}>
								Album
							</Text>
							<Text>100</Text>
							<Text style={styles.bold}>
								Ditambah
							</Text>
							<Text>19 November 2016</Text>
							<Text style={styles.bold}>
								Laporkan
							</Text>
							<Text>Tandai Sebagai Tidak Pantas</Text>
						</Card.Body>
					</Card>
				</ScrollView>
				<ScrollView tabLabel="Album">
					<Album></Album>
				</ScrollView>
			</ScrollableTabView>

		)
	}
}

const styles = StyleSheet.create({
	bold : {
		fontWeight : 'bold'
	}
});
export default Detail;