<template>
    <ContentBody>
        <router-view></router-view>
    </ContentBody>
</template>

<script>
    import ContentBody from '/src/components/generics/ContentBody.vue';

    export default {
        name: 'WorksDetails',

        components: {
            ContentBody,
        }
    }
</script>
