<template>
    <v-container fluid>
        <v-container>
            <h1>Favorites</h1>
            <br>
            <build-list :builds=favorites></build-list>
        </v-container>
        <v-container>
            <h1>Quick Drawer</h1>
            <br>
            <build-list :builds=drawer></build-list>
        </v-container>
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
        drawer() {
            return this.$store.state.quickDrawer
        },
        favorites() {
            return this.$store.state.favorites
        },
    },
    methods: {
    }
}
</script>