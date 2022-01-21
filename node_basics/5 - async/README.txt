A Javascript nyelv sok más nyelvvel egyetemben szinkron, ami annyit jelent, hogy a parancsok sorról sorra hajtódnak végre.
Ez a legtöbb esetben nem jelent problémát de vannak helyzetek, amikor igen. Legegyszerűbb példa a blocking_code mappában lévő
kód. A szinkronitás miatt egy felhasználó által elindított idő- vagy tárigényes feladat miatt vagy bármi más okból 
(lehet szerver oldali probléma is) az összes felhasználót blokkolja, akik az oldalra látogatnak, URL-től függetlenül. 

Ennek a problémának a megoldása érdekében u.n. callback függvényeket vezettek be, amikkel aszinkron futást idézhetünk elő. Az 
aszinkron függvények nem egyből hajtódnak végre, hanem egy u.n. callstack-be kerülnek. Ezek a callstack-be került függvények a
program végeztével kerülnek meghívásra. Ebből is látszódik, hogy callback függvényekben érdemes nagy művelet-/időigényű
programrészeket írni. Ezzel a megoldással egy felhasználó nem fogja blokkolni a többi látogatót, hiszen amíg az ő háttérfeladata
a callstacken helyezkedik el, a többi felhasználó elérheti az oldal tartalmát. Miután ennek vége és az oldal tartalma vagy alap 
funkcionalitása mindenkinél elérhető, után következik a callstack és kezdhetjük végrehajtani az idő-/tárigényesebb feladatokat.
NodeJS-ben a callstack-ért az u.n. Event Loop felel.