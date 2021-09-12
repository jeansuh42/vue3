<template>
  <div>
    <LNB />
    <Header />
    <RNB />
    <Billboard />
    <GlobalBanner />
    <section
      :ref="setRefs"
      v-for="section in sections"
      :key="section">
      <div class="inner">
        <h1> {{ section }} </h1>
      </div>
    </section>
  </div>
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'

import GlobalBanner from '~/components/GlobalBanner'
import Header from '~/components/Header'
import Billboard from '~/components/Billboard'


export default {
  components: {
    LNB,
    RNB,
    Header,
    Billboard,
    GlobalBanner
  },
  data() {
    return {
      sections : [
        '타임딜', 
        '긴급공수',
        '11번가 베스트',
        '오늘의 찬스',
        '추천 기획전',
        '11번가 only',
        '해외 직구',
        'MD추천'
      ],
      sectionEls: []
    }
  },
  mounted() {
  //   console.log(this.sectionEls)
  // const sectionEls =  document.querySelectorAll('section')
  this.sectionEls.forEach( (sectionEl, index) => {
    if(index % 2) {
      //1이라고 하면 그냥 zello 
      this.$lazyLoad(sectionEl)
    }else {
      this.$lazyLoad(sectionEl, 'animate__flash')
    }
  })
  }, 
  methods: {
    setRefs(el) {
      this.sectionEls.push(el)
    }
  }
}
</script>


<style lang="scss">
  @import './scss/main';

  section { 
    border-bottom: 1px solid rgba(#000, .2);

    .inner { 
      height: 500px;
      padding: 30px 0; 
    }

    h1 {
      font-size: 25px;
      font-weight: 700;
    }


  }
</style>