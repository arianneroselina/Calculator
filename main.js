window.onload = function () {
    var total = document.getElementById('total');
    var buttons = [document.getElementById('a1'), 
                document.getElementById('a2'), 
                document.getElementById('a3'), 
                document.getElementById('a4'),
                document.getElementById('a5'),
                document.getElementById('a6'),
                document.getElementById('a7'),
                document.getElementById('a8'),
                document.getElementById('a9'),
                document.getElementById('a0'),
                document.getElementById('adiv'),
                document.getElementById('amul'),
                document.getElementById('asub'),
                document.getElementById('aequal'),
                document.getElementById('aadd'), 
                document.getElementById('acomma')];

    /*document.getElementById('a1').onclick = function() {
        if (total.innerHTML == 0) {
            total.innerHTML = "1";
        } else {
            total.innerHTML += "1";
        }
    }*/

    function changeNumber(button) {
        if (total.innerHTML == 0) {
            total.innerHTML = button;
        } else {
            total.innerHTML = total.innerHTML + button;
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = changeNumber(buttons[i]);
    }
}