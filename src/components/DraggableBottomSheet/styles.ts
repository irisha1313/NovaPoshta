import { StyleSheet } from "react-native"
import { FC } from "react"

export const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	bottomSheet: {
		position: "absolute",
		width: "100%",
		backgroundColor: "#ccc",
		borderTopLeftRadius: 72,
		borderTopRightRadius: 72,
	},
	draggableArea: {
		width: 132,
		height: 32,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
	},
})
