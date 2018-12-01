<template>
  <form @submit.prevent="submit">
    <section class="content">
      <h2>{{title}}</h2>
      <slot></slot>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
      <div class="error" v-if="error">{{error}}</div>
    </section>
    <template slot="actions">
      <router-link tag="button" :to="{name: 'tickets'}" class="secondary">Go back</router-link>
      <button type="submit" :disabled="!valid">Send ticket</button>
    </template>

    <transition name="fade">
      <Loading v-if="busy" class="overlay"></Loading>
    </transition>
  </form>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    operation: {
      type: Function,
      required: true
    },
    valid: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      error: null,
      busy: false
    };
  },
  methods: {
    async submit() {
      if (this.valid && !this.busy) {
        this.error = null;
        this.busy = true;
        try {
          await this.operation();
        } catch (e) {
          this.error = e.message;
        }
      }
      this.busy = false;
    }
  },
  async operation() {
    const result = await this.$fetch("tickets/new", {
      method: "POST",
      body: JSON.stringify({
        title: this.title,
        description: this.description
      })
    });
    this.title = this.description = "";
  }
};
</script>