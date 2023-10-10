import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		borderRadius: 10,
		display: "flex",
		height: 60,
		position: "relative",
	},
	safeAreaView: {
		backgroundColor: "#fff",
		transform: [{ rotate: "90deg" }],
		borderRadius: 10,
		position: "relative",
	},
	cartText: {
		color: "red",
		margin: 10,
		fontWeight: "700",
	},
	icon: { position: "absolute", top: 230, left: -170 },
	cartInfo: {
		right: 180,
		top: -180,
	},
	isVerticalSafeAreaView: {
		transform: [{ rotate: "360deg" }],
		borderRadius: 10,
	},
	isVerticalIcon: {},
	isVerticalCartInfo: {},
	isVerticalBarCode: {
		display: "flex",
		justifyContent: "flex-end",
		left: 300,
		top: 90,
	},
	userinfo: { margin: 10, fontWeight: "800" },
	date: {
		position: "absolute",
		left: 320,
		right: 20,
		top: -190,
		display: "flex",
		flexDirection: "row",
		transform: [{ rotate: "90deg" }],
	},
	dateVertical: {
		left: 320,
		right: 10,
		top: -120,
		zIndex: 2,
	},
})
