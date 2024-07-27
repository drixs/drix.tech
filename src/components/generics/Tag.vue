<template>
    <li class="tag">
        {{ label }}
    </li>
</template>

<script>
    export default {
        name: 'Tag',

        props: {
            label: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/stylesheets/styles.scss';

    .tag {
        @include clear-list-formatting();
        padding: 4px 8px;
        border-radius: 8px;
        background-color: rgba($color: $white, $alpha: 0.1);
        font-size: 14px;
        line-height: 150%;
        width: fit-content;
        font-size: 12px;
        white-space: nowrap;
    }
</style>