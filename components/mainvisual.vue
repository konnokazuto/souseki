<template>
    <div id="main-visual">
        <div class="box">
            <div class="bgImg src1"></div>
            <div class="bgImg src2"></div>
            <div class="bgImg src3"></div>
            <div class="bgImg src4"></div>
        </div>
        <div class="main-text">
            <h2>詩が生れて、絵が出来る。<br>とかく人の世は住みにくい。</h2>
            <p>どこへ越しても住みにくいと悟った時、詩が生れて、絵が出来る。意地を通せば窮屈だ。</p>
          <!--  <button class="orange"><a href="#">お問い合わせしてみる</a></button> -->
        </div>
        <a href="#"><span></span>Scroll</a>
    </div>
</template>
<style scoped lang="scss">
#main-visual{
    position:relative;
    height: 100vh;
    background-size: cover;
    background-position: 30px;

    .box {
        position   : relative;
        height: 100%;
        margin     : auto;
        overflow   : hidden;
    }

    .box .bgImg {
        position   : absolute;
        top        : 0;
        left       : 0;
        bottom     : 0;
        right      : 0;
        opacity    : 0;
        animation  : bgAnime 20s infinite;   /* 4画像 × 各5s = 20s */
    }

    .box .src1 {
        background-image : url(../assets/images/souseki2.jpg); 
        background-size: cover;
        background-position:0 -140%;
          /* 背景の画像を指定 */
    }
    .box .src2 {
        background-image : url(../assets/images/souseki8.jpg); 
        background-size: cover;  /* 背景の画像を指定 */
        background-position:5px -240%;
        animation-delay  : 5s;
        background-position: bottom;
    }
    .box .src3 {
        background-image : url(../assets/images/big-ben-bridge-castle-460672.jpg);  
        background-size: cover; /* 背景の画像を指定 */
        background-position:0px -90%;
        animation-delay  : 10s;
        background-position: center;
    }

    .box .src4 {
        background-image : url(../assets/images/emre-gencer-228223-unsplash.jpg); 
        background-size: cover; /* 背景の画像を指定 */
        background-position:0px -90%;
        animation-delay  : 15s;
        background-position:0 60%;
    }

    @keyframes bgAnime {
        0% { opacity: 0; }
        5% { opacity: 1; }
        25% { opacity: 1; }
        30% { opacity: 0; }
        100% { opacity: 0; }
    }


    .main-text{
        width: 400px;
        position: absolute;
        top:20%;
        left:10%;
    }

    h2{
        color:#fff;
        font-weight: bold;
        line-height: 1.5;
        margin-bottom:10px;
    }

    p{
        font-size:14px;
        margin-top:20px;
        line-height: 1.5;
        color: #fff;
    }

    button{
        margin-top: 20px;
    }

    a {
        color:#fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  text-decoration: none;
}

    a {
  padding-top: 60px;
}


a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
}
</style>

