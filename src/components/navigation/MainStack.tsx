import { mainRoutes } from "@/types/navigation"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { FC } from "react"
interface IMainStack {}
export const MainStack: FC<IMainStack> = ({}) => {
	const Stack = createNativeStackNavigator()
	return (
		<Stack.Navigator>
			{mainRoutes.map((item) => (
				<Stack.Screen
					key={item.name}
					name={item.name}
					component={item.component}
				/>
			))}
		</Stack.Navigator>
	)
}
