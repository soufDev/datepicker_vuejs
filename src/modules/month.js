import moment from 'moment'
import 'moment-range'

export default class Month {

  constructor (month, year) {
    this.start = moment([year, month])
    this.end = this.start.clone().endOf('month')
    this.month = month
    this.year = year
  }

  getWeekStart () {
    return this.start.weekday()
  }

  getDays () {
    return moment.range(this.start, this.end).toArray('days')
  }
}
