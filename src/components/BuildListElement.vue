<template>
    <v-expansion-panels>
        <v-expansion-panel
            v-model="panel"
            multiple
        >
            <v-container>
                <v-expansion-panel>
                    <v-expansion-panel-header v-ripple="{class:'primary--text'}">
                        <template v-slot:actions>
                            <v-btn icon @click="favorite">
                                <v-icon dark v-if="isfavorite()">mdi-heart</v-icon>
                                <v-icon dark v-else>mdi-heart-outline</v-icon>
                            </v-btn>
                            <v-btn icon @click="drawer">
                                <v-icon dark>mdi-book</v-icon>
                            </v-btn>
                            <v-btn icon @click="editBuild(build)">
                                <v-icon dark>mdi-circle-edit-outline</v-icon>
                            </v-btn>
                            <v-btn icon @click="deleteBuild(build)">
                                <v-icon dark>mdi-delete-forever-outline</v-icon>
                            </v-btn>
                            <v-icon color="teal">$expand</v-icon>
                        </template>    
                        <b>{{ build.title }}</b>

                        <span>
                            <b :class="color(build.matchup[0])">{{build.matchup[0]}}</b>
                            <b class="orange--text"> vs </b>
                            <b>{{build.matchup[1]}}</b>
                        </span>

                        <i>{{build.author}}</i>
                        
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row justify="center" align="center">
                            <h4>Build Description</h4>
                        </v-row>
                        <v-row justify="center" align="center">
                            <p>{{build.description}}</p>
                        </v-row>
                        <v-expansion-panels v-for="(value, name, i) in build.content" :key="i">
                            <v-expansion-panel
                            v-model="panel"
                            multiple
                            >
                                <v-expansion-panel-header>{{ name }}</v-expansion-panel-header>
                                <v-expansion-panel-content>{{ value }}</v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-container>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    name: 'build-list-element',
    props: {
        build: Object  
    },
    data: () => ({
        panel: [0,1]
    }),
    methods: {
        color(race) {
            switch (race) {
                case 'T':
                    return "red--text"
                case 'Terran':
                    return "red--text"
                case 'P':
                    return "light-blue--text"
                case 'Protoss':
                    return "light-blue--text"
                case 'Z':
                    return "purple--text"
                case 'Zerg':
                    return "purple--text"
                default:
                    break;
            }
        },
        isfavorite() {
            let favorite = this.$store.state.favorites
            if (favorite.findIndex(x => x.id === this.build.id) == -1) {
                return false;
            } else return true;
        },
        async deleteBuild(build) {
            if(confirm('Permanently delete this build?\n '+build.title)) {
                await this.$store.dispatch('deleteBuild', build);
                this.$store.dispatch('getBuilds');
                this.$store.commit('removeFromDrawer', this.build);
                this.$store.commit('removeFromFavorites', this.build)
            } else return
        },
        async editBuild(build) {
            if(confirm('Edit this build?\n '+build.title)) {
                this.$router.push({name: 'Create', params: {build: build}});
                this.$store.dispatch('updateLibrary', build);
            } else return
        },
        drawer() {
            let drawer = this.$store.state.quickDrawer
            if (drawer.findIndex(x => x.id === this.build.id) == -1) {
                this.$store.commit('addToDrawer', this.build);
                
            }else this.$store.commit('removeFromDrawer', this.build);
        }, 
        favorite() {
            let favorite = this.$store.state.favorites
            if (favorite.findIndex(x => x.id === this.build.id) == -1) {
                this.$store.commit('addToFavorites', this.build);
            } else this.$store.commit('removeFromFavorites', this.build)
        }
    }
}
</script>