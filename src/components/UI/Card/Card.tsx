import React, { FC, useState } from "react"
import { View, Text, LayoutAnimation } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import Icon from "react-native-vector-icons/AntDesign"
import { ITurtle } from "@/types/mockTurtleType"
import { dtArrival, dtDeparture } from "@/utils/dataFormat"
import { AccordionCard } from "./AccordionCard/AccordionCard"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { style } from "./styles"

interface ICard {
	item: ITurtle
}
export const Card: FC<ICard> = ({ item }) => {
	const [openMoreInfo, setOpenMoreInfo] = useState(true)
	const toggleOpen = () => {
		setOpenMoreInfo((openMoreInfo) => !openMoreInfo)
		LayoutAnimation.configureNext(
			LayoutAnimation.Presets.easeInEaseOut
		)
	}
	const currentPercentage = [
		null,
		"departured",
		"in-road",
		"arrived",
		"done",
	].findIndex((el) => el === item.status)

	return (
		<View style={style.container}>
			<>
				<View style={style.icons}>
					<View style={style.icon}>
						<AntDesign name="swapleft" size={30} color={"red"} />
						<Text style={{ fontWeight: "600" }}>{item.id}</Text>
					</View>
					<Icon
						name={openMoreInfo ? "caretup" : "caretdown"}
						color={"#ccc"}
						onPress={toggleOpen}
						size={20}
					/>
				</View>

				<View>
					<View style={style.arrivalInformation}>
						<Text style={style.dateText}>
							{dtArrival(item.arrival)}
						</Text>
						<Text style={style.dateLine}>
							------------------------
						</Text>
						<Text style={style.dateText}>
							{dtDeparture(item.departure)}
						</Text>
					</View>
					<View style={style.arrivalInformation}>
						<Text style={style.dateText}>{item.arrival.city} </Text>
						<Text style={style.dateText}>{item.departure.city} </Text>
					</View>
					<ProgressBar currentPercentage={currentPercentage} />
				</View>
				<Text style={style.status}>
					{item.status === null ? "in department" : item.status}
				</Text>

				{openMoreInfo && (
					<AccordionCard>
						<Text>
							{item.type ? item.type : "Наразі немає інформації"}
						</Text>
					</AccordionCard>
				)}
			</>
		</View>
	)
}
