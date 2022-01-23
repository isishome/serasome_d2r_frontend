import i18n from '@/setup/i18n-setup'
const mixin = {
  methods: {
    parsDateTime: function (updDate) {
      if (this.isNew(updDate, 60000))
        return i18n.t('date.moment')

      const date = new Date(updDate + (540 * 60 * 1000)).toISOString()
      const today = new Date(Date.now() + (540 * 60 * 1000)).toISOString()
      const isToday = date.substr(0, 10) === today.substr(0, 10)
      return isToday ? date.substr(11, 8) : date.substr(0, 10)
    },
    isNew: function (updDate, ms) {
      return Date.now() - updDate < (ms || 300000)
    },
    isView: function (view) {
      if (view > 999999)
        return this.floorToOne(view / 1000000).toString().concat('m')
      else if (view > 999)
        return this.floorToOne(view / 1000).toString().concat('k')
      else
        return view
    },
    floorToOne(num) {
      return +(Math.floor(num + "e+1") + "e-1")
    },
    getYoutubeId(youtubeURL) {
      const youtubeExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      const match = youtubeExp[Symbol.match](youtubeURL)
      const result = (match && match[7].length === 11) ? match[7] : null

      return result
    },
    pascalCase(str) {
      const words = str ? str.match(/[a-z]+/gi) : false
      if (!words) return str
      return words
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        })
        .join(' ')
    }
  }
}

export default mixin