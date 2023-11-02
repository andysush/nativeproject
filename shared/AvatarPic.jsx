import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const AvatarPic = () => {
	return (
		<View style={styles.avatarContainer}>
			<Image style={styles.avatar} source={require("../assets/avatar.jpg")} />
			<TouchableOpacity style={styles.addIcon}>
				<Ionicons name="add-circle-outline" size={24} color="#FF6C00" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	avatarContainer: {
		width: 120,
		height: 120,
		position: "absolute",
		top: -60,
		right: 140,
		borderRadius: 16,
		backgroundColor: "#f6f6f6",
	},
	avatar: {
		width: "100%",
		height: "100%",
		borderRadius: 16,
	},
	addIcon: {
		position: "absolute",
		bottom: 14,
		right: 0,
		transform: [{ translateX: 12 }],
	},
});
