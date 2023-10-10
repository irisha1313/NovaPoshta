import { IArrival, IDeparture, ITurtle } from "@/types/mockTurtleType"

export function formatDate(date) {
	const hours = String(date.getHours()).padStart(2, "0")
	const minutes = String(date.getMinutes()).padStart(2, "0")
	const seconds = String(date.getSeconds()).padStart(2, "0")

	return `${hours}:${minutes}:${seconds}`
}

export const dtArrival = (item: IArrival) =>
	new Date(item.date).toLocaleString().split(",", 1)

export const dtDeparture = (item: IDeparture) =>
	new Date(item.date).toLocaleString().split(",", 1)

export const arrivalDate = (item: ITurtle) =>
	new Date(Date.parse(item.arrival.date))
export const departureDate = (item: ITurtle) =>
	new Date(Date.parse(item.departure.date))
