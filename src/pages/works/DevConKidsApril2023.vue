<template>
    <div class="details-container">
        <header class="details-cover">
            <img src="@/images/devcon-kids-april-2023/devcon-kids-april-2023-cover.png" alt="">
            <h2 class="title semibold alt-font">
                Designing the Collaterals for DEVCON Kids Code Camp April 2023
            </h2>
            <ul class="tags-container">
                <Tag v-for="tag in tags" :key="tag" :label="tag" />
            </ul>
        </header>
        <main class="main">
            <p class="main__text t-regular details-text">
                Taking place on Saturday, April 22, 2023, this DEVCON event was designed to immerse children aged 6 to
                10 in the world of computer science and programming through the interactive platform of Undersea Arcade.
                Spearheaded by DEVCON Cebu officers, the event not only facilitated gameplay but also served as an
                educational avenue for teaching programming fundamentals in an engaging manner.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/devcon-kids-april-2023/devcon-kids-april-2023-cover.png" alt="">
            </div>
            <p class="main__text t-regular details-text">
                As Vice President of Creatives, I designed teasers, event posters, and video backgrounds for the event.
                My aim was to create a consistent look that captured the fun and educational spirit of the Code Camp.
                Through graphic design, I aimed to captivate children's imaginations while reinforcing the event's
                educational goals.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/devcon-kids-april-2023/devcon-kids-april-2023-screenshot.png" alt="">
            </div>
            <p class="main__text t-regular details-text">
                The event turned out to be a resounding success. The kids, participants, and officers all had a wonderful
                time engaging with one another, sharing knowledge, and teaching each other, which fostered a vibrant and
                collaborative learning environment.
            </p>
        </main>
    </div>
</template>

<script>
import Tag from '@/components/generics/Tag.vue';

export default {
    name: 'DevConKidsApril2023',

    components: {
        Tag
    },

    data() {
        return {
            tags: [
                'Graphic Design',
                'Poster Design',
                'Volunteering'
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
@import '@/stylesheets/work_details.scss';
</style>
