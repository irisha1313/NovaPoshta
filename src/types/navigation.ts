import { NavigationProp } from "@react-navigation/native"
import { ITurtle } from "./mockTurtleType"

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

export type typedNavigation = NavigationProp<TypeRootStackParamList>
