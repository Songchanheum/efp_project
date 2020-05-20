<template>
  <div
    class="px-3"
    align="center"
    justify="center"
  >
    <v-card
      max-width="500"
    >
      <v-toolbar
        dark
        flat
      >
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="ID"
            name="ID"
            prepend-icon="fas fa-user"
            type="text"
            @keyup.enter="login"
          />

          <v-text-field
            v-model="password"
            id="password"
            label="Password"
            name="password"
            prepend-icon="fas fa-lock"
            type="password"
            @keyup.enter="login"
          >
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="black" dark
          @click="login"
        >LOGIN</v-btn>
        <v-btn dark color="purple darken-2"
          @click="$router.push('/create')"
        >SINGUP</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'LoginTable',
  data() {
    return {
      dense: false,
      fixedHeader: false,
      height: 150,
      id:"",
      password: "",
    }
  },
  created() {
    this.setReturnPath();
  },
  methods: {
    login() {
      localStorage.setItem('token','true')
      this.$store.commit('getToken', '')
      this.redirect()
    },
    redirect () {
      const returnPath = decodeURIComponent(localStorage.getItem('returnPath'))
      console.log(returnPath)
      if (returnPath) {
        this.$router.push({
          path: returnPath
        })
      } else {
        this.$router.push({
          path: '/'
        })
      }
    },
    setReturnPath () {
      const search = window.location.href
      const tokens = search.replace(/^\?/, '').split('&')
      const pair = tokens[0].split('=')
      const returnPath = pair[1]
      console.log(returnPath)
      if (!returnPath || returnPath.indexOf('undefined') !== -1) {
        localStorage.setItem('returnPath', '/')
      } else {
        localStorage.setItem('returnPath', returnPath)
      }
    }
  }
}
</script>
