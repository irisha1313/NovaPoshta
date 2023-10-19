import React, { FC } from "react"
import { Image, Pressable, StyleSheet, Text } from "react-native"

interface IBarCode {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const BarCode: FC<IBarCode> = ({ setShowModal }) => {
	return (
		<Pressable
			style={style.container}
			onPress={() => setShowModal(true)}
		>
			<Image
				style={{
					width: 400,
					marginTop: 20,
					height: 50,
					opacity: 1,
				}}
				source={{
					uri: "https://img.freepik.com/free-vector/illustration-barcode_53876-44019.jpg?w=740&t=st=1694679413~exp=1694680013~hmac=75721dbd739c6324e31c848a66e60ae7db037d2876936b7488ea6b4d7447600a",
				}}
			/>
			<Text style={style.text}>Скануйте в відділенні</Text>
		</Pressable>
	)
}
const style = StyleSheet.create({
	container: {},
	text: {
		margin: 3,
		textAlign: "center",
		color: "#abb0ad",
	},
})
