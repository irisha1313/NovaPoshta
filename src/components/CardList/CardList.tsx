StyleSheet
import React, { FC, useMemo, useState } from "react"
import { View, ScrollView, Pressable, StyleSheet } from "react-native"
import data from "@/data/mockturtle.json"
import { TypeRootStackParamList } from "@/types/navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Card } from "../UI/Card"
import { useNavigation } from "@react-navigation/native"
import { CardListMenu } from "./Menu/CardListMenu"

interface ICardList {}
export const CardList: FC<ICardList> = ({}) => {
	const [visibleFooterContent, setVisibleFooterContent] =
		useState(false)
	const [categoryName, setCategoryName] = useState([
		"Дата Додавання",
		"Дата вiправлення",
		"Дата доствки",
		"Мiсто призначення",
		"Статус посилки",
	])
	const navigation: NativeStackNavigationProp<TypeRootStackParamList> =
		useNavigation()

	const [status, setStatus] = useState(categoryName[0])

	const fildeterData = useMemo(() => {
		if (status === "Дата Додавання") return data
		if (status === "Дата вiправлення") {
			return data.sort((a, b) =>
				b.arrival.date > a.arrival.date ? 1 : -1
			)
		}
		if (status === "Дата доствки") {
			return data.sort((a, b) =>
				b.departure.date > a.departure.date ? 1 : -1
			)
		}
		if (status === "Мiсто призначення") {
			return data.sort((a, b) =>
				b.departure.city < a.departure.city ? 1 : -1
			)
		}
		if (status === "Статус посилки") {
			return data.filter((status) => status.status === "done")
		}
	}, [status, data])

	return (
		<View style={{ marginBottom: 50 }}>
			<ScrollView>
				{fildeterData.map((item) => (
					<Pressable
						key={item.id}
						onPress={() =>
							navigation.navigate("CardDetail", {
								item: item,
							})
						}
					>
						<Card item={item} />
					</Pressable>
				))}
			</ScrollView>
			<CardListMenu
				setStatus={setStatus}
				setVisibleFooterContent={setVisibleFooterContent}
				categoryName={categoryName}
				visibleFooterContent={visibleFooterContent}
				status={status}
			/>
		</View>
	)
}
