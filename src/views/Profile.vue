<template>
  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
        <SideBar/>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        </nav>
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
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">User Information</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <!-- <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div> -->
                  Name:
                  <h6>Tasiu Kwaplong</h6>
                  Email:
                  <h6>tasiukwaplong@gmail.com(<span style="color:green">Confirmed</span>)</h6>  
                  Phone:
                  <h6>+234 9031 514 346</h6>  
                </div>
              </div>
            </div>

            <!-- Pie Chart -->
            <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Change password</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <form class="user">
                    <div class="form-group">
                      <label>New Password</label>
                        <input type="password" class="form-control"  placeholder="****">
                    </div>
                    <div class="form-group">
                      <label>Confirm password</label>
                        <input type="password" class="form-control"  placeholder="******">
                    </div>
                    <a href="#" class="btn btn-primary btn-user btn-block">
                      Change password
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Links/codes</h6>
                  </div>
                  <!-- Card Body -->
                  <div class="card-body">
                    Refferal:
                    <h6>https://myurl.com/ref-code</h6>
                    Topics page:
                    <h6>https://myurl.com/topic/user</h6>  
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

export default {
  name: "Profile",
  data() {
    return {
      topicData: {
        topic: "",
        alias: "",
        description: "",
      },
      errorMsg: "",
      success: false,
      errored: true,
      btnMsg: "Add topic"
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
      let inputCheck =
        !this.topicData.topic || !this.topicData.alias || !this.topicData.description ? true : false;

      this.errored = inputCheck;
      if (this.errored) {
        this.errorMsg =
          "One or more of your input is not valid. Kindly check and correct where necessary";
      } else {
        this.btnMsg = "Processing ....";
        this.errorMsg = "";
        this.addTopic();
      }
    },
    addTopic: async function() {
      //Add topic to DB
      const data = {
        action: 'add-edit',
        user: this.userdata.message.usernmae,
        topic: this.topicData.topic,
        alias: this.topicData.alias,
        description: this.topicData.description
      };
      const addTopic = await e.addTopic(data);
      this.success = !addTopic.error;
      // console.log(addTopic);
      this.errored = addTopic.error;
      this.errorMsg = addTopic.message;
      addTopic.error ? "" : location.reload();
      this.btnMsg = 'Add topic'
    }
  },
  created: function() {
    this.userData().then((re)=>{this.userdata = re;});
    // console.log(user);
  }
};
</script>