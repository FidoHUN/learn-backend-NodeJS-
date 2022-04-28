Miután a Node és az Express összes funkcióját megismertük, itt az ideje hogy a gyakorlatban elfogadott standardokról is szó 
essen. Amikor egy tényleges alkalmazásnak készítjük az API-ját, fontos hogy a Node Community által elismert és használt design 
patternekkel dolgozzuk. Ez az egységesítés lehetővé teszi, hogy más által írt kódot könnyebben megértsük. Ugyanez visszafele is 
igaz, hiszen biztosak lehetünk benne, hogy a kódunk nem csak a mi kezünkben fog járni, így mások számára érthető, ha kell 
folytatható kódot kell írnunk, standardizált formákat kell követnünk. 

Az már egy fontos lépés volt hogy megértettük a middleware függvények hasznosságát és hogy ezeket a függvényeket érdemes külső 
fájlban tárolni és onnan beimportálni őket. Ezeket szokás egy CONTROLLER könyvtárban tárolni, ahol rendezni lehet a middleware 
függvényeket aszerint, melyik adatcsoporthoz, vagy elérési úthoz tartoznak (pl.: products.js, users.js, ...)

Az express_intermediate mappában található megoldás a kérés metódusok és az elérési utak lekezelését közvetlen a fő fájlban 
végzik. Ha követni szeretnénk a standardokat és megkönnyíteni ezen metódusok kezelését a jövőben, akkor ezeket a metódusokat is 
érdemes egy külső könyvtárból beimportálni Ezt a könyvtárat legtöbbször ROUTER-nek szokták nevezni, és a controllerekhez hasonló 
módon, a hasonló vagy ugyanazon az útvonalon lekezelt metódusokat egy javascript fájlba tenni. Használata nagyon hasonlít az 
express app használatához. Új router-t létrehozni a 
					const router = express.Router()
paranccsal lehet. Ekkor elérhetővé válnak a jól ismert router.get(), router.put(), ... metódusok. Ahhoz, hogy a szervert 
létrehozó javascript fájlunk használni tudja az elkészített routert, egy beimportálás után az 
					app.use(router) 
parancsot kell kiadni. 

Összegzésképpen így fog a kérés eljutni a végpontig, ha a könyvtár struktúrát nézzük egy egyszerű példán keresztül

server.js(router beimportálásával): a kérés metódusok meghívását a router fogja végezni
|
router.js(controller beimportálásával): a kérés metódusokok meghívásához szükséges middleware függvényeket a controller.js tartalmazza
|
controller.js

Érdekesség, hogy alapból a kérés body-ját nem érjük el a metódusokon belül, pedig nem egyszer szükségünk lenne rá. Ahhoz, hogy 
html form-ok által elküldött adatok esetén láthassuk a kérés body-ját, az
					app.use(express.urlencoded({extended: false})
parancsot kell kiadni. Ahhoz pedig, hogy a kérés body-jában lévő JSON formátumú adatokat elérjük, az
					app.use(express.json())
parancsot kell használni. Például az Axios JSON formátumban küldi el az adatok, de amúgy is legtöbbször ebben a formában
szoktak adatokat a szervernek küldeni. 

Az app.js fájl az itt leírtakra ad példát úgy, hogy az adatokat a data.js-ből nyeri ki és adatmanipulációkór nem ezen adatokat 
változtatjuk, hanem egy új adathalmazt hozunk létre és a válaszoknál ezt jelenítjük meg. Ezt csak az egyszerűség kedvéért 
készítettük el így, egy valós projektnél az adatokat nem egy külső adathalmazból, hanem egy felhő alapú adatbázisból 
kérjük le. Márészt pedig nem szűrt adathalmazokat jelenítünk meg, hanem ténylegesen elvégezzük az adatbázison az aktuális 
adatmanipulációt, majd a frissített adatokkal térünk vissza. Teszteléshez Postman program javasolt. 

Beüzemelés:
npm install
node app.js

