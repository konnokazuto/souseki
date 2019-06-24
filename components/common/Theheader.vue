<template>
    <header>
            <ul>
                <li class="list"><nuxt-link v-scroll-to="'#news'" to>News</nuxt-link></li>
                <li @click="clickAlert" class="list"><nuxt-link v-scroll-to="'#service'"
      to>Service</nuxt-link></li>
                <li @click="clickAlert" class="list"><nuxt-link v-scroll-to="'#result'"
      to>Result</nuxt-link></li>
                <li @click="clickAlert" class="list"><nuxt-link v-scroll-to="'#price'"
      to>Price</nuxt-link></li>
                <li @click="clickAlert" class="list"><nuxt-link v-scroll-to="'#comment'"
      to>Comments</nuxt-link></li>
                <li @click="clickAlert" class="list"><nuxt-link v-scroll-to="'#faq'"
      to>FAQs</nuxt-link></li>
                <li @click="clickAlert" class="list"><nuxt-link v-scroll-to="'#contact'"
      to>Contact</nuxt-link></li>
            </ul>
    </header>
 </template>
 <script>
 export default {
     methods: {
    scroll() {
      cancelScroll = this.$scrollTo(element, duration, options)
    }
  }
 }
 </script>
 
 <style scoped lang="scss">
header{

    position:absolute;
    right:0;

    a {
        position: relative;
        display: inline-block;
        text-decoration: none;
    }
    a::after {
        position: absolute;
        bottom: -8px;
        left: 0;
        content: '';
        width: 100%;
        height: 1px;
        background: #333;
        opacity: 0;
        visibility: hidden;
        transition: .3s;
    }
    a:hover::after {
        bottom: -4px;
        opacity: 1;
        visibility: visible;
    }


    ul{
        width:100px;
        padding:20px;

        li{
            margin:0 10px;
        }
    }
}
 
 </style>
 
 
 
 