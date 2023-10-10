import React, { FC } from "react"
import { View, Image } from "react-native"
import { SwiperFlatListWithGestureHandler } from "react-native-swiper-flatlist/WithGestureHandler"
import { Pagination } from "react-native-swiper-flatlist/src/components/Pagination/Pagination"
import { slideBarData } from "../../data/slideBarData"
import { PaginationProps } from "react-native-swiper-flatlist/src/components/Pagination/PaginationProps"
import { styles } from "./styles"
interface ISlider {}
export const SlideBar: FC<ISlider> = ({}) => {
	return (
		<View>
			<SwiperFlatListWithGestureHandler
				data={slideBarData}
				renderItem={({ item }) => (
					<View>
						<Image
							source={{ uri: item.image }}
							style={{ width: 390, height: 200 }}
						/>
					</View>
				)}
				autoplay
				autoplayLoop
				showPagination
				PaginationComponent={(
					props: JSX.IntrinsicAttributes & PaginationProps
				) => (
					<Pagination
						{...props}
						paginationStyleItem={styles.paginationItem}
						paginationStyle={styles.pagination}
						paginationDefaultColor="white"
						paginationActiveColor="red"
					/>
				)}
			/>
		</View>
	)
}
