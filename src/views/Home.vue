<template>
  <div v-if='userdata.message.type === "sender"'>
    <!-- {{userdata.message.type}} -->
    <Sender />
  </div>
  <div v-else>
    <Subscriber />
  </div>
</template>

<script>
// @ is an alias to /src
import Subscriber from "./includes/Home-subscriber";
import Sender from "./includes/Home-sender";
import { login } from "../controller/mixins";

export default {
  name: "Home",
  components: {
    Subscriber,
    Sender
  },
  mixins: [login],
  created: function() {
    this.userData().then((re)=>{this.userdata = re;});
    // console.log(user);
  }
};
</script>