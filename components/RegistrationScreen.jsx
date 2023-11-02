import React from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { RegButton } from "../shared/RegButton";
import { LinkTo } from "../shared/LinkTo";
import image from "../assets/photoBg.png";
import { AvatarPic } from "../shared/AvatarPic";

export default function RegistrationScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<View style={styles.regForm}>
					<AvatarPic></AvatarPic>
					<Text style={styles.title}>Реєстрація</Text>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							cursorColor="#212121"
							placeholder="Логін"
							placeholderTextColor="#BDBDBD"
						></TextInput>
						<TextInput
							style={styles.input}
							cursorColor="#212121"
							placeholder="Адреса електронної пошти"
							placeholderTextColor="#BDBDBD"
						></TextInput>
						<View>
							<TextInput
								style={styles.input}
								cursorColor="#212121"
								placeholder="Пароль"
								placeholderTextColor="#BDBDBD"
							/>
							<TouchableOpacity style={styles.showHide}>
								<Text>Показати</Text>
							</TouchableOpacity>
						</View>
					</View>
					<RegButton title="Зареєструватися"></RegButton>
					<View style={styles.linkContainer}>
						<Text style={styles.linkText}>Вже є акаунт? </Text>
						<LinkTo title="Увійти"></LinkTo>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	regForm: {
		width: "100%",
		height: "69%",
		backgroundColor: "#ffffff",
		padding: 20,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	title: {
		fontSize: 30,
		fontFamily: "Roboto-Regular",
		fontWeight: "normal",
		marginTop: 92,
		marginBottom: 33,
		textAlign: "center",
	},
	inputContainer: {
		marginBottom: 43,
	},
	input: {
		color: "#212121",
		height: 50,
		backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",
		borderWidth: 1,
		borderRadius: 10,
		marginBottom: 10,
		paddingLeft: 10,
	},
	showHide: {
		position: "absolute",
		bottom: 25,
		right: 10,
	},

	linkContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	linkText: {
		color: "#1B4371",
		fontFamily: "Roboto-Regular",
		fontSize: 16,
	},
	image: {
		flex: 1,
		justifyContent: "flex-end",
	},
});
