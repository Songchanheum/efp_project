<template>
  <v-card height="100%">
    <v-toolbar color="grey" flat dark>
      <v-toolbar-title>최근 게시물</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
       <v-text-field
         hide-details
         label="Search"
         placeholder="Name"
         outlined
          dense
          clearable
            width="35"

       ></v-text-field>
      <v-btn icon>
        <v-icon>fas fa-search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
        >
          {{ item.header }}
        </v-subheader>

        <v-divider
          v-else-if="item.divider"
          :inset="item.inset"
          :key="index"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <img :src="item.avatar">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '테스트용 테스트용',
          subtitle: "<span class='text--primary'>Title Test1</span> &mdash; 지금은 테스트 중입니다."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: '테스트용 테스트용',
          subtitle: "<span class='text--primary'>Title Test1</span> &mdash; 지금은 테스트 중입니다."        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: '테스트용 테스트용',
          subtitle: "<span class='text--primary'>Title Test1</span> &mdash; 지금은 테스트 중입니다."        }
      ]
    }
  }
}
</script>
