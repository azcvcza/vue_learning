<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <SmartForm class="form" :title="title" :operation="operation" :valid="valid">
      <FormInput name="username" v-model="username" placeholder="Username"/>
      <FormInput name="password" type="password" v-model="password" placeholder="Password"/>
      <template v-if="mode === 'signup'">
        <FormInput
          name="verify-password"
          type="password"
          v-model="password2"
          placeholder="Retype Password"
          :invalid="retypePasswordError"
        />
        <FormInput name="email" type="email" v-model="email" placeholder="Email"/>
      </template>

      <template slot="actions">
        <template v-if="mode === 'login'">
          <button type="button" class="secondary" @click="mode = 'signup'">Sign up</button>
          <button type="submit" :disabled="!valid">Login</button>
        </template>
        <template v-else-if="mode === 'signup'">
          <button type="button" class="secondary" @click="mode = 'login'">Back to login</button>
          <button type="submit" :disabled="!valid">Create account</button>
        </template>
      </template>
    </SmartForm>
  </main>
</template>

<script>
export default {
  data() {
    return {
      mode: "login",
      username: "",
      password: "",
      password2: "",
      email: ""
    };
  },

  computed: {
    title() {
      switch (this.mode) {
        case "login":
          return "Login";
        case "signup":
          return "Create a new account";
      }
    },

    retypePasswordError() {
      console.log(
        "login.vue,retypePassword,p,p2,return",
        this.password,
        this.password2,
        !!this.password2 && this.password !== this.password2
      );
      return !!this.password2 && this.password !== this.password2;
    },

    signupValid() {
      console.log(
        "login.vue,signupValid,p2,email,return",
        this.password2,
        this.email,
        !!this.password2 && !!this.email && !this.retypePasswordError
      );
      return !!this.password2 && !!this.email && !this.retypePasswordError;
    },

    valid() {
      console.log(
        "login.vue,valid,username,password,return",
        this.username,
        this.password,
        !!this.username &&
          !!this.password &&
          (this.mode !== "signup" || this.signupValid)
      );
      return (
        !!this.username &&
        !!this.password &&
        (this.mode !== "signup" || this.signupValid)
      );
    }
  },

  methods: {
    async operation() {
      await this[this.mode]();
    },

    async login() {
      console.log("in login,", this.$state);
      this.$state.user = await this.$fetch("login", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });
      this.$router.replace(this.$route.params.wantedRoute || { name: "home" });

      
    },

    async signup() {
      await this.$fetch("signup", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email
        })
      });
      console.log("signup finished");
      this.mode = "login";
    }
  }
};
</script>

<style lang="stylus" scoped>
.form {
  >>> .content {
    max-width: 400px;
  }
}
</style>
