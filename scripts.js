function get_ano() {
    ano_sistema = new Date().getFullYear()
    ano_span = document.getElementById("ano")
    ano_span.innerHTML = ano_sistema
}

get_ano()