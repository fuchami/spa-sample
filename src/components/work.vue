
<template>
  <div id='app'>
    <v-app id='inspire' light>
      <v-content>
        <v-container>
          <v-layout row wrap >
            <v-flex md8 offset-md2>
              <div v-for="work in works" :key="work.title">
                <v-card class="mt-4 mb-4 pa-2" hover>
                  <v-card-media class="white--text" width='50%' v-bind:src="work.img_url">
                    <v-container fill-height fluid>
                      <v-layout>
                        <v-flex xs12 align-end d-flex>
                          <span class="headiline">{{ work.title }}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>

                  <v-card-text>
                    {{ work.content }}
                  </v-card-text>

                  <v-card-actions>
                    <v-btn icon class="light-blue--text">
                      <v-icon medium>fa-twitter</v-icon>
                    </v-btn>

                  <v-spacer></v-spacer>
                  <v-btn flat class="">
                    <a v-bind:href="work.github_url" target='_blank'>github</a>
                  </v-btn>

                  </v-card-actions>
                </v-card>

              </div>
            </v-flex>

          </v-layout>
        </v-container>
      </v-content>

    </v-app>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        works: [
          {
            title: "denoise pix2pix",
            content: '生成モデルを用いて画像に付与しているノイズ(ごま塩ノイズ)を除去を行いました.モデルにはGANと呼ばれる生成モデルのひとつであるpix2pixを使用しています．',
            img_url: '/src/assets/images/denoise-pix2pix.png',
            github_url: 'https://github.com/fuchami/denoise_pix2pix'
          },
          {
            title: "pokemon GAN",
            content:'DCGANを用いてポケモンのドット絵を生成するモデルを作りました',
            img_url:'',
            github_url:'https:/github.com/fuchami/pokeGAN'
          },
          {
            title: "西野カナ歌詞生成bot",
            content: 'TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．現在停止中',
            img_url: '/src/assets/images/kana.png'
          }
        ]
      }
    }

  }
</script>
