<template>
  <div>
    <LNB />
    <Header />
    <RNB />
    <Billboard />
    <GlobalBanner />
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
  }
}
</script>


<style lang="scss">
  @import './scss/main';
</style>