<template>
  <v-app>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        dark
    >


        <v-list
        nav
        dense
        >

            <v-list-item link to="/">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item link to="Builds">
                <v-list-item-icon>
                    <v-icon>mdi-widgets</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Builds</v-list-item-title>
            </v-list-item>

            <v-list-item link to="Create">
                <v-list-item-icon>
                    <v-icon>mdi-gavel</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Create</v-list-item-title>
            </v-list-item>

<!-- 
There is no share function. No target specified yet.

            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-share</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Share</v-list-item-title>
            </v-list-item>
-->
<!--
No ned for an about page to be available everywhere 
            <v-list-item link to="About">
                <v-list-item-icon>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
            </v-list-item>
-->
            <v-list-item link to="Library">
                    <v-list-item-icon>
                        <v-icon>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Library</v-list-item-title>
            </v-list-item>
        </v-list>
        
        <v-divider></v-divider>

        <v-list 
        nav 
        dense
        >
            <div v-for="(b, index) in quickDrawItems" :key="index">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-book</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{b.title}} <span>{{b.matchup[0][0]}}v{{b.matchup[1][0]}}</span></v-list-item-title>
                </v-list-item>
            </div>
        </v-list>

    </v-navigation-drawer>

    <v-main app>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  computed: {
      quickDrawItems() {
          return this.$store.state.quickDrawer
      }
  }
};
</script>
