 generateCards(imagesData);

    function generateCards(cardsData) {
     const cardsList = document.getElementById('cards-list'); 
      for (let index = 0; index < cardsData.length; index++) {
         const cardData = cardsData[index];
            cardsList.innerHTML += `
         <div class="card">
                    <div class="card_image">
      <img src="${cardData[0]}"/>
</div>
      <div class="card_title">
      <p>${cardData[1]}</p>
</div>
                </div>`;
        }
    
     cardsList.onwheel = function(e) {
      e.preventDefault();
          cardsList.scrollLeft += e.deltaY;
        };
    
        cardsList.onclick = function(e) {
            const card = e.target.closest('.card');
        if (card) {
                card.classList.toggle('lolo');
            }
     };
    
        document.onkeydown = function(e) {
          if (e.key === 'Escape') {
           const activeCard = document.querySelector('.card.lolo');
                if (activeCard) {
              activeCard.classList.remove('lolo');
       }
      }
    };
    }
    
