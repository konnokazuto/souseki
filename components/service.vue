<template>
    <div id="service">
        <h2>Service</h2>
        <div v-scroll="handleScroll" class="service-contents">
            <div class="web-service web-design">
                <p><i class="fas fa-pencil-alt"></i></p>
                <h3>WEB<br>DESIGN</h3>
                <p>どこへ越しても住みにくいと悟った時、詩が生れて、絵が出来る。意地を通せば窮屈だ。</p>
            </div>
            <div class="web-service web-conding">
                <p><i class="fas fa-language"></i></p>
                <h3>WEB<br>CONDING</h3>
                <p>どこへ越しても住みにくいと悟った時、詩が生れて、絵が出来る。意地を通せば窮屈だ。</p>
            </div>
            <div class="web-service cms-customise">
                <p><i class="fab fa-wordpress"></i></p>
                <h3>CMS<br>CUSTOMIZE</h3>
                <p>どこへ越しても住みにくいと悟った時、詩が生れて、絵が出来る。意地を通せば窮屈だ。</p>
            </div>
        </div>
    </div>
</template>
<script>
import ScrollAnimation from './UI/ScrollAnimation.vue';
export default {
   mixins:[ScrollAnimation]
}
</script>

<style scoped lang="scss">
#service{
    background-color:#3E3E3E;
    padding-top:40px;
    height: 300px;
    
    h2{
        color: #fff;
        text-align: center;
    }

    .service-contents{
        opacity: 0;
        transform: translateY(50px);
        transition: opacity .8s ease-out, transform .6s ease-out;
        max-width: 1000px;
        margin:40px auto 0;
        background-color: #fff;
        display:flex;
        justify-content: space-around;
        text-align: center;
        padding:60px 0;
        box-shadow:0px 0px 6px 0px #3E3E3E;
        position: relative;

        .web-service{
            width:240px;
            /* box-shadow */
            
        }

        .fas,.fab{
            font-size:50px;
            margin-bottom: 20px;
        }

        h3{
            font-size: 20px;
            margin-bottom: 20px;
            line-height: 1.5;
            letter-spacing: 2px;
        }
    }

    .service-contents.isView{
        opacity:1;
        transform: translateY(0px);
        

    }
}
</style>

