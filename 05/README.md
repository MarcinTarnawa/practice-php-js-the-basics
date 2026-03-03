> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s5e01-php-the-fundamentals` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` PHP: The Fundamentals

Zapoznaj się z kodem w pliku `app.js`.

Co musisz wywnioskować i naprawić:

1. Zidentyfikuj BUG 1: Zmienna orderTotal definiuje bazową kwotę do zapłaty. W kontekście tego skryptu ta wartość nie powinna ulec zmianie. Jakie słowo kluczowe zamiast let lepiej odda tę intencję i zabezpieczy zmienną przed przypadkowym nadpisaniem?

2. Zidentyfikuj BUG 2: Dlaczego na samym końcu skryptu zmienna globalna isOrderPaid to wciąż false, mimo że weszliśmy w blok if? Jak poprawnie zmodyfikować tę zmienną, aby nie przesłaniać (shadowing) oryginału?

3. Zidentyfikuj BUG 3: Zauważ, że console.log("Transaction ID:", transactionId); zadziała i wypisze ID na końcu funkcji, mimo że zmienna powstała wewnątrz bloku if. Dlaczego użycie tutaj var to niebezpieczna praktyka? Jak to napisać poprawnie (np. używając let), żeby zmienna była dostępna dla console.log, ale nie "wyciekała" znikąd przez var?

4. Zidentyfikuj BUG 4: Dlaczego console.log("Status:", paymentStatus); wypisze "Pending", a nie "Success"?


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **Wideo**, znajdziesz je na stronie [laracasts.com](https://laracasts.com/referral/bogolubow)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
