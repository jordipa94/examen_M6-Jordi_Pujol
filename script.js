function buscarParaulesPerCaracter() {
    // TRIM ELIMINA ELS ESPAIS ENTRE PARAULES
    const text = document.getElementById("text").value.trim();
    text.toLowerCase();
    const caracter = document.getElementById("caracter").value.trim();
    caracter.toLowerCase();
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = "";

    // El text ha de ser almenys 2 paraules
    if (text.split(" ").length < 2) {
        alert("El text ha de contindre almenys 2 paraules") ;
        return;
    }

    // El caracter nomes pot ser una lletra
    if (!/^[a-zA-Z]$/.test(caracter)) {
        alert("El caracter nomes pot ser una lletra del alfabet.");
        return;
    }

    const paraules = text.split(" "); // Separar String paraula per paraula
    let paraulesAmbCaracter = []; // String amb paraules que tenen el caracter

    paraules.forEach((paraula) => {
        const index = paraula.indexOf(caracter);
        if (index !== -1) {
            // 
            const paraulaNeta = paraula.slice(0, index) + caracter + paraula.slice(index + 1);
            paraulesAmbCaracter.push({ paraulaNeta, index: index + 1 });
        }
    });

    // Comprova si hi ha paraules amb el caracter introduit

    if (paraulesAmbCaracter.length === 0) {
        resultat.innerHTML = alert("No hi ha cap paraula amb el caracter introduit");
    } else {
        let llista = "<ul>";
        paraulesAmbCaracter.forEach((item) => {
            llista += `<li>Paraula: ${item.paraulaNeta}, Index: ${item.index}</li>`;
        });
        llista += "</ul>";
        resultat.innerHTML = llista;
    }
}