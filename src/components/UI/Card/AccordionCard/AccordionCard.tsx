import React, { FC, PropsWithChildren } from "react"
import { View, Text, StyleSheet } from "react-native"

export const AccordionCard: FC<PropsWithChildren> = ({
	children,
}) => {
	return <View style={style.container}>{children}</View>
}

const style = StyleSheet.create({
	container: {
		padding: 10,
    paddingTop : 20,
		margin: 10,
		borderTopWidth: 1,
		borderColor: "#ccc",
    color: '#cccc'
	},
})
