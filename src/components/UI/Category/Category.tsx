import { TypeRootStackParamList } from "@/types/navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

interface ICategoryItem {
	item: {
		id: number
		image: string
		title: string
	}
}

export const CategoryItem: FC<ICategoryItem> = ({ item }) => {
	return (
		<View style={style.contaiter}>
			<Image source={{ uri: item.image }} style={style.image} />
			<Text style={style.title}>{item.title}</Text>
		</View>
	)
}
const style = StyleSheet.create({
	contaiter: {
		width: 200,
		height: 55,
		margin: "auto",
		alignItems: "center",
	},
	title: {
		marginTop: 10,
		width: 145,
		textAlign: "center",
	},
	image: {
		width: 50,
		height: 50,
		backgroundColor: "blue",
	},
})
