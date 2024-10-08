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
                    drixlsp@gmail.com
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
                            drixlsp@gmail.com
                        </p>
                    </div>
                </div>
                <div class="skills__container">
                    <h2 class="p-h3 skills__container-name semibold alt-font">
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
                    <h2 class="p-h3 skills__container-name semibold alt-font">
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
                    <h2 class="p-h3 reference__container-name semibold alt-font">
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
                <div>
                    <Button
                        class="primary"
                        @click="goToLink(resumeLink)"
                    >
                        Download Resume
                    </Button>
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
    import Button from '../components/generics/Button.vue';
    import AffiliationItem from '@/components/AffiliationItem.vue';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Resume',

        components: {
            ContentBody,
            Tag,
            AffiliationItem,
            Button
        },

        data() {
            return {
                resumeLink: 'https://drive.google.com/file/d/1zA2_mWAlxj4jXiamxRvIci5fb8A7EgVA/view?usp=sharing',
                affiliations: [
                {
                    name: 'HQZen.com',
                    role: [
                        {
                            name: 'Product Design Lead',
                            year: '2022 to Present',
                            description: [
                                'In charge of overall product design direction',
                                'Facilitate team members progress such as appraisals, team initiatives, and activities'
                            ]
                        },
                        {
                            name: 'UX Engineer',
                            year: '2021',
                            description: [
                                'Focused on fixing UI bugs, design inconsistencies, and improving overall tech based on operational feedback',
                            ]
                        },
                    ],
                    image: '/images/affiliates/hqzen.webp'
                },
                {
                        name: 'Product Design Philippines',
                        role: [
                            {
                                name: 'Graphic Designer',
                                year: '2024',
                                description: [
                                    'Designing collaterals while spearheading events relating to product design and in fostering a design community in the Philippines'
                                ]
                            }
                        ],
                        image: '/images/affiliates/pdxph.webp'
                    },
                    {
                        name: '24Strats',
                        role: [
                            {
                                name: 'Product Designer',
                                year: '2022-2023',
                                description: [
                                    'Designed landing pages and logos for different projects',
                                ]
                            }
                        ],
                        image: '/images/affiliates/24strats.webp'
                    },
                    {
                        name: 'DEVCON Cebu',
                        role: [
                            {
                                name: 'VP of Creatives',
                                year: '2022-2024',
                                description: [
                                    'Assigned in leading the design direction for upcoming events, workshops, and campaigns',
                                    'Volunteer in code camps spearheaded by DEVCON for students and kids'
                                ]
                            }
                        ],
                        image: '/images/affiliates/devcon-cebu.webp'
                    },
                    {
                        name: 'RideHero, Inc.',
                        role: [
                            {
                                name: 'UI Designer',
                                year: '2020',
                                description: [
                                    'Craft user-friendly mockups and prototypes for RideHero\'s main mobile application and its projects: Aguila, and Discover Cebu',
                                    '',
                                    'Research on different approaches for managing Facebook page content',
                                ]
                            }
                        ],
                        image: '/images/affiliates/ridehero.webp'
                    },
                    {
                        name: 'Symph',
                        role: [
                            {
                                name: 'Web Design Intern',
                                year: '2019',
                                description: [
                                    'Assigned to multiple teams as UI/UX designer',
                                    'Studied UX principles and front-end development fundamentals',
                                    'Worked on MATA – a project involving facial recognition technology'
                                ]
                            }
                        ],
                        image: '/images/affiliates/symph.webp'
                    },
                    {
                        name: 'Today\'s Carolnian',
                        role: [
                            {
                                name: 'Senior Graphic Designer',
                                year: '2018',
                                description: [
                                    'Work closely with art director in managing art department of the publication and lead the graphic design team',
                                ]
                            },
                            {
                                name: 'Graphic Designer',
                                year: '2017',
                                description: [
                                    'Tasked to create graphics for magazine, newsletters, and online content',
                                ]
                            },
                        ],
                        image: '/images/affiliates/todays-carolinian.webp'
                    },
                    {
                        name: 'USC Computer Engineering Council',
                        role: [
                            {
                                name: 'Media and Infographics Director',
                                year: '2018',
                                description: [
                                    'Lead creative direction while managing design associates',
                                ]
                            },
                            {
                                name: 'Media Councilor',
                                year: '2017',
                                description: [
                                    'Design pubmats and posters for course, department, or school events',
                                    'Participate in leadership training seminars'
                                ]
                            },
                        ],
                        image: '/images/affiliates/cpe-council.webp'
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
                        email: 'drixlsp@gmail.com'
                    }
                ],
                references: [
                    {
                        name: 'Patricia Tumulak',
                        company: 'Full Scale',
                        contact: 'tumulakpatricia@gmail.com',
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
                // companies: [
                //     {
                //         name: 'HQZen.com',
                //         link: 'https://hqzen.com/',
                //         roles: [
                //             {
                //                 name: 'Product Design Lead',
                //                 duration: '2022 - Present',
                //                 duties: [
                //                     'In charge of overall product design direction.',
                //                     'Facilitate team members progress such as appraisals, team initiatives, and activities.'
                //                 ]
                //             },
                //             {
                //                 name: 'Front-end Designer / UX Engineer',
                //                 duration: '2021 - 2022',
                //                 duties: [
                //                     'Focused on fixing UI bugs, design inconsistencies, and improving overall app based on operational feedback.',
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         name: '24Strats',
                //         link: 'https://www.linkedin.com/company/24strats/about/',
                //         roles: [
                //             {
                //                 name: 'Designer',
                //                 duration: '2022',
                //                 duties: [
                //                     'Designed a website for a Turkish parish church.',
                //                     'Created logo and branding for Protein Partner PH.',
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         name: 'DEVCON Cebu',
                //         link: 'https://www.facebook.com/devconcebu/',
                //         roles: [
                //             {
                //                 name: 'VP Creatives',
                //                 duration: '2022-2024',
                //                 duties: [
                //                     'Design pubmats and event posters to be posted in social media.',
                //                     'Volunteered in code camps and workshops.',
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         name: 'RideHero, Inc.',
                //         link: 'https://www.facebook.com/rideheroph/',
                //         roles: [
                //             {
                //                 name: 'UI/UX Designer',
                //                 duration: '2020',
                //                 duties: [
                //                     'Collaborated with RideHero design team to build multiple products.',
                //                     'Designed RideHero - a ride hailing app targeted to buses and jeepneys.',
                //                     'Designed Aguila - an item delivery app to compete with top delivery apps in Cebu.',
                //                     'Designed Discover Cebu - a mobile app that promotes tourism in Cebu, Philippines.'
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         name: 'Symph',
                //         link: 'https://www.symph.co/',
                //         roles: [
                //             {
                //                 name: 'Web Design Intern',
                //                 duration: '2019',
                //                 duties: [
                //                 'Studied fundamentals of web development and UI design.',
                //                     'Worked on MATA Project – facial recognition application with a team of developers and project managers.'
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         name: 'University of San Carlos',
                //         link: 'https://www.usc.edu.ph/academics/schools/school-of-engineering/department-of-computer-engineering',
                //         roles: [
                //             {
                //                 name: 'Bachelor of Science in Computer Engineering',
                //                 duration: '2015 - 2020',
                //                 duties: [
                //                     'Studied hardware concepts and software fundamentals.',
                //                     'Volunteered in various school organizations and help spearhead university-wide events.'
                //                 ]
                //             }
                //         ]
                //     }
                // ],
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
        gap: 32px;
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
