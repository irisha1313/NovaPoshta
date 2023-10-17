import { CardList } from "@/components/CardList/CardList"
import { DraggableBottomSheet } from "@/components/DraggableBottomSheet/DraggableBottomSheet"
import { HeaderMenu } from "@/components/HeaderMenu/HeaderMenu"
import React, { FC, useRef } from "react"
import { Animated, Easing, View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
interface IMyPackages {
	showMenu: boolean
	setShowMenu: any
	navigation: any
}
export const MyPackages: FC<IMyPackages> = ({ navigation }) => {
	const [showMenu, setShowMenu] = React.useState(false)
	const value = useRef(new Animated.Value(0)).current
	const startAnimateIocn = () => {
		Animated.timing(value, {
			toValue: showMenu ? 0 : 1,
			duration: 700,
			useNativeDriver: true,
		}).start(() => {
			showMenu ? value.setValue(0) : value.setValue(1)
		})
	}
	const interpolateRotationg = value.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "47deg"],
	})

	const animate_stateMenu = {
		start: -20,
		end: 100,
	}
	const valueMenu = useRef(
		new Animated.Value(animate_stateMenu.start)
	).current
	const startAnimateMenu = () => {
		Animated.timing(valueMenu, {
			toValue: showMenu
				? animate_stateMenu.start
				: animate_stateMenu.end,
			useNativeDriver: true,
			duration: 1000,
			easing: Easing.ease,
		}).start()
	}

	const inputRange = [animate_stateMenu.start, animate_stateMenu.end]
	const opacity = value.interpolate({
		inputRange,
		outputRange: [0, 1],
	})
	const translateY = valueMenu.interpolate({
		inputRange,
		outputRange: [-690, 100],
	})
	const startAnimateToggle = () => {
		startAnimateIocn()
		startAnimateMenu()
		if (showMenu) {
			setTimeout(() => {
				setShowMenu(false)
			}, 1000)
		} else {
			setShowMenu(true)
		}
	}

	React.useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Animated.View
					style={{
						transform: [{ rotate: interpolateRotationg }],
						height: 20,
						width: 20,
						justifyContent: "center",
					}}
				>
					<Icon
						name="plus"
						color={"red"}
						size={20}
						onPress={startAnimateToggle}
					/>
				</Animated.View>
			),
		})
	}, [startAnimateToggle, showMenu])

	return (
		<View
			style={{
				position: "relative",
			}}
		>
			<Animated.View
				style={{
					width: "100%",
					justifyContent: "center",
					zIndex: 3,
					transform: [{ translateY }],
				}}
			>
				{showMenu && <HeaderMenu opacity={opacity} />}
			</Animated.View>
			<View
				style={{
					zIndex: 1,
				}}
			>
				<CardList />
			</View>
		</View>
	)
}
