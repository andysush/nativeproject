import { StatusBar } from "expo-status-bar";
import RegistrationScreen from "./components/RegistrationScreen";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});
	return (
		<>
			<RegistrationScreen />
			<StatusBar style="auto" />
		</>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });
