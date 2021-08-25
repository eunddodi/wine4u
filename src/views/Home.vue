<template>
  <div class="home">
    <img alt="main image" src="../assets/yellow.jpg">
    <h1>YBIGTA Wine Recommendation Service</h1>
    <span style="color:#f50057">
      <!-- i 태그는 아이콘이에요! 구글에 font awesome 검색하시면 새로운 아이콘 다운 받으실 수도 있고 크기 변경 등 서식 적용 방법도 알 수 있어요 -->
    <i class="fas fa-wine-glass-alt fa-2x"></i>
    </span>
    <p>
      안녕하세요 YBIGTA Wine4U 입니다!<br>
      와인에 익숙치 않은 여러분을 위해 와인을 추천해드리겠습니다:)
    </p><br>
    <h3>이름을 입력해주세요</h3>
    <div>
    <GetUsername></GetUsername>
    <button class="start">
      <router-link :to="{name: 'Q1'}">시작하기</router-link>
    </button> 
    </div>
  </div>
</template>

<script>
// 사용자 이름을 받아오는 것만 다른 컴포넌트로 뺐습니다 그게 더 구조적으로 깔끔한 듯 해서요
// 근데 이게 외부 컴포넌트라 그런지 얘만 페이지에서 가운데 정렬이 안되더라구요ㅠㅡㅠ 해결 못한 채로 코드 드려서 죄송합니다
import GetUsername from './GetUsername.vue'
export default {
  name: 'Home',
  components: {
    GetUsername
  }
}
</script>


<style scoped>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
img {
  width: 100vw;
  height: 500px;
  object-fit: cover;
  margin:0;
}
h1 {
    font-family: 'BBTreeGB';
    color: black;
}
p, h3 {
  font-family: 'BBTreeGB';
  font-size: 21px;
  color: #3b3b3b;
}
.start {
  width: 200px;
  background-color:#b0e0e6; /* 버튼 색깔 이걸로 쓰시면 될 것 같아요! */
}
</style>
