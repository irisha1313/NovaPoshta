import { FC, useEffect, useRef, useState } from "react"
import {
	Animated,
	Image,
	SafeAreaView,
	Text,
	View
} from "react-native"

import { formatDate } from "@/utils/dataFormat"
import React from "react"
import Modal from "react-native-modal"
import Icon from "react-native-vector-icons/AntDesign"
import { style } from "./style"

interface IBarCode {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
	showModal: boolean
	orientation?: number
	setOrientation?: React.Dispatch<React.SetStateAction<number>>
}

export const BarCodeModal: FC<IBarCode> = ({
	setShowModal,
	showModal,
	orientation,
	setOrientation,
}) => {
	const [currentDate, setCurrentDate] = useState(new Date())

	const fadeAnim = useRef(new Animated.Value(0)).current
	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 10000,
			useNativeDriver: true,
		}).start()
	}, [fadeAnim])

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDate(new Date())
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<Animated.View
			style={{
				opacity: fadeAnim,
			}}
		>
			<Modal isVisible={true} style={style.card}>
				<SafeAreaView
					style={
						showModal === true
							? style.safeAreaView
							: style.isVerticalSafeAreaView
					}
				>
					<Icon
						name="close"
						onPress={
							showModal === true
								? () => setShowModal(false)
								: () => setOrientation(1)
						}
						size={30}
						style={
							showModal === true ? style.icon : style.isVerticalIcon
						}
					/>
					<View
						style={
							showModal === true
								? { left: 180, top: 100 }
								: style.isVerticalBarCode
						}
					>
						<Text
							style={
								showModal === true ? style.date : style.dateVertical
							}
						>
							{formatDate(currentDate)}
						</Text>
						<Image
							style={{
								width: 400,
								marginTop: 50,
								height: 100,
							}}
							source={{
								uri: "https://img.freepik.com/free-vector/illustration-barcode_53876-44019.jpg?w=740&t=st=1694679413~exp=1694680013~hmac=75721dbd739c6324e31c848a66e60ae7db037d2876936b7488ea6b4d7447600a",
							}}
						/>
					</View>
					<View
						style={
							showModal ? style.cartInfo : style.isVerticalCartInfo
						}
					>
						<Text style={style.cartText}>Карта Клієнта</Text>
						<Text style={style.userinfo}>Користувач</Text>
						<Text> +38 093 042 8113</Text>
					</View>
				</SafeAreaView>
			</Modal>
		</Animated.View>
	)
}
