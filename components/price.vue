<template>
    <div id="price">
        <h2>Price</h2>
        <table v-scroll="handleScroll">
            <tr>
                <td class="bg-black border-white">row</td>
                <td class="border-black">Price ¥10000</td>
            </tr>
             <tr>
                <td class="bg-black border-white">row</td>
                <td class="border-black">Price ¥10000</td>
            </tr>
             <tr>
                <td class="bg-black">row</td>
                <td>Price ¥10000</td>
            </tr>
        </table>
    </div>
</template>
<script>
import ScrollAnimation from './UI/ScrollAnimation.vue';

export default {
    mixins:[ScrollAnimation]
}
</script>

<style lang="scss" scoped>
#price{
    padding-top:180px;
    height: 500px;

    h2{
        text-align: center;
        margin-bottom: 30px;
    } 

    table{
        opacity: 0;
        transform: translateY(50px);
        transition: opacity .8s ease-out, transform .6s ease-out;
        margin:0 auto;
        width:80%;
        font-size:20px;
        border:1px solid #3E3E3E;
    }

    table.isView{
        opacity:1;
        transform: translateY(0px);
        

    }

    tr{
        padding:20px;
    }

    td{
        padding: 20px 30px;
    }

    .bg-black{
        text-align: center;
        background-color: #3E3E3E;
        color:#fff;
    }

    .border-white{
        border-bottom: 1px solid #fff;
    }

    .border-black{
        border-bottom: 1px solid #3E3E3E;
    }
}
</style>


