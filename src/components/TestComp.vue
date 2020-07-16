<template>
    <div class="greeting">
        <h1>{{ msg2 }}</h1>     
    </div>   
</template>

<script>
export default {
    name: 'TestComp',
    props: {
        msg2: String
    }
}
</script>