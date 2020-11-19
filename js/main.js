
(() => {
// const myVM = ( () => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from Vue!",
            aontherMessage: "This is some sample text",

            professors: [
                { name: "Justin", role: "coordinator", nickname: "nitsuj"},
                { name: "John", role: "prof", nickname: "super chill"},
                { name: "Joe", role: "prof", nickname: "tedy bear"}
            ]
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name")
            },

            clickHeader() {
                console.log("clicked on header")
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
  })();