const footer = () =>{
    return `<div id="footer">
    <div id="footer-box">
        <div id="logos">
            <div id="logos-left">
                <p id="newsletter">Newsletter</p>
                <input type="text" name="" id="points" placeholder="Enter Email to get 50 points">
                <button id="subscibe">Subscribe</button>
            </div>
            <div id="icons">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-youtube"></a>
                <a href="#" class="fa fa-linkedin"></a>                   
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-pinterest"></a>
                <a href="#" class="fa fa-tumblr"></a>
                
            </div>
        </div>
        <div class="footer-box-bottom">
            <div>
                <h3>Company Information</h3>
                <a href="">About Us</a>
                <a href="">Top Searches</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms and Conditions</a>
                <a href="">Intellectual Property Policy</a>
                <a href="">Testimonials</a>
                <a href="">Contact Us</a>
                <a href="">Report Security Issue</a>
                <a href="">Sell on Gearbest</a>
                <a href="">Cookies Policy</a>
                <a href="">Top Brands</a>
                <a href="">Gearbest Official Blog</a>
            </div>
            <div>
                <h3>Customer Service</h3>
                <a href="">Shipping Information</a>
                <a href="">My Favorites</a>
                <a href="">FAQ For Newsletter Subscription</a>
                <a href="">My Points</a>
                <a href="">Warranty and Return</a>
                <a href="">Payment Methods</a>
                <a href="">Deposit Expansion</a>
                <a href="">FAQ & Support</a>
                <a href="">Sitemapt</a>
                <a href="">Gearbest Wallet Instruction</a>
                <a href="">FAQs about COVID-19</a>
            </div>
            <div>
                <h3>Other Business</h3>
                <a href="">Partnership Programs</a>
                <a href="">Associate Program</a>               
            </div>
            <div>
                <h3>Download App!</h3>
                <p>Save $3 with App & New User Only</p>
                <div id="play">
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLrjCxxEpTgd0L2c5tPDz3wwrlJxJohQQmhVEmrSfHWw&s" alt=""></div>
                    <div><img src="data:image/png;base64,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" alt=""></div>
                    
                </div>
                

            </div>
        </div>
        <div id="footer-box-img">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png" alt="">
           

        </div>
        <div id="footer-box-img2">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png" alt="">
            <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png" alt="">
        </div>
        <div id="footer-box-last">
            <p>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</p>
        </div>

    </div>
</div>`
}

export {footer}