<template>
    <div class="test">
        <h1>This is an test page</h1>
        
        <HelloWorld msg="HelloWorld Comp"/>
        <TestComp msg2="Test Comp"/>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld'
import TestComp from '@/components/TestComp'

export default {
    name: 'Test',
    components: {
        HelloWorld,
        TestComp
    }    
}
</script>