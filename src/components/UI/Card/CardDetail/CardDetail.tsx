import { TypeRootStackParamList } from "@/types/navigation"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC, useState } from "react"

import { View, Text, Pressable, Button, Alert } from "react-native"
import CopyIcon from "react-native-vector-icons/FontAwesome"
import { style } from "./style"
import { ProgressBar } from "./ProgressBar/ProgressBar"
import * as Clipboard from "expo-clipboard"
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"
interface ICardDetail {
	navigation: NativeStackNavigationProp<TypeRootStackParamList>
	route: any
}
export const CardDetail: FC<ICardDetail> = ({
	route,
	navigation,
}) => {
	const { item } = route.params
	const arrivalDate = new Date(Date.parse(item.arrival.date))
	const departureDate = new Date(Date.parse(item.departure.date))

	const [copiedText, setCopiedText] = React.useState("")

	const copyToClipboard = async () => {
		await Clipboard.setStringAsync(`${item.id}`)
		Alert.alert("Alert Title")
	}

	const fetchCopiedText = async () => {
		const text = await Clipboard.getStringAsync()
		setCopiedText(text)
	}
	return (
		<View>
			<View style={style.topInfo}>
				<Text style={style.topInfoText}>{item.id}</Text>

				<CopyIcon
					name="copy"
					size={23}
					onPress={() => copyToClipboard()}
				/>
			</View>
			<Text style={style.packageInfo}>{item.returnedDeliver}</Text>
			<View style={style.container}>
				<View style={style.mainInfo}>
					<ProgressBar />
					<View style={style.ststus}>
						<Text style={{ fontWeight: "600" }}>
							Отримана - {arrivalDate.toLocaleString()}
						</Text>
						<Text>Прибула - {arrivalDate.toLocaleString()}</Text>
						<Text>
							Вiдправлена - {departureDate.toLocaleString()}
						</Text>
					</View>
				</View>

				<Pressable>
					<Text
						style={{ color: "red" }}
						onPress={() =>
							navigation.navigate("RouteDetail", {
								item: item,
							})
						}
					>
						Деталi маршруту
					</Text>
				</Pressable>
				<View style={{ padding: 10 }}>
					<Text style={style.deliveryAddres}>Адреса досатвки  </Text>
					<Text style={style.textDeliveryAddres}>
						{item.deliveryAddresses}
					</Text>
				</View>
			</View>
		</View>
	)
}
