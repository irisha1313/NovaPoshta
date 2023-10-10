import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

import { Link } from "@react-navigation/native"
import { categoryListData } from "../../data"
import { CategoryItem } from "../UI/Category/Category"

interface ICategory {}
export const CategoryList: FC<ICategory> = ({}) => {
	return (
		<View style={style.contaiter}>
			{categoryListData.map((item) => (
				<Link to={`/${item.navigationTitle}`} key={item.id}>
					<View style={style.categoryList}>
						<CategoryItem item={item} />
					</View>
				</Link>
			))}
		</View>
	)
}

const style = StyleSheet.create({
	contaiter: {
		display: "flex",
		flexWrap: "wrap",
		backgroundColor: "#fff",
		flexDirection: "row",
	},
	categoryList: {
		height: 145,
		width: 160,
	},
})
