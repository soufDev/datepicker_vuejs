<style lang="scss">
  $header-height: 100px;
  $day-size: 41px;
  .datepicker {
    position: absolute;
    top: 100%;
    width: 315px;
    z-index: 5;
    background-color: #fff;
    box-shadow:0 14px 45px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .datepicker_header{
    background-color: #0097a7;
    color: #FFF;
    padding: 20px;
    height: $header-height;
  }

  .datepicker_year {
    opacity: 0.7;
    margin-bottom: 10px;
    line-height: 16px;
  }

  .datepicker_date {
    font-size: 32px;
    line-height: 32px;
  }

  .datepicker_week {
    font-size:12px;
    line-height: 12px;
    color: rgba(0, 0, 0, 0.8);
    padding: 0 14px;
  }

  .datepicker_weekday {
    float: left;
    width: $day-size;
    text-align: center;
  }
  .datepicker_days {
    margin: 14px;
  }
  .datepicker_day {
    position: relative;
    width: $day-size;
    height: $day-size;
    float: left;
    text-align: center;
    line-height: $day-size;
    cursor: pointer;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .datepicker_day_effect {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgb(0, 151, 167);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);
    transform: scale(0);
    opacity: 0.0;
  }

  .datepicker_day_text {
    position: relative;
  }

  .datepicker_day:hover {
    color: #FFF;
    .datepicker_day_effect {
      transform: scale(1);
      opacity: 0.6;
    }
  }

  .datepicker_day.selected {
    color: #FFF;
    .datepicker_day_effect {
      transform: scale(1);
      opacity: 0.6;
    }
  }

</style>
<template>
  <div class="datepicker">
    <div class="datepicker_header">
      <div class="datepicker_year">
        {{ year }}
      </div>
      <div class="datepicker_date">
        {{ date_formatted }}
      </div>
    </div>
    <div class="datepicker_week">
      <div v-for="day in days" track-by="$index" class="datepicker_weekday">
        {{ day }}
      </div>
    </div>
    <div class="datepicker_days">
      <div class="datepicker_day" :style="{width:(month.getWeekStart()*41) + 'px'}">
      </div>
      <div class="datepicker_day" v-on:click="selectDate(day)" v-for="day in month.getDays()" :class="{selected: isSelected(day)}">
        <span class="datepicker_day_effect"></span>
        <span class="datepicker_day_text">
          {{ day.format('D') }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import Month from '../modules/month'
  export default {
    props: ['date'],
    data () {
      return {
        days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        month: new Month(this.date.month(), this.date.year())
      }
    },
    methods: {
      isSelected: function (day) {
        return this.date.unix() === day.unix()
      },
      selectDate: function (day) {
        this.date = day.clone()
      }
    },
    computed: {
      year () {
        return this.date.format('YYYY')
      },
      date_formatted () {
        return this.date.format('dddd DD MMM')
      }
    }
  }
</script>
