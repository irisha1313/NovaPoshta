import { Text, View, StyleSheet } from "react-native"

import IconDelivered from "react-native-vector-icons/Ionicons"
import React, { FC, useState } from "react"
import { style } from "./styles"
interface IPrigressBar {
	currentPercentage: any
}
export const ProgressBar: FC<IPrigressBar> = ({
	currentPercentage,
}) => {
	const steps = [
		{
			id: 1,
			content: (
				<View
					style={
						currentPercentage === 0 ? style.LastCircle : style.circle
					}
				>
					{currentPercentage === 0 && (
						<IconDelivered name="car" color="green" size={30} />
					)}
				</View>
			),
		},
		{
			id: 2,
			content: (
				<View
					style={
						currentPercentage >= 2 ? style.circle : style.circleGray
					}
				>
					<Text></Text>
				</View>
			),
		},
		{
			id: 3,
			content: (
				<View
					style={
						currentPercentage >= 3 ? style.circle : style.circleGray
					}
				>
					<Text></Text>
				</View>
			),
		},
		{
			id: 4,
			content: (
				<View
					style={
						currentPercentage >= 4 ? style.circle : style.circleGray
					}
				>
					<Text></Text>
				</View>
			),
		},
		{
			id: 5,
			content: (
				<View
					style={
						currentPercentage >= 4
							? style.LastCircle
							: style.circleGray
					}
				>
					<IconDelivered name="car" color="green" size={30} />
				</View>
			),
		},
	]
	const showPercentageLine = Math.round(
		(currentPercentage / steps.length) * 105
	)
	return (
		<>
			<View style={style.pregressline}>
				<View style={style.grayLine} />
				<View
					style={{
						width: `${showPercentageLine}%`,
						height: "100%",
						backgroundColor: "rgb(18, 231, 48)",
					}}
				/>
			</View>
			<View style={style.progress}>
				{steps.map((item) => (
					<View key={item.id}>{item.content}</View>
				))}
			</View>
		</>
	)
}
