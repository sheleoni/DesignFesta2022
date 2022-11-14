!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id; js.src = "//suzuri.jp/thirdparty/widgets.js";
        js.charset = "utf-8";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "suzuri-widget-script");

let i = 0;

for (i = 0; i < 5; i++) {
    console.log(i);
}

var app = new Vue({
    el: '#product-display',
    data() {
        return {

            products: [
                {
                    name: "焼売ナンバー",
                    html: `
                    <article class="suzuri-widget-product" data-suzuri-product-id="35853415" data-suzuri-item-variant-id="1276">
                        <a href="https://suzuri.jp/shelliesworld/12513192/mini-clear-multi-case/m/clear">
                            <img src="https://d1q9av5b648rmv.cloudfront.net/v3/323x323/mini-clear-multi-case/m/clear/front-horizontal-folded/12513192/1667915844-895x2101.png.0.7215+0.0+0.0053.jpg?h=7cc31625da987d3d45e920f96096e827c86cb559&printed=false"
                                width="323" height="323">
                        </a>
                    </article>`,
                },
                {
                    name: "Mango Manstop",
                    html: `
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//suzuri.jp/thirdparty/widgets.js";js.charset="utf-8";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","suzuri-widget-script");</script>
                    <div class="suzuri-widget-product" data-suzuri-product-id="35847766" data-suzuri-item-variant-id="679"><a href="https://suzuri.jp/shelliesworld/12511565/t-shirt/s/oatmeal"><img src="https://d1q9av5b648rmv.cloudfront.net/v3/323x323/t-shirt/s/oatmeal/front/12511565/1667898773-1658x1010.png.1.2544+0.0195+0.0.jpg?h=6dc982b05847e6c806a73c0cd86a28f304c1f41c&printed=true" width="323" height="323"></a></div>

`,
                },
                {
                    name: "🫓ナンで?!",
                    html: `
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//suzuri.jp/thirdparty/widgets.js";js.charset="utf-8";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","suzuri-widget-script");</script>
                    <div class="suzuri-widget-product" data-suzuri-product-id="16464574" data-suzuri-item-variant-id="1219"><a href="https://suzuri.jp/shelliesworld/6687904/five-panel-cap/m/khaki"><img src="https://d1q9av5b648rmv.cloudfront.net/v3/323x323/five-panel-cap/m/khaki/6687904/1619228158-5130x3573.png.jpg?h=8bb6ed5396257812f41e2718b012e1bb0509df4a&printed=true" width="323" height="323"></a></div>`,
                },
                {
                    name: "ピカソ ピザゾ🍕",
                    html: `
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//suzuri.jp/thirdparty/widgets.js";js.charset="utf-8";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","suzuri-widget-script");</script>
                    <div class="suzuri-widget-product" data-suzuri-product-id="15992015" data-suzuri-item-variant-id="81"><a href="https://suzuri.jp/shelliesworld/6522218/tote-bag/m/natural"><img src="https://d1i1cacvxo8yjc.cloudfront.net/render?angle=front&color=natural&image_size=323x323&size=m&token=eyJhbGciOiJIUzI1NiJ9.eyJsYXlvdXQiOnsic2hvdCI6eyJpdGVtIjoidG90ZS1iYWciLCJjb2xvciI6Im5hdHVyYWwiLCJzaXplIjoibSIsImFuZ2xlIjoiZnJvbnQiLCJkaWFncmFtIjpmYWxzZX0sImFkanVzdG1lbnQiOnsic2NhbGUiOjEsIm9mZnNldF94IjowLCJvZmZzZXRfeSI6MH0sIm9yaWdpbmFsX3NpemUiOnsid2lkdGgiOjIxNzMsImhlaWdodCI6MTYzOH0sIm91dHB1dF9zaXplIjp7IndpZHRoIjozMjMsImhlaWdodCI6MzIzfX0sInNvdXJjZV9wYXRoIjoibWF0ZXJpYWxzL3RleHR1cmVzLzY1MjIyMTgvMTYxNzYzNjk5My0yMTczeDE2MzgucG5nIiwic291cmNlX3ZlcnNpb24iOjE2MTc2MzY5OTMsInZpb2xhdGlvbiI6ZmFsc2UsIm91dHB1dF9mb3JtYXQiOiJqcGVnIn0.XddRkuZGqBSfNQ1TLXTW_nck9yCe0bWdMtclFmWq_Ww" width="323" height="323"></a></div>

                    `,
                },
                {
                    name: "耳コピ",
                    html: `
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//suzuri.jp/thirdparty/widgets.js";js.charset="utf-8";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","suzuri-widget-script");</script>
                    <div class="suzuri-widget-product" data-suzuri-product-id="13625013" data-suzuri-item-variant-id="466"><a href="https://suzuri.jp/shelliesworld/5726501/hoodie/s/natural"><img src="https://d1q9av5b648rmv.cloudfront.net/v3/323x323/hoodie/s/natural/front/5726501/1609314332-3183x4123.png.jpg?h=d01fe1bdc333ea1d761cdf0f669f517c571c310d&printed=true" width="323" height="323"></a></div>
                    `,
                },
                {
                    name: "しばいぬ",
                    html: `
                    <div class="suzuri-widget-product" data-suzuri-product-id="12778975" data-suzuri-item-variant-id="962"><a href="https://suzuri.jp/shelliesworld/5450692/ringer-t-shirt/s/sumi"><img src="https://d1q9av5b648rmv.cloudfront.net/v3/323x323/ringer-t-shirt/s/sumi/5450692/1605525746-4800x4800.png.1.0+0.0+0.0.jpg?h=acf9b4c84084da25039ce0a970fc5c30a77f71e2&printed=true" width="323" height="323"></a></div>
                    `,
                },
                {
                    name: "となりの芝が青く見える柴犬",
                    html: `
                    <div class="suzuri-widget-product" data-suzuri-product-id="12408857" data-suzuri-item-variant-id="1202"><a href="https://suzuri.jp/shelliesworld/5300378/water-glass/m/clear"><img src="https://d1q9av5b648rmv.cloudfront.net/v3/323x323/water-glass/m/clear/5300378/1603620035-2048x2048.png.jpg?h=d0fb11ded7c9e4e9f42b4d2bef08f496083766af&printed=true" width="323" height="323"></a></div>
                    
                    `,
                },
                {
                    name: "「パンだ」と言うパンダ",
                    html: `
                    <div class="suzuri-widget-product" data-suzuri-product-id="12408793" data-suzuri-item-variant-id="466"><a href="https://suzuri.jp/shelliesworld/5300318/hoodie/s/natural"><img src="https://d1q9av5b648rmv.cloudfront.net/v3/323x323/hoodie/s/natural/front/5300318/1603619539-2048x2048.png.jpg?h=768bdf6426e3df9d0d5ed95c427638ffd672163d&printed=true" width="323" height="323"></a></div>
                    
                    `,
                },
            ]


        }
    }
})

var app = new Vue({
    el: '#navigation',
    data() {
        return {

        }
    }
})