<template>
    <div class="details-container">
        <header class="details-cover">
            <img src="@/images/protein-partner/protein-partner.png" alt="">
            <h2 class="title semibold alt-font">
                Support Local – Designing Protein Partner PH's Logo
            </h2>
            <ul class="tags-container">
                <Tag v-for="tag in tags" :key="tag" :label="tag" />
            </ul>
        </header>
        <main class="main">
            <p class="main__text t-regular details-text">
                Last November 2023, I created the logo for Protein Partner PH, an online shop for protein-rich snacks.
            </p>
            <p class="main__text t-regular details-text">
                Using Adobe Illustrator as my main graphic design tool, I meticulously sketched out a variety of logo
                ideas, exploring different
                concepts and styles, and then spent considerable time refining each one, until I got to a desired
                vision.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/protein-partner/protein-partner-outline.png" alt="">
            </div>
            <p class="main__text t-regular details-text">
                After lots of tweaking, I landed on a design that really captured what Protein Partner PH is all about.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/protein-partner/protein-partner-colors.png" alt="">
            </div>
            <p class="main__text t-regular details-text">
                Bright yellow was the color I chose for the logo to make it feel happy and healthy, matching the vibe of
                the brand. This color is all about energy and feeling good, which fits perfectly with Protein Partner
                PH's mission. Working closely with the client, we made sure the logo was exactly what they wanted.
            </p>
            <p class="main__text t-regular details-text">
                Now, you can see the meticulously crafted logo prominently displayed on Protein Partner PH's official
                website (proteinpartner.ph) and Facebook page, where it serves as a vibrant representation of the
                brand's identity and values.
            </p>
            <div class="main__image-attachment">
                <img src="@/images/protein-partner/protein-partner.png" alt="">
            </div>
        </main>
    </div>
</template>

<script>
import Tag from '@/components/generics/Tag.vue';

export default {
    name: 'SeawalkIndustries',

    components: {
        Tag
    },

    data() {
        return {
            tags: [
                'Logo Design',
                'Graphic Design'
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
@import '@/stylesheets/work_details.scss';
</style>
