<template>
  <div>
    <div class="text-center">
      <h2>DEMO</h2>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="row settings-row">
          <div class="col-sm-6">
            <button
              class="btn btn--inverse"
              type="button"
              @click="addParagraphToContent">Add paragraph</button>
            <span> length: {{ content.length }} </span>
          </div>
          <div class="col-sm-6">
            <button
              class="btn btn--inverse"
              type="button"
              @click="removeParagraphFromContent">Remove paragraph</button>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 settings-row">
            <label for="height"> Container height </label>
            <input
              id="height"
              v-model="height"
              type="text"
              name="height">
          </div>
          <div class="col-xs-12 settings-row">
            <label for="width"> Container width </label>
            <input
              id="width"
              v-model="width"
              type="text"
              name="width">
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <scroll
          ref="scroll"
          :style="styles"
          class="scroll-container">
          <p
            v-for="(paragraph, index) in content"
            :key="index"
            v-html="paragraph"/>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar as scroll } from 'vue2-perfect-scrollbar'
export default {
  components: {
    scroll
  },
  data () {
    return {
      height: '200px',
      width: '100%',
      events: [
        'ps-scroll-y',
        'ps-scroll-x',
        'ps-scroll-up',
        'ps-scroll-down',
        'ps-scroll-left',
        'ps-scroll-right',
        'ps-y-reach-start',
        'ps-y-reach-end',
        'ps-x-reach-start',
        'ps-x-reach-end'
      ],
      content: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      ]
    }
  },
  computed: {
    styles () {
      return {
        height: `${this.height}`,
        width: `${this.width}`
      }
    }
  },
  methods: {
    addParagraphToContent () {
      return this.content.push(this.content[0])
    },
    removeParagraphFromContent () {
      return this.content.length > 1 ? this.content.pop() : false
    }
  }
}
</script>

<style>
.scroll-container {
  height: 200px;
}
.settings-row {
  margin-bottom: 20px;
}
</style>
