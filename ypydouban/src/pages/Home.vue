<template>
  <div class="homeBox">
    <div class="header">
      <div class="hd">
        <div class="header-logo">
          <a href="/" class="logo">豆瓣摄影</a>
          <div class="header-logo-text">
            豆瓣旗下女性摄影服务平台
            <div class="header-logo-tel">客服: 400-8353-331</div>
          </div>
        </div>
        <div class="header-nav">
          <!-- <ul>
          <li class="on"><a href="/">首页</a></li>
          <li class=""><a href="/package/">套系</a></li>
          <li class=""><a href="/explore/pger/">摄影师</a></li>
          <li class=""><a href="/explore/">客片</a></li>
          <li class=""><a href="/events/">活动</a></li>
          </ul>-->
          <div class="header-nav-search" data-query="/ajax/search/suggestion">
            <div class="header-nav-search-container">
              <span class="header-nav-search-input">
                <input type="text" placeholder="可以搜摄影师、城市、类别" style="width: 345px;" />
                <a href="javascript:;" class="header-nav-search-close">×</a>
              </span>
              <div class="header-nav-search-panel" style="display:none;">
                <div class="header-nav-search-panel-inner"></div>
              </div>
            </div>
            <a href="javascript:;" class="header-nav-search-icon">
              <i>搜索</i>
            </a>
          </div>
        </div>
        <div class="header-user">
          <a href="/login?redir=https://ypy.douban.com/">登录</a>
        </div>
      </div>
    </div>
    <div class="top-recommend">
      <div
        id="top-recommend-cover"
        class="top-recommend-cover"
        data-src="https://qnypy.doubanio.com/201701151757113816__l"
        data-origin-width="1200"
        data-origin-height="800"
        style="height: auto;"
      >
        <div
          style="position: relative; height: 375px; text-align: center; font-size: 0px;"
          data-reactid=".0"
        >
          <img
            style="position: absolute; left: -1000px; right: -1000px; bottom: -1000px; top: -1000px; margin: auto; width: 562.5px; height: 375px;"
            src="https://qnypy.doubanio.com/201701151757113816__l"
            data-reactid=".0.0"
          />
        </div>
      </div>
      <div class="top-recommend-slogan">
        <h2>
          预约摄影师拍照
          <br />记录每一个特别的你
          <div class="top-recommend-links">
            <a href="/docs/about_service" class="ypy-service">如何预约拍照?</a>
          </div>
        </h2>
      </div>
      <div class="top-recommend-photographer">
        <div class="bd">
          <div class="author">
            © 摄影师:
            <a
              href="/14/?utm_campaign=photographer&amp;utm_medium=home_page_welcome&amp;utm_source=ypy"
            >人生海海 (北京)</a>
          </div>
        </div>
      </div>
      <a href="#" class="down-arrow" style="display: none;"></a>
    </div>
    <!-- //轮播图 -->
    <app-swipe></app-swipe>

    <!-- 写真 -->
    <div class="section-portrait">
      <h2>写真</h2>
      <div class="section-portrait-label">
        <blockquote>
          <q>在这里，你是女主角</q>
        </blockquote>
      </div>
      <div class="section-portrait-locs">
        <a href="/package/108288/1/">北京</a>
        <a href="/package/108296/1/">上海</a>
        <a href="/package/118281/1/">广州</a>
        <a href="/package/118318/1/">成都</a>
        <a href="/package/118254/1/">武汉</a>
        <a href="/package/cate/1">全部</a>
      </div>
      <div class="section-portrait-list">
        <ul>
          <li class="section-portrait-list-cell-1">
            <img src="https://qnypy.doubanio.com/201606141539065533__l" />
          </li>
          <li class="section-portrait-list-cell-2">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201610201555037378__l"
                data-src="https://qnypy.doubanio.com/201610201555037378__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>世界上的另一个我。</span>
              </div>
              <div class="package-item-price">
                <em>￥3800起</em>/套
              </div>
              <div class="package-item-loc">天津, 北京</div>
            </div>
          </li>
          <li class="section-portrait-list-cell-3">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201609082320239765__l"
                data-src="https://qnypy.doubanio.com/201609082320239765__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>无处安放</span>
              </div>
              <div class="package-item-price">
                <em>￥2699起</em>/套
              </div>
              <div class="package-item-loc">天津, 东莞, 广州, 深圳, 北京</div>
            </div>
          </li>
          <li class="section-portrait-list-cell-4">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201611201607295603__l"
                data-src="https://qnypy.doubanio.com/201611201607295603__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>鼓浪屿上浪</span>
              </div>
              <div class="package-item-price">
                <em>￥1200起</em>/套
              </div>
              <div class="package-item-loc">昆明, 大理, 厦门, 苏州, 重庆, 武汉, 成都</div>
            </div>
          </li>
          <li class="section-portrait-list-cell-5">
            >
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201612081055151772__l"
                data-src="https://qnypy.doubanio.com/201612081055151772__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>彩虹味儿的少女甜心糖</span>
              </div>
              <div class="package-item-price">
                <em>￥1600起</em>/套
              </div>
              <div class="package-item-loc">北京</div>
            </div>
          </li>
          <li class="section-portrait-list-cell-6">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201609141603123068__l"
                data-src="https://qnypy.doubanio.com/201609141603123068__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>美目盼兮</span>
              </div>
              <div class="package-item-price">
                <em>￥2599起</em>/套
              </div>
              <div class="package-item-loc">杭州</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="section-portrait-more">
        <a href="/package/cate/1">更多写真套系</a>
      </div>
    </div>

    <!--婚纱 -->
    <div class="section-wedding">
      <h2>婚纱</h2>
      <div class="section-wedding-label">
        <blockquote>
          <q>新婚照，格调最重要</q>
        </blockquote>
      </div>
      <div class="section-wedding-locs">
        <a href="/package/108288/2/">北京</a>
        <a href="/package/108296/2/">上海</a>
        <a href="/package/118172/2/">杭州</a>
        <a href="/package/118318/2/">成都</a>
        <a href="/package/118254/2/">武汉</a>
        <a href="/package/cate/2">全部</a>
      </div>
      <div class="section-portweddingrait-list">
        <ul>
          <li class="section-wedding-list-cell-1">
            <a
              href="https://ypy.douban.com/package/1910?utm_campaign=Package&amp;utm_medium=home_page_best_buy&amp;utm_source=ypy"
            >
              <img src="https://qnypy.doubanio.com/201612071125309480__l" />
            </a>
          </li>
          <li class="section-wedding-list-cell-2">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201701091641563687__l"
                data-src="https://qnypy.doubanio.com/201701091641563687__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>TT&amp;gaga</span>
              </div>
              <div class="package-item-price">
                <em>￥2200起</em>/套
              </div>
              <div class="package-item-loc">广州, 深圳</div>
            </div>
          </li>
          <li class="section-wedding-list-cell-3">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201605111858147461__l"
                data-src="https://qnypy.doubanio.com/201605111858147461__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>等风来</span>
              </div>
              <div class="package-item-price">
                <em>￥8698起</em>/套
              </div>
              <div class="package-item-loc">北京</div>
            </div>
          </li>
          <li class="section-wedding-list-cell-4">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201609291327393561__l"
                data-src="https://qnypy.doubanio.com/201609291327393561__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>2016秋冬限定内景</span>
              </div>
              <div class="package-item-price">
                <em>￥3880起</em>/套
              </div>
              <div class="package-item-loc">北京</div>
            </div>
          </li>
          <li class="section-wedding-list-cell-5">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201701210051194095__l"
                data-src="https://qnypy.doubanio.com/201701210051194095__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>和你在一起的时候 阳...</span>
              </div>
              <div class="package-item-price">
                <em>￥4500起</em>/套
              </div>
              <div class="package-item-loc">垦丁, 大理, 北京, 青岛</div>
            </div>
          </li>
          <li class="section-wedding-list-cell-6">
            <div class="package-item-pic">
              <img
                src="https://qnypy.doubanio.com/201701031157154563__l"
                data-src="https://qnypy.doubanio.com/201701031157154563__l"
              />
            </div>
            <div class="package-item-info">
              <div class="package-item-title">
                <span>文艺青年的旅拍婚纱照</span>
              </div>
              <div class="package-item-price">
                <em>￥7900起</em>/套
              </div>
              <div class="package-item-loc">Pai, 清迈</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="section-wedding-more">
        <a href="/package/cate/2">更多婚纱套系</a>
      </div>
    </div>

    <!-- 摄影师-->
    <div class="features">
      <ul>
        <li>
          <div class="figure">
            <img
              src="https://img3.doubanio.com/f/ypy/82992bcd72242f6eace5ec8a1d96b7b72069058e/pics/ic_feature_1.png"
            />
          </div>
          <div class="desc">
            <div class="desc-title">最棒的摄影师</div>
            <p>这里每一位摄影师，都是豆瓣摄影从专业、创意、服务三个方面，于千百摄影师中精挑细选而来。</p>
          </div>
        </li>
        <li>
          <div class="figure">
            <img
              src="https://img3.doubanio.com/f/ypy/d454782b767bd9473b6f4d4b6e7f1aff9e6514f1/pics/ic_feature_2.png"
            />
          </div>
          <div class="desc">
            <div class="desc-title">1对1定制拍摄</div>
            <p>每一次拍摄都花足心思，在意每一个人的个性特点，拒绝模式化生产。好照片，属于每一个特别的你。</p>
          </div>
        </li>
        <li>
          <div class="figure">
            <img
              src="https://img3.doubanio.com/f/ypy/873f3f59f1f97a447b745a7718cf492de7b6f785/pics/ic_feature_3.png"
            />
          </div>
          <div class="desc">
            <div class="desc-title">没有额外消费</div>
            <p>所有服务内容均价格透明，没有任何形式的诱导消费，你最初看到的价格就是最终要支付的金额。</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="section-pger">
      <h2>本期推荐摄影师</h2>
      <div class="section-pger-more">
        <a href="/explore/pger/">全部摄影师</a>
      </div>
      <div class="section-pger-card">
        <div class="section-pger-info">
          <div class="section-pger-info-inner">
            <div class="section-pger-info-avatar">
              <img
                src="https://img1.doubanio.com/view/ypy_pger_avatar/small/public/7d3b15a35cf7268.jpg"
              />
            </div>
            <div class="section-pger-info-name">
              <a
                href="/14/?utm_campaign=photographer&amp;utm_medium=home_page_photographer&amp;utm_source=ypy"
              >人生海海工作室</a>
            </div>
            <div class="section-pger-info-loc">(北京)</div>
            <div class="section-pger-info-rec">
              <blockquote>
                <q>人生海海－一拍一签约工作室，一个除了［很赞］没有其他评价的工作室，一个把“每一个你”都当作明星一样闪耀的工作室。主理人吴晓松，从事人像摄影工作八年，他是一拍一“写真摄影师养成计划”的讲师，也是著名音乐人金玟岐、刘瑞琦唱片封面的拍摄及策划者。</q>
                -- 小拍推荐
              </blockquote>
            </div>
            <div class="section-pger-info-inner-more">
              <a
                href="/14/?utm_campaign=photographer&amp;utm_medium=home_page_photographer&amp;utm_source=ypy#pger-album"
              >更多作品</a>
            </div>
          </div>
        </div>
        <div class="section-pger-photo">
          <img src="https://qnypy.doubanio.com/201701161232106551__l" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="hd">
        <div class="mod-footer-process">
          <a href="/docs/about_service">
            <img
              src="https://img3.doubanio.com/f/ypy/4426fe79a05cc546880197285f522a4152d61841/pics/process3.png"
              width="600"
            />
          </a>
        </div>
      </div>
      <div class="bd">
        <div class="mod-footer-promise">
          <ul>
            <li class="service-a">
              <div class="text">
                <div class="label">最棒的摄影师</div>这里每一位摄影师，都是豆瓣摄影从专业、创意、服务三个方面，于千百摄影师中精挑细选而来。
              </div>
            </li>
            <li class="service-b">
              <div class="text">
                <div class="label">1对1定制拍摄</div>每一次拍摄都花足心思，在意每一个人的个性特点，拒绝模式化生产。好照片，属于每一个特别的你。
              </div>
            </li>
            <li class="service-c">
              <div class="text">
                <div class="label">没有额外消费</div>所有服务内容均价格透明，没有任何形式的诱导消费，你最初看到的价格就是最终要支付的金额。
              </div>
            </li>
            <li class="footer-qr">
              <img
                src="https://img3.doubanio.com/f/ypy/1f6d8a4cb8c89de5d931a3d4e3276a7221c3c0d9/pics/promotion/lion/qr.jpg"
                width="100"
              />
              <br />微信服务号 ypy-douban
            </li>
          </ul>
        </div>
        <div class="mod-footer-copyright">
          <div class="contact">
            客服电话:
            <a href="tel:400-8353-331">400-8353-331请按3</a> (工作日9:30到19:30)
          </div>© 2016 豆瓣摄影
          <a href="/docs/about">关于我们</a>
          <a href="/docs/about_service">拍摄流程</a>
          <a href="/docs/faq">常见问题</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appSwipe from "../components/swiper";
export default {
  data() {
    return {};
  },
  components: {
    appSwipe
  },

  methods: {
    test() {
      window.console.log(
        this.$store.dispatch({ type: "increment", amount: 10 })
      );
    }
  }
};
</script>
<style scoped>
.header .header-logo .logo {
  display: inline-block;
  vertical-align: middle;
  width: 60px;
  height: 60px;
  margin-right: 5px;
  font-size: 13px;
  color: rgb(85, 85, 85);
  line-height: 100em;
  letter-spacing: 3px;
  overflow: hidden;
}
.homeBox {
  height: 960px;
}
</style>