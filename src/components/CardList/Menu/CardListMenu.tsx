import React, { FC, useRef } from "react"
import {
	View,
	Text,
	Pressable,
	Animated,
	StyleSheet,
} from "react-native"
import { AnimatedCartdItem } from "./AnimatedCartdItem/AnimatedCartdItem"
interface ICartListMenu {
	setVisibleFooterContent: React.Dispatch<
		React.SetStateAction<boolean>
	>
	status: string
	visibleFooterContent: boolean
	categoryName: string[]
	setStatus: React.Dispatch<React.SetStateAction<string>>
}
export const CardListMenu: FC<ICartListMenu> = ({
	status,
	setVisibleFooterContent,
	categoryName,
	setStatus,
	visibleFooterContent,
}) => {
	const value = useRef(new Animated.Value(0)).current
	const startAnimate = () => {
		if (visibleFooterContent) {
			Animated.timing(value, {
				toValue: 0,
				useNativeDriver: true,
				duration: 1000,
			}).start(() => {
				value.setValue(0)
			})
		} else {
			Animated.timing(value, {
				toValue: -25,
				useNativeDriver: true,
				duration: 1000,
			}).start()
		}
	}

	const onChangeCategory = (name: string) => {
		setStatus(name)
		Animated.timing(value, {
			toValue: 0,
			useNativeDriver: true,
			duration: 1000,
		}).start(() => {
			value.setValue(0)
		})
		setTimeout(() => {
			setVisibleFooterContent(false)
		}, 1000)
	}
	const onToggle = () => {
		startAnimate()
		if (visibleFooterContent) {
			setTimeout(() => {
				setVisibleFooterContent((prev) => !prev)
			}, 500)
		} else setVisibleFooterContent((prev) => !prev)
	}
	return (
		<AnimatedCartdItem value={value}>
			<View style={{ padding: 20 }}>
				<Pressable onPress={() => onToggle()}>
					{visibleFooterContent ? (
						<View>
							<Text style={style.text} onPress={() => onToggle()}>
								Cортування посилок:
							</Text>
							{categoryName.map((categoryName, id) => (
								<Pressable
									key={categoryName}
									style={style.item}
									onPress={() => onChangeCategory(categoryName)}
								>
									<Text style={{ padding: 5 }}>{categoryName}</Text>
								</Pressable>
							))}
						</View>
					) : (
						<Text style={{ textAlign: "center" }}>{status}</Text>
					)}
				</Pressable>
			</View>
		</AnimatedCartdItem>
	)
}

const style = StyleSheet.create({
	item: {
		alignItems: "center",
		padding: 10,
		borderTopWidth: 2,
		borderColor: "#ccc",
	},
	text: {
		textAlign: "center",
		marginBottom: 20,
		fontWeight: "600",
	},
})
