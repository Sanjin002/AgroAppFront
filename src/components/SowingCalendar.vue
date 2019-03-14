<template>
    <div>
      <div id="app">
        <h1>My Calendar</h1>
        <calendar-view
          :show-date="showDate"
          class="theme-default holiday-us-traditional holiday-us-official">
          <calendar-view-header
            slot="header"
            slot-scope="t"
            :header-props="t.headerProps"
            @input="setShowDate" />
        </calendar-view>
      </div>
    </div>
</template>
<script>
    import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
    export default {
        name: "SowingCalendar",
      data: function() {
          return {
            showDate: new Date(),

          }
      },

      components: {
         CalendarView,
        CalendarViewHeader,
      },
      methods: {
        setShowDate(d) {
          this.showDate = d;
        },
      }
    }

</script>

<style scoped>

</style>
