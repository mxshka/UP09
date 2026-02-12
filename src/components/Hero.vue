<script setup lang="ts">

</script>

<template>
    <main>
        <div class="main_left">
            <h1>Здоровая еда доставляется к вашей двери каждый день</h1>
            <p>Умная подписка на еду 365 дней в году, которая заставит вас снова питаться здорово. Подстраивается под
                ваши
                вкусы и потребности в питании.</p>
            <div class="buttons">
                <div class="orange button">Начать правильно питаться</div>
                <div class="button">Подробнее &darr;</div>
            </div>
            <div class="delivery_block">
                <div class="photos_block">
                    <img src="/customer-1.jpg" class="customer">
                    <img src="/customer-2.jpg" class="customer">
                    <img src="/customer-3.jpg" class="customer">
                    <img src="/customer-4.jpg" class="customer">
                    <img src="/customer-5.jpg" class="customer">
                    <img src="/customer-6.jpg" class="customer">
                </div>
                <p class="delivered-text">
                    <span>250,000+</span> доставок в прошлом году!
                </p>
            </div>
        </div>
        <div class="food">
            <img src="/food.png" width="566px">
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: #FDF2E9;
    display: flex;
    justify-content: center;
    width: 100%;
}

main div {
    width: 566px;
    margin-top: 60px;
}

div.main_left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 60px;
}

main div h1 {
    font-family: rubik;
    opacity: 80%;
    font-weight: 700;
    font-size: 40px;
}

main div p {
    font-family: rubik;
    opacity: 80%;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    color: #555555;
    height: 50px;
}

div.buttons {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

div.orange.button {
    background-color: #E67E22;
    color: white;
    padding: 15px 5px 15px 5px;
    max-width: 300px;
}

div.button {
    padding: 15px 20px 15px 20px;
    border-radius: 9px;
    background-color: white;
    font-family: rubik;
    opacity: 80%;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    max-width: 100px;
}

.delivery_block {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-top: 8rem;
    justify-content: center;
}

div.food {
    padding-left: 30px;
}

.photos_block {
    display: flex;
    position: absolute;
    margin-bottom: 100px;
}

.customer {
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    margin-right: -1.6rem;
    border: 3px solid #fdf2e9;
}

.customer:hover {
    height: 3.3rem;
    width: 3.3rem;
    transition: 150ms;
}

.customer:last-child {
    margin: 0;
}

.delivered-text {
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    position: absolute;
    margin-left: 190px;
    margin-bottom: 50px;
}

.delivered-text span {
    color: #cf711f;
    font-weight: 700;
}
</style>
