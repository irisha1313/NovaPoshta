import { BlurView } from "expo-blur"
import React, { FC } from "react"
import { Animated, Text, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { style } from "./styles"

interface IHeaderMenu {
	opacity: Animated.AnimatedInterpolation<string | number>
}
export const HeaderMenu: FC<IHeaderMenu> = ({ opacity }) => {
	return (
		<View>
			<BlurView
				intensity={65}
				tint="light"
				style={style.blurContainer}
			>
				<View style={style.content}>
					<Item />
				</View>
			</BlurView>
		</View>
	)
}

const Item = () => {
	return (
		<View>
			<View style={style.itemContainer}>
				<Ionicons color={"red"} name="newspaper" size={20} />
				<Text> Додати накладну </Text>
			</View>
			<View style={style.itemContainer}>
				<MaterialIcons color={"red"} name="scanner" size={20} />
				<Text> Сканувати накладну </Text>
			</View>
			<View style={style.itemContainer}>
				<MaterialCommunityIcons
					color={"red"}
					name="human"
					size={20}
				/>
				<Text> Виклик кур'єра </Text>
			</View>
		</View>
	)
}
