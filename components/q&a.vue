<template>
    <div id="faq">
        <h2>Cotact</h2>
        <div class="contact">
            <div class="message-wrapper">
                <div class="balloon">
                    <div class="icon"></div>
                    <div class="message"><p>吾輩に何か用事であるか？</p></div>
                </div>
            </div>
            
           <!--  <GuessAnswer 
                @collect="onCollect"
                @incollect="onIncollect"
            ></GuessAnswer>
            <p v-show="$store.state.quiz.loading">あほ</p>
            <p>{{ message }}</p> -->
        </div>

    </div>
</template>
<script>
import GuessAnswer from '~/components/UI/GuessAnswer.vue'
export default {
    components:{
        GuessAnswer
    },
    data(){
        return{
             message: '簡単なクイズを出題するぞ　出身を当ててみよ',
             reactions:[
                '浅い　浅すぎる',
                'もっとあったじゃろ',
                '教養のなさが滲みでとる',
                'さては自頭　悪いな？',
                'うんこじゃ',
                'もうもうそろそろ飽きたぞ',
                'もうそろそろおやつの時間じゃのぉ',
                'ゆとりがありすぎるっていうのも困りもんだのぉ'
            ]   
             
        }
    },
    methods:{
        onCollect () {
            this.message = 'あたりじゃ じゃあ次はワシの死因を当ててみよ';
        },
        onIncollect () {
            this.message = this.reactions[Math.floor(Math.random() * this.reactions.length)]
        },
    
    }
}
</script>


<style lang="scss" scoped>
#faq{
   height:500px;

   h2{
       margin-bottom: 50px;
   }
}



.message-wrapper{
    width:400px;
    margin:0 auto;
   
}

.icon{
    background-image: url("../assets/images/souseki-face.jpg");
    background-size: cover;
    background-position: 0px -4px;
    height: 70px;
    width: 70px;
    display: inline-block;
    border-radius: 50%;
    
}

.contact{
    width:800px;
    height:400px;
    padding:20px;
    background-color: #fff;
    margin:0 auto;
     background-image:url("../assets/images/line.jpeg");
     background-size: cover
}

.balloon{
    display: flex;
}

.message{
  position: relative;
  display: inline-block;
  margin-left:40px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #fff;
  border-radius: 15px;
}

.message:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 15px solid #fff;
}

.message p{
    margin:0;
    padding:0;
}
</style>

