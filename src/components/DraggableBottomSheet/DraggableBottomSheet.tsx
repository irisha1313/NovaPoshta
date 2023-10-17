import React, { FC, useRef, useState } from "react"
import {
	View,
	Text,
	Animated,
	Dimensions,
	PanResponder,
} from "react-native"
import { style } from "./styles"

interface IDraggableBottomSheet {
	children: React.ReactNode
}
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
	Dimensions.get("window")

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.6
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1
const MAX_UPWARD_TRANSLATE_Y =
	BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0
const DRAG_THRESHOLD = 50

export const DraggableBottomSheet: FC<IDraggableBottomSheet> = ({
	children,
}) => {
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
						springAnimation("down")
					} else {
						springAnimation("down")
					}
				} else {
					// dragging up
					if (gesture.dy >= -DRAG_THRESHOLD) {
						springAnimation("up")
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
			<Animated.View
				style={[
					style.bottomSheet,
					{
						height: BOTTOM_SHEET_MAX_HEIGHT,
						bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
					},
					bottomSheetAnimation,
				]}
				{...panResponder.panHandlers}
			>
				<Text
					style={{
						textAlign: "center",
						fontSize: 18,
						paddingVertical: 10,
					}}
				>
					CAtegory
				</Text>

				<View style={style.draggableArea}></View>
				<View style={style.content}>{children}</View>
			</Animated.View>
		</View>
	)
}
