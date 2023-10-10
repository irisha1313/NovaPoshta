import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

interface ILogotype {}
export const Logotype: FC<ILogotype> = ({}) => {
	return (
		<View>
			<Text>Logotype</Text>
		</View>
	)
}
const style = StyleSheet.create({ container: {} })
