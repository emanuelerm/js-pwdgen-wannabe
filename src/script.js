prompt; {
    const number = '21'
    let nomeUtente = prompt('Inserisci il tuo nome');
    let cognomeUtente = prompt('Inserisci il tuo cognome');
    let colorePreferito = prompt('Inserisci il tuo colore preferito');

    if ((isNaN (nomeUtente)) && (isNaN (cognomeUtente)) && (isNaN (colorePreferito))) {
        document.getElementById('insicurissimaPw').innerHTML = nomeUtente + cognomeUtente + colorePreferito + number
    } else {
        document.getElementById('insicurissimaPw').innerHTML = 'Inserire i dati correttamente'
    }
}