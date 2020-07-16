<template>
    <v-card>
        <v-container justify-center align-center>
            <v-card-title primary-title>Recent Builds</v-card-title>
            <v-divider inset></v-divider>
            <v-layout row justify-center align-center>
                <recent-builds-card-component />
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
import RecentBuildsCardComponent from '@/components/RecentBuildsCardComponent.vue'

export default {
    name: 'RecentBuilds',
    props: {

    },
    components: {
        RecentBuildsCardComponent
    }
}
</script>