Ez a projekt az eddig megszerzett tudásra épül. Ennek köszönhetően egy teljesen funkcionális, felhővel összekötött API-t 
(Application Programming Interface) hoztam létre. Tartalmaz mindent, ami elengedhetetlen egy letisztult, újrafelhasználható és 
könnyen bővíthető kódhoz. A program 3 fő alkotóeleme az endpointok lekezelése, az adatbázis műveletek, illetve maga a fő egység 
(adatbázis csatlakozás, szerver futtatás). Tartalmaz ezen kívül egyedi hibakezelési osztályokat, Modellbe beépíttett 
függvényeket és eventeket, illetve middleware függvéyeket, amelyeket vagy minden esetben használunk (eror-handler), vagy csak 
speciális esetekben (user authentication a job endpointokhoz). A könnyebb átláthatóság érdekében 

Beüzemelés:
npm install
.env fájl létrehozása (MONGODB_URI, PORT, JWT_SECRET_KEY, JWT_EXPIRATION_DATE)
npm start

Tesztelés:
Postman program segítségével