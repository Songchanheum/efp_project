<template>
  <v-app class="overflow-hidden">
    <v-system-bar color="primary" lights-out></v-system-bar>
    <v-app-bar
      app
      dark
      shrink-on-scroll
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer; mini = false" v-show="!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{siteTitle}} {{$t('message')}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
          <v-list>
            <v-list-item  @click="changeLocale">
              <v-list-item-title>{{$i18n.locale === 'en' ? '한글' : 'English'}}</v-list-item-title>
            </v-list-item>
            <template v-if="!$store.state.token">
              <v-list-item  @click="$router.push('/sign')">
                <v-list-item-title>로그인</v-list-item-title>
              </v-list-item>
              <v-list-item  @click="$router.push('/create')">
                <v-list-item-title>회원가입</v-list-item-title>
              </v-list-item>
            </template>
            <template v-else>
              <v-list-item  @click="$router.push('/user')">
                <v-list-item-title>사용자 정보</v-list-item-title>
              </v-list-item>
              <v-list-item  @click="signOut">
                <v-list-item-title>로그아웃</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      enable-resize-watcher
      fixed
      app
      dark
    >
    <v-list class="mt-3" align="center" height="120" v-if="!$store.state.token">
      <h1> 로그인 하세요 </h1>
      <v-btn hide-details
        class="mt-3 mx-3"
        @click="$router.push('/sign')"
      > LOGIN
      </v-btn>
      <v-btn hide-details
      color="primary"
        class="mt-3 mx-3"
        @click="$router.push('/create')"
      > SIGNUP
      </v-btn>
    </v-list>
    <v-list class="pa-0" v-else>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <img :src="$store.state.user.img">
        </v-list-item-avatar>
        <v-list-item-title>
        </v-list-item-title>
        <v-list-item-action :right="true">
          <v-btn icon @click.native.stop="mini = !mini">
            <v-icon>fas fa-angle-left</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item link v-if="!mini" @click="$router.push('/user')">
        <v-list-item-content>
          <v-list-item-title class="title">Song Chanheum</v-list-item-title>
          <v-list-item-subtitle>chsong@thecnp.co.kr</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
      <v-list :shaped="true"
        dense
        link
      >
        <v-list-group
          v-for="(item, i) in items"
          v-model="item.act"
          :prepend-icon="item.icon"
          :key="i"
          no-action
        >
          <v-list-item slot="activator">
            <!-- <v-list-item-title>{{item.title}}</v-list-item-title> -->
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="subItem in item.subItems"
            :key="subItem.title"
            :to="subItem.to"
          >
            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <span>{{siteCopyright}} &nbsp;</span>
    </v-footer>
    <v-snackbar
      v-model="$store.state.sb.act"
      :color="$store.state.sb.color"
    >
      {{ $store.state.sb.msg }}
      <v-btn
        flat
        @click="$store.commit('pop', { act: false })"
      >
        닫기
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      mini: false,
      siteTitle: '기다리는중',
      siteCopyright: '기다리는중',
      siteDark: false,
      items: [
        {
          icon: 'fas fa-columns',
          title: 'Dashboard', // '현황',
          act: true,
          subItems: [
            {
              title: 'Today', // '오늘',
              to: {
                path: '/'
              }
            }
          ]
        },
        {
          icon: 'fas fa-comment-alt',
          title: 'Chat',
          subItems: [
            {
              icon: 'home',
              title: '아무나',
              to: {
                path: '/chat/login'
              }
            }
          ]
        },
        {
          icon: 'fas fa-layer-group',
          title: 'Level Test',
          subItems: [
            {
              title: '손님용 페이지',
              to: {
                path: '/test/lv3'
              }
            },
            {
              title: '일반유저용 페이지',
              to: {
                path: '/test/lv2'
              }
            },
            {
              title: '슈퍼유저용 페이지',
              to: {
                path: '/test/lv1'
              }
            },
            {
              title: '관리자용 페이지',
              to: {
                path: '/test/lv0'
              }
            }
          ]
        },
        {
          icon: 'fas fa-tools',
          title: 'Setting',
          subItems: [
            {
              title: '사용자관리',
              to: {
                path: '/manage/users'
              }
            },
            {
              title: '페이지관리',
              to: {
                path: '/manage/pages'
              }
            },
            {
              title: '사이트관리',
              to: {
                path: '/manage/sites'
              }
            },
            {
              title: '게시판관리',
              to: {
                path: '/manage/boards'
              }
            }
          ]
        }
        // ,
        // {
        //   icon: 'home',
        //   title: '홈aaa',
        //   to: {
        //     path: '/home'
        //   }
        // },
        // {
        //   icon: 'face',
        //   title: 'header',
        //   to: {
        //     path: '/header'
        //   }
        // }
      ],
      title: this.$apiRootPath
    }
  },
  mounted () {
    this.getSite()
    this.getBoards()
  },
  methods: {
    signOut () {
      // localStorage.removeItem('token')
      this.$store.commit('delToken')
      this.$router.push('/')
    },
    getSite () {
      this.siteTitle = "반응형 웹 페이지 제작 테스트"
      this.siteCopyright = " test copyright footer"
      // this.$axios.get('/site')
      //   .then(r => {
      //     this.siteTitle = r.data.d.title
      //     this.siteCopyright = r.data.d.copyright
      //     this.siteDark = r.data.d.dark
      //   })
      //   .catch(e => {
      //     if (!e.response) this.$store.commit('pop', { msg: e.message, color: 'warning' })
      //   })
    },
    getBoards () {
      // this.$axios.get('/board/list')
      //   .then(({ data }) => {
      //     data.ds.forEach(v => {
      //       this.items[1].subItems.push({
      //         title: v.title,
      //         to: {
      //           path: `/board/${v.name}`
      //         }
      //       })
      //     })
      //   })
      //   .catch(e => {
      //     if (!e.response) this.$store.commit('pop', { msg: e.message, color: 'warning' })
      //   })
    },
    changeLocale () {
      if (this.$i18n.locale === 'en') this.$i18n.locale = 'ko'
      else this.$i18n.locale = 'en'
      this.items[0].title = this.$t('dashboard')
      this.items[0].subItems[0].title = this.$t('today')
    }
  }
}
</script>
<style>
/* .v-datatable__actions__range-controls {
  display: none;
} */
</style>
