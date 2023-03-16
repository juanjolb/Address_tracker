import { defineStore } from 'pinia'

export const useStore = defineStore('tracker', {
  state: () => ({
    trackInfo: {
    ip: '',
    location: {
      country: '',
      region: '',
      timezone: ''
    },
    domains: [],
    as: {
      asn: 0,
      name: '',
      route: '',
      domain: '',
      type: ''
    },
    isp: ''
    } as trackObject,
    trackError: false
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async trackIp(ip: string) {
      try {
        const apiKey = 'at_F2uKtd2xubEnigc4rn1kZ7IMrSHh8&'
        const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}ipAddress=${ip}`)
        this.trackInfo = await response.json();
        this.trackError =  (response.ok === true) ? false : true
        console.log(this.trackError)
      } catch (e) {
        console.log(e);
      }
    }
  }
})

interface trackObject {
  ip: string,
  location: {
    country: string,
    region: string,
    timezone: string
  },
  domains: string[],
  as: {
    asn: number,
    name: string,
    route: string,
    domain: string,
    type: string
  },
  isp: string
}
