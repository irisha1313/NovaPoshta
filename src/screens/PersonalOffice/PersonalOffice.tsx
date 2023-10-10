import React, { FC, useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

import { BarCode, BarCodeModal } from "@/components"
import { personalOfficeData } from "@/data"
import { FIREBASE_AUTH } from "@/firebaseConfig"
import { logoutUser } from "@/store/slices/authSlice"
import { useAppSelector } from "@/store/store"
import { TypeRootStackParamList } from "@/types/navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { signOut } from "firebase/auth"
import { useDispatch } from "react-redux"
import { OptionsItem } from "./OptionsItem/OptionsItem"

interface IPersonalOffice {
	navigation: NativeStackNavigationProp<TypeRootStackParamList>
}
export const PersonalOffice: FC<IPersonalOffice> = ({
	navigation,
}) => {
	const user = useAppSelector((state) => state.auth.user)
	const dispatch = useDispatch()
	const auth = FIREBASE_AUTH
	const handelLogout = () => {
		dispatch(logoutUser())
		signOut(auth)
	}
	const [showModalWindow, setShowModalWindow] = useState(false)
	return (
		<View style={style.container}>
			<Text style={style.userInfo}>{user?.email}</Text>

			<View style={style.options}>
				{personalOfficeData.map(
					(item) => (
						<OptionsItem item={item} />
					),
					[]
				)}
			</View>

			<Pressable onPress={handelLogout}>
				<Text style={style.btn}> Вийти з акаунту </Text>
			</Pressable>

			{showModalWindow && (
				<BarCodeModal
					setShowModal={setShowModalWindow}
					showModal={showModalWindow}
				/>
			)}
			<View style={style.barCode}>
				<BarCode
					setShowModal={setShowModalWindow}
					showModal={showModalWindow}
				/>
			</View>
		</View>
	)
}
const style = StyleSheet.create({
	container: {
		width: "100%",
	},
	userInfo: {
		fontWeight: "500",
		fontSize: 18,
		textAlign: "center",
		padding: 10,
		borderBottomWidth: 1,
		paddingTop: 20,
		borderBottomColor: "red",
		marginBottom: 20,
	},
	btn: {
		fontSize: 18,
		fontWeight: "600",
		textAlign: "center",
		marginVertical: 30,
	},
	options: {
		backgroundColor: "#fff",
	},
	barCode: {
		backgroundColor: "#fff",
		borderTopColor: "red",
		borderTopWidth: 1,
		height: 60,
	},
})
