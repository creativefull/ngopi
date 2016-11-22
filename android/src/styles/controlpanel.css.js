import React, {Component} from 'react';
import {
	StyleSheet
} from 'react-native';

const CPCSS = StyleSheet.create({
	backdrop : {
		backgroundColor: '#2c3e50',
		padding: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'		
	},
	drawerDP : {
		borderRadius: 50,
		width: 100,
		height:100
	},
	name : {
		color: '#EEE',
		fontWeight: 'bold',
		fontSize: 15,
		marginTop: 10
	}
})
module.exports = CPCSS;