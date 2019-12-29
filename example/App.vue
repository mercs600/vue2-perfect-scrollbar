<template>
  <div>
    <button @click.prevent="changeOptions">Change options</button>
    <button @click.prevent="watcher = !watcher">Toggle watch on scrollbar</button>
    <scroll
      ref="scroll"
      :options="options"
      :watch-options="watcher"
      class="container"
    >
      <p> {{ content }} </p>
      <p> {{ content }} </p>
      <p> {{ content }} </p>
      <p> {{ content }} </p>
      <p> {{ content }} </p>
      <p> {{ content }} </p>
      <p> {{ content }} </p>
      <p> {{ content }} </p>
      <p> {{ content }} </p>
    </scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      options: {
        minScrollbarLength: 100
      },
      watcher: true
    }
  },
  methods: {
    changeOptions () {
      this.options.minScrollbarLength = this.options.minScrollbarLength + 50
    }
  }
}
</script>
<style>
.container {
  position: relative;
  width: 300px;
  max-height: 400px;
  overflow: hidden;
}
</style>
