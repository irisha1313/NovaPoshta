import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	blurContainer: {
		flex: 1,
		minHeight: 800,
		height: "100%",
		textAlign: "center",
		justifyContent: "center",
		overflow: "hidden",
		top: -100,
	},
	content: {
		position: "absolute",
		top: 20,
		left: 200,
	},
	itemContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: 180,
		justifyContent: "space-between",
		marginBottom: 10,
	},
})