 <template>
    <div class="hits">
        <div data-reactid=".1">
            <div class="slides" style="position: relative; overflow: hidden; width: 320px; height: 92.8px;" data-reactid=".1.0">
                <div style="position: absolute; top: 0px; left: 0px; width: 1600px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 1000ms; transform: translate(-640px, 0px) translateZ(0px);" class="slides-content" data-reactid=".1.0.0">
                    <div class="slides-item" style="width: 320px; height: 92.8px;" data-reactid=".1.0.0.$0" v-for="item in Wpics" :key="item.src">
                        <img :src='item.src' :alt="item.alt" data-reactid=".1.0.0.$0.0.0">
                    </div>
                </div>
                <div class="slides-tab-container" data-reactid=".1.0.1" v-for="(one,index) in titles" :key="index">
                    <a href="javascript:;" class="slides-tab" data-reactid=".1.0.1.$0" @click="gotoPage(index)"><i data-reactid=".1.0.1.$0.0"></i>{{one}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
    return{
    Wpics:[
           {
             src:"https://qnypy.doubanio.com/201604121600574057__xl",
             alt:'肖像照专场'
           },
             {
             src:"https://qnypy.doubanio.com/201611281905327232__xl",
             alt:'你该换张证件照了'
           },
             {
             src:"https://qnypy.doubanio.com/201701161845001702__l",
             alt:'三十别计划'
           },
             {
             src:"https://qnypy.doubanio.com/201611241207566793__xl",
             alt:'婚纱早鸟票'
           },
             {
             src:"https://qnypy.doubanio.com/201603231536339756__xl",
             alt:'青春纪念场'
           }
        ],
    titles:[
           '肖像照专场',
           '你该换张证件照了',
           '三十别计划',
           '婚纱早鸟票',
           '青春纪念场'
       ]
    }
   
    },
    methods:{
        gotoPage(index) {
          this.currentIndex = index;
        }
    },
    computed:{

    }

}
</script>
<style scoped>
@import "../../public/static/css/index.css";

</style>
