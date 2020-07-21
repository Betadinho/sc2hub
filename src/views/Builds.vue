<template>
    <v-container fluid>
        <v-container>
            <h1>Build List</h1>
            <br>
            <build-list :builds=builds></build-list>
        </v-container>
        <v-speed-dial
        v-model="fab"
        fixed
        bottom
        right
        direction="top"
        transition="slide-y-reverse-transition"
        >
            <template v-slot:activator>
                <v-btn
                v-model="fab"
                dark
                color="primary"
                fab
                @click="show = !show"
            >
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else>mdi-plus</v-icon>
            </v-btn>
            </template>

            <v-tooltip v-model="fab" left nudge-top=14>
                <template v-slot:activator="{fab}">
                    <v-btn
                    fab
                    dark
                    small
                    color="green"
                    link to="Create"
                    v-on="fab"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>New build</span>
            </v-tooltip>
            <v-tooltip v-model="fab" left nudge-top=14>
                <template v-slot:activator="{fab}">
                    <v-btn
                    fab
                    dark
                    small
                    color="red"
                    @click="createTestData"
                    v-on="fab"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Create Test Data</span>
            </v-tooltip>
            
        </v-speed-dial>    
    </v-container>
</template>

<script>
import BuildList from '@/components/BuildList.vue'

export default {
    props: {
    },
    data: () => ({
        fab: false,
        show: false
    }),
    components: {
        BuildList
    },
    computed: {
        builds() {
            return this.$store.state.builds
        },
    },
    created() {
        this.$store.dispatch('getBuilds');
    },
    methods: {
        async createTestData() {
            console.log("Creating Test Data");
            await this.$store.dispatch('addTestBuilds');
            this.$store.dispatch('getBuilds');
        }
    }
}
</script>