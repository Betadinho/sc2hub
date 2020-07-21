<template>
    <v-container fluid>
        <v-container>
            <h1>Build List</h1>
            <br>
            <build-list :builds=builds></build-list>
        </v-container>
        <v-btn
            fixed
            bottom
            right
            dark
            outlined
            fab
            color="primary"
            @click='createTestData'
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
import BuildList from '@/components/BuildList.vue'

export default {
    props: {
    },
    data: () => ({
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