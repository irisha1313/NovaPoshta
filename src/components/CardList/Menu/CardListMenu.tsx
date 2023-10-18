import React, { FC, useRef } from "react"
import {
	View,
	Text,
	Pressable,
	Animated,
	StyleSheet,
	Dimensions,
	PanResponder,
} from "react-native"
interface ICartListMenu {
	setVisibleFooterContent: React.Dispatch<
		React.SetStateAction<boolean>
	>
	status: string
	visibleFooterContent: boolean
	categoriesName: string[]
	setStatus: React.Dispatch<React.SetStateAction<string>>
}
const { height: WINDOW_HEIGHT } = Dimensions.get("window")
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.4
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1
const MAX_UPWARD_TRANSLATE_Y =
	BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0
const DRAG_THRESHOLD = 50

export const CardListMenu: FC<ICartListMenu> = ({
	status,
	setVisibleFooterContent,
	categoriesName,
	setStatus,
	visibleFooterContent,
}) => {
	const onChangeCategory = (name: string) => {
		setStatus(name)
		setVisibleFooterContent(false)
		springAnimation("down")
	}
	// drag
	const animatedValue = useRef(new Animated.Value(0)).current
	const lastGestureDy = useRef(0)
	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				animatedValue.setOffset(lastGestureDy.current)
			},
			onPanResponderMove: (e, gesture) => {
				animatedValue.setValue(gesture.dy)
			},
			onPanResponderRelease: (e, gesture) => {
				animatedValue.flattenOffset()
				lastGestureDy.current += gesture.dy
				if (gesture.dy > 0) {
					// dragging down
					if (gesture.dy <= DRAG_THRESHOLD) {
						springAnimation("up")
					} else {
						springAnimation("down")
					}
				} else {
					// dragging up
					if (gesture.dy >= -DRAG_THRESHOLD) {
						springAnimation("down")
					} else {
						springAnimation("up")
					}
				}
			},
		})
	).current

	const bottomSheetAnimation = {
		transform: [
			{
				translateY: animatedValue.interpolate({
					inputRange: [
						MAX_UPWARD_TRANSLATE_Y,
						MAX_DOWNWARD_TRANSLATE_Y,
					],
					outputRange: [-250, 60],
					extrapolate: "clamp",
				}),
			},
		],
	}
	const springAnimation = (direction: "up" | "down") => {
		console.log("direction", direction)
		if (direction === "up") {
			setVisibleFooterContent(true)
		} else setVisibleFooterContent(false)

		lastGestureDy.current =
			direction === "down"
				? MAX_DOWNWARD_TRANSLATE_Y
				: MAX_UPWARD_TRANSLATE_Y
		Animated.spring(animatedValue, {
			toValue: lastGestureDy.current,
			useNativeDriver: true,
		}).start()
	}
	console.log("categoriesName", categoriesName[0])
	return (
		<View style={style.container}>
			<Animated.View
				style={[
					style.bottomSheet,
					{
						height: 600,
						bottom: -500,
					},
					bottomSheetAnimation,
				]}
				{...panResponder.panHandlers}
			>
				<View style={{ padding: 20 }}>
					<Pressable>
						{visibleFooterContent ? (
							<Animated.View>
								<Text style={style.text}>Cортування посилок:</Text>
								{categoriesName.map((categoryName, id) => (
									<Pressable
										key={categoryName}
										style={[
											style.item,
											status === categoryName
												? { backgroundColor: "#ddd" }
												: null,
										]}
										onPress={() => onChangeCategory(categoryName)}
									>
										<Text style={{ paddingVertical: 10 }}>
											{categoryName}
										</Text>
									</Pressable>
								))}
							</Animated.View>
						) : (
							<Text style={style.text}>{status}</Text>
						)}
					</Pressable>
				</View>
			</Animated.View>
		</View>
	)
}
const style = StyleSheet.create({
	item: {
		alignItems: "center",
		padding: 10,
		borderTopWidth: 2,
		borderColor: "#615f5f",
	},
	text: {
		textAlign: "center",
		marginBottom: 20,
		fontWeight: "600",
		fontSize: 22,
	},
	container: {
		flex: 1,
	},
	bottomSheet: {
		position: "absolute",
		width: "100%",
		backgroundColor: "#ccc",
		borderTopLeftRadius: 72,
		borderTopRightRadius: 72,
	},
	draggableArea: {
		width: 132,
		height: 32,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
	},
})
