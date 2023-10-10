import { COLORS } from "@/utils/constants"
import React, { FC } from "react"
import { View, Text, StyleSheet } from "react-native"
import IconDelivered from "react-native-vector-icons/Ionicons"
import { style } from "./styles"
interface IProgressBar {}
export const ProgressBar: FC<IProgressBar> = ({}) => {
	const steps = [
		{
			id: 1,
			content: (
				<View style={{ marginBottom: 20, right: 6 }}>
					<IconDelivered name="car" color="black" size={20} />
				</View>
			),
		},
		{
			id: 2,
			content: (
				<View style={style.circleGray}>
					<Text></Text>
				</View>
			),
		},
		{
			id: 5,
			content: <View style={style.circleGray}></View>,
		},
	]

	return (
		<View style={style.progress}>
			<View style={style.verticalLine} />
			{steps.map((item) => (
				<View key={item.id}>{item.content}</View>
			))}
		</View>
	)
}
