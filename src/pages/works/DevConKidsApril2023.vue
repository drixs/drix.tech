<template>
    <div class="details-container">
        <header class="details-cover">
            <img src="@/images/seawalk-industries/seawalk_cover.png" alt="">
            <h2 class="title semibold alt-font">
                DevConKidsApril2023
            </h2>
            <ul class="tags-container">
                <Tag v-for="tag in tags" :key="tag" :label="tag" />
            </ul>
        </header>
        <main class="main">
            <p class="main__text t-regular details-text">
                Last November 2023, I created the logo for Protein Partner PH, an online shop for protein-rich snacks.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/seawalk-industries/seawalk_cover.png" alt="">
            </div>
            <p class="main__text t-regular details-text">
                I used Adobe Illustrator to sketch out different logo ideas and refine them until they were just right.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/seawalk-industries/seawalk_cover.png" alt="">
            </div>
            <p class="main__text t-regular details-text">
                After lots of tweaking, I landed on a design that really captured what Protein Partner PH is all about.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/seawalk-industries/seawalk_cover.png" alt="">
            </div>
            <p class="main__text t-regular details-text">
                Bright yellow was the color I chose for the logo to make it feel happy and healthy, matching the vibe of the brand. This color is all about energy and feeling good, which fits perfectly with Protein Partner PH's mission. Working closely with the client, we made sure the logo was exactly what they wanted.
            </p>
            <p class="main__text t-regular details-text">
                Now, you can see the logo proudly displayed on Protein Partner PH's website (proteinpartner.ph) and Facebook page.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/seawalk-industries/seawalk_cover.png" alt="">
            </div>
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
                'UX Design',
                'Landing Page',
                'Case Study',
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
    @import '@/stylesheets/work_details.scss';
</style>
