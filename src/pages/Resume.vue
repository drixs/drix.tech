<template>
    <div
        :class="showDiv ? 'show' : ''"
        class="avatar-sticky-container"
    >
        <div class="avatar-sticky">
            <img
                alt="Drix"
                src="https://avatars.githubusercontent.com/u/50797860?v=4"
            >
            <div class="avatar-sticky__information">
                <h4 class="bold">
                    Drix Lloyd Ponteres
                </h4>
                <p class="t-sm">
                    hello@drix.tech
                </p>
            </div>
        </div>
    </div>
    <ContentBody v-scroll="handleScroll">
        <main class="two-grid">
            <section class="left">
                <div class="avatar">
                    <img
                        alt="Drix"
                        src="https://avatars.githubusercontent.com/u/50797860?v=4"
                    >
                    <div class="avatar-information">
                        <h3 class="bold">
                            Drix Lloyd Ponteres
                        </h3>
                        <p class="t-regular">
                            UX Engineer
                        </p>
                        <p class="t-sm c-tertiary">
                            hello@drix.tech
                        </p>
                    </div>
                </div>
                <div class="skills__container">
                    <h2 class="p-h2 skills__container-name semibold alt-font">
                        Specialties
                    </h2>
                    <div class="skills__container-list">
                        <ul class="skills__container-list">
                            <Tag
                                v-for="specialty in specialties"
                                :key="specialty"
                                :label="specialty"
                            />
                        </ul>
                    </div>
                </div>
                <div class="skills__container">
                    <h2 class="p-h2 skills__container-name semibold alt-font">
                        Others
                    </h2>
                    <ul class="skills__container-list">
                        <Tag
                            v-for="other in others"
                            :key="other"
                            :label="other"
                        />
                    </ul>
                </div>
                <div class="reference__container">
                    <h2 class="p-h2 reference__container-name semibold alt-font">
                        Character Reference
                    </h2>
                    <ul class="reference__container-list">
                        <li
                            v-for="reference in references"
                            :key="reference"
                            class="t-sm c-quaternary reference__container-list--item"
                        >
                            <p class="t-md"> {{ reference.name }} </p>
                            <p class="t-sm c-tertiary"> {{ reference.position }}, {{ reference.company }} </p>
                            <p class="t-sm c-tertiary"> {{ reference.contact }} </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="right">
                <AffiliationItem
                    v-for="affiliation in affiliations"
                    :key="affiliation"
                    :name="affiliation.name"
                    :roles="affiliation.role"
                    :image="affiliation.image"
                />
            </section>
        </main>
    </ContentBody>
</template>

