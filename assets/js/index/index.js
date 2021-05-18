const index = function() {
    window.addEventListener('resize', utils.resizeProductCard);

    $('.slider_custom').slick({
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    
    vinhos.forEach((product, i) => {
        let card1 = createProductCard(product);
        let card2 = createProductCard(product);
        
        document.querySelector('#destaques').append(card1);
        document.querySelector('#mais_vendidos').append(card2);
    })


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
            
            icon.classList.toggle('liked')
        });
    });


    setTimeout(() => {
        utils.resizeProductCard();
    }, 1000);


    function createProductCard(product) {
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
        `

        return container;
    }

}()