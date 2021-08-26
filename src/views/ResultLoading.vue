<template>
    <section>
        <h1 @timeupdate
         ="refreshAll">result loading </h1>
        <h1 >최종결과: {{finalResult}}</h1>
        <h1>{{username}}</h1>
        <h1>{{answer1}}</h1>
        <h1>{{answer2}}</h1>
        <h1>{{answer3}}</h1>
        <div v-if="finalResult=='result1'">
            <button>
                <router-link :to="{name: 'result1'}">결과 확인하기</router-link>
            </button>
        </div>

        <div v-else-if="finalResult=='result2'">
            <button>
                <router-link :to="{name: 'result2'}">결과 확인하기</router-link>
            </button>            
        </div>        

        <div v-else-if="finalResult=='result3'">
            <button>
                <router-link :to="{name: 'result3'}">결과 확인하기</router-link>
            </button>            
        </div>      

        <div v-else-if="finalResult=='result4'">
            <button>
                <router-link :to="{name: 'result4'}">결과 확인하기</router-link>
            </button>            
        </div>       

        <div v-else-if="finalResult=='result5'">
            <button>
                <router-link :to="{name: 'result5'}">결과 확인하기</router-link>
            </button>            
        </div>             

        <div v-else-if="finalResult=='result6'">
            <button>
                <router-link :to="{name: 'result6'}">결과 확인하기</router-link>
            </button>            
        </div>  
        <div v-else-if="finalResult=='result7'">
            <button>
                <router-link :to="{name: 'result7'}">결과 확인하기</router-link>
            </button>            
        </div>  

        <div v-else-if="finalResult=='result8'">
            <button>
                <router-link :to="{name: 'result8'}">결과 확인하기</router-link>
            </button>            
        </div>             

        <div v-else-if="finalResult=='result9'">
            <button>
                <router-link :to="{name: 'result9'}">결과 확인하기</router-link>
            </button>            
        </div>  

        <div v-else-if="finalResult=='result10'">
            <button>
                <router-link :to="{name: 'result10'}">결과 확인하기</router-link>
            </button>            
        </div>  

        <div v-else-if="finalResult=='result11'">
            <button>
                <router-link :to="{name: 'result11'}">결과 확인하기</router-link>
            </button>            
        </div>             

        <div v-else-if="finalResult=='result12'">
            <button>
                <router-link :to="{name: 'result12'}">결과 확인하기</router-link>
            </button>            
        </div>  

        <div v-else-if="finalResult=='result13'">
            <button>
                <router-link :to="{name: 'result13'}">결과 확인하기</router-link>
            </button>            
        </div>  

        <div v-else-if="finalResult=='result14'">
            <button>
                <router-link :to="{name: 'result14'}">결과 확인하기</router-link>
            </button>            
        </div>             

        <div v-else-if="finalResult=='result15'">
            <button>
                <router-link :to="{name: 'result15'}">결과 확인하기</router-link>
            </button>            
        </div>  

        <div v-else-if="finalResult=='result16'">
            <button>
                <router-link :to="{name: 'result16'}">결과 확인하기</router-link>
            </button>            
        </div>  
    </section>
</template>

<script>
export default {
    data() {
        return {
            username: localStorage.getItem('username'),
            answer1: localStorage.getItem('answer1'),
            answer2: localStorage.getItem('answer2'),
            answer3: localStorage.getItem('answer3'),
            finalResult: localStorage.getItem('finalResult')
        }      
    },
    methods: {
        refreshAll() {
            // 새로고침
            this.$router.go();
        }
    }


}
</script>

<style>

</style>