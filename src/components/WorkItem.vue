<template>
    <div class="work-item">
        <div class="work-item__image">
            <img src="" alt="">
        </div>
        <div class="work-item__details">
            <p class="title p-h3 regular">
                Rediscovering Cebu’s Tourism after a Global Pandemic with Discover Cebu
            </p>
            <p class="description t-regular c-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam
                itaque recusandae cumque, dolorem nulla maiores dignissimos, ad id hic cupiditate
            </p>
        </div>
        <div class="work-item__tags">
            <ul>
                <Tag
                    v-for="i in dummyLabels"
                    :key="i"
                    :label="i"
                />
            </ul>
        </div>
    </div>
</template>

<script setup>
    import Tag from '@/components/generics/Tag.vue';

    const dummyLabels = [
        'Graphic Design',
        'UX Research',
        'UI Design'
    ]
</script>

<style lang="scss" scoped>
    @import "src/stylesheets/styles.scss";

    .work-item {
        // border: 1px solid red;
        @include flex-column();
        gap: 18px;
        width: 320px;
        padding: 16px;
        border-radius: 8px;
        transition: all .1s ease-in-out;

        @media #{$tablet} {
            width: 100%;
            padding: 0;
        }

        &:hover {
            background-color: rgba($color: $white, $alpha: .03);
            cursor: pointer;
        }

        &__image {
            width: 100%;
            height: 126px;
            background: #fff;
            border-radius: 8px;
        }

        &__details {
            @include flex-column();
            gap: 12px;

            .title {
                @include clamp-line(2);
                line-height: 150%
            }

            .description {
                @include clamp-line(3);
            }
        }

        &__tags ul {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
        }
    }
</style>