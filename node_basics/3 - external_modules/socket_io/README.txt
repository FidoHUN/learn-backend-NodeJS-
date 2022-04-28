A websocketekről készítettem egy külön álló mappát, ahol mindent elmagyarázok róluk. Ebben a 
projektben a 'socket.io' külső JavaScript alapú modul kerül bemutatásra egy nagyon egyszerű 
pélával illusztálva. A socket.io nemcsak megkönnyíti a websocketek használatát, hanem arról is 
gondoskodik, ha esetleg a kliens böngészője nem támogatja a websocket technológiát, akkor 
automatikusan egy más módon igyekszik azt pótolni (polling vagy long polling). Illetve ha bármi 
okból a kapcsolat megszakadna a szerver és a kliens között, azt azonnal megpróbálja helyrehozni.

Ez az alkalmazás egy nagyon egyszerű üzenetküldő alkalmazást kíván prezentálni, amely nem HTTP 
protocolt, hanem WS protocolt használ a szerverrel való kommunikációra. 

Beüzemelés: 
1) npm install
2) node index.js
3) localhost:3000 meglátogatása több böngésző ablakon kersztül
