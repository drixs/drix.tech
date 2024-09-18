<template>
    <div class="details-container">
        <header class="details-cover">
            <img src="/images/devcon-cebu-officers-2023/devcon-cebu-officers-2023-cover.webp" alt="">
            <h2 class="title semibold alt-font">
                Kickstarting DEVCON Cebu 2023: Showcasing Chapter Officers
            </h2>
            <ul class="tags-container">
                <Tag v-for="tag in tags" :key="tag" :label="tag" />
            </ul>
        </header>
        <main class="main">
            <p class="main__text t-regular details-text">
                As a preview of the officers of DEVCON Cebu for the year 2023, I designed a pubmat graphic highlighting
                each officer's anticipated role within the organization, providing a comprehensive overview of the team
                set to lead DEVCON Cebu in that year.
            </p>
            <p class="main__text t-regular details-text">
                Initially, I considered incorporating DEVCON's circular pattern, as seen in their logo, and pairing it
                with
                another complementary pattern to enhance the overall graphic design. This idea stemmed from the desire
                to
                create a cohesive and visually appealing aesthetic that would resonate with the intended audience while
                maintaining the brand's unique identity.
            </p>
            <div class="main__image-attachment">
                <img src="/images/devcon-cebu-officers-2023/devcon-cebu-officers-2023-draft.webp" alt="">
            </div>
            <p class="main__text t-regular details-text">
                For the next step in determining how to color the visual elements, I decided to utilize gradients because
                they added a visually appealing dimension to the design. Additionally, I had to carefully choose between
                using black or white background colors for each member graphic, ensuring that the contrast and overall
                aesthetic would be both striking and harmonious.
            </p>
            <div class="main__image-attachment">
                <img src="/images/devcon-cebu-officers-2023/devcon-cebu-officers-2023-white.webp" alt="">
            </div>
            <div class="main__image-attachment">
                <img src="/images/devcon-cebu-officers-2023/devcon-cebu-officers-2023-black.webp" alt="">
            </div>
            <p class="main__text t-regular details-text">
                These materials were shared on the official Facebook page and received a lot of engagement from the tech
                community. The overall aim is to reintroduce DEVCON Cebu to the tech community after its hiatus during
                the pandemic.
            </p>
            <div class="main__image-attachment">
                <img src="/images/devcon-cebu-officers-2023/devcon-cebu-officers-2023-cover.webp" alt="">
            </div>
        </main>
    </div>
</template>

<script>
import Tag from '@/components/generics/Tag.vue';

export default {
    name: 'DevConCebu2023OfficersGraphic',

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
