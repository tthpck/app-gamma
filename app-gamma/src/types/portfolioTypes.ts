export type Portfolio = {
      name: string
      id: 'basic' | 'essential' | 'advanced' | 'master'
      monthlyPriceCents: string | number
      yearlyPriceCents: string | number
      minCapital: number
      timeHorizon: string
      instruments: string
}



