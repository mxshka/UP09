<script setup lang="ts">
    import Step from './Step.vue';
</script>

<template>
 <section class="how_it_works">
        
        <div class="how_head">
            <h3>Как это работает</h3>
            <p>Ваша ежедневная доза здоровья в 3 простых шага</p>
        </div>
        
    
        <Step
                direction="row"
                number="01"
                title="Расскажите, что вам нравится (и что не нравится)"
                description="Больше не тратьте время на размышления о том, что есть! Omnifood AI создаст для вас на 100% персонализированный еженедельный план питания. Он гарантирует, что вы получите все необходимые питательные вещества и витамины, независимо от вашей диеты!"
                img="/app-screen-1.png"
            />
            <Step
                direction="row-reverse"
                number="02"
                title="Утвердите свой еженедельный план питания"
                description="Раз в неделю утверждайте план питания, сгенерированный для вас Omnifood AI. Вы можете менять ингредиенты, заменять целые блюда или даже добавлять свои собственные рецепты."
                img="/app-screen-2.png"
            />
            <Step
                direction="row"
                number="03"
                title="Получайте еду в удобное время"
                description="Лучшие повара города будут готовить выбранное вами блюдо каждый день, и мы доставим его к вашей двери в удобное для вас время. Вы можете ежедневно менять график и адрес доставки!"
                img="/app-screen-3.png"
            />
    </section>
</template>

<style scoped>
    section.how_it_works {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
}
div.how_head {
    display: flex;
    flex-direction: column;
    width: 1100px;
}
div.how_head h3 {
    text-transform: uppercase;
    color: #CF711F;
    font-family: rubik;
opacity: 80%;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.75px;
}
div.how_head p {
    font-family: rubik;
opacity: 80%;
    font-weight: 700;
    font-style: bold;
    font-size: 30px;
    letter-spacing: -0.5px;
}



div.steps {
    display: flex;
    flex-direction: column;
}


</style>
