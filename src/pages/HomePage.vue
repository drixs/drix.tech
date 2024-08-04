<template>
    <ContentBody>
        <header class="header">
            <h3 class="alt-font name">
                Drix Ponteres
            </h3>
            <h1 class="alt-font">
                Digital Product Designer & <br />
                UX Engineer
            </h1>
            <h4 class="tagline">
                Building user-friendly interfaces to ensure product success.
            </h4>
        </header>
        <main>
            <h4 class="alt-font">Works</h4>
            <ul class="work-item-list">
                <WorkItem v-for="work in workDetails" :key="work" :data="work" @click="goTo(work.name)" />
            </ul>
        </main>
    </ContentBody>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ContentBody from "/src/components/generics/ContentBody.vue";
import WorkItem from "@/components/WorkItem.vue";

const router = useRouter();

const workDetails = ref([
    {
        title: 'Showcasing the Technology and Services behind the success of Seawalk Industries Inc.',
        description: `Seawalk Industries Inc. is a leading construction materials supplier based in Cebu. They specialize in
                    providing a comprehensive range of materials and services for concrete production. Their business also
                    includes high-quality concrete, crushed aggregates, and culverts. Additionally, they provide essential
                    equipment such as concrete mixers and other machinery necessary for Ready-Mix Concrete (RMC)
                    operations.‍`,
        image: 'src/images/seawalk-industries/seawalk_cover.png',
        name: 'seawalk-industries',
        tags: [
            'UI Design',
            'Case Study',
            'Landing Page'
        ]
    },
    {
        title: 'Designing the Official Logo for Protein Partner',
        description: `Last November 2023, I created the logo for Protein Partner PH, an online shop for protein-rich snacks.`,
        image: 'src/images/protein-partner/protein-partner-thumbnail.png',
        name: 'protein-partner-logo',
        tags: [
            'Logo Design',
            'Graphic Design',
        ]
    },
    {
        title: ' Designing the Collaterals for DEVCON Kids Code Camp April 2023 ',
        description: `Taking place on Saturday, April 22, 2023, this DEVCON event was designed to immerse children aged 6 to
                10 in the world of computer science and programming through the interactive platform of Undersea Arcade.
                Spearheaded by DEVCON Cebu officers, the event not only facilitated gameplay but also served as an
                educational avenue for teaching programming fundamentals in an engaging manner.`,
        image: 'src/images/devcon-kids-april-2023/devcon-kids-april-2023-cover.png',
        name: 'devcon-kids-april-2023',
        tags: [
            'Graphic Design',
            'Organizations',
        ]
    },
    {
        title: 'Kickstarting DEVCON Cebu 2023: Showcasing Chapter Officers',
        description: `As a preview of the officers of DEVCON Cebu for the year 2023, I designed a pubmat graphic highlighting each
                    officer's anticipated role within the organization, providing a comprehensive overview of the team set to lead
                    DEVCON Cebu in that year.`,
        image: 'src/images/devcon-cebu-officers-2023/devcon-cebu-officers-2023-cover.png',
        name: 'devcon-cebu-2023-graphic',
        tags: [
            'Graphic Design',
            'Organizations'
        ]
    }
])

function goTo(route) {
    // router.replace(`/details/${route}`);
    // router.push(`details/${route}`);
    router
        .push({ path: `/details/${route}` })
        .then(() => { router.go(0) })
}
</script>

<style lang="scss" scoped>
@import "src/stylesheets/styles.scss";

header {
    @include flex-align-justify-center(column);
    gap: 24px;
    text-align: center;
    padding: 32px 0;

    &>* {
        width: 100%;
    }

    @media #{$tablet} {
        text-align: start;
    }
}

main {
    @include flex-column();
    gap: 12px;
    padding: 32px 0;

    .work-item-list {
        // border: 1px solid red;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
    }

    h4 {
        margin: auto;
        text-align: center;
    }
}

.name,
.tagline {
    opacity: 40%;
}
</style>
