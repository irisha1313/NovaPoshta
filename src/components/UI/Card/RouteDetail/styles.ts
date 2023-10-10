import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
	textId: {
		fontWeight: "600",
		fontSize: 18,
		padding: 20,
	},
	verticalLine: {
		backgroundColor: "black",
		width: 2,
		height: "95%",
		position: "absolute",
		marginLeft: 35,
		marginTop: 20,
	},
	verticalWrap: {
		justifyContent: "space-between",
		height: "100%",
	},
	itemWrap: {
		width: 200,
		height: 40,
		marginLeft: 20,
		marginBottom: 30,

		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},
	pointWrap: {
		backgroundColor: "red",
		borderRadius: 20,
		height: 10,
		width: 10,
		marginLeft: 10,
		alignItems: "center",
	},
	pointWrapActive: {
		backgroundColor: "green",
		width: 10,
		borderRadius: 10,
		borderColor: "green",
		alignItems: "center",
	},

	markerText: { color: "white" },
	currentMarker: { color: "gray" },
	currentMarkerActive: { color: "green" },
})
