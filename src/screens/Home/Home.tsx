import * as ScreenOrientation from "expo-screen-orientation"

import {
	BarCode,
	CategoryList,
	Information,
	SlideBar,
} from "@/components"
import { FC, useEffect, useRef, useState } from "react"
import {
	Animated,
	Dimensions,
	Text,
	View
} from "react-native"

import { BarCodeModal } from "@/components/BarCodeModal/BarCodeModal"
import { options } from "@/data"
import React from "react"
import AntDesign from "react-native-vector-icons/AntDesign"
import { style } from "./style"

interface IHome {}
export const Home: FC<IHome> = ({}) => {
	const { width } = Dimensions.get("window")
	const [scrollYPosition, setScrollYPosition] = useState(0)
	const useRefscrollView = useRef(null)
	const [orientation, setOrientation] = useState(1)
	const [showModalWindow, setShowModalWindow] = useState(false)

	const getOrientation = async () => {
		ScreenOrientation.unlockAsync()
		ScreenOrientation.addOrientationChangeListener((event: any) => {
			setOrientation(event.orientationInfo.orientation)
		})
	}
	useEffect(() => {
		getOrientation()
	}, [orientation])

	return (
		<>
			<View style={{ backgroundColor: "#ffff" }}>
				<SlideBar />
				{showModalWindow && (
					<BarCodeModal
						setShowModal={setShowModalWindow}
						showModal={showModalWindow}
						orientation={orientation}
						setOrientation={setOrientation}
					/>
				)}
				{orientation === 4 && (
					<BarCodeModal
						setShowModal={setShowModalWindow}
						showModal={showModalWindow}
						orientation={orientation}
						setOrientation={setOrientation}
					/>
				)}
				<BarCode
					setShowModal={setShowModalWindow}
					showModal={showModalWindow}
				/>
				<Information />
			</View> 

			<View style={style.container}>
				<Animated.ScrollView
					ref={useRefscrollView}
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					contentOffset={{
						y: scrollYPosition,
						x: 0,
					}}
					style={style.scrollView}
				>
					<View style={{ alignItems: "center", marginBottom: 10 }}>
						<View style={style.slide}>
							<CategoryList />
						</View>

						<AntDesign
							style={{ marginBottom: 20 }}
							name="caretdown"
							onPress={() =>
								useRefscrollView.current.scrollTo({
									y: width,
									x: 0,
									animated: true,
								})
							}
						/>
						<AntDesign
							name="caretup"
							onPress={() =>
								useRefscrollView.current.scrollTo({
									x: 0,
									y: 0,
									animated: true,
								})
							}
						/>

						<View style={style.slide}>
							{options.map((option) => (
								<Text key={option.title} style={style.optionsText}>
									{option.title}
								</Text>
							))}
						</View>
					</View>
				</Animated.ScrollView>
			</View>
			</>
	)
}
