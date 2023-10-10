import { persistor, store } from "@/store/store"

import { ActivityIndicator } from "react-native"
import { Navigation } from "@/components/navigation/Navigation"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import React from "react"
export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={<ActivityIndicator />} persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	)
}
