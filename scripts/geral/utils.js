const utils = function() {
    function formatAmount(amount) {
        return amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    
    function formatURL(str) {
        let com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
        let sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
        let novastr = "";
    
        for(let i = 0; i < str.length; i++) {
            let troca = false;
            for (let a = 0; a < com_acento.length; a++) {
                if (str.substr(i, 1) == com_acento.substr(a, 1)) {
                    novastr += sem_acento.substr(a, 1);
                    troca = true;
                    break;
                }
            }
            if (troca == false) {
                novastr += str.substr(i, 1);
            }
        }
        return encodeURI(novastr.toLowerCase());
    }


    function resizeProductCard() {
        let cards = document.querySelectorAll('.product_card_body');
        let heightList = [...cards].map(card => card.clientHeight);
        let height = heightList.reduce((max, curent) => {
            return (max < curent) ? curent : max;
        }, 0);
        
        cards.forEach((card) => {
            card.style.height = height + 'px';
        });
    }


    return {
        formatAmount,
        formatURL,
        resizeProductCard,
    }
}()

