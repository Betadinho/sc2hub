<template>
    <v-flex xs12 sm10 md9 lg4>
        <v-card>
            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="150px"
            >
            </v-img>

            <v-card-title primary-title>
            <div>
                <div class="headline">Build Name | Title</div>
                <span class="grey--text">Some Epcifications</span>
            </div>
            </v-card-title>

            <v-card-actions>
            <v-btn text>View</v-btn>
            <v-btn text color="purple">Edit</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
                <v-icon large>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
            <v-card-text v-show="show">
                <h4>Early game build contents and detaild build description in tabs</h4> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi explicabo vero, deleniti voluptate quam consectetur delectus architecto beatae quasi non. Iste nemo impedit exercitationem tempora nulla quaerat a nisi. |
            </v-card-text>
            </v-slide-y-transition>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'RecentBuildsCardComponent',
    props: {

    },
    data: () => ({
            show: false
        })
}
</script>