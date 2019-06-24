<template>
     <div id="news">
        <div v-scroll="handleScroll" class="news-contents">
            <h2>NEWS</h2>
            <table>
                <tr>
                    <td>1906-02-01</td>
                    <td>「I love you」を「月が綺麗ですね」と略したことで炎上
                    </td>
                    <td>どうも日本には、西洋諸国に比べてウィットやユーモアが根づいてないように思われる。</td>
                    <td><a href="#" class="arrow sample5-2"></a></td>
                </tr>
                <tr>
                    <td>2000-04-03</td>
                    <td>千円札のモデルに採用</td>
                    <td>ただ一万円札のモデルが福澤諭吉である意味がわからない。</td>
                    <td><a href="#" class="arrow sample5-2"></a></td>
                </tr>
                <tr>
                    <td>1893-05-02</td>
                    <td>イギリス留学でメンヘラになる</td>
                    <td>このままでは日本がオワコンになる危険性がある。</td>
                    <td><a href="#" class="arrow sample5-2"></a></td>
                </tr>
            </table>
            <transition @enter="onEnter" @before-enter="onBeforeEnter" @before-leave="onBeforeLeave">
            <table v-show="show" class="hide-table">
                <tr>
                    <td>2019-02-01</td>
                    <td>テキスト</td>
                    <td>ニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュース</td>
                    <td><a href="#" class="arrow sample5-2"></a></td>
                </tr>
                <tr>
                    <td>2019-02-01</td>
                    <td>テキスト</td>
                    <td>ニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュース</td>
                    <td><a href="#" class="arrow sample5-2"></a></td>
                </tr>
                <tr>
                    <td>2019-02-01</td>
                    <td>テキスト</td>
                    <td>ニュースニュースニュースニュースニュースニュース</td>
                    <td><a href="#" class="arrow sample5-2"></a></td>
                </tr>
            </table>
            </transition>
            <button v-on:click="toggle" class="button btn-show">
                <p v-if="show">CLOSE</p>
                <p v-else>MORE</p>
            </button>
        </div>
    </div>
</template>
<script>
import MixinAnimation from './UI/ScrollAnimation.vue';
export default {
    mixins: [MixinAnimation],
    
    data:function(){
        return{
            show:false,
        }
    },

    methods:{
        toggle:function(){
            this.show=!this.show
        },
        onBeforeEnter(el){
            alert();
            el.style.height=0;
        },
        onEnter(el){
            el.style.height = el.scrollHeight+"px"
        },
        onBeforeLeave(el){
            el.style.height = el.scrollHeight + "px"
        }
    }

    
}
</script>

<style scoped lang="scss">
#news{
    padding-top: 8%;
    background-color:#F2F2F2;
    height: auto;

    .news-contents{
        opacity: 0;
        padding:0 5% 5%;
        background-color: #fff;
        width:80%;
        margin:40px auto;
        transform: translateY(50px);
        transition: opacity .8s ease-out, transform .6s ease-out;

        h2{
            color: #3E3E3E;
            text-align: center;
            padding:40px 0;
        }

        table{
            width: 100%;
        }

        tr{
            border-top:1px solid #F2F2F2;
        }

        td{
            padding:40px;
        }

       .button {
            color: #FFF;
            border: 1px solid #3E3E3E;
            padding: 0 40px;
            line-height: 40px;
            margin:0 auto;
            display: inherit;
            width:200px;
            box-sizing: border-box;
            position: relative;
            z-index: 1;
            outline: 0;
            cursor: pointer;
        }

        .button,
        .button::before,
        .button::after {
            box-sizing: border-box;
            transition: all 0.3s;
        }

        .button::before,
        .button::after {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
        }

        .button.btn-show{
            color: #3e3e3e;
            background: #fff;
            border-color: #3E3E3E;
        }

        .button::after{
            width:0;
            height:100%;
            left:0;
            top:0;
        }

        .button.btn-show:hover {
            color: #FFF;
            border-color: #3e3e3e;

        }

        .button:hover.btn-show::after {
            background: #3e3e3e;
            width:100%;
        }
    
    }

    .news-contents.isView{
        opacity:1;
        transform: translateY(0px);
        

    }
}
</style>

