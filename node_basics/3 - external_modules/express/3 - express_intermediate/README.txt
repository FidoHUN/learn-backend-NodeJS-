Az express_basics mappát befejezve már elég sok hasznos eszközzel találkoztunk express-ben, amivel a legtöbb szerver-oldali 
feladatunkat elvégezhetjük, legyen szó arról ha kész html weboldalt kell visszaküldenünk, vagy csak néhány adatot. A kérésekkor 
elvégzendő parancsokat eddig a közvetlen a kérés metódus callback függvényébe írtuk, amivel nincs semmi baj, de van egy ennél 
jobb módszer. Middleware függvény egy olyan függvény, amely meghívható a Request - Response ciklus között. Eddig 2 paraméterrel 
dolgoztunk mikor kérés metódusokkal dolgoztuk, azonban a két paraméter KÖZÉ, harmadik paraméterként megadható egy middleware 
függvény is, amely a kérés bekövetkeztével lefut és átadja a vezérlést a kérés metódus callback függvényének. 

Ennek a megközelítésnek számtalan előnye van. A legszembetűnőbb hogy olvashatóbb és karbantarthatóbb kódot kapunk. De azért ne 
menjünk el amellett se hogy ezek a middleware függvények többször is felhasználhatóak, bármelyik kérés metódusban meg lehet 
hívni őket, amivel a kódismétlés elkerülhető. 

Ha még egy szintet lépni szeretnénk a middleware használatban és nem szeretnénk minden egyes elérési úthoz beírni a függvény 
nevét, az app.use() metódust pont erre találták ki. Ha két paraméteresen szeretnénk használni akkor első paraméterként 
megadhatunk egy elérési utat, amire a middleware-t futtatni szeretnénk. A második paraméter maga a middleware neve. Ha csak egy 
paraméteresen megadjuk a middleware függvény nevét, akkor az összes elérési útra meg fog hívódni a függvényünk. Fontos, hogy 
lehetőleg a kód elejére helyezzük el ezt a parancsot ha csak lehet, hiszen ha ezen parancs előtt már lekezeltünk egy elérési 
utat, arra nem fog meghívódni. Amennyiben több middleware függvényt is futtatni szeretnénk, erre is van lehetőség. A middleware 
függvény megadása helyett egy tömböt is átadhatunk paraméterként ezeknek a metódusoknak, amik a meghívandó függvények nevét 
tartalmazzák. A sorrend fontos, hiszen amilyen sorrenbe teszzük bele ezeket a függvényket a tömbbe, olyan sorrendben fognak 
egymás után meghívódni. A még könnyebb kezelhetőség érdekében érdemes ezeket a middleware függvényeket egy külön js fájlban 
tárolni és beimportálni. 

Saját magunk által megírt middleware függvények mellett használhatjuk az express beépített middleware függvényeit (ilyen volt a 
					app.use(express.static('./webpage'))
is) Emellett npm segítségével bármilyen harmadik féltől származó csomagokból is használhatunk middleware függvényeket. Ha nem 
muszáj nem kell újra feltalálni a kereket.  

Beüzemelés:
npm install
node app.js