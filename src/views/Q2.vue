<template>
    <section>
        <h2>2. 어떤 맛의 와인을 원하시나요?</h2><br>
        <h3>난 입문자들도 마시기 좋은 달콤하고 가벼운 와인이 좋아!
            <input type="radio" v-model="answer" value="sweet" @change="submit">
        </h3><br>
        <h3>난 다양한 맛을 음미할 수 있는 드라이하고* 무거운* 와인이 좋아!
            <input type="radio" v-model="answer" value="dry" @change="submit">
        </h3><br>
        <h4>드라이한*= 달지 않고 신 맛 혹은 떫떠름한 맛이 나는<br><br>
        무거운*= 바디감이 무거운<br>(예시: 물 → 오렌지주스 → 우유 순으로 더 무거운 음료라고 할 수 있습니다!)</h4>

        <button>
            <router-link :to="{name: 'Q1'}">prev</router-link>
        </button>
        <button>
            <router-link :to="{name: 'Q3'}">next</router-link>
        </button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            answer: ""
        }
    },
    methods: {
        submit(){
            localStorage.setItem('answer2',this.answer);
        }
    }
}
</script>