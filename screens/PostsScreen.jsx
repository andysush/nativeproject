import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function PostsScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Публікації</Text>
				<TouchableOpacity>
					<MaterialIcons name="logout" size={24} color="#BDBDBD" />
				</TouchableOpacity>
			</View>
			<View style={styles.owner}>
				<Image style={styles.avatar} source={require("../assets/avatar.jpg")} />
				<View style={styles.ownerInfo}>
					<Text style={styles.name}>Natali Romanova</Text>
					<Text style={styles.mail}>email@example.com</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		width: "100%",
		height: 88,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingTop: 20,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(0, 0, 0, 0.30)",
	},
	title: {
		fontFamily: "Roboto-Medium",
		fontSize: 17,
		lineHeight: 22,
		color: "#212121",
		paddingVertical: 11,
		paddingHorizontal: 48,
		marginLeft: 90,
	},
	owner: {
		flexDirection: "row",
		justifyContent: "start",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingTop: 32,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 16,
		marginRight: 8,
	},
	ownerInfo: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	name: {
		fontFamily: "Roboto-Bold",
		fontSize: 13,
		color: "#212121",
	},
	mail: {
		fontFamily: "Roboto-Regular",
		fontSize: 11,
		color: "rgba(33, 33, 33, 0.80)",
	},
});