<script>
    import ContentBody from '../components/generics/ContentBody.vue';
    import Tag from '../components/generics/Tag.vue';
    import AffiliationItem from '@/components/AffiliationItem.vue';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Resume',

        components: {
            ContentBody,
            Tag,
            AffiliationItem
        },

        data() {
            return {
                affiliations: [
                    {
                        name: 'Todays Carolinian',
                        role: [
                            {
                                name: 'Senior Graphic Designer',
                                year: '2018',
                                description: [
                                    'As a Software Developer, I am responsible for designing, coding, and maintaining software applications to meet the needs of our clients.',
                                    'I work closely with a team of developers, product managers, and designers to create high-quality software solutions.'
                                ]
                            },
                            {
                                name: 'Graphic Designer',
                                year: '2017',
                                description: [
                                    'As a Software Developer, I am responsible for designing, coding, and maintaining software applications to meet the needs of our clients.',
                                    'I work closely with a team of developers, product managers, and designers to create high-quality software solutions.'
                                ]
                            },
                        ],
                        image: 'https://picsum.photos/400/300'
                    },
                    {
                        name: 'USC Computer Engineering Council',
                        role: [
                            {
                                name: 'Senior Graphic Designer',
                                year: '2018',
                                description: [
                                    'As a Software Developer, I am responsible for designing, coding, and maintaining software applications to meet the needs of our clients.',
                                    'I work closely with a team of developers, product managers, and designers to create high-quality software solutions.'
                                ]
                            },
                            {
                                name: 'Graphic Designer',
                                year: '2017',
                                description: [
                                    'As a Software Developer, I am responsible for designing, coding, and maintaining software applications to meet the needs of our clients.',
                                    'I work closely with a team of developers, product managers, and designers to create high-quality software solutions.'
                                ]
                            },
                        ],
                        image: 'https://picsum.photos/400/300'
                    },
                    {
                        name: 'HQZen.com',
                        role: [
                            {
                                name: 'Senior Graphic Designer',
                                year: '2018',
                                description: [
                                    'As a Software Developer, I am responsible for designing, coding, and maintaining software applications to meet the needs of our clients.',
                                    'I work closely with a team of developers, product managers, and designers to create high-quality software solutions.'
                                ]
                            },
                            {
                                name: 'Graphic Designer',
                                year: '2017',
                                description: [
                                    'As a Software Developer, I am responsible for designing, coding, and maintaining software applications to meet the needs of our clients.',
                                    'I work closely with a team of developers, product managers, and designers to create high-quality software solutions.'
                                ]
                            },
                        ],
                        image: 'https://picsum.photos/400/300'
                    }
                ],
                specialties: [
                    'Vue.js','HTML','CSS','Figma','UI Design','User Experience',
                    'Logo Design', 'Graphic Design','Adobe Suite Tools','MJML','Email Design','Bootstrap','Vuetify'
                ],
                others: [
                    'Planning','Leadership','Product Vision','Agile Practices','Continuous Learning'
                ],
                info: [
                    {
                        name: 'Drix Lloyd Ponteres',
                        position: 'UX Engineer',
                        email: 'hello@drix.tech'
                    }
                ],
                references: [
                    {
                        name: 'Generil de los Santos',
                        company: 'BPOSeats',
                        contact: 'generil@bposeats.com',
                        position: 'UX Designer'
                    },
                    {
                        name: 'Louie Jay Rivas',
                        company: 'BPOSeats',
                        contact: 'louie@bposeats.com',
                        position: 'Project Manager'
                    },
                    {
                        name: 'Jarrhey de la Pena',
                        company: 'Symph',
                        contact: 'jarrhey@symph.co',
                        position: 'CTO'
                    }
                ],
                companies: [
                    {
                        name: 'HQZen.com',
                        link: 'https://hqzen.com/',
                        roles: [
                            {
                                name: 'Product Design Lead',
                                duration: '2022 - Present',
                                duties: [
                                    'In charge of overall product design direction.',
                                    'Facilitate team members progress such as appraisals, team initiatives, and activities.'
                                ]
                            },
                            {
                                name: 'Front-end Designer / UX Engineer',
                                duration: '2021 - 2022',
                                duties: [
                                    'Focused on fixing UI bugs, design inconsistencies, and improving overall app based on operational feedback.',
                                ]
                            }
                        ]
                    },
                    {
                        name: '24Strats',
                        link: 'https://www.linkedin.com/company/24strats/about/',
                        roles: [
                            {
                                name: 'Designer',
                                duration: '2022',
                                duties: [
                                    'Designed a website for a Turkish parish church.',
                                    'Created logo and branding for Protein Partner PH.',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'DEVCON Cebu',
                        link: 'https://www.facebook.com/devconcebu/',
                        roles: [
                            {
                                name: 'VP Creatives',
                                duration: '2022-2024',
                                duties: [
                                    'Design pubmats and event posters to be posted in social media.',
                                    'Volunteered in code camps and workshops.',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'RideHero, Inc.',
                        link: 'https://www.facebook.com/rideheroph/',
                        roles: [
                            {
                                name: 'UI/UX Designer',
                                duration: '2020',
                                duties: [
                                    'Collaborated with RideHero design team to build multiple products.',
                                    'Designed RideHero - a ride hailing app targeted to buses and jeepneys.',
                                    'Designed Aguila - an item delivery app to compete with top delivery apps in Cebu.',
                                    'Designed Discover Cebu - a mobile app that promotes tourism in Cebu, Philippines.'
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Symph',
                        link: 'https://www.symph.co/',
                        roles: [
                            {
                                name: 'Web Design Intern',
                                duration: '2019',
                                duties: [
                                'Studied fundamentals of web development and UI design.',
                                    'Worked on MATA Project – facial recognition application with a team of developers and project managers.'
                                ]
                            }
                        ]
                    },
                    {
                        name: 'University of San Carlos',
                        link: 'https://www.usc.edu.ph/academics/schools/school-of-engineering/department-of-computer-engineering',
                        roles: [
                            {
                                name: 'Bachelor of Science in Computer Engineering',
                                duration: '2015 - 2020',
                                duties: [
                                    'Studied hardware concepts and software fundamentals.',
                                    'Volunteered in various school organizations and help spearhead university-wide events.'
                                ]
                            }
                        ]
                    }
                ],
                showDiv: false,
                yPositionToShowDiv: 120
            };
        },

        methods: {
            goToLink(href) {
                window.open(href, '_blank');
            },

            handleScroll() {
                const y = window.scrollY;
                if (y >= this.yPositionToShowDiv) {
                    this.showDiv = true;
                } else {
                    this.showDiv = false;
                }
            }
        },

        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },

        beforeUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
        },

        computed: {
            isMobile() {
                // Check if the viewport width is less than a certain breakpoint (e.g., 768px for common mobile devices)
                return window.innerWidth < 768; // Adjust the breakpoint as needed
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .container {
        padding: 40px 0;

        @media #{$mobile} {
            padding: 32px 32px;
        }
    }

    p {
        line-height: 1.5;
    }

    .two-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10%;

        @media #{$tablet} {
            @include flex-column();
            gap: 80px;
        }
    }

    $navbar-height: 60px;
    $padding-height: 40px;

    .left {
        @include flex-column();
        gap: 40px;
        height: max-content;
        position: sticky;
        top: calc($navbar-height + $padding-height);

        @media #{$tablet} {
            position: unset;
        }

        .avatar {
            display: flex;
            align-items: center;
            gap: 12px;

            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;

                @media #{$mobile-small} {
                    width: 40px;
                    height: 40px;
                }
            }

            &-information {
                @include flex-column;
                gap: 2px;

                @media #{$mobile-small} {
                    h3 {
                        font-size: 16px;
                    }
                }

            }
        }

        .skills {
            &__container {
                @include flex-column();
                gap: 12px;

                &-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;

                    .bullet {
                        color: rgba(255,255,255,.2)
                    }
                }
            }
        }

        .reference__container {
            @include flex-column();
            gap: 12px;

            &-list {
                @include flex-column();
                gap: 12px;

                &--item {
                    @include flex-column();
                    gap: 4px;
                }
            }
        }
    }

    .right {
        @include flex-column();
        gap: 64px;
    }

    .avatar-sticky-container {
        position: sticky;
        top: 0;
        z-index: 1000;
        display: none;
        opacity: 0;
        transition: .2s all ease-in-out;

        @media #{$tablet} {
            display: block;
        }

        &.show {
            opacity: 1;
        }
    }

    .avatar-sticky {
        display: flex;
        align-items: center;
        gap: 12px;
        background-color: rgba($color: $gray-900, $alpha: 1);
        // backdrop-filter: blur(180px);
        padding: 12px 150px;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        width: 100%;
        border-bottom: 0.5px solid $gray-700;
        transition: .1s all ease-in-out;

        @media #{$mobile} {
            padding: 12px 20px;
        }

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        &__information {
            @include flex-column;
            gap: 2px;
            color: $white;
        }
    }

</style>
