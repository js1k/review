<template>
<div id="nav">
    <router-link to="/"></router-link> |
    <router-link to="/about"></router-link>
</div>
<router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
