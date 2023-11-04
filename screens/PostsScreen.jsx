import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

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
			<View style={styles.footer}>
				<TouchableOpacity style={styles.grid}>
					<Ionicons
						name="grid-outline"
						size={24}
						color="rgba(33, 33, 33, 0.8)"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.add}>
					<Ionicons name="add" size={24} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.user}>
					<Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
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
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		paddingHorizontal: 16,
		paddingTop: 32,
		width: "100%",
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 16,
		marginRight: 8,
	},
	ownerInfo: {
		flexDirection: "column",
		alignItems: "center",
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
	footer: {
		height: 83,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "baseline",
		paddingVertical: 9,
		borderTopWidth: 1,
		borderTopColor: "rgba(0, 0, 0, 0.30)",
	},
	grid: {
		marginLeft: 90,
	},
	add: {
		width: 70,
		height: 40,
		backgroundColor: "#FF6C00",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	user: {
		marginRight: 90,
	},
});
