Ez a kisebb projekt azt prezentálja, hogyan lehet email-t küldeni NodeJS-en keresztül. Mivel ez a 
funkció szintén nem található meg a beépített modulok között, külső modul segítségét kell hívnunk. 
A Mailjet egy felhő alapú e-mail kézbesítési rendszer, amelyhez készítettek külső NodeJS modult is. 
Ahoz, hogy használni is tudjuk, a nodemailer külső modulra is szükségünk lesz, aminek segítségével 
hozzáköthetjünk alkalmazásunkhoz a Mailjet e-mail küldő szolgáltatását az azonosítás után. 
Az azonosításhoz mindenképpen szükségünk lesz egy Mailjet fiókra, hogy megkapjuk az api kulcsot 
és az api titkosítót. Ha ezeket az adatokat megadjuk a nodemailer modulnak és túljutottunk a 
beazonosítási folyamaton, az e-mail küldés elkezdődhet. 

Beüzemelés: 
1) npm install
2) .env fájl létrehozása (MAILJET_API_KEY, MAILJET_API_SECRET)
3) mail.js fájl futtatása
