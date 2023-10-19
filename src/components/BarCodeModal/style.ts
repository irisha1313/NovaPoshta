import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
	///
	Image: {
		width: 400,
		marginTop: 50,
		height: 100,
	},
	modal: {
		transform: [{ rotate: "90deg" }],
		backgroundColor: "#ffff",
	},
	modalHorizontal: {
		transform: [{ rotate: "200deg" }],
		backgroundColor: "#ffff",
	},
	SafeAreaView: {
		transform: [{ rotate: "90deg" }],
		bottom: 150,
	},
	Icon: { right: 50, top: 280 },
	IconHorizontal: { right: 5, top: 380 },
	View: { left: 300, top: 100 },
	ViewHorizontal: { left: 300, top: 200 },
	Text: { top: -120, left: 300 },
	TextHorizontal: { left: 290, bottom: 50 },
	isVerticalCartInfo: {
		left: 0,
		bottom: 220,
	},
	cartText: {
		color: "red",
		margin: 10,
		fontWeight: "700",
	},
	cartInfo: {
		right: 180,
		top: -180,
	},
	userinfo: { margin: 10, fontWeight: "800" },
})
