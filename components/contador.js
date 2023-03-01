Vue.component(
    'contador',
    {
        template: "<div><p>contador {{numero}}</p><p><button @click='numero += 1'>contador</button></p></div>",
        data: function(){
            return {
                numero:0
            }
        }
    }
);