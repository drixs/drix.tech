<template>
    <div :class="['overlay-menu', showMenu ? 'show' : 'hide']">
        <ul class="menu-list">
            <li>
                <p class="p-h3 regular c-tertiary">Menu</p>
            </li>
            <li
                class="menu-list__item"
                @click="changeRoute('/')"
            >
                <h2 class="h1-alt p-h2 regular alt-font">Home</h2>
                <i class="fa-solid fa-arrow-right"></i>
            </li>
            <li
                class="menu-list__item"
                @click="changeRoute('/resume')"
            >
                <h2 class="h1-alt p-h2 regular alt-font">Resume</h2>
                <i class="fa-solid fa-arrow-right"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'OverlayMenu',

        props: {
            showMenu: Boolean
        },

        methods: {
            changeRoute(route) {
                // this.$router.push(route);
                // this.$emit('close')
                this.$router
                    .push({ path: route })
                    .then(
                        () => {
                            this.$router.go(0);
                            this.$emit('close');
                    })
                }
            }
        }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .show {
        opacity: 1;
        visibility: visible;
    }

    .hide {
        opacity: 0;
        visibility: hidden;
    }

    .overlay-menu {
        transition: 0.3s all ease-in-out;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1000;
        height: calc(100vh - 60px);
        backdrop-filter: blur(80px);
        background: rgba($color: $black, $alpha: 0.75);

        .menu-list {
            @include flex-column();
            gap: 16px;
            margin: 40px auto 0;
            width: 320px;

            @media #{$mobile} {
                width: calc(100vw - 60px);
            }

            p {
                text-align: center;
            }

            &__item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                border-radius: 4px;
                transition: .2s all ease-in-out;
                color: $white;
                padding: 12px;

                i {
                    font-size: 24px;
                    transform: translateX(-8px);
                    transition: .2s all ease-in-out;
                }

                h2 {
                    text-transform: uppercase;
                    margin-top: 2px;
                }

                &:hover {
                    background: rgba(255, 255, 255, 0.1);

                    i {
                        // transition: .2s all ease-in-out;
                        transform: translateX(4px);
                    }
                }
            }
        }
    }
</style>
