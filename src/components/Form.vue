<script setup lang="ts">

</script>

<template>
<section class="form_section" id="try">
        <div class="form_block">
            <div class="form_text">
                <h2>Получите первый обед
                    бесплатно!</h2>
                <p>Здоровые, вкусные и простые в приготовлении блюда ждут вас.
                    Начните питаться правильно уже сегодня. Вы можете отменить или
                    приостановить подписку в любое время. А первый обед за наш счет!</p>
                <div class="forms">
                    <div class="form_div">
                        <p>Ваше имя</p>
                        <input type="text">
                    </div>
                    <div class="form_div">
                        <p>Ваша почта</p>
                        <input type="text">
                    </div>
                    <div class="form_div">
                        <p>Откуда вы получили информацию о нас?</p>
                        <input type="text">
                    </div>
                    <button class="form_button">Отправить</button>
                </div>
            </div>
            <div class="form_img_block">
                <img src="/form_img.jpg" class="form_img">
            </div>
        </div>
    </section>
</template>

<style scoped>
.form_section {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.form_block {
    display: flex;
    flex-direction: row;
    width: 1100px;
    border-radius: 11px;
    background: linear-gradient(135deg, #EB984E 0%, #E67E22 100%);
    box-shadow: 0px 24px 48px 0px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}

.form_text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 47.4px;
    padding-right: 64px;
    padding-bottom: 30px;
    padding-left: 64px;
}

.form_text h2 {
    color: rgba(69, 38, 10, 1);
    font-family: Rubik;
    font-weight: 700;
    font-style: Bold;
    font-size: 44px;
    leading-trim: NONE;
    line-height: 52.8px;
    letter-spacing: -0.5px;
    vertical-align: middle;
    margin: 0px;
}

.form_text p {
    color: rgba(69, 38, 10, 1);
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 32.4px;
    letter-spacing: 0%;
    vertical-align: middle;

}

.form_img {
    width: 500px;
    height: 100%;
    opacity: 60%;
}

.forms {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 0px;
}

.form_div {
    display: flex;
    flex-direction: column;
}

.form_div p {
    color: rgba(69, 38, 10, 1);
    font-family: Rubik;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 16px;
    letter-spacing: 0%;
    vertical-align: middle;
}

.form_div input {
    width: 280px;
    height: 46px;
    angle: 0 deg;
    opacity: 1;
    border-radius: 9px;
    border: none;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
    background: rgba(253, 242, 233, 1);
    padding: 0px;
    margin: 0px;
}

.form_button {
    background: rgba(69, 38, 10, 1);
    color: rgba(253, 242, 233, 1);
    font-family: Rubik;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    height: 46px;
    angle: 0 deg;
    opacity: 1;
    border-radius: 9px;
    padding-top: 12px;
    padding-right: 95.61px;
    padding-bottom: 12px;
    padding-left: 95.61px;
    border: none;
    align-self: end;
}
</style>
