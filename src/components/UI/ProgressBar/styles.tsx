import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
	circle: {
		justifyContent: "center",
		backgroundColor: "#6ecf59",
		width: 10,
		height: 10,
		borderRadius: 4,
		alignItems: "center",
	},
	circleGray: {
		justifyContent: "center",
		backgroundColor: "#ccc",
		width: 10,
		height: 10,
		borderRadius: 4,
		alignItems: "center",
	},
	LastCircle: {
		justifyContent: "center",
		width: 30,
		height: 30,
		position: "absolute",
		borderRadius: 4,
		top: -15,
		right: 0.5,
		alignItems: "center",
	},
	progress: {
		display: "flex",
		flexDirection: "row",
		gap: 6,
		justifyContent: "space-between",
		width: 300,
		marginHorizontal: 30,
		marginVertical: 10,
		alignItems: "center",
	},
	pregressline: {
		position: "relative",
		top: 36,
		left: 30,
		height: 2,
		marginBottom: 20,
	},
	grayLine: {
		width: `85%`,
		height: "100%",
		backgroundColor: "#ccc",
		top: 0,
	},
})