<template>
    <div id="contact">
        <div v-scroll="handleScroll" class="contents-contact">
            <div class="header-contact">
                <h2>Contact Us</h2>
            </div>
            <form>
            <ul>
                <li class="box name">
                    <label class="label">氏名：</label>
                    <input id="rendou" type="text" name="yourname">
                </li>
                <li class="box email">
                    <label class="label">メールアドレス：</label>
                    <input id="mail" type="email" name="mail">
                </li>
                <li class="box inquiry-type">
                    <label class="label inquiry">お問い合わせ種別：</label>
                    <div class="cp_ipselect cp_sl01">
                    <select name="sushi">
                        <option value="magro">まぐろ</option>
                        <option value="ika">いか</option>
                        <option value="ebi">えび</option>
                    </select>
                    </div>

                </li>
                <li class="box message">
                    <label class="label" for="comment">メッセージ</label>
                </li>
                <textarea id="comment" name="comment" placeholder="吾輩は空白である、文章はまだない"></textarea>
            </ul>
        

            </form>
        </div>
    </div>
</template>
<script>
import MixinAnimation from './UI/ScrollAnimation.vue';
export default {
    mixins:[MixinAnimation]
}
</script>

<style lang="scss" scoped>
#contact{
    background:url(../assets/images/alex-blajan-159378-unsplash.jpg);
    background-size: cover;
    height:100%;
    padding:100px 0;
    
}

.header-contact{
    height:100px;
    background:url(../assets/images/kaitlyn-baker-422999-unsplash.jpg);
    background-size: cover;
    background-position: 0;
    position: relative;
    z-index: 0;
    padding-top: 20px;
    border-radius: 10px 10px 0 0;


    h2{
        z-index: 100;
        color:#fff;
    }
    
}

.header-contact::before{
  /* 透過した黒を上から重ねるイメージ */
  background-color: rgba(0,0,0,0.4);
  /* 自由に位置指定 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: ' ';
  z-index: -1;
  border-radius: 10px 10px 0 0;
}

.contents-contact{
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .8s ease-in-out, transform .6s ease-in-out;
    width: 50%;
    margin:0 auto;
    text-align:center;
    background-color:#fff;
    border-radius: 10px;
}

.contents-contact.isView{
    opacity: 1;
    transform: translate(0);
}

form{
    padding:90px;
}

.label{
    font-size:18px;
}

.label.inquiry{
    line-height: 1.5;
}

.box{
    margin-bottom:50px;
    display:flex;
    justify-content: space-between;
}

input{
    outline: none;
    font-size:20px;
    border-bottom:1px solid #3e3e3e;
    border-right:none;
    border-left:none;
    border-top:none;
    width:60%;
}

input:focus{
    box-shadow: 0px 3px 3px -3px #4973FF;
    transition:all 0.1s;
  border-bottom: 1px solid #4973FF;
}

textarea{
    width:100%;
    height:180px;
    font-size: 15px;
}

textarea::placeholder{
    font-size:15px;
}

.message{
    margin-bottom: 10px;
}




</style>


