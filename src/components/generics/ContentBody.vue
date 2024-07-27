<template>
    <div class="container">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'ContentBody',
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .container {
        margin: 0 auto;
        width: min(calc(100vw - 120px), 1000px);
        height: inherit;
        color: $white;
        padding-bottom: 64px;

        @media #{$mobile} {
            padding: 32px;
            width: 100%;
        }
    }
</style>
