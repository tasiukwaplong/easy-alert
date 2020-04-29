<template>
  <!-- Footer -->
  <footer class="sticky-footer bg-white">
    <!-- modal starts here -->
    <!-- Button trigger modal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Send message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group">
                <label for>User group(topic)</label>
                <select class="form-control">
                  <option v-bind:key="topic.id" v-for="topic in userTopics">{{topic.alias}} ({{topic.topic_name}})</option>
                </select>
              </div>
              <div class="form-group">
                <label for>Sender name</label>
                <input
                  type="text"
                  class="form-control"
                  maxlength="7"
                  placeholder />
                <small id="helpId" class="form-text text-muted">
                  <a href="#"
                  >Checkout list of unapproved sender names and also how to best choose a sender name</a>
                </small>
              </div>
              <div class="form-group">
                <label for>Message</label>
                <textarea class="form-control" name id rows="3"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send</button>
          </div>
        </div>
      </div>

    </div>
    <!-- modal stops here -->


    <!-- fund account modal starts here -->
      <div
      class="modal fade"
      id="modelId2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Fund account</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <div class="form-group">
             <label for="">Units</label>
             <input type="number" class="form-control" v-model.number="units" aria-describedby="helpId" placeholder="Number of units">
             <small id="helpId" class="form-text text-muted">{{(units*4)}}</small>
           </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Continue to payment</button>
          </div>
        </div>
      </div>
      
    </div>

    <!-- end fund account modal stops here -->


    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Copyright &copy; Your Website 2020</span>
      </div>
    </div>
  </footer>
  <!-- End of Footer -->
</template>

<script>
import { login } from "../../controller/mixins";

export default {
  name: "Footer",
  data(){
    return {
      userTopics: [],
      units: ''
    }
  },
  mixins: [login],
  created: function() {
    this.userData().then(re => {
      this.userdata = re;
      this.userTopics = re.message.topics;
    });
    // console.log(user);
  }
};
</script>
