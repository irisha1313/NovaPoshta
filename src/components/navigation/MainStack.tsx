import { EScreens } from "@/types/navigation"
import {
	CreatePackage,
	Department,
	Home,
	InternationalPackage,
	MyPackages,
	PersonalOffice,
} from "../../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { FC } from "react"
import Icon from "react-native-vector-icons/SimpleLineIcons"
import { Information } from ".."
import { CardDetail } from "../UI/Card"
import { RouteDetail } from "../UI/Card/RouteDetail/RouteDetail"
interface IMainStack {}
export const MainStack: FC<IMainStack> = ({}) => {
	const Stack = createNativeStackNavigator()
	const [showMenu, setShowMenu] = React.useState(true)

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={EScreens.HOME}
				component={Home}
				options={({ navigation }) => ({
					headerRight: () => (
						<Icon
							name="user"
							size={15}
							color="red"
							onPress={() => navigation.navigate("PersonalOffice")}
						/>
					),
					title: "",
				})}
			/>
			<Stack.Screen
				name={EScreens.INFORMATION}
				component={Information}
			/>
			<Stack.Screen
				name={EScreens.PRESONALOFFICE}
				component={PersonalOffice}
			/>
			<Stack.Screen
				name={EScreens.CREATEPACKAGE}
				component={CreatePackage}
			/>
			<Stack.Screen
				name={EScreens.INTERNATIONALPACKAGE}
				component={InternationalPackage}
			/>
			<Stack.Screen
				name={EScreens.MYPACKAGES}
				component={MyPackages}
				options={{
					title: "Мої посилки",
				}}
			/>
			<Stack.Screen
				name={EScreens.DEPARTMENT}
				component={Department}
			/>
			<Stack.Screen
				options={{
					title: "Iнформацiя про посилку ",
				}}
				name={EScreens.CARDDETAIL}
				component={CardDetail}
			/>
			<Stack.Screen
				name={EScreens.ROUTEDETAIL}
				component={RouteDetail}
			/>
		</Stack.Navigator>
	)
}
