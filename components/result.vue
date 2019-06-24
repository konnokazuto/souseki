<template>
  <div  id="result">
    <h2>Works</h2>
    <div v-scroll="handleScroll" v-swiper:mySwiper="swiperOption" class="swiper-container">
        <ul class="swiper-wrapper">
            <li @click="fadeInModal(0)" class="swiper-slide"><img src="../assets/images/souseki.work1.jpg" alt=""></li>
            <li @click="fadeInModal(1)" class="swiper-slide"><img src="../assets/images/souseki.work2.jpg" alt=""></li>
            <li @click="fadeInModal(2)" class="swiper-slide"><img src="../assets/images/souseki.work3.jpg" alt=""></li>
            <li @click="fadeInModal(3)" class="swiper-slide"><img src="../assets/images/souseki.work4.jpg" alt=""></li>
            <li @click="fadeInModal(4)" class="swiper-slide"><img src="../assets/images/souseki.work5.jpg" alt=""></li>
            <li @click="fadeInModal(5)" class="swiper-slide"><img src="../assets/images/souseki.work6.jpg" alt=""></li>
        </ul>
        <button class="swiper-button-prev" type="button">前へ</button>
        <button class="swiper-button-next" type="button">次へ</button>
    </div>
  <transition name="modal">
        <div v-if="showModal" class="modal-mask">
            <div class="modal-wrapper" @click.self="closeModal">
                <div class="modal-container">
                  <div class="modal-img">
                    <img :src="url" alt="">
                  </div>
                    <div class="modal-text">
                        <h3>{{intro}}</h3>
                        <p>{{text}}</p>
                    </div>
                </div>
            </div>
        </div>
</transition>
</div>
</template>
<script>
import News from './news.vue'



export default {
    data:function(){
        return{
            showModal: false,
            url:require('../assets/images/souseki.work1.jpg'),
            intro:"",
            text:"",
            swiperOption: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 50,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            modalImg:[
              require('../assets/images/souseki.work1.jpg'),
              require('../assets/images/souseki.work2.jpg'),
              require('../assets/images/souseki.work3.jpg'),
              require('../assets/images/souseki.work4.jpg'),
              require('../assets/images/souseki.work5.jpg'),
              require('../assets/images/souseki.work6.jpg'),

            ],  
            modalData:[
              {intro:'精神的に向上心のない者は馬鹿だ',text:'鎌倉の海岸で、学生だった私は一人の男性と出会った。不思議な魅力を持つその人は、“先生"と呼んで慕う私になかなか心を開いてくれず、謎のような言葉で惑わせる。やがてある日、私のもとに分厚い手紙が届いたとき、先生はもはやこの世の人ではなかった。遺された手紙から明らかになる先生の人生の悲劇――それは親友とともに一人の女性に恋をしたときから始まったのだった。'},
              {intro:'吾輩は猫である。名前はまだない',text:'生まれてすぐに捨てられた吾輩は、生きるために迷走しているうちに珍野家にたどり着く。家主である中学の英語教師、珍野苦沙弥（くしゃみ）は変人で、胃が弱く、ノイローゼ気味で、なにかと苦労が絶えない。日本一有名なネコの可笑しな人間観察日記。'},
              {intro:'熊本より東京は広い。東京より日本は広い。日本より頭の中の方が広い',text:'熊本の高等学校を卒業し、東京帝国大学に合格した真面目な主人公の三四郎は、23歳だが女性経験がない田舎者。女性と共に相部屋で一晩を過ごすが、気を遣うばかりで手も触れず、「度胸のない方ですね」と別れ際に言われる始末。そんな三四郎に転機が'},
              {intro:'親譲りの無鉄砲で子供の頃から乱暴ばかりしている',text:'さあ、きょうからおれも一人前の先生。張り切って着任した中学校だがまわりの教師が何だか変だ。臆病だったり、嘘つきだったり、小うるさかったり、いったい誰がまともなんだい――？　正義感あふれる主人公が、同僚の婚約者を汚い手を使って奪い取ろうとする教頭を徹底的に懲らしめるまでの顛末を痛快に描く。'},
              {intro:'僕の存在には貴方が必要だ。どうしても必要だ',text:'長井代助は三十にもなって定職も持たず、父からの援助で毎日をぶらぶらと暮している。実生活に根を持たない思索家の代助は、かつて愛しながらも義侠心から友人平岡に譲った平岡の妻三千代との再会により、妙な運命に巻き込まれていく……。'},
              {intro:'智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。兎角に人の世は住みにくい',text:'日露戦争の時代。30歳の洋画家は山に向かい、温泉宿に宿泊する。そこで那美という美しい女性と知り合う。元夫の勤め先が倒産し、実家の宿に戻ってきたという彼女は謎めいて見える反面、「今まで見た女のうちで最も美しい所作をする女」であると彼は感じる。彼は那美から自分の画を描いてほしいと頼まれるが…'}
            ],       
    }
  },
    methods: {
    fadeInModal(num){
      this.showModal = !this.showModal,
      this.url =  this.modalImg[num],
      this.intro = this.modalData[num].intro,
      this.text = this.modalData[num].text
    },
    closeModal() {
      this.showModal = false
    },
    handleScroll(evt,el){
            let top = el.getBoundingClientRect().top;
            if(window.scrollY > top + window.pageYOffset -500){
                el.classList.add("isView");
            }
        }
  }

}
</script>


<style scoped lang="scss">
#result{
    height: 590px;
    background-color: gray;
    padding-top:20px;
    
    h2{
        color:#fff;
        margin-bottom: 70px;
    }


    .swiper-slide{
        width:200px;
        cursor: pointer;

        &:hover{
            transition:ease-out;
            border:1px solid #eeeeee;
        }
    }
}

.swiper-container{
  opacity:0;
  transform: translateY(50px);
  transition: opacity .8s ease-out, transform .6s ease-out;
}

.swiper-container.isView{
    opacity:1;
    transform: translateY(0px);
}

.modal-mask {
  position: fixed;
  z-index:1;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-wrapper{
      height:100%;
      padding-top:5%;
  }

  .modal-container {
    width: 70%;
    height: 85%;
    margin: 0 auto;
    padding: 80px 30px;
    background-color: white;
    text-align: center;
    overflow-y: auto;
    display: flex;
    justify-content: space-around;
  }

  .modal-img{
    width:30%;

  }

  .modal-text{
    width: 50%;
    text-align: left;

    h3{
    font-size: 24px;
    margin-bottom: 30px;
    margin-top: 21px;
    line-height: 1.5;
    }

    p{
      line-height: 2.5;
    }
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

</style>
