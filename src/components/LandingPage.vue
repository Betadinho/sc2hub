<!-- 
This is Vuew Component containing The StarCraft2 Logo and "title"
Nothing more! 

"title" parameter is passed by the components orviews that are using this component
  -->
<template>
    <v-container
        fluid
    >
        <v-flex xs12 md12 lg12>
            <v-row align="center" justify="center">
                    <v-col justify="center" align="center" class="shrink">
                    <v-img
                        :src="require('../assets/sc_logo.png')" 
                        contain
                        height=100
                        width=400
                    />    
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col justify="center" align="center">    
                <h1>{{ title }}</h1>
                </v-col>
            </v-row>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    name: 'landing-page',
    props: {
        title: String
        }
}
</script>