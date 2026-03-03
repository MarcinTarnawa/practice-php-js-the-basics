let isOrderPaid = false;

// BUG 1: 
// Zastanów się nad typem deklaracji poniższej zmiennej,
// zakładamy, że cena nie będzie ulagać zmienie
let orderTotal = 100;

function processPayment(paymentAmount) {
    let paymentStatus = "Pending";

    if (paymentAmount >= orderTotal) {
        // BUG 2: Próbujemy zaktualizować globalną flagę
        let isOrderPaid = true; 

        // BUG 3: 
        // Tworzymy lokalny identyfikator transakcji,
        // który ma być ustawiony po przesłaniu odpowiedniej kwoty
        var transactionId = "TXN-999888"; 
        
        // BUG 4: Próbujemy zaktualizować status płatności
        let paymentStatus = "Success"; 
    }

    console.log("Status:", paymentStatus);
    console.log("Transaction ID:", transactionId);
}

// Symulujemy wpłatę 100
processPayment(100);

console.log("Is order paid? (global):", isOrderPaid);