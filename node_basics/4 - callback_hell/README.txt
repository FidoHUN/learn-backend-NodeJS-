A callback függvények fontosságát már áttárgyaltuk. Egy hasznos példa található erre a 2_node_modules mappában, ahol a fájlból 
olvasást és fájlból írást callback függvények végzik. A kód helyes, működőképes, viszont az egymásba ágyazott callback 
függvényektől, amik egymás befejezésére várnak a kód lassan olvashatatlanná válik, pedig csak 3 parancsról beszélünk. Ezt 
nevezik callback hellnek. 

Annak érdekében hogy ugyanezt a funkcionalitást olvashatóbb kóddal vigyük végre hozták be az aszinkron függvényeket (2015). 
Ennek lényege hogy ha async jelzővel látjuk el függvényünket, a callback függvényt tartalmazó kódrészeket az await kulcsszóval
bevárhatjuk. Ezzel jelezvén, hogy az adott kódrész a callstackbe kerül és csak akkor fut le, ha a program maga végzett. Változás 
annyi történt, hogy ez csak olyan függvényeknél működik, amik Promise-al térnek vissza.

Végül is eddig is ezt csináltuk, egymásba ágyaztuk a egymást bevárni kényszerülő kódrészeket. Akkor mégis miért jobb ez a 
módszer? Ebben az esetben szintaktikailag nem kell az await parancsokkal ellátott függvényeket egymásba ágyaznunk, egymás után 
írhatjuk őket és a NodeJS fordító ezzel pontosan tudni fogja, hogy addig nem léphet át a következő függvényre amíg az előző nem 
végzett. Ez kifejezetten fontos adatbáziskezelésnél. Ha megengednénk hogy egymással párhuzamosan fussanak a lekérdezések, 
elképzelhető hogy egy adatlekérés hamarabb fut le az adatbázisban mint például egy beillesztés, így a program idő előtt
befejezni a működést, pedig még beillesztés nem is végzett. Ezzel a módszerrel szabályozni tudjuk a függvények sorrendjét, tehát 
egy megoldás lehet az előző problémára, hogy aszinkron függvényeket használunk és az await kulcsszó segítségével szabályozzuk, 
hogy az adat beillesztésnek mindenképpen le kell futnia még mielőtt az adatlekérésbe belekezdenénk.

A Promise-ok és az async-await kulcsszavak használatával elkerülhető a 'callback hell' és 
sokkal átláthatóbb kódot kapunk eredményül, miközben a funkcionalitás változatlan marad.
