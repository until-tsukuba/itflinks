<template>
  <div>
    <link rel="search" type="application/opensearchdescription+xml" title="Add Tulips Search" href="/sharefiles/R2S_OpenSearch_tulipssearch.xml">
    <Navbar />
    <Tulipssearchxml />
    <foot />
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      title: '「Tulips Search」を検索バーへ追加する'
    }
  },
  head () {
    return {
      title: '「Tulips Search」を検索バーへ追加する'
    }
  }
}
</script>

<style>

</style>
