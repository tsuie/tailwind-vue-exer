export default {
    name: "Dashboard",
    data() {
      return {
        user: null
      };
    },
    created() {
      // const response = await axios.get('user');
      // this.user = response.data;
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user.name);
    }
}