import React, { FC } from "react"
import { View, Text, StyleSheet } from "react-native"

interface ISortMenu {}
export const SortMenu: FC<ISortMenu> = ({}) => {
	return (
		<View style={style.container}>
			<Text style={style.text}>Сортування посилок :  </Text>
		</View>
	)
}
const style = StyleSheet.create({
	container: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 50,
	},
	text: {
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		margin: 10,
	},
})
