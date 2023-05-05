<template>
  <pv-panel class="new-activity-panel" :header="$t('NewActivity')">
      <div class="p-field">
          <label for="activity-name" class="label">{{$t('Name')}}</label>
          <pv-input-text class="input" v-model="name" id="name" :placeholder="$t('Enter a name for the activity')"
      </div>
  </pv-panel>

</template>

<script>
import {ref} from "vue";

const items = ref([
    {
        label: 'Category',
        icon: 'pi-tags',
        items: [
            {
                label: "Deporte",
                icon: ""
            },
            {
                label: "Fiesta",
                icon: ""
            },
            {
                label: "Evento",
                icon: ""
            }
        ]
    },
    {
        label: "Usuarios",
        icon: "pi-users",
        items: [
            {
                label: "",
                icon: ""
            }
        ]
    }
])
export default {
    name: "new-activity.vue",
    data() {
        return {
            dropOptions: ["Sport","Cultural"]
        }
    }
}
</script>




<!-- Styling -->
<style scoped>

</style>