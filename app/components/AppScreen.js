import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../config/Colors';

function AppScreen({children, style}) {
	return (
		<SafeAreaView style={[styles.container, style]}>
			{children}
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,
		flex: 1,
	},
});

export default AppScreen;
