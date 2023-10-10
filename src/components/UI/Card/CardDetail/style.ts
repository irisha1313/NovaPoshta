import { COLORS } from "@/utils/constants"
import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
	topInfo: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#fff",
		padding: 20,
		justifyContent: "space-between",
	},
	topInfoText: {
		fontWeight: "300",
		fontSize: 23,
	},
	packageInfo: { padding: 20, backgroundColor: COLORS.bg },
	container: {
		backgroundColor: "#fff",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.bg,
	},
	mainInfo: {
		display: "flex",
		flexDirection: "row",
		margin: 20,
		width: 300,
		justifyContent: "space-between",
	},
	ststus: {
		display: "flex",
		justifyContent: "space-between",
		height: 90,
	},
	deliveryAddres: { fontSize: 18, color: "#ccc", marginBottom: 10 },
	textDeliveryAddres: {
		textAlign: "left",
		width: 300,
		lineHeight: 25,
	},
})
