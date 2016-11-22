import {StyleSheet} from 'react-native';
const ListCss = StyleSheet.create({
	itemList : {
		flex:1,
		padding:10,
		flexDirection:'row',
		backgroundColor:'#FAFAFA',
		flexWrap: 'wrap'
	},
	itemImg : {
		width: 60,
		height:60,
		borderRadius:60,
		marginRight: 10
	},
	itemTitle : {
		fontSize: 15,
		color:'#333',
		fontWeight:'bold'
	},
	itemDesc : {
		flexDirection:'row',
		flex:1
	},
	itemPrice : {
		fontSize: 18
	},
	itemRight : {
		alignSelf : "flex-end"
	},
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#D4D4D4',
	},
	row : {
		flexDirection: 'row',
		flex : 1
	},
	column : {
		flexDirection: 'column',
		flex : 1
	}
})
module.exports = ListCss;