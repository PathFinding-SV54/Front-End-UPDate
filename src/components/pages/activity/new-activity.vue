<template>
  <pv-panel class="new-activity-panel" :header="$t('NewActivity')">
      <div class="p-field">
          <label for="activity-title" class="label">{{$t('Title')}}</label>
          <pv-input-text class="input" v-model="name" id="title" :placeholder="$t('Enter a title for the activity')"/>
      </div>

      <div class="p-field">
          <label for="activity-description" class="label">{{$t('Description')}}:</label>
          <pv-text-area class="input" v-model="description" id="activity-description" auto-resize rows="3" :placeholder="$t('What is the activity about? Write a description')" />
      </div>

      <div class="p-field">
          <label for="activity-type" class="label">{{$t('Type')}}</label>
          <pv-dropdown class="input" v-model="selectedDrop" :options="dropOptions" :placeholder="$t('Select the activity type')" />
      </div>

      <div class="button-container">
          <pv-button class="com-button" severity="primary" :label="$t('Create Activity')" />
          <pv-button class="com-button" severity="danger" outlined :label="$t('Cancel')" />
      </div>

  </pv-panel>

</template>

<script>

export default {
    name: "new-activity.vue",
    data() {
        return {
            selectedDrop: null,
            dropOptions: ["Sport","Cultural","Social"]
        }
    }
}
</script>

<!-- Styling -->
<style scoped>

.creator {
    align-items: center;
}
.new-activity-panel {
    max-width: 700px;
    margin: 0 auto;
}
.p-field {
    margin-bottom: 16px;
}
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-container .com-button {
    margin: 0 10px;
}
.input {
    width: 100%;
}
</style>