const app = new Vue({
    el:"#root",
    data: {
        message:"Hello, Vue",
        image: "https://www.luigisabbetti.it/wp-content/uploads/2018/04/guida-vue-js-italiano.png",
        color: "green",
    },
    methods: {
        changeColor: function() {
            if (this.color == "green") {
                this.color = "blue";
            } else {
                this.color = "green";
            }
        }
    }
})