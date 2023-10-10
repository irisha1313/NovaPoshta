import React, { FC } from "react"
import { Animated, Dimensions } from "react-native"

interface IAnimatedCartdItem {
  children: React.ReactNode
  value: Animated.Value
}
export const AnimatedCartdItem: FC<IAnimatedCartdItem> = ({children  , value}) => {
      const { height } = Dimensions.get("window")
      return (
        <Animated.View
          style={{
            position: "absolute",
            top: height - 155,
            width: "100%",
            backgroundColor: "#e7ece7",
            borderTopRightRadius: 70,
            borderTopLeftRadius: 70,
            transform: [
              {
                translateY: value.interpolate({
                  inputRange: [0, 7.5],
                  outputRange: [0, 79],
                }),
              },
            ],
          }}
        >
          {children}
        </Animated.View>
      )
    }
    