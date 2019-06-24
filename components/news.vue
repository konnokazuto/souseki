<template>
     <div id="news">
        <div v-scroll="handleScroll" class="news-contents">
            <h2>NEWS</h2>
            <div class="list-area">
                <dl>
                    <dt class="date">2019/08/16</dt>
                    <dd class="event appear"><span>イベント出演</span></dd>
                    <dd class="detail">『SUMMER SONIC 2019』参戦決定！</dd>
                </dl>
                <dl>
                    <dt class="date">2019-06-23</dt>
                    <dd class="event published"><span>メディア掲載情報</span></dd>
                    <dd class="detail">フジテレビ番組「ワイドナショー」に出演しました。</dd>    
                </dl>
                <dl>
                    <dt class="date">2019-02-13</dt>
                    <dd class="event published"><span>メディア掲載情報</span></dd>
                    <dd class="detail">「週刊文春」にてコラム「タピ活はじめました」の連載を開始しました。</dd>   
                </dl>
            </div>
            <transition @enter="onEnter" @before-enter="onBeforeEnter" @before-leave="onBeforeLeave">
            <table v-show="show" class="hide-table">
                <tr>
                    <td class="date">2019-02-01</td>
                    <td>テキスト</td>
                    <td>ニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュース</td>
                    <td><a href="#"><i class="fas fa-chevron-right"></i></a></td>
                </tr>
                <tr>
                    <td class="date">2019-02-01</td>
                    <td>テキスト</td>
                    <td>ニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュース</td>
                    <td><a href="#" class="arrow sample5-2"></a></td>
                </tr>
                <tr>
                    <td class="date">2019-02-01</td>
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

        .list-area{
            width: 100%;
        }

        dl{
            border-top:1px solid #F2F2F2;
            padding:20px 0;
        }

        dt,dd{
            display: inline-block;
        }

        .date{
           width:12%;
        }

        .event{
           width:20%;
           text-align: center;
           padding:10px 5px;
           color:#fff;
        }

        .detail{
            padding:10px;
        }

        .event .appear,
        .event .published{
            color:#fff;
            padding:5px 30px;
        }

        .event.appear{
            background:#A24040;
        }

        .event.published{
            background: #566A8E;
        }

        .detail{
         
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

