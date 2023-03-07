prompt; {
    const number = '21'
    let nomeUtente = prompt('Inserisci il tuo nome');
    let cognomeUtente = prompt('Inserisci il tuo cognome');
    let colorePreferito = prompt('Inserisci il tuo colore preferito');

    if (nomeUtente && cognomeUtente && colorePreferito) {
        document.getElementById('insicurissimaPw').innerHTML = nomeUtente + cognomeUtente + colorePreferito + number
    }
}