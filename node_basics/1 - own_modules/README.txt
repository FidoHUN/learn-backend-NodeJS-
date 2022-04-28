A NodeJS modulok megértése elengedhetetlen, ha tagolt és könnyen kezelhető kódot szeretnénk 
létrehozni. Segítségével elkerülhetjük azt, hogy a programunk minden eleme egy ugyanazon fájlban
legyen. Még ha függvényekre szét is tagoljuk a kódot egy fájlon belül, az sem garancia az 
átláthatóságra. Minél jobban bővül a kód, annál nehezebben lesz kezelhető. 

A NodeJS modul rendszere erre a problémára nyújt megoldást. Segítségével külső, másik fájlban 
található programrészeket (osztályokat, függvényeket, stb) importálhatunk be és használhatunk, 
mintha csak a program része lenne.  Ebben a mappában erre találunk egy nagyon egyszerű példát. 

Ha ezt a standardot követjük, kódunk nem csak könnyebben átlátható és kezelhető lesz, hanem 
mások is sokkal egyszerűbben el fognak igazodni rajta. Főleg akkor, ha bármi okból félre kell 
tenni a projektet és később újra elővenni. Egyáltalán nem biztos, hogy mi fogjuk tovább bővíteni 
a kódot. Ráadásul a létrehozott modulok újra felhasználhatóak, szóval ha szükség van rá, más 
projektbe is könnyen be lehet importálni ezeket a már megírt programrészeket.   
