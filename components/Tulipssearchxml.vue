<template>
  <div>
    <header class="hero is-primary">
      <div class="hero-body">
        <h1 class="title">
          「Tulips Search」を検索バーへ追加する
        </h1>
      </div>
    </header>
    <div class="m-2 content">
      <p>
        「<a href="https://www.tulips.tsukuba.ac.jp/search/">Tulips Search</a>」は筑波大学附属図書館が提供する、所蔵する書籍についてのOPACや、筑波大学が契約する論文データベースなどを一括検索するツールです。
      </p>
      <p>
        この便利なツールをより簡易に使用するために、<a href="https://www.opensearch.org/">OpenSearchプロトコル</a>に沿ったXMLを作成しました。ダウンロードは可能なようにしてありますので、<nuxt-link to="/sharefiles/R2S_OpenSearch_tulipssearch.xml" rel="nofollow">
          こちら
        </nuxt-link>からご活用ください。
      </p>
    </div>
  </div>
</template>
