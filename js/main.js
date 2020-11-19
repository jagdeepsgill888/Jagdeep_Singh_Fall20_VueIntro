
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

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        
          mounted: function() {
              console.log("Vue is mounted!");
            //   alert("Hey there! you vue instance is ready");

              this.professors.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"})
            //   alert("you added Jarrod!")
          },

        methods: {
            logClicked() {
                console.log("clicked on a prof name")
            },

            clickHeader() {
                console.log("clicked on header")
            },

            removeItem(target) {
                //remove this item/prof from the professors array
                console.log('clicked to remove prof', target);
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
  })();