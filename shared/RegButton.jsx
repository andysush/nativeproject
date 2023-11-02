import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const RegButton = ({ title }) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#FF6C00",
		padding: 16,
		borderRadius: 100,
		marginBottom: 16,
	},
	buttonText: {
		color: "#ffffff",
		fontFamily: "Roboto-Regular",
		textAlign: "center",
		fontSize: 16,
	},
});
