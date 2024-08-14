<template>
    <nav id="nav">
        <ul>
            <li class="nav-item">
                <h1
                    class="alt-font nav-item__left"
                    @click="goTo('/')"
                >
                    drix.tech
                </h1>
            </li>
            <li>
                <p
                    class="t-sm"
                    @click="$emit('toggle-menu')"
                >
                    Menu
                </p>
                <!-- <i
                    @click="$emit('toggle-menu')"
                    class="fa-solid fa-circle-dot"
                ></i> -->
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Navbar',

        methods: {
            goTo(path) {
                this.$router.push({ path: path })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    #nav {
        height: 60px;
        background-color: $black;
        backdrop-filter: blur(50px);
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 999;
        border-bottom: 0.5px solid $gray-800;

        @media #{$tablet} {
            padding: 0 32px;
        }

        ul {
            width: 720px;
            margin: auto;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;

            h1 {
                font-size: 12px;
                text-transform: uppercase;
            }

            @media #{$tablet} {
                width: 100%;
            }
        }

        i,p,h1 {
            cursor: pointer;
        }
    }
</style>