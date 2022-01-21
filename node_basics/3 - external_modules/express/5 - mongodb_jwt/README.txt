Ez a projekt tartalmazza az eddigi legtöbb újdonságot. Egyrészt a szerverünk nem példa adatokon dolgozik, hanem egy felhő alapú 
adatbázissal, a MongoDB-vel van összekötve. Amellett, hogy felhő alapú, előnyös még hogy nem táblákat és rekordokat 
tart számon, hanem egy adatbázis JSON formátummal ellátott, u.n. dokumentumokat tárol. Annyira szabad kezed ad a MongoDB, hogy 
akár az egy adatbázison belüli dokumentumok struktúrája teljesen eltérhet. Ennek biztos megvan néhány speciális esetben a maga 
előnye, de ha mi szeretnénk ezeknek a dokumentumoknak egy követendő struktúrát adni, erre is van lehetőség. A models mappában 
található egy MongoDB Séma. Az adatbázisba felvitt adatoknak mindenképpen tartalmaznia kell legalább a megkövetelt adattagokat, 
különben az adatfelvétel sikertelen lesz. Amennyiben több, nem odaillő adattagok is bekerülnek a JSON fájla feltöltéskor, a 
mongoDB ezt az esetet is lekezeli nekünk. Egész egyszerűen a sémában nem szereplő adattagok nem kerülnek beillesztésre. Minden 
újonnan beillesztett dokumentum kap egy egyedi azonosítot is, anélkül, hogy ez a sémában szerepelne. Az adatbázishoz való 
csatlakozás is egyszerűen van megoldva. Adatbázis létrehozásakor kapunk egy csatlakozási string-et a mongoDB-től, amit ha 
átadunk a mongoDB saját mongodb.connect() függvényének, akkor léterjön a kapcsolat a felhő és a szerverünk között. Egy jó 
programozási módszer, ha a szervert csak a sikeres csatlakozás esetén indítjuk el. 

Ebben a projektben még használatra kerül a JWT is(JSON Web Token). Ez a felhasználó hitelesítés egyik módja, amit előszeretettel 
ajánlanak és használnak Node fejlesztők. Lényege, hogy például egy sikeres bejelentkezés esetén egy visszafejthetetlen, egyedi 
tokent adjunk a felhasználónak, amivel az alkalmazás védett részeit elérheti. Egy HMAC nevű algoritmus egy objektumban várja a 
frontendnek küldendő adatokat és egy a programozó által megadott Token Secret-et segítségével egy nagyon hosszú (100+ karakter)
karaktersorozatot ad vissza random kis- és nagybetűkből és számokból. Gyakorlatilag visszafejthetetlen, ha jól 
biztonságba helyezzük a Token Secret-et. Ha szükséges, a Token Secret alapján vissza lehet fejteni a tokenből a frontendnek 
elküldött adatokat, ezzel akár validálni is lehet a felhasználót. Ezen token megléte KÖTELEZŐ, ha a felhasználó bármilyen 
endpoint-ot is el akar érni. Magyarul nem lehet többé a hackereknek egyszerű SESSION változókkal belépni, vagy direkt URL-el 
endpoint-ot elérni, mindenképpen meg kell szerezniük a jelszót ahhoz, hogy egy valid tokent kapjanak. 

Emellett még újdonság, hogy a projekthez frontend is társul. Így most nem Postman segítségével teszteltünk endpoint-okat, hanem 
egy nagyon egyszerű példa alkalmazás is el lett készítve, amely a szerverünk által üzemeltetetett api-t használja. Az alkalmazás 
maga egy bejelentkezési felületet tartalmaz, ami sikeres belépés után egy JSON Web Tokent ad a felhasználónak, amit a böngésző 
local storage-ba mentünk le. A bejelentkezési form alatt egy gomb is található, ami egy olyan endpoint-ot aktivál, ami csak 
a token megléte esetén ad vissza értéket. A gombon a 'what is the meaning of life' felirat olvasható, szóval ha megszeretnénk 
tudni az élet értelmét, mindenképpen szükségünk lesz arra a tokenre. 

Beüzemelés:
npm install
.env fájl létrehozása (MONGODB_URI, PORT, JWT_SECRET)
node app.js