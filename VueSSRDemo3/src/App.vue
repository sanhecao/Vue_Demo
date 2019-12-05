<template>
    <div>
        <h2>我的app</h2>

        <router-link to="/">Home</router-link> |
        <router-link to="/about">Form</router-link> |
        <router-link to="/like">Vuex</router-link> |

        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        mounted() {
        }
    }
</script>

<style scoped>

</style>
