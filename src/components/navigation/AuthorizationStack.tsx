import React, { FC } from "react"
import { SignIn, SignUp } from "../Auth"

import { EScreens } from "@/types/navigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

interface IAuthorizationStack {}
export const AuthorizationStack: FC<IAuthorizationStack> = ({}) => {
	const Stack = createNativeStackNavigator()
	return (
		<Stack.Navigator>
			<Stack.Screen name={EScreens.SIGNIN} component={SignIn} options={{ title: "Увійти" }} />
			<Stack.Screen
				name={EScreens.SIGNUP}
				component={SignUp}
				options={{ title: "Cтворити акаунт " }}
			/>
		</Stack.Navigator>
	)
}
