<script setup lang="ts">

</script>

<template>
<section class="reviews" id="reviews">
        <div class="reviews_left">
            <h3>Отзывы</h3>
            <h2>Попробовав однажды, вы уже не
                сможете вернуться к прежнему</h2>
            <div class="review_row">
                <div class="review">
                    <img src="/author1.jpg" class="review_img">
                    <p class="review_text">Недорогие, полезные и очень вкусные
                        блюда, даже без необходимости заказывать
                        вручную! Это просто волшебно!</p>
                    <p class="review_author">— Dave Bryson</p>
                </div>
                <div class="review">
                    <img src="/author2.jpg" class="review_img">
                    <p class="review_text">Алгоритм искусственного интеллекта
                        просто потрясающий, он каждый раз
                        выбирает для меня правильные блюда.
                        Удивительно, что больше не нужно
                        беспокоиться о еде!</p>
                    <p class="review_author">— Ben Hadley</p>
                </div>
            </div>
            <div class="review_row">
                <div class="review">
                    <img src="/author3.jpg" class="review_img">
                    <p class="review_text">Omnifood — просто спасение! Я только что
                        открыла компанию, поэтому у меня совсем
                        нет времени на готовку. Теперь я не могу
                        жить без ежедневного питания!</p>
                    <p class="review_author">— Steve Miller</p>
                </div>
                <div class="review">
                    <img src="/author4.jpg" class="review_img">
                    <p class="review_text">Я купила продукты Omnifood для всей
                        семьи, и это сэкономило мне столько
                        времени! К тому же, все продукты
                        органические, веганские и без пластика.</p>
                    <p class="review_author">— Hannah Smith</p>
                </div>
            </div>
        </div>
        <div class="reviews_right">
            <img src="/review1.jpg" class="menu_item">
            <img src="/review2.jpg" class="menu_item">
            <img src="/review3.jpg" class="menu_item">
            <img src="/review4.jpg" class="menu_item">
            <img src="/review5.jpg" class="menu_item">
            <img src="/review6.jpg" class="menu_item">
            <img src="/review7.jpg" class="menu_item">
            <img src="/review8.jpg" class="menu_item">
            <img src="/review9.jpg" class="menu_item">
            <img src="/review10.jpg" class="menu_item">
            <img src="/review11.jpg" class="menu_item">
            <img src="/review12.jpg" class="menu_item">
        </div>
    </section>
</template>

<style scoped>
    .reviews {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(253, 242, 233, 1);
    padding: 20px;
margin-top: 100px;
}

.reviews_left {
    display: flex;
    flex-direction: column;
    width: 1000px;
    justify-content: center;
}

.reviews_left h3 {
    font-family: Rubik;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 16px;
    letter-spacing: 0.75px;
    vertical-align: middle;
    text-transform: uppercase;
    color: rgba(207, 113, 31, 1);
}

.reviews_left h2 {
    font-family: Rubik;
    font-weight: 700;
    font-style: Bold;
    font-size: 40px;
    leading-trim: NONE;
    line-height: 52.8px;
    letter-spacing: -0.5px;
    vertical-align: middle;
    color: rgba(51, 51, 51, 1);
    margin: 0px;
}

.review_row {
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    column-gap: 90px;
}

.review {
    display: flex;
    flex-direction: column;
    width: 392px;
}

.review_text {
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 32.4px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: rgba(85, 85, 85, 1);

}

.review_author {
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 16px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: rgba(111, 111, 111, 1);

}

.review_img {
    width: 64px;
    height: 64px;
    angle: 0 deg;
    opacity: 1;
    border-radius: 32px;

}


.reviews_right {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}

.menu_item {
    width: 240px;
    height: 240px;
    opacity: 1;
}
.menu_item:hover {
    transform: scale(1.05);
    transition: 1s;
}
</style>
