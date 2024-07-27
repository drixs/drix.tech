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
                <WorkItem
                    v-for="i in 6"
                    :key="i"
                />
            </ul>
        </main>
    </ContentBody>
</template>

<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import ContentBody from "/src/components/generics/ContentBody.vue";
    import WorkItem from "@/components/WorkItem.vue";
    // import Button from "/src/components/generics/Button.vue";

    // const imageLinks = ref([
    //     "https://via.placeholder.com/800x600",
    //     "https://via.placeholder.com/1200x800",
    //     "https://via.placeholder.com/600x400",
    //     "https://avatars.githubusercontent.com/u/50797860?v=4",
    //     "https://via.placeholder.com/1000x500",
    //     "https://via.placeholder.com/400x800",
    // ]);

    // const tags = ref([
    //     "UX Design",
    //     "Design",
    //     "UI/UX",
    //     "2 more...",
    //     // 'Case Study',
    //     // 'CSS',
    //     // 'Frontend Development',
    //     // 'Graphic Design',
    //     // 'Branding Design'
    // ]);

    // const router = useRouter();

    // function changeRoute(route) {
    //     router.push(route);
    // }
</script>

<style lang="scss" scoped>
    @import "src/stylesheets/styles.scss";

    header {
        @include flex-align-justify-center(column);
        gap: 24px;
        text-align: center;
        padding: 32px 0;

        & > * {
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

    .name, .tagline {
        opacity: 40%;
    }
</style>
