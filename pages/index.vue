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
import TheHeader from '~/components/common/TheHeader.vue'
import MainVisual from '~/components/mainvisual.vue'
import News from '~/components/news.vue'
import Service from '~/components/service.vue'
import Result from '~/components/result.vue'
import Price from '~/components/price.vue'
import Comment from '~/components/comment.vue'
import QandA from '~/components/q&a.vue'
import SNS from '~/components/sns.vue'
import Contact from '~/components/contact.vue'

export default {
  components: {
    TheHeader,
    MainVisual,
    News,
    Service,
    Result,
    Price,
    Comment,
    QandA,
    SNS,
    Contact
  }
}
</script>

