import { ITurtle } from "@/types/mockTurtleType"
import React, { FC } from "react"
import { View, Text, StyleSheet } from "react-native"

import { styles } from "./styles"
interface IRoutDetail {
	route: any
}
export const RouteDetail: FC<IRoutDetail> = ({ route }) => {
	const { item } = route.params
	const currentPercentage = [
		null,
		"departured",
		"in-road",
		"arrived",
		"done",
	].findIndex((el) => el === item.status)

	const data = [
		{
			title: currentPercentage >= 0 ? "У відділенні" : null,
			isCurrent: currentPercentage >= 0 ? true : false,
		},
		{
			title: currentPercentage >= 1 ? "надіслано" : null,
			isCurrent: currentPercentage >= 1 ? true : false,
		},
		{
			title: currentPercentage >= 0 ? "B дорозi" : null,
			isCurrent: currentPercentage >= 2 ? true : false,
		},
		{
			title: currentPercentage >= 0 ? "У відділенні" : null,
			isCurrent: currentPercentage >= 3 ? true : false,
		},
		{
			title: currentPercentage >= 0 ? "Отримано " : null,
			isCurrent: currentPercentage >= 4 ? true : false,
		},
	]
	return (
		<View>
			<Text style={styles.textId}>{item.id}</Text>

			<View style={{ flex: 1 }}>
				{data.map((item) => (
					<View style={styles.itemWrap}>
						<View style={styles.pointWrap}>
							<Text
								style={[
									styles.markerText,
									item.isCurrent ? styles.pointWrapActive : null,
								]}
							/>
						</View>
						<View style={{ marginLeft: 5, flex: 1 }}>
							<Text
								style={
									item.isCurrent
										? styles.currentMarkerActive
										: styles.currentMarker
								}
							>
								{item.title}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	)
}
