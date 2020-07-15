<template>
  <v-app>
    <v-main>
      <div>
        <v-simple-table
                :dense="dense"
                :fixed-header="fixedHeader"
                :height="'100%'"
        >
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-row>
          <v-col cols="12" md="6">
          </v-col>
          <v-col cols="6" md="3">
            <v-switch v-model="dense" label="Toggle dense" class="mx-4"></v-switch>
          </v-col>
          <v-col cols="6" md="3">
            <v-switch v-model="fixedHeader" label="Toggle fixed-header" class="mx-4"></v-switch>
          </v-col>
        </v-row>
      </div>
<!--      <v-btn small color="primary">Primary</v-btn>-->
<!--      <HelloWorld/>-->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
      },
      {
        name: 'Eclair',
        calories: 262,
      },
      {
        name: 'Cupcake',
        calories: 305,
      },
      {
        name: 'Gingerbread',
        calories: 356,
      },
      {
        name: 'Jelly bean',
        calories: 375,
      },
      {
        name: 'Lollipop',
        calories: 392,
      },
      {
        name: 'Honeycomb',
        calories: 408,
      },
      {
        name: 'Donut',
        calories: 452,
      },
      {
        name: 'KitKat',
        calories: 518,
      },
    ],
  }),
});
</script>
