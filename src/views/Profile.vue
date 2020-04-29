<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <SideBar />
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Profile</h1>
            <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> -->
          </div>

          <!-- Content Row -->

          <div class="row">
            <!-- Area Chart -->
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">User Information</h6>
                  <!-- {{userdata}} -->
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <!-- <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div>-->
                  <b>Username:</b>
                  <h6>{{userdata.message.usernmae}}</h6>
                  <b>Name:</b>
                  <h6>{{userdata.message.name}}</h6>
                  <b>Email:</b>
                  <h6>{{userdata.message.email}}</h6>
                  <b>Phone:</b>
                  <h6>{{userdata.message.phone}}</h6>
                  <b>Account type:</b>
                  <h6>{{userdata.message.type}}
                    <button style="float:right" class="btn btn-primary" v-if="userdata.message.type === 'subscriber'">Change to sender account</button>
                  </h6>
                </div>
              </div>
            </div>

            <!-- Pie Chart -->
            <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">Change password</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <form class="user">
                    <div class="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        autocomplete="true"
                        required
                        v-model.trim="password"
                        class="form-control"
                        placeholder="****"
                      />
                    </div>
                    <div class="form-group">
                      <label>Confirm password</label>
                      <input
                        type="password"
                        autocomplete="true"
                        required
                        v-model.trim="repeatPassword"
                        class="form-control"
                        placeholder="****"
                      />
                    </div>
                    <div
                      v-if="password != repeatPassword"
                      class="alert alert-danger text-center"
                    >Passwords do not match</div>
                    <div
                      v-if="errorMsg"
                      class="alert alert-danger text-center"
                    >{{errorMsg}}</div>
                    <button
                      type="button"
                      @click="validateInput('submitBtn')"
                      class="btn btn-primary btn-user btn-block"
                      v-if="erroredPsw"
                    >{{btnMsg}}</button>
                    <button
                      type="button"
                      class="btn btn-primary btn-user btn-block disabled"
                      v-else
                      disabled="true"
                    >{{btnMsg}}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">Links/codes</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <b>Refferal:</b>
                  <h6>{{refLink}}</h6>
                  <div>
                    <b>Code:</b>
                    <h6>{{userCode}} <sub>You may share to senders you want to add you to their topics</sub></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>


<script>
// @ is an alias to /src
import Footer from "./includes/Footer.vue";
import SideBar from "./includes/SideBar.vue";
import { login } from "../controller/mixins";
import e from "../controller/easyAlert";
import env from "../config";

export default {
  name: "Profile",
  data() {
    return {
      password: "",
      refLink: '',
      userCode: '',
      repeatPassword: "",
      success: false,
      erroredPsw: true,
      btnMsg: "Change password",
      errorMsg: ''
    };
  },
  components: {
    Footer,
    SideBar
  },
  mixins: [login],
  methods: {
    validateInput: function() {
      //check if any input is empty
      // console.log(this.userdata)
      let inputCheck = !this.password || !this.repeatPassword ? true : false;

      this.erroredPsw = inputCheck;
      // console.log(this.erroredPsw)
      if (this.erroredPsw) {
        this.errorMsg =
          "Invalid password provided";
      } else {
        this.btnMsg = "Processing ....";
        this.errorMsg = "";
        this.changePassword();
      }
    },
    changePassword: async function() {
      //Add topic to DB
      if(this.password != this.repeatPassword){
         this.erroredPsw = true;
         this.errorMsg = 'Password do not match';
        return
      }
      const data = {
        action: 'psw',
        user: this.userdata.message.usernmae,
        password: this.password,
        repeatPassword: this.repeatPassword
      };
      const changePsw = await e.changePsw(data);
      this.success = !changePsw.error;
      // console.log(changePsw);
      this.erroredPsw = changePsw.error;
      this.errorMsg = changePsw.message;
      changePsw.error ? "" : location.reload();
      this.btnMsg = "Change Password";
    }
  },
  created: function() {
    this.userData().then(re => {
      this.userdata = re;
      this.refLink = `${env.API_URL}/register?${re.message.id}`;
      this.userCode = `${re.message.code}`;
    });
    // console.log(user);
  }
};
</script>