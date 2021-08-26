<template>
    <section>
        <h2>1. 어떤 계절과 어울리는 와인을 원하시나요?</h2><br>
        <h3>살랑거리는 바람에 벚꽃이 흩날리는 봄
            <input type="radio" v-model="answer" value="spring" @change="submit">
        </h3><br>
        <h3>무더운 날 칠링하고 싶은 여름
            <input type="radio" v-model="answer" value="summer" @change="submit">
        </h3><br>
        <h3>선선한 바람이 불기 시작하는 가을
            <input type="radio" v-model="answer" value="fall" @change="submit">
        </h3><br>
        <h3>소복소복 눈이 쌓이는 겨울
            <input type="radio" v-model="answer" value="winter" @change="submit">
        </h3><br>

        <button>
            <router-link :to="{name: 'Home'}">prev</router-link>
        </button>
        <button>
            <router-link :to="{name: 'Q2'}">next</router-link>
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
            localStorage.setItem('answer1',this.answer);
        }
    }
}
</script>