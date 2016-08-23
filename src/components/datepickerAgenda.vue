<style lang="scss">
    $header-height: 100px;
    .datepicker {
        position: absolute;
        top: 100%;
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
        <div class="datepicker_days">
            <div v-for="day in days">
                {{ day }}
            </div>
        </div>
   </div>
</template>
<script>
    export default {
        props: ['date'],
        computed: {
            data () {
                return {
                    days : ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                }
            },
            year () {
                return this.date.format('YYYY')
            },
            date_formatted () {
                return this.date.format('dddd DD MMM')
            }
        }
    }
</script>
