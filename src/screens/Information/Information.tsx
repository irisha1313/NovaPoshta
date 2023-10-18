import React, { FC } from "react"
import { Text, View } from "react-native"

import { Link } from "@react-navigation/native"
import Icon from "react-native-vector-icons/AntDesign"
import { style } from "./styles"

interface IInformation {}
export const Information: FC<IInformation> = ({}) => {
	return (
		<Link style={style.container} to={{ screen: "Information" }}>
			<View style={style.textContent}>
				<Text style={style.title}>Тариф вихідного дня:</Text>
				<Text> поштомат 50 грн</Text>
			</View>
			<View>
				<Icon
					name="arrowright"
					size={30}
					color="#000"
					style={style.arrow}
				/>
			</View>
		</Link>
	)
}
