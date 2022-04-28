A NodeJS egyik alap építő eleme az 'event'-ek. Ezek olyan függvények, amelyek különböző események 
hatására kerülnek meghívásra. Akik jártasak a JavaScript világában, biztosan tudják, hogy a 
böngészőknek is rengeteg beépített eseménye van.  
Ilyen események például az 'onclick', mikor egérrel kattintunk, vagy például az 'onmousemove', 
amikor az egeret mozgatjuk, vagy az 'onscroll', amikor görgetünk, stb... Ezekre az eseményekre van 
lehetőségünk feliratkozni és kódrészeket futtatni abban az esetben, ha ezek az események 
bekövetkeznek. Kliens oldali JavaScript esetében erről a böngésző felel. 

Ugyanezen az alapon NodeJS-ben is van lehetőségünk eseményekre feliratkozni. Legegyszerűbben ezt 
egy nagyon egyszerű szerver létrehozásával lehet prezentálni. Futassuk a 'myFirstServer.js' fájlt 
terminálban a node myFirstServer.js parancs segítségével. Először nem fogunk semmit észrevenni, 
pedig valójában elkészítettük az első szerverünket ami az 5000-es porton folyamatosan fut. Ha a 
böngészőbe beírjuk a localhost:5000 szöveget, akkor egy 'Hello' üzenet fog minket fogadni. Ez 
azért lehetséges, mert a NodeJS-be alapból beépített server modulnak van egy előre elkészített 
'request' eseménye, amely minden alkalommal lefut, ha a server egy böngészőn keresztüli kérést 
kap. Nagyon leegyszerűsítve a világon működő összes webserver így működik, folyamatosan futnak 
különböző server parkokban csak azért, hogy a facebook éjjel-nappal elérhető legyen a világ 
bármely pontjáról. 

A NodeJS lehetőséget biztosít arra is, hogy saját eseményeket készítsünk. Ez a 'myEvent.js' 
fájlban kerül bemutatásra. Egyszerűnek tűnik, a valóságban viszont eléggé fontosak, hiszen sok 
beépített modul tartalmaz hasznosabbnál hasznosabb beépített eseményeket. Mindig érdemes ezekről 
a dokumentációkban tájékozódni. 
