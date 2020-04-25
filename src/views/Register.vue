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
                <h1 class="h4 text-gray-900 mb-4">Create an Account!({{type}})</h1>
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
                  <div class="col-sm-6">
                    <select
                      class="form-control"
                      v-model="type"
                      required>
                      <option value="subscriber">Subscriber</option>
                      <option value="sender">Message sender</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      required
                      type="text"
                      class="form-control form-control-user"
                      v-model="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      required
                      type="text"
                      class="form-control form-control-user"
                      v-model="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      required
                      type="email"
                      class="form-control form-control-user"
                      v-model="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      required
                      type="tel"
                      class="form-control form-control-user"
                      v-model="phone"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      required
                      type="password"
                      class="form-control form-control-user"
                      v-model.trim="password"
                      autocomplete="true"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      required
                      type="password"
                      class="form-control form-control-user"
                      v-model.trim="repeatPassword"
                      autocomplete="true"
                      placeholder="Repeat Password"
                    />
                  </div>
                </div>
                <p
                  class="text-center alert-danger"
                  v-if="password != repeatPassword"
                >Passwords do not match..!!</p>
                <p class="text-center alert-danger">{{errorMsg}}</p>
                <button
                  v-if="errored"
                  class="btn btn-primary btn-user btn-block"
                  type="button"
                  @click="validateInput('submitBtn')"
                >{{btnMsg}}</button>
                <button
                  v-else
                  class="btn btn-primary btn-user btn-block disabled"
                  disabled
                  title="Please wait"
                >{{btnMsg}}</button>
              </form>
              <div v-else class="user">
                <div class="alert alert-success text-center">
                  <strong>Account successfully created..!!</strong><br> 
                  <router-link to="/login">
                  <!-- <i class="fa fa-fw fa-cog"></i-->
                  PROCEED TO LOGIN
                </router-link>
                  </div>
              </div>

              <hr />
              <div class="text-center">
                <a class="small white-color" href="forgot-password/">Forgot Password?</a>
              </div>
              <div class="text-center">
                <router-link class="small white-color" to="/login">
                  <!-- <i class="fa fa-fw fa-cog"></i-->
                  Already have an account? Login!
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
// import SideBar from './includes/SideBar.vue'

export default {
  name: "Register",
  data() {
    return {
      errored: true,
      type: "subscriber",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      referedBy: "",
      password: "",
      repeatPassword: "",
      errorMsg: "",
      btnMsg: "Register Account",
      success: false
    };
  },
  methods: {
    validateInput: function() {
      //check if any input is empty
      let inputCheck =
        !this.type ||
        !this.username ||
        !this.firstName ||
        !this.lastName ||
        !this.email ||
        !this.phone ||
        !this.password ||
        !this.repeatPassword
          ? true
          : false;

      this.errored = inputCheck
      if (this.errored) {
        this.errorMsg =
          "One or more of your input is not valid. Kindly check and correct where necessary";
      } else {
        this.btnMsg = "Processing ....";
        this.errorMsg = "";
        this.register();
      }
    },
    register: async function(){
      //register the user
      if(this.password !== this.repeatPassword){
        this.errorMsg =
          "One or more of your input is not valid. Kindly check and correct where necessary";
        this.errored = true;
        this.btnMsg = 'Register Account';
      }else{
        // bundle input in one cariable
        const data = {
              type: this.type,
              username: this.username,
              name: `${this.firstName} ${this.lastName}`,
              email: this.email,
              phone: this.phone,
              referedBy: this.referedBy,
              password: this.password
        }
        const registerUsr = await e.registerUser(data);
        this.success = !registerUsr.error;
        // console.log(registerUsr);
        this.errored = registerUsr.error;
        this.errorMsg = registerUsr.message;
        this.btnMsg = (registerUsr.error)? 'Register Account' : 'CLICK ON LOGIN TO PROCEED'
      }
    }
  }
};
</script>

<style scoped>
.white-color {
  color: #ffffff;
}
</style>