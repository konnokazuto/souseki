<template>
<div>
  <MainVisual/>
  <News/>
  <Result/>
  <Service/>
  <Price/>
  <SNS/>
  <Contact/>
  <QandA/>
</div>
</template>

<script>
import MainVisual from '~/components/mainvisual.vue'
import News from '~/components/news.vue'
import Service from '~/components/service.vue'
import Result from '~/components/result.vue'
import Price from '~/components/price.vue'
import Comment from '~/components/comment.vue'
import SNS from '~/components/sns.vue'
import QandA from '~/components/q&a.vue'


export default {
  components: {
    MainVisual,
    News,
    Service,
    Result,
    Price,
    Comment,
    SNS,
    QandA,
  }
}
</script>

