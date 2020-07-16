<!--
@Param builds: An Array consisting of: 
object{
    title: String,
    description: String,
    author: String,
    mu: [self, opponent],
    build-content: Object{
        Early-Game, early-notes
        mid-Game, mid-notes
        late-Game, late-notes
    },
    replay: replay url/location
}


 -->

<template>
    <v-container>
        <v-container
                v-for="(build, index) in builds" :key="index"
        >
            <build-list-element :build="build"></build-list-element>
        </v-container>
    </v-container>
</template>

<script>
import BuildListElement from "@/components/BuildListElement.vue"

export default {
    name: "build-list",
    props: {
        builds: Array
    },
    data: () => ({

    }),
    components: {
        BuildListElement
    }
}
</script>