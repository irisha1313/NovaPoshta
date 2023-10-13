import { StyleSheet } from "react-native"
import { FC } from "react"

export const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	bottomSheet: {
		position: "absolute",
		width: "100%",
		backgroundColor: "white",
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	draggableArea: {
		width: 132,
		height: 32,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
	},
	dragHandle: {
		width: 100,
		height: 6,
		backgroundColor: "#d3d3d3",
		borderRadius: 10,
	},
	content: {},
})
