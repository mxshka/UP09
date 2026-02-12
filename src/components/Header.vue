<script setup lang="ts">

</script>

<template>
    <header>
        <img src="/logo.png" width="130">
        <div class="header_b">
            <p>Как это работает</p>
            <p>Рецепты</p>
            <p>Отзывы</p>
            <p>Цены</p>
            <p class="orange">Попробовать</p>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 20px;
}

.header_b {
    display: flex;
    flex-direction: row;
    gap: 48px;
}

.header_b p {
    font-family: rubik;
    opacity: 80%;
    font-weight: 500;
    font-size: 15px;
    padding: 10px 15px 10px 15px;
}

p.orange {
    border-radius: 5px;
    background-color: #E67E22;
    color: white;
}
</style>
