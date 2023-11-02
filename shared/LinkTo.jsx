import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const LinkTo = ({ title }) => {
	return (
		<TouchableOpacity>
			<Text style={styles.linkText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	linkText: {
		color: "#1B4371",
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		textDecorationLine: "underline",
	},
});
