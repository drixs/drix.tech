<template>
    <ContentBody>
        <header class="cover">
            <img src="https://picsum.photos/id/2/900/1900" alt="">
            <h2 class="title semibold alt-font">
                ElevateEase: Streamlining User Journeys for Seamless Experiences
            </h2>
            <!-- <p
                v-for="tag in tags"
                :key="tag"
                class="tag t-tiny"
            >
                {{ tag }}
            </p> -->
            <div class="layer-blur"></div>
            <ul class="tags-container">
                <Tag
                    v-for="tag in tags"
                    :key="tag"
                    :label="tag"
                />
            </ul>
        </header>
        <main class="main">
            <p class="main__text t-regular">
                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.

                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.
            </p>
            <div class="main__image-attachment">
                <img src="https://picsum.photos/id/123/456" alt="">
            </div>
            <p class="main__text t-regular">
                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.

                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.
            </p>
            <div class="main__image-attachment">
                <img src="https://picsum.photos/id/8/600/200" alt="">
            </div>
        </main>
    </ContentBody>
</template>

<script>
    import ContentBody from '/src/components/generics/ContentBody.vue';
    import Tag from '@/components/generics/Tag.vue';

    export default {
        name: 'WorksDetails',

        components: {
            ContentBody,
            Tag
        },

        data() {
            return {
                tags: [
                    'UX Design',
                    'Design',
                    'UI/UX',
                    'Case Study',
                    'CSS',
                    'Frontend Development',
                    'Graphic Design',
                    'Branding Design'
                ]
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    $navbar-height: 60px;
    $cover-height: 400px;
    $cover-height-mobile: 240px;

    .cover {
        @include flex-column();
        justify-content: flex-end;
        position: absolute;
        left: 0;
        right: 0;
        top: $navbar-height;
        max-width: 1600px;
        height: 400px;
        overflow: hidden;
        // padding: 40px 150px;
        padding: 40px 150px 20px 150px;
        border-radius: 0 0 16px 16px;
        margin: auto;
        background: rgba(0,0,0,0.4);

        @media #{$tablet} {
            height: 240px;
            padding: 12px 20px;
        }

        h2 {
            width: 100%;
            max-width: 600px;
        }

        img {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            opacity: 50%;
        }

        .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
            max-width: 80%;

            @media #{$tablet} {
                overflow-x: scroll;
                flex-wrap: unset;
                max-width: unset;
                width: 100%;
            }

            // .tag {
            //     background:rgba(255,255,255, 0.5);
            //     color: $white;
            //     border-radius: 4px;
            //     padding: 4px 8px;
            //     width: max-content;
            //     white-space: nowrap;
            // }
        }

        // .layer-blur {
        //     border: 2px solid red;
        //     position: absolute;
        //     bottom: -100px;
        //     left: -140px;
        //     right: 140px;
        //     width: 100vw;
        //     margin: auto;
        //     height: 320px;
        //     background: #0D0D0D;
        //     // background: red;
        //     filter: blur(39px);
        //     backdrop-filter: blur(120px);
        //     z-index: -1;
        // }
    }

    .container {
        padding-top: calc($navbar-height + $cover-height);

        @media #{$tablet} {
            padding-top: calc($navbar-height + $cover-height-mobile);
        }

        .main {
            @include flex-column();
            gap: 40px;
            align-items: center;
            margin: 0 120px;
            color: #ADB6C4;

            @media #{$tablet} {
                margin: 0;
            }

            &__image-attachment {
                @include flex-align-justify-center;
                width: 100%;
                height: 300px;
                padding: 0 20%;
                overflow: hidden;

                @media #{$tablet} {
                    padding: 0;
                }

                img {
                    margin: 0;
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    pointer-events: none;
                }
            }
        }
    }

    p {
        line-height: 160% !important;
        // text-align: justify;
    }
</style>
