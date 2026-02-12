<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="footer_content">
            <div class="footer_column">
                <img src="/logo.png" width="130">
                <div class="img_box">
                    <img src="/Item.png">
                    <img src="/Item_1.png">
                    <img src="/Item_2.png">
                </div>
                <p>Авторские права © 2027 ООО
                    "Омнифуд". Все права
                    защищены.</p>
            </div>
            <div class="footer_column">
                <h3>Связаться с нами</h3>
                <p>ул. Примерная, д. 123, 2
                    этаж, Москва, 123456</p>
                <p>+7 (495) 123-45-67<br>hello@omnifood.com</p>
            </div>
            <div class="footer_column">
                <h3>Аккаунт</h3>
                <p>Создать аккаунт</p>
                <p>Войти</p>
                <p>Приложение IOS</p>
                <p>Приложение Android</p>
            </div>
            <div class="footer_column">
                <h3>Компания</h3>
                <p>О нас</p>
                <p>Для бизнеса</p>
                <p>Наши поставщики</p>
                <p>Карьера</p>
            </div>
            <div class="footer_column">
                <h3>Ресурсы</h3>
                <p>Сборник рецептов</p>
                <p>Служба поддержки</p>
                <p>Политика
                    конфиденциальности
                    и условия
                    использования</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    border-top: 1px solid rgba(238, 238, 238, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 128px;
    padding-right: 360px;
    padding-bottom: 127px;
    padding-left: 360px;
    border-top-width: 1px;
    margin-top: 100px;
}

.footer_content {
    display: flex;
    flex-direction: row;
    width: 1100px;
    column-gap: 64px;
    padding-left: 32px;
    padding-right: 32px;
}

.footer_column {
    display: flex;
    flex-direction: column;
}

.img_box {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
}

.footer_column {
    color: rgba(118, 118, 118, 1);
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 22.4px;
    letter-spacing: 0%;
    vertical-align: middle;
    width: 210px;
    height: 210px;
    justify-content: space-between;
}

.footer_column h3 {
    margin: 0px;
    color: rgba(85, 85, 85, 1);
    font-family: Rubik;
    font-weight: 500;
    font-style: Medium;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 18px;
    letter-spacing: 0%;
    vertical-align: middle;

}
</style>
