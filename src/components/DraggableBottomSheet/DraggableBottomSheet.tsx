import React, { FC, useRef } from "react"
import {
	View,
	Text,
	StyleSheet,
	Animated,
	Dimensions,
  PanResponder,
} from "react-native"
import { style } from "./styles"

interface IDraggableBottomSheet {}
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
	Dimensions.get("window")

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.6
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1
const MAX_UPWARD_TRANSLATE_Y =
	BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0
const DRAG_THRESHOLD = 50

export const DraggableBottomSheet: FC<
	IDraggableBottomSheet
> = ({}) => {
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
				if (lastGestureDy.current < MAX_DOWNWARD_TRANSLATE_Y) {
					lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y
				} else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
					lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y
				}
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
					outputRange: [
						MAX_UPWARD_TRANSLATE_Y,
						MAX_DOWNWARD_TRANSLATE_Y,
					],
					extrapolate: "clamp",
				}),
			},
		],
	}
	const springAnimation = (direction: "up" | "down") => {
		console.log("direction", direction)
		lastGestureDy.current =
			direction === "down"
				? MAX_DOWNWARD_TRANSLATE_Y
				: MAX_UPWARD_TRANSLATE_Y
		Animated.spring(animatedValue, {
			toValue: lastGestureDy.current,
			useNativeDriver: true,
		}).start()
	}
	return (
		<View style={style.container}>
			<Text> sdfsdfds</Text>
			<Animated.View
				style={[
					style.bottomSheet,
					{
						height: BOTTOM_SHEET_MAX_HEIGHT,
						bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
					},
					bottomSheetAnimation,
				]}
			>
				<Text
					style={{
						textAlign: "center",
						fontSize: 18,
						paddingVertical: 10,
					}}
					{...panResponder.panHandlers}
				>
					CAtegory
				</Text>

				<View
					style={style.draggableArea}
					{...panResponder.panHandlers}
				></View>
				<View style={style.content}>
					<Text>FDSFSD</Text>
				</View>
			</Animated.View>
		</View>
	)
}
