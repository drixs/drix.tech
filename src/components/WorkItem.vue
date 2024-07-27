<template>
    <div class="work-item">
        <div class="work-item__image-container">
            <img
                src="https://picsum.photos/400/300"
                alt="Work item"
            >
        </div>
        <div class="work-item__details">
            <p class="title p-h3 regular">
                Rediscovering Cebu’s Tourism after a Global Pandemic with Discover Cebu Lorem ipsum dolor sit
            </p>
            <p class="description t-regular c-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam
                itaque recusandae cumque, dolorem nulla maiores dignissimos, ad id hic cupiditate
            </p>
        </div>
        <div class="work-item__tags">
            <ul>
                <Tag
                    v-for="tag in formattedTags"
                    :key="tag"
                    :label="tag"
                />
            </ul>
        </div>
    </div>
</template>

<script setup>
    import Tag from '@/components/generics/Tag.vue';
    import { computed } from "vue";

    const tags = [
        'Graphic Design',
        'UX Research',
        'UI Design',
        'Case Study',
        'Landing Page'
    ]

    // Define the tags array as a reactive reference
    // const tags = ref(['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5']);

    // Function to format tags
    function formatTags(tagsArray) {
        if (!Array.isArray(tagsArray)) {
            throw new Error('Input must be an array');
        }

        const maxDisplay = 2; // Number of tags to display before truncating
        const totalTags = tagsArray.length;

        if (totalTags <= maxDisplay) {
            return tagsArray; // Return as is if the array length is less than or equal to maxDisplay
        }

        // Extract the first `maxDisplay` elements
        const displayedTags = tagsArray.slice(0, maxDisplay);

        // Add the "n more" part
        return [...displayedTags, `${totalTags - maxDisplay} more`];
    //     return displayedTags;
    }

    // Compute the formatted tags
    const formattedTags = computed(() => formatTags(tags));

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

        // &__image {
        //     width: 100%;
        //     height: 126px;
        //     background: #fff;
        //     border-radius: 8px;
        // }

        &__image-container {
            overflow: hidden;  /* Hide anything outside the container */
            position: relative;
            height: 130px;
            width: 100%;
            border-radius: 8px;

            img {
                object-fit: cover; /* Fit and clip the image without distortion */
                position: absolute; /* Ensure image is positioned correctly */
                top: 0;
                left: 0;
                width: 100%;
            }
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