import { EScreens, TypeRootStackParamList } from "@/types/navigation"
import React, { FC } from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"
import { Information } from "../Information/Information"
import { Home } from "../../screens/Home/Home"

interface IPrivate {}

const Stack = createNativeStackNavigator()
const InsideStack = createNativeStackNavigator()

export const Private: FC<IPrivate> = ({}) => {
	const Stack = createNativeStackNavigator<TypeRootStackParamList>()
	return (
		<InsideStack.Navigator>
			<InsideStack.Screen name={EScreens.HOME} component={Home} />
			<InsideStack.Screen name={EScreens.INFORMATION} component={Information} />
		</InsideStack.Navigator>
	)
}
const style = StyleSheet.create({ container: {} })
