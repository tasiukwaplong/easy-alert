<template>
  <!-- <div class="bg-gradient-primary"> -->
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5 bg-gradient-primary">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image">
            <!-- <img src="<%BASE_URL%>img/details.jpg" width="100%" /> -->
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Login to your dashboard</h1>
                <p v-if="getSession()"><router-link class="white-color" to="/dashboard">
                  You seem to be logged in already, click to continue to your dashboard
                </router-link></p>
                <!-- <p  class="white-color"></p-->
              </div>
              <form  v-if="!success" class="user">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      required
                      type="text"
                      id="username"
                      class="form-control form-control-user"
                      v-model.trim="username"
                      placeholder="username"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6">
                    <input
                      required
                      type="password"
                      class="form-control form-control-user"
                      v-model="password"
                      autocomplete="true"
                      placeholder="Repeat Password"
                    />
                  </div>
                </div>
                <p class="text-center alert-danger"
                  v-if="errored">{{errorMsg}}</p>
                <button v-if="errored" class="btn btn-primary btn-user btn-block" type="button" @click="validateInput('submitBtn')"
                >{{btnMsg}}</button>
                <button v-else class="btn btn-primary btn-user btn-block disabled" disabled title="Please wait"
                >{{btnMsg}}</button>
              </form>
              <div v-else class="user">
                <div class="alert alert-success text-center">
                  <router-link to="/dashboard">
                  <!-- <i class="fa fa-fw fa-cog"></i-->
                  ALREADY LOGGED IN, PROCEED TO DASHBOARD
                </router-link>
                  </div>
              </div>

              <hr />
              <div class="text-center">
                <a class="small white-color" href="forgot-password/">Forgot Password?</a>
              </div>
              <div class="text-center">
                <router-link class="small white-color" to="/register">
                  <!-- <i class="fa fa-fw fa-cog"></i-->
                  Don't have an account yet? Register!
                </router-link>
                <!-- <a class="small" href="login/">Already have an account? Login!</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>


<script>
// @ is an alias to /src
import e from '../controller/easyAlert'
import env from '../config';
import {getSession} from '../controller/mixins';

export default {
  name: "Login",
  data() {
    return {
      errored: true,
      username: "",
      password: "",
      errorMsg: "",
      btnMsg: "Login",
      success: false
    };
  },
  mixins: [getSession],
  methods: {
    validateInput: function() {
      //check if any input is empty
      let inputCheck = !this.username || !this.password ? true : false;
      this.errored = inputCheck
      if (this.errored) {
        this.errorMsg =
          "Please provide a valid password to be able to login";
      } else {
        this.btnMsg = "Processing ....";
        this.errorMsg = "";
        this.login();
      }
    },
    login: async function(){
      //register the user
      if(this.password.legth <= 0){
        this.errorMsg =
          "Please provide a valid password to be able to login";
        this.errored = true;
        this.btnMsg = 'Login';
      }else{
        // bundle input in one cariable
        const data = {
              username: this.username,
              password: this.password
        }
        const loginUsr = await e.obtainSession(data);
        // console.log(loginUsr)
        this.success = !loginUsr.error;
        // console.log(loginUsr);
        this.errored = loginUsr.error;
        this.errorMsg = loginUsr.message;
        this.btnMsg = (loginUsr.error)? 'Login' : 'CLICK TO CONTINUE TO DASH';
        (!loginUsr.error) ? this.createSessionCookie(loginUsr.message) : '';
        // window.location = '/dashboard'
      }
    },
    createSessionCookie: function(c){
      const d = new Date();
      d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = `${env.USER_LOGIN}${c}; ${expires};path=/`;
      window.location = '/dashboard';//redirect to dashboard
    }
  },
};
</script>

<style scoped>
.white-color {
  color: #ffffff;
}
</style>