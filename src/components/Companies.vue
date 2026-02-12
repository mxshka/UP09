<script setup lang="ts">

</script>

<template>
    <section class="sources">
        <h2>Нас упоминают</h2>
        <div class="sources_imgs">
            <img src="/business-insider.png" class="source_img" style="width: 150px;">
            <img src="/forbes.png" class="source_img" style="width: 150px;">
            <img src="/techcrunch.png" class="source_img" style="width: 250px;">
            <img src="/the-new-york-times.png" class="source_img" style="width: 250px;">
            <img src="/usa-today.png" class="source_img" style="width: 180px;">
        </div>
    </section>
</template>

<style scoped>
section.sources {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
}

section.sources h2 {
    text-transform: uppercase;
    font-family: rubik;
    opacity: 80%;
    font-weight: 600;
    font-size: 16px;
    color: #555555;
    letter-spacing: 0.75px;
}

.source_img {
    padding: 0px 25px;
    opacity: 70%;
    margin-top: 25px;
}
</style>
