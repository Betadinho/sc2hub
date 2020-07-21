<template>
    <v-layout>
        <v-container fluid>
            <v-form v-model="valid" @submit="saveBuild">
                <v-row justify="center" align="center">
                    <v-col>
                        <v-select
                        v-model="build.matchup[0]"
                        :items="items"
                        label="Build Race"
                        required
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                        v-model="build.matchup[1]"
                        :items="items"
                        label="Enemy Race"
                        required
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                        v-model="build.author"
                        label="author"
                        placeholder="Build Author"
                        outlined
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                
                <v-row justify="center" align="center">
                    <v-flex xs12 md12 lg12>
                        <v-text-field
                        v-model="build.title"
                        label="Title"
                        placeholder="Short title for the build"
                        outlined
                        >
                        </v-text-field>
                    </v-flex>
                </v-row>
                
                <v-row justify="center" align="center">
                    <v-flex xs12 md12 lg12>
                        <v-text-field
                        v-model="build.description"
                        label="Description"
                        placeholder="Short description of the builds purpose etc."
                        outlined
                        >
                        </v-text-field>
                    </v-flex>
                </v-row>
                

                <v-row xs12>
                    <v-expansion-panels>
                        <v-expansion-panel
                            v-model="panel"
                            multiple
                        >
                            <v-expansion-panel-header v-ripple="{class:'primary--text'}">
                                <template v-slot:actions>
                                    <v-icon color="primary">$expand</v-icon>
                                </template>    
                                <b>Early Game</b>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-5">
                                <v-row justify="space-between" align="center">
                                    <v-flex xs12 md6 lg6>
                                        <v-textarea
                                        v-model="build.content.earlyGame"
                                        label="Early Game"
                                        placeholder="Detailed Build Order"
                                        outlined
                                        auto-grow
                                        >
                                        </v-textarea>
                                    </v-flex>
                                    <v-flex xs12 md6 lg6>
                                        <v-textarea
                                        v-model="build.notes.earlyGameNotes"
                                        label="Early Game Notes"
                                        placeholder="Build Order Notes"
                                        outlined
                                        auto-grow
                                        >
                                        </v-textarea>
                                    </v-flex>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
                <v-row xs12>
                    <v-expansion-panels>
                        <v-expansion-panel
                            v-model="panel"
                            multiple
                        >
                            <v-expansion-panel-header v-ripple="{class:'primary--text'}">
                                <template v-slot:actions>
                                    <v-icon color="primary">$expand</v-icon>
                                </template>    
                                <b>Mid Game</b>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-5">
                                <v-row justify="space-between" align="center">
                                    <v-flex xs12 md6 lg6>
                                        <v-textarea
                                        v-model="build.content.midGame"
                                        label="Mid Game"
                                        placeholder="Detailed Build Order"
                                        outlined
                                        auto-grow
                                        >
                                        </v-textarea>
                                    </v-flex>
                                    <v-flex xs12 md6 lg6>
                                        <v-textarea
                                        v-model="build.notes.midGameNotes"
                                        label="Mid Game Notes"
                                        placeholder="Build Order Notes"
                                        outlined
                                        auto-grow
                                        >
                                        </v-textarea>
                                    </v-flex>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
                <v-row xs12>
                    <v-expansion-panels>
                        <v-expansion-panel
                            v-model="panel"
                            multiple
                        >
                            <v-expansion-panel-header v-ripple="{class:'primary--text'}">
                                <template v-slot:actions>
                                    <v-icon color="primary">$expand</v-icon>
                                </template>    
                                <b>Late Game</b>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-5">
                                <v-row justify="space-between" align="center">
                                    <v-flex xs12 md6 lg6>
                                        <v-textarea
                                        v-model="build.content.lateGame"
                                        label="Late Game"
                                        placeholder="Detailed Build Order"
                                        outlined
                                        auto-grow
                                        >
                                        </v-textarea>
                                    </v-flex>
                                    <v-flex xs12 md6 lg6>
                                        <v-textarea
                                        v-model="build.notes.lateGameNotes"
                                        label="Late Game Notes"
                                        placeholder="Build Order Notes"
                                        outlined
                                        auto-grow
                                        >
                                        </v-textarea>
                                    </v-flex>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
                <v-btn
                fixed
                dark
                fab
                bottom
                right
                color="primary"
                type="submit"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-form>
        </v-container>
    </v-layout>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      build: null,
      panel: [0,1],
      items: [
          'Terran',
          'Protoss',
          'Zerg'
      ],
    }),
    created() {
        if(this.$route.params.build) {
            this.build = this.$route.params.build;
        } else {
            this.build = { 
                title:'', author:'', matchup: [null, null], 
                content:{earlyGame:'', midGame:'', lateGame:''}, 
                notes:{earlyGameNotes:'', midGameNotes:'', lateGameNotes:''} 
                };
        }
  },
    methods: {
        async saveBuild() {
            if(confirm("Save this build?")) {
                await this.$store.dispatch('saveBuild', this.build);
                this.$router.push('/builds');
            } else return
        },
    },
  }
</script>