<template>
    <li class="affiliation-item">
        <div class="affiliation-item__image-container">
            <img
                :src="image"
                :alt="name"
            >
        </div>
        <h3 class="affiliation-item_name alt-font">
            {{ name }}
        </h3>
        <div
            v-for="role in roles"
            :key="role"
            class="affiliation-item__role"
        >
            <div class="affiliation-item__role-main">
                <p class="semibold">
                    {{ role.name }}
                </p>
                <p>
                    {{ role.year }}
                </p>
            </div>
            <p
                v-for="desc in role.description"
                :key="desc"
                class="affiliation-item__role-description t-regular"
            >
                {{ desc }}
            </p>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'AffiliationItem',

        props: {
            name: {
                type: String,
                required: true
            },

            roles: {
                type: Array,
                required: true
            },

            image: {
                type: String,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/stylesheets/styles.scss';

    .affiliation-item {
        @include clear-list-formatting();
        @include flex-column();
        gap: 24px;
        border: 2px solid red;

        &__image-container {
            overflow: hidden;  /* Hide anything outside the container */
            position: relative;
            width: 100%;
            border-radius: 8px;
            height: 160px;

            img {
                object-fit: cover; /* Fit and clip the image without distortion */
                position: absolute; /* Ensure image is positioned correctly */
                top: 0;
                left: 0;
                width: 100%;
            }
        }

        &__role {
            @include flex-column();
            gap: 12px;

            &-main {
                @include flex-align-center();
                justify-content: space-between;
            }

            &-description {
                line-height: 150%;
                color: $gray-600;
            }
        }
    }
</style>