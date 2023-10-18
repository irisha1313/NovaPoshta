import { NavigationProp } from "@react-navigation/native"
import { ITurtle } from "./mockTurtleType"
import {
	CreatePackage,
	Department,
	Home,
	Information,
	InternationalPackage,
	MyPackages,
	PersonalOffice,
} from "@/screens"
import { CardDetail } from "@/components/UI/Card"
import { RouteDetail } from "@/components/UI/Card/RouteDetail/RouteDetail"

export enum EScreens {
	MAIN = "Main",
	HOME = "Home",
	SIGNIN = "SignIn",
	SIGNUP = "SignUp",
	INFORMATION = "Information",
	BARCADEMODAL = "BarCodeModal",
	PRESONALOFFICE = "PersonalOffice",
	PHONENUMBERVERIFICATION = "PhoneNumberVerification",
	REGISTRATION = "Registration",
	MYPACKAGES = "MyPackages",
	INTERNATIONALPACKAGE = "InternationalPackage",
	DEPARTMENT = "Department",
	CREATEPACKAGE = "CreatePackage",
	CARDDETAIL = "CardDetail",
	ROUTEDETAIL = "RouteDetail",
}

export type TypeRootStackParamList = {
	Home: undefined
	SignUp: undefined
	SignIn: undefined
	Profile: undefined
	PersonalOffice: undefined
	MyPackages: undefined
	InternationalPackage: undefined
	Department: undefined
	CreatePackage: undefined
	CardDetail: {
		item: ITurtle
	}
	RouteDetail: {
		item: ITurtle
	}
}

export const mainRoutes = [
	{
		name: EScreens.HOME,
		component: Home,
	},
	{
		name: EScreens.INFORMATION,
		component: Information,
	},
	{
		name: EScreens.PRESONALOFFICE,
		component: PersonalOffice,
	},
	{
		name: EScreens.CREATEPACKAGE,
		component: CreatePackage,
	},
	{
		name: EScreens.INTERNATIONALPACKAGE,
		component: InternationalPackage,
	},
	{
		name: EScreens.MYPACKAGES,
		component: MyPackages,
	},
	{
		name: EScreens.CARDDETAIL,
		component: CardDetail,
	},
	{
		name: EScreens.DEPARTMENT,
		component: Department,
	},
	{
		name: EScreens.ROUTEDETAIL,
		component: RouteDetail,
	},
]

export type typedNavigation = NavigationProp<TypeRootStackParamList>
