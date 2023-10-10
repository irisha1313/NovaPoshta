import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
	container: {
		backgroundColor: "#ffff",
		padding: 10,
		margin: 10,
	},
	status: {
		fontSize: 20,
		fontWeight: "600",
		textAlign: "center",
		marginBottom: 10,
	},
	icons: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
		paddingBottom: 10,
		justifyContent: "space-between",
	},
	icon: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
		margin: 5,
	},
	arrivalInformation: {
		display: "flex",
		marginBottom: 10,
		position: "relative",
		flexDirection: "row",
		width: 350,
		justifyContent: "space-between",
	},
	dateText: {
		color: "#ccc",
	},
	dateLine: {
		color: "#ccc",
		position: "absolute",
		left: 100,
	},
})
