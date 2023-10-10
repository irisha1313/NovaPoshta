export type ITurtles = ITurtle[]

export interface ITurtle {
  id: number
  departure: IDeparture
  arrival: IArrival
  status?: string
  type: string
  returnedDeliver: string
  deliveryAddresses: string

}

export interface IDeparture {
  city: string
  date?: string
}

export interface IArrival {
  city: string
  date?: string
}
