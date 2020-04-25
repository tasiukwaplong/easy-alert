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
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <h1 class="h3 mb-1 text-gray-800">Topics/Courses</h1>
          <p class="mb-4">Topics/Courses you are subscribed to:</p>

          <!-- Content Row -->
          <div class="row">

            <!-- Border Left Utilities -->
            <div class="col-lg-6">

              <div class="card mb-4 py-1 border-left-primary">
                <div class="card-body">
                  <a href="#" style="float: right;" class="btn btn-danger btn-circle">
                    <i class="fas fa-trash" title="Unsubscribe"></i>
                  </a><br>
                  <h4><input type="checkbox" checked> CSC 101</h4>
                  A course offered by all students of fulafia ,,,,,,,<br>
                  <span style="float: right;"><b>Sender: Tasiu Kwaplong</b></span>
                </div>
              </div>
              <div class="card mb-4 py-1 border-left-primary">
                <div class="card-body">
                  <a href="#" style="float: right;" class="btn btn-danger btn-circle">
                    <i class="fas fa-trash" title="Unsubscribe"></i>
                  </a><br>
                  <h4><input type="checkbox" checked> CSC 101</h4>
                  A course offered by all students of fulafia ,,,,,,,<br>
                  <span style="float: right;"><b>Sender: Tasiu Kwaplong</b></span>
                </div>
              </div>
              <div class="card mb-4 py-1 border-left-primary">
                <div class="card-body">
                  <a href="#" style="float: right;" class="btn btn-danger btn-circle">
                    <i class="fas fa-trash" title="Unsubscribe"></i>
                  </a><br>
                  <h4><input type="checkbox" checked> CSC 101</h4>
                  A course offered by all students of fulafia ,,,,,,,<br>
                  <span style="float: right;"><b>Sender: Tasiu Kwaplong</b></span>
                </div>
              </div>
              <div class="card mb-4 py-1 border-left-primary">
                <div class="card-body">
                  <a href="#" style="float: right;" class="btn btn-danger btn-circle">
                    <i class="fas fa-trash" title="Unsubscribe"></i>
                  </a><br>
                  <h4><input type="checkbox" checked> CSC 101</h4>
                  A course offered by all students of fulafia ,,,,,,,<br>
                  <span style="float: right;"><b>Sender: Tasiu Kwaplong</b></span>
                </div>
              </div>
              <div class="card mb-4 py-1 border-left-primary">
                <div class="card-body">
                  <a href="#" style="float: right;" class="btn btn-danger btn-circle">
                    <i class="fas fa-trash" title="Unsubscribe"></i>
                  </a><br>
                  <h4><input type="checkbox" checked> CSC 101</h4>
                  A course offered by all students of fulafia ,,,,,,,<br>
                  <span style="float: right;"><b>Sender: Tasiu Kwaplong</b></span>
                </div>
              </div>

            </div>
            <div class="col-lg-6">
              
              <div class="form-group">
                <label for="search" class="col-sm-12 control-label">Subscribe to a topic/Course</label>
                <div class="col-sm-12">
                  <i class="fas fa-search"></i>
                  <input type="search" name="" id="search" class="form-control" value="" required="required" title="Search for a topic to subscribe to" placeholder="Search for a topic to subscribe to">
                </div>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                  Display value
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                  Display value
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                  Display value
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                  Display value
                </label>
              </div>
              <button type="button" class="btn btn-primary">Subscribe</button>
            </div>
            <!-- Border Bottom Utilities -->
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
import Footer from './includes/Footer.vue'
import SideBar from './includes/SideBar.vue'

export default {
  name: 'My_topics',
  components: {
    Footer, SideBar
  }
}
</script>