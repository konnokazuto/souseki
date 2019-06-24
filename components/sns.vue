<template>
    <div id="sns">
        <h2>SNS</h2>
        <div class="sns-wrapper">
        <section v-scroll="handleScroll" class="sns-contents twitter">
            <h3><i class="fab fa-twitter fa-2x"></i></h3>
            <a class="twitter-timeline" data-width="300" data-height="400" data-theme="light" data-link-color="#E81C4F" href="https://twitter.com/natsume_soseki?ref_src=twsrc%5Etfw">Tweets by natsume_soseki</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </section>
        <section v-scroll="handleScroll" class="sns-contents instagram">
            <h3><i class="fab fa-instagram fa-2x"></i></h3>
           <!-- SnapWidget -->
<script src="https://snapwidget.com/js/snapwidget.js"></script>
<iframe src="https://snapwidget.com/embed/700869" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; "></iframe>
        </section>
        <section v-scroll="handleScroll" class="sns-contents youtube">
            <h3><i class="fab fa-youtube fa-2x"></i></h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mvngzIBG-Us" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    </div>
    </div>
</template>
<script>
import ScrollAnimation from './UI/ScrollAnimation.vue';
export default {
    mixins:[ScrollAnimation],
  head () {
    return {
      script: [
        { src: 'https://snapwidget.com/js/snapwidget.js' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#sns{
    height:900px;
    padding-top:100px;

    h2{
        margin-bottom:50px;
    }
}

.sns-wrapper{
    display: flex;
    justify-content: space-around;
}

.sns-contents{
    width:25%;

    h3{
        margin-bottom: 30px;
    }
}

.twitter{
    width:25%;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .8s ease-out, transform .6s ease-out;
}

.twitter.isView{
    opacity: 1;
     transform: translateY(0px);
}


.instagram{
    opacity: 0;
    transform: translateY(-50px);
        transition: opacity .8s ease-out, transform .6s ease-out;
        iframe{
            height:100%;
        }
}

.instagram.isView{
    opacity: 1;
     transform: translateY(0px);
}

.youtube{
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .8s ease-out, transform .6s ease-out;
        iframe{
            width:100%;
        }
}

.youtube.isView{
    opacity:1;
     transform: translateY(0px);
}
</style>
