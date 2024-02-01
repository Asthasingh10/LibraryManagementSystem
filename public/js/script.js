(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


function searchBooks() {
        var input, filter, cards, cardTitle, i;
        input = document.getElementById("searchTxt");
        filter = input.value.toUpperCase();
        cards = document.getElementsByClassName("card");
        for (i = 0; i < cards.length; i++) {
            cardTitle = cards[i].getElementsByClassName("card-title")[0];
            if (cardTitle) {
                if (cardTitle.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
        }
    }
document.getElementById("searchTxt").addEventListener("input", searchBooks);


function showAlert() {
  alert('Are you sure to Delete this button? ');
}


timer();
function timer(){
  let blink=document.getElementById("blink");
  blink.style.opacity=blink.style.opacity == 0 ? 1 : 0;
  setTimeout(timer,500);
}