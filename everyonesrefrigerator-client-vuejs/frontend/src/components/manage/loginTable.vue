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
          />

          <v-text-field
            v-model="password"
            id="password"
            label="Password"
            name="password"
            prepend-icon="fas fa-lock"
            type="password"
          >
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="black" dark>Login</v-btn>
        <v-btn color="primary"
          @click="$router.push('/create')"
        >Create</v-btn>
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
  computed: {
    progress () {
      return Math.min(100, this.password.length * 10)
    },
    color () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    },
  },
}
</script>
