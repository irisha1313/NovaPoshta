import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import KeyboartIocn from "react-native-vector-icons/MaterialIcons"
interface IoptionsItem {
	item: {
		title: string
	}
}
export const OptionsItem: FC<IoptionsItem> = ({ item }) => {
	return (
		<View style={style.container}>
			<View style={style.info}>
				<Text>{item.title}</Text>
				<KeyboartIocn name="arrow-forward-ios" color={"red"} />
			</View>
		</View>
	)
}
const style = StyleSheet.create({
	container: {
		width: "100%",
		borderBottomColor: "#d6d3d3",
		borderBottomWidth: 1,
		paddingBottom: 5,
	},
	info: {
		marginHorizontal: 5,
		alignItems: "center",
		display: "flex",
		width: "90%",
		justifyContent: "space-between",
		marginVertical: 20,
		flexDirection: "row",
	},
})
