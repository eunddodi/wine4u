  
<template>
    <section>
        <h2>어떤 분위기에서 와인을 즐기고 싶으신가요?</h2><br>
        <h3>즐거운 날의 시끌벅적 신나는 파티 분위기!
            <input type="radio" v-model="answer" value="party" @change="submit">
        </h3><br>
        <h3>여유로운 날의 조용하고 평화로운 힐링 분위기!
            <input type="radio" v-model="answer" value="rest" @change="submit">
        </h3><br>

        <button>
            <router-link :to="{name: 'Q2'}">prev</router-link>
        </button>
        <form @click="[computeResult(), refreshAll()]">
            <router-link :to="{name: 'result_loading'}">결과보기</router-link>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            answer:"",
            answer1: localStorage.getItem('answer1'),
            answer2: localStorage.getItem('answer2'),
        }
    },
    methods: {
        refreshAll() {
            // 새로고침
            this.$router.go();
            console.log("새로고침");
        },
        submit(){
            localStorage.setItem('answer3',this.answer);
            // this.computeResult();
        },
        computeResult(){

            if(this.answer1=='spring'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result1');
            }
            else if(this.answer1=='spring'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result2');
            }
            else if(this.answer1=='spring'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result3');
            }
            else if(this.answer1=='spring'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result4');
            }
            else if(this.answer1=='summer'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result5');
            }
            else if(this.answer1=='summer'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result6');
            }
            else if(this.answer1=='summer'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result7');
            }
            else if(this.answer1=='summer'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result8');
            }
            else if(this.answer1=='fall'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result9');
            }
            else if(this.answer1=='fall'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result10');
            }
            else if(this.answer1=='fall'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result11');
            }
            else if(this.answer1=='fall'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result12');
            }
            else if(this.answer1=='winter'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result13');
            }
            else if(this.answer1=='winter'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='rest'){
                localStorage.setItem('finalResult','result14');
            }
            else if(this.answer1=='winter'&& this.answer2=='sweet'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result15');
            }
            else if(this.answer1=='winter'&& this.answer2=='dry'&& localStorage.getItem('answer3')=='party'){
                localStorage.setItem('finalResult','result16');
            }
            console.log(localStorage.getItem('finalResult'));
        },
        
    }
}
</script>