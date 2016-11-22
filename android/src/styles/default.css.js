import {StyleSheet} from 'react-native';
const index = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	row : {
		flex : 1
	},
	rowView : {
		flex:1,
		flexDirection: 'row',
	},
	columnView : {
		flex:1,
		flexDirection: 'column',
	}
})
module.exports = index;