Webeszervereknél gyakori eljárás, hogy különböző elérési utakhoz különböző funkciót társítunk, 
vagy más tartalmat jelenítünk meg. Ezt a 'server.js'-ben található példa szemlélteti. Vannak 
helyzetek, amikor vagy egy időigényes számítás miatt, vagy egész egyszerűen egy lassú internet 
kapcsolat miatt nem tölt be azonnal az oldal. Ha kipróbáljuk a scriptet és meglátogatjuk a 
localhost:5000/pricing oldalt, lehet látni hogy az oldal csak teker de nem tölt be semmit. Ez a 
'/pricing'-hoz csatolt hosszú for ciklus miatt van, ami egy időigényesebb feladatot próbál meg 
imitálni. Most jön az érdekes rész... Ha egy másik lapon meglátogatjuk mondjuk a főoldalt, az is 
tekerni fog csak, nem fogja tudni betölteni a tartalmat. 

Ennek oka, hogy egy időigényesebb felhasználó éppen használja a scriptet és mivel még nem végzett, 
blokkolja ezzel a forgalmat. Ez így nyílván nem maradhat. Szerencsére nem kell lemondanunk emiatt 
az időigényesebb funkciókról, hiszen erre is gondolnunk kell. Erre a problémára vezette be a Node 
a worker_threads megoldás, aminek a segítségével magunk indíthatunk egy külön szálat az 
időigényesebb feladatoknak. Erre egy működő  példát a worker_threads mappa tartalmaz. A trükk az 
egészban csak annyi, hogy aki ezt az időigényesebb funkciót akarja használni, annak biztosítunk 
egy új szálat. Így amíg ez a felhasználó tartalma tölt, a többiek is tudják használni az oldalt. 

Ha kipróbáljuk a javított verziót az vehető észre, hogy a '/pricing' meglátogatása ugyancsak 
időigényes és nem tölt be egyből, viszont ezúttal ha egy másik lapon meglátogatom mondjuk a 
főoldalt, azonnal be fog tölteni, hiszen mostmár nem egy szálon vagyok az időigényesebb 
felhasználóval, neki indítottunk egy teljesen külön szálat. 
