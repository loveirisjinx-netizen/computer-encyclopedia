function searchContent() {
    // 1. Kunin ang input mula sa search bar
    let input = document.getElementById('search').value.toLowerCase();
    
    // 2. Kunin lahat ng cards sa page
    let cards = document.getElementsByClassName('card');

    // 3. I-loop ang bawat card para i-check kung tugma ang text
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let description = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        // 4. Kung ang tinype ay nasa Title o Description, ipakita ang card. 
        // Kung hindi, itago ito.
        if (title.includes(input) || description.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
