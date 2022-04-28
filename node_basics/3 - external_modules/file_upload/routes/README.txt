Ez a mappa a fájlfeltöltést és megjelenítést mutatja be. Ehhez készítettem egy kisebb web 
alkalmazást is, hogy ki lehessen próbálni. A Node alapból ezekhez nem biztosít beépített 
modulokat, ezért külső modulok segítségével lehetett megoldani. Egyrészt a multer külső modul 
lett telepítve a fájlműveletekhez, másrészt a cloudinary külső modul. A Cloudinary egy 
felhő alapú szolgáltatás, ahova bármilyen fájlt feltölthetünk, és akár egy egyedi URL-en 
keresztül megtekinteni, vagy megjeleníteni is van lehetőség. Ahhoz hogy kipróbáljuk az alkalmazást, 
mindenképpen kell rendelkeznünk egy Cloudinary fiókkal.

Beüzemelés: 
1) npm install
2) .env fájl létrehozása (MONGODB_URI, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, 
CLOUDINARY_API_SECRET)
3) index.js fájl futtatása
