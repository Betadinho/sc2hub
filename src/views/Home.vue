<template>
  <v-container class="home" fluid>
    <landing-page title="Hub"/>
    <recent-builds />
  </v-container>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import RecentBuilds from '@/components/RecentBuilds.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    RecentBuilds
  },
  computed: {
  }
};
</script>
