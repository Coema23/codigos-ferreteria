function convertir() {
    let letras = document.getElementById("letras").value;
    let numeros = "";
    for (let i = 0; i < letras.length; i++) {
        switch (letras[i]) {
            case "K":
                numeros += "1";
                break;
            case "A":
                numeros += "2";
                break;
            case "R":
                numeros += "3";
                break;
            case "D":
                numeros += "4";
                break;
            case "O":
                numeros += "5";
                break;
            case "E":
                numeros += "6";
                break;
            case "S":
                numeros += "7";
                break;
            case "C":
                numeros += "8";
                break;
            case "I":
                numeros += "9";
                break;
            case "L":
                numeros += "0";
                break;
        }
    }
    let resultado = "Resultado: L." + numeros.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("numeros").innerHTML = resultado;
}

const myInput = document.getElementById("letras");
myInput.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  const filteredValue = inputValue.replace(/[^KARD-OESCILkard-oescil]/g, "");
  if (inputValue !== filteredValue) {
    event.target.value = filteredValue;
  }
});