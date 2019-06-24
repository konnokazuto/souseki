<template>
    <section>
        <div>
        <input type="text" v-model="userGuess" @keyup.enter="guess">
        </div>
    </section>
</template>
<script>
export default { 
    data(){
        return{
           answer:'東京',
           userGuess: '',
           
        };
    },
    methods:{
        guess() {
            if (this.answer === this.userGuess) {
                this.$store.commit('quiz/setLoading',true);
                this.$emit("collect");
               
                return;
            }else if(this.answer != this.userGuess){
                this.$emit("incollect");
               
               
                return;

            }
        }
    }
}
</script>
