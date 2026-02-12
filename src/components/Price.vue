<script setup lang="ts">

</script>

<template>
<section class="price_section" id="price">
        <div class="price_head">
            <h3>Цены</h3>
            <h2>Питаться хорошо, не разоряясь</h2>
        </div>
        <div class="price_row">
            <div class="price">
                <h3>STARTER</h3>
                <h2><span>₽</span>3990</h2>
                <p>в месяц. Это всего 130 рублей за один
                    прием пищи!</p>
                <ul>
                    <li>1 прием пищи в день</li>
                    <li>Заказы принимаются с 11:00
                        до 21:00</li>
                    <li>Доставка бесплатная</li>
                    <li class="cross"></li>
                </ul>
                <button>Начните правильно
                    питаться</button>
            </div>
            <div class="price orange">
                <h3>Complete</h3>
                <h2><span>₽</span>6490</h2>
                <p>в месяц. Это всего 108 рублей за один
                    прием пищи!</p>
                <ul>
                    <li>2 приема пищи в день</li>
                    <li>Заказ 24/7</li>
                    <li>Доставка бесплатная</li>
                    <li>Получите доступ к новейшим рецептам</li>
                </ul>
                <button>Начните правильно
                    питаться</button>
            </div>
        </div>
        <p>Цены включают все применимые налоги. Вы можете отменить подписку в любое время. Оба тарифных плана включают
            следующее:</p>
        <div class="price_comments">
            <div class="price_comment">
                <img src="/infinite.png">
                <h2>Больше никогда не готовить!</h2>
                <p>Наша подписка действует 365 дней в году, включая
                    даже основные
                    праздники.</p>
            </div>
            <div class="price_comment">
                <img src="/apple.png">
                <h2>Местные и
                    органические
                    продукты</h2>
                <p>Наши повара используют
                    для приготовления ваших
                    блюд только местные,
                    свежие и органические
                    продукты.</p>
            </div>
            <div class="price_comment">
                <img src="/leaf.png">
                <h2>Без отходов</h2>
                <p>Все наши партнеры
                    используют только
                    многоразовые контейнеры
                    для упаковки ваших блюд.</p>
            </div>
            <div class="price_comment">
                <img src="/pause.png">
                <h2>Приостановить в
                    любое время</h2>
                <p>Собираетесь в отпуск?
                    Просто приостановите
                    подписку, и мы вернем
                    вам деньги за
                    неиспользованные дни.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .price_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    row-gap: 50px;
}

.price_head h3 {
    color: rgba(207, 113, 31, 1);
    font-family: Rubik;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 16px;
    letter-spacing: 0.75px;
    vertical-align: middle;
    text-transform: uppercase;
    width: 1100px;
}

.price_head h2 {
    color: rgba(51, 51, 51, 1);
    font-family: Rubik;
    font-weight: 700;
    font-style: Bold;
    font-size: 44px;
    leading-trim: NONE;
    line-height: 52.8px;
    letter-spacing: -0.5px;
    vertical-align: middle;
    margin-bottom: 50px;
}

.price_row {
    display: flex;
    flex-direction: row;
    column-gap: 40px;
}

.price {
    angle: 0 deg;
    opacity: 1;
    gap: 18px;
    padding: 30px;
    border-radius: 11px;
    border-width: 2px;
    border: 2px solid rgba(253, 242, 233, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.price h3 {
    color: rgba(207, 113, 31, 1);
    font-family: Rubik;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

}

.price h2 {
    color: rgba(51, 51, 51, 1);
    font-family: Rubik;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 62px;
    leading-trim: NONE;
    line-height: 62px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;

}

.price h2 span {
    font-family: Rubik;
    font-weight: 500;
    font-style: Medium;
    font-size: 30px;
    leading-trim: NONE;
    line-height: 30px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
}

.price p {
    color: rgba(111, 111, 111, 1);
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 25.6px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    width: 250px;
}

.price ul li {
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 21.6px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: rgba(85, 85, 85, 1);
    list-style-type: none;
}

.price ul li::before {
    content: url(/check.png);
    margin-right: 10px;
    bottom: -10px;
    position: relative;
}

.price button {
    width: 320px;
    height: 72;
    angle: 0 deg;
    opacity: 1;
    padding-top: 16px;
    padding-right: 53.52px;
    padding-bottom: 16px;
    padding-left: 53.5px;
    border-radius: 9px;
    background: rgba(230, 126, 34, 1);
    font-family: Rubik;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color: rgba(255, 255, 255, 1);
    border: none;
}

.price ul li.cross::before {
    content: url(/cross.png);

}

.price.orange {
    background: rgba(253, 242, 233, 1);
    overflow: hidden;
}

.price.orange::after {
    content: "Best Value";
    width: 245.30999877958848;
    height: 30.0000058300803;
    rotate: 45deg;
    opacity: 1;
    padding-top: 7.01px;
    padding-right: 80px;
    padding-bottom: 7.99px;
    padding-left: 80px;
    background: rgba(255, 212, 59, 1);
    position: relative;
    right: -170px;
    top: -94%;
    color: rgba(51, 51, 51, 1);
    font-family: Rubik;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 14px;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
}

.price_section p {
    color: rgba(85, 85, 85, 1);
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 25.6px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;

}

.price_comments {
    display: flex;
    flex-direction: row;
    gap: 40px;
}

.price_comment {
    width: 250px;
}

.price_comment h2 {
    color: rgba(51, 51, 51, 1);
    font-family: Rubik;
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    leading-trim: NONE;
    line-height: 24px;
    letter-spacing: 0%;
    vertical-align: middle;

}

.price_comment p {
    color: rgba(85, 85, 85, 1);
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 32.4px;
    letter-spacing: 0%;
    text-align: left;
}
</style>
