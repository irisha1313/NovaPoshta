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
	setVisibleFooterContent: React.Dispatch<
		React.SetStateAction<boolean>
	>
	visibleFooterContent: boolean
}
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
	Dimensions.get("window")

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.4
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1
const MAX_UPWARD_TRANSLATE_Y =
	BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0
const DRAG_THRESHOLD = 50

export const DraggableBottomSheet: FC<IDraggableBottomSheet> = ({
	children,
	setVisibleFooterContent,
	visibleFooterContent,
}) => {
	console.log(BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT)
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
				<View>{children}</View>
			</Animated.View>
		</View>
	)
}
