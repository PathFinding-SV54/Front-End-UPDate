<template>
  <pv-panel class="new-activity-panel" :header="$t('NewActivity')">
      <div class="p-field">
          <label for="activity-name" class="label">{{$t('Name')}}</label>
          <pv-input-text class="input" v-model="name" id="name" :placeholder="$t('Enter a name for the activity')"/>
      </div>

      <div class="p-field">
          <label for="activity-description" class="label">{{$t('Description')}}:</label>
          <pv-text-area class="input" v-model="description" id="act-description" :placeholder="$t('Type a description for your activity')" />
      </div>

      <div class="p-field">
          <label for="activity-visibility" class="label">{{$t('Visibility')}}</label>
          <pv-dropdown class="input" v-model="selectedDrop" :options="dropOptions" :placeholder="$t('Select Visibility')" />
      </div>

      <div class="p-field">
          <div class="creator">
            <pv-avatar image="src/assets/pic-profile.jpeg" class="mr-2" size="xlarge" shape="circle" />
          </div>
      </div>

      <div class="button-container">
          <pv-button class="com-button" :label="$t('Create Activity')" />
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