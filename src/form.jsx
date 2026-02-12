export default function Form(){
    return(
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
                        <input type="text" />
                    </div>
                    <div class="form_div">
                        <p>Ваша почта</p>
                        <input type="text" />
                    </div>
                    <div class="form_div">
                        <p>Откуда вы получили информацию о нас?</p>
                        <input type="text" />
                    </div>
                    <button class="form_button">Отправить</button>
                </div>
            </div>
            <div class="form_img_block">
                <img src="form_img.jpg" class="form_img" />
            </div>
        </div>
    </section>
    )
}