<template>
    <div class="getUsername">
        <input type="text" v-model="username" @keyup.enter="addUsername">
        <span class="addContainer" @click="addUsername">
            <i class="fas fa-mouse fa-2x addBtn"></i>
        </span>
    </div>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
    name: 'GetUsername',
    data(){
        return {
            username: ""
        }
    },
    methods: {
        addUsername(){
            localStorage.setItem("username", this.username);
        }
    }
}
</script>

<style scoped>

input:focus {
    outline: none;
}

.getUsername {
    background: white;
    width: 400px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.getUsername input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
    </style>