<template>
    <div id="faq">
        <h2>Q&A</h2>
        <div class="questions">
            <GuessAnswer 
                @collect="onCollect"
                @incollect="onIncollect"
            ></GuessAnswer>
            <p v-show="$store.state.quiz.loading">あほ</p>
            <p>{{ message }}</p>
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
}
</style>

