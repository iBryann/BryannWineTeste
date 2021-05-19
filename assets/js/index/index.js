const index = function() {
    window.addEventListener('load', utils.resizeProductCard);
    window.addEventListener('resize', utils.resizeProductCard);


    $('.slider_custom').slick({
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        useTransform: true,
        speed: 600,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    dots: false,
                }
            }
        ]
    });


    $('#slider_sparkling').slick({
        prevArrow: $('#prev2'),
        nextArrow: $('#next2'),
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        useTransform: true,
        speed: 600,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    dots: false,
                }
            }
        ]
    });
    

    vinhos.forEach((wine, i) => {
        let card1 = createWineCard(wine);
        let card2 = createWineCard(wine);
        
        document.querySelector('#destaques').append(card1);
        document.querySelector('#mais_vendidos').append(card2);
    });


    document.querySelectorAll('.product_card_btn_like').forEach((like) => {
        like.addEventListener('click', e => {
            let el = e.currentTarget
            let icon = el.querySelector('img');
            
            if (!icon.classList.contains('liked')) {
                icon.src = "assets/img/icons/like-fill.svg";
            }
            else {
                icon.src = "assets/img/icons/like-outline.svg";
            }
            
            el.classList.toggle('like_animate');
            icon.classList.toggle('liked')
        });
    });


    function createWineCard(product) {
        let {id, name, year, photoURL, amount, amountPartner, amountNoPartner, nationality: {country, flagURL}, attributes} = product;
        let [partinerInt, partinerFract] = String(amountPartner.toFixed(2)).split('.');

        let container = document.createElement('div');
        container.classList.add('product_card', 'mt-2', 'col');
        container.innerHTML = `
            <div class="">
                <div class="card_sparkling">
                    <div class="card_sparkling_bg position-relative" style="background-image: url(assets/img/backgrounds/pizza.jpg)">
                        <img class="card_sparkling_photo d-sm-none" src="assets/img/backgrounds/espumante.png" alt="Espumante">
                    </div>
                    
                    <div class="card_sparkling_info position-relative">
                        <img class="card_sparkling_photo d-none d-sm-inline" src="assets/img/backgrounds/espumante.png" alt="Espumante">

                        <div class="sparkling_info">
                            <h2 class="mb-4">Harmonizações Wine</h2>

                            <h3 class="sparkling_info_title pt-3 mb-4">
                                Espumante Toro Loco D.O. Cava Brut
                            </h3>

                            <div class="sparkling_info_amount d-flex flex-column pt-1 mb-4">
                                <s>R$ 330,00</s>
                                <strong>R$ 280,00</strong>
                            </div>

                            <div>
                                <button class="sparkling_info_bt btn" type="button">
                                    Eu quero
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return container;
    }
    

    function createWineCard(product) {
        let {id, name, year, photoURL, amount, amountPartner, amountNoPartner, nationality: {country, flagURL}, attributes} = product;
        let [partinerInt, partinerFract] = String(amountPartner.toFixed(2)).split('.');

        let container = document.createElement('div');
        container.classList.add('product_card', 'mt-2', 'col');
        container.innerHTML = `
            <div class="product_card_body d-flex flex-column justify-content-between mb-3">
                <div class="product_card_header">
                    <button class="product_card_btn_like">
                        <img src="assets/img/icons/like-outline.svg">
                    </button>

                    <div class="card_header_attrib">
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://www.wine.com.br/vinhos/${utils.formatURL(attributes[0])}/cVINHOS-atTIPO_${attributes[0]}-p1.html">
                                    <span title="Vinho ${attributes[0]}"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.wine.com.br/vinhos/${utils.formatURL(country)}/cVINHOS-atPAIS_${country}-p1.html">
                                    <img src="${flagURL}" title="Engarrafado em: ${country}" alt="Engarrafado em: ${country}">
                                </a>
                            </li>
                        </ul>
                    </div>

                    <img class="img-fluid" src="${photoURL}" alt="">
                </div>

                <div class="product_card_title">
                    <h3>
                        ${name} ${year}
                    </h3>
                </div>

                <div class="product_card_amount">
                    <div class="mb-3">
                        <span class="card_amount_original"><s>${utils.formatAmount(amount)}</s></span>
                        <span class="card_amount_descount">
                            <strong>${((amount-amountPartner)*100/amount).toFixed(0)}% OFF</strong>
                        </span>
                    </div>

                    <div class="d-flex align-items-end justify-content-center mb-3">
                        <div class="card_amount_partner_label">
                            SÓCIO<br>WINE
                        </div>

                        <div class="card_amount_partner">
                            <span>R$</span>
                            ${partinerInt}
                            <span>,${partinerFract}</span>
                        </div>
                    </div>

                    <div class="card_amount_no_partner">
                        NÃO SÓCIO ${utils.formatAmount(amountNoPartner)}
                    </div>
                </div>
            </div>

            <button class="btn w-100 product_card_btn_add" type="button" data-id=${id}>
                Adicionar
            </button>
        `;

        return container;
    }

}()