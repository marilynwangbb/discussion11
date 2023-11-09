
    function challenge1(element) {
        if (element.checked == true){
            document.querySelector('#emailDiv').style.display = "block";
        }
        else {
            document.querySelector('#emailDiv').style.display = "none";
        }
    }

    function challenge2(){
        if (document.querySelector('#sameAddress').checked == true){
        document.querySelector('#home').value = document.querySelector('#bill').value;}
        document.querySelector('#home').setAttribute('#bill',"");
    }

    document.querySelector('#sameAddress').addEventListener('click', challenge2);





