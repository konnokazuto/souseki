<template>
    <div class="accordion">
        <div class="header" @click="toggle">
            Q お金はどれくらいかかりますか？
            <i class="fa fa-2x fa-angle-down header-icon" v-bind:class="{rotate:show}"></i>
        </div>
            <div class="body" v-show="show">
                <slot>
                <div class="inner-body">
                    お金は1000万円ほどかかります。
                    <br>
                    金は命より重い
                    
                </div>
                </slot>
            </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            show:false
        }
    },
    methods:{
        toggle:function(){
            this.show = !this.show
        },
        onEnter:function(el){
            el.style.height = el.scrollHeigth + "px"
        },
        onLeave:function(el){
            el.style.height= 0
        }
    }
}
</script>

<style lang="scss" scoped>

.accordion{
    max-width:400px;
    margin-bottom:20px;
    background-color:#ec5366;
    border-radius:6px;

    .header{
        height:40px;
        line-height:40px;
        padding:0 40px 0 8px;
        position:relative;
        color:#fff;
        cursor: pointer;

        .header-icon{
            position:absolute;
            top:5px;
            right:8px;
            transform: rotate(0deg);
            transition-duration: 0.3s;
        }
    }

    .header-icon.rotate{
        transform:rotate(180deg);
        transition-duration:0.3s;
    }

    .body{
        overflow: hidden;
        background-color:#fff;
        border:10px solid #ec5366;
        border-top:0px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        transition: 3s ease-out;

        .inner-body{
            padding:20px;
            overflow-wrap: break-word;
        }
    }


}

</style>

