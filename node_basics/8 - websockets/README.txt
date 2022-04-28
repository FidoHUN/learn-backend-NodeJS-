A WebSocketek gondolata elég régre nyúlik vissza. A probléma a HTTP protocollal, hogy egy sikeres 
(vagy sikertelen) kliens és szerver között lezajló HTTP kérés/válasz kör után a kapcsolat a 
szerver és a kliens között megszakad addig, amíg a kliens nem küld újabb kérést. Ez a fajta 
viselkedés elég sok gátat szab. 

Tegyük fel, hogy 2 órára magára hagyjuk a facebook-ot, majd visszaülünk. Ahhoz, hogy lássam az új 
tartalmat, frissítenünk kell az oldalt. Felmerült az ötlet sok mindenkiben, hogy miért is kell 
nekem frissítenem az oldalt? Nem lenne rossz UX (User Experience) ha frissítés nélkül minden 
megjelenne. Számos megvalósítás született ezen probléma megoldására:

1) POLLING:
Lényege, hogy bizonyos időközönként (pl 5 másodpercenként) HTTP kérést küldök a szerver felé, hogy 
lekérjem a legfrisebb tartalmakat a felhasználó tudta nélkül. 

2) LONG POLLING
A Pollingot fejleszti tovább azzal, hogy csak akkor küld HTTP kérést a szerver felé, ha a szerveren 
bármiféle változást történt. 

3) WS protocol
Az előző megoldások ugyan működtek, egy probléma volt velük, hogy még mindig HTTP kérésekkel 
dolgoznak. A HTTP egyik nagy hátránya, hogy minden egyes kérésnél (és válasznál is) a Header 
is elküldésre kerül, ami információkat tartalmaz a csomag tartalmáról. Ez a Header ugyan csak 
1-2 kB-os, ha nagyon gyakran kérünk adatot a szervertől, ez nagyban lelassítja a kapcsolatot. 
Vannak olyan alkalmazások amik igenis megkívánják, hogy nagyon gyakran kerünk adatot a szervertől, 
(pl 100ms-ként) és annak az adatnak gyorsan meg is kell érkeznie. Gondolok itt a Streaming 
szolgáltatásokra. Egy új protocol jött létre a probléma megoldására, aminek alapja, hogy ha 
létrejött a kapcsolat a szerver és a kliens között azt ne bontsuk fel, hanem hagyjuk, hogy a szerver 
folyamatosan küldhesse az adatokat a kliens felé. Header-t csak a kapcsolat létrejöttének legelején 
cserélnek egymással a felek. Ezt hívják Handshake-nek. Ha a Handshake létrejött, a szerver nagyon 
rövid időközönként küld adatokat a kliens felé HEADER nélkül. (Pl: Twichen élő adást nézek). Mivel 
nincs HEADER, nincs garantálva, hogy a kliens minden csomagot megkap, sőt legtöbb esetben elég sok 
csomag elvész, de az élményt nagyban nem rontja, ha a Twich élő adásból 1-2 frame elszáll. 
Ezt az új protocolt hívják WS (WebSocket) protocolnak, és azon alkalmazások amik megkövetelik a 
low latency-t használják is. Streaming szolgáltatások, Valós idejű játékok, Üzenetküldő alkalmazások 
elengedhetetlen tartozéka. 

Ebben a mappában található egy kisebb projekt, ami egy websocket kapcsolat létrehozását 
mutatja be.

Beüzemelés: 
1) npm install
2) server.js futtatása
3) client.js futtatása, annyi terminál ablakban, amennyiben csak szeretnénk. 
