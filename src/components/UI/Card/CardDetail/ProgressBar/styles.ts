import { COLORS } from "@/utils/constants"
import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
	progress: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	circleGray: {
		justifyContent: "center",
		width: 7,
		height: 7,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "#ccc",
		alignItems: "center",
		marginBottom: 30,
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
	verticalLine: {
		borderWidth: 0.5,
		position: "absolute",
		borderColor: COLORS.bg,
		height: 70,
		top: 20,
		left: 3,
	},
})
