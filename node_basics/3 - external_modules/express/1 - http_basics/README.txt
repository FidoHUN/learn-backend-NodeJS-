Mi is az az internet? Hogyan érhetjük el? Hogyan működik? Ezekkel a kérdésekkel tisztában kell lennünk ha backenddel szeretnénk 
foglalkozni. 

Az internet nem más mint egy hatalmas hálózat, ahol számítógépek vannak összekötve egymással a világ több pontján. Ezek a 
számítógépek legtöbb esetben nem személyi számítógépek, csupán adattárolók, vagy más néven szerverek. Ettől függetlenül 
ugyanolyan számítógépek mint egy személyi számítógép vagy egy okostelefon. Az internet maga egy hatalmas, összefüggő hálózat, 
ami lehetőséget biztosít arra, hogy az összes adattárolót, vagy szervert elérjük. Amennyiben sikeresen felcsatlakozunk erre az 
internet nevezetű gigahálózatra, a rajta lévő összes adatot elérjük, hiszen mostmár egy hálózatra kerültünk az összes adattároló 
számítógéppel. 

Hogyan tudunk eszközünkkel erre a gigahálózatra felcsatlakozni? Egy gateway segítségével. Legyen egy vezetékes modem vagy egy 
vezetéknélküli router, funkcióját tekintke egy és ugyanaz. Egy gateway, aminek segítségével eszközünk rácsatlakozhat erre az 
internet nevű gigahálózatra. A mi számítógépünk nem képes kapcsolatot létesíteni az internettel, de a gateway igen. És ha a mi 
eszközünket sikeresen összekötjük, azaz egy hálózatra kötjük ezzel a gateway-el, elérhetővé válik számunkra az inernet.

De hogyan jelenik meg a számítógépünkön az a rengeteg adat amit valahol a világ másik pontján egy szervergép tárol? Csomagok, 
vagy angolosan package-ek segítségével. Amikor mi felkeresünk egy weboldalt, azzal egy KÉRÉS-t intézünk a gateway felé. Ezt a 
kérést rengeted kis package-ként kell elképzelni, ami 3 adatot tartalmaz. Egyrészt a küldő fél MAC címét (minden számítógép 
rendelkezik egy MAC címmel, ez a számítógép egyedi azonosítója), magát a package tartalmát, illetve a cél számítógép MAC címét. 
Ha hálózatoknál maradunk, ez a kérés továbbítódik a gateway-től az internet felé, a logikája ugyanaz, a package tartalma nem 
változik, csak a MAC címek. Amennyiben a hálózat sikeresen létrejött és stabil, a package sikeresen eljut a kért adatokat 
tartalmazó számítógéphez. A számítógép pedig visszaküldi a VÁLASZ-t ugyanúgy package-ek formájában, ami ugyanezen az 
útvonalon, MAC címről MAC címre vándorolva végül eljut a mi gateway-ünkre, majd a mi számítógépünkre.

Most egy kicsit tekintsünk el a hálózatokról és vizsgáljuk meg a böngésző szemszögéből ezt a KÉRÉS-VÁLASZ ciklust. 

Minden kérésnek van egy metódusa (Method), egy URL-je, egy fejléce (Headers) és tartalma (Body) Több féle metódus létezik. 
A legfontosabbak a GET, PUT, POST, DELETE. GET = Adatlekérés, PUT = Adatmódosítás, POST = Adatfelvétel, DELETE = Adattörlés. 
Az kérés URL-jénél az elérési utat kell megadni, amire a meódus vonatkozik. A fejlécbe a tartalomra vonatkozó hasznos 
információkat szoktak tenni. A tartalomba pedig adatokat tesznek, ha van rá szükség. Nyílván egy GET
request esetében nem kell kitölteni a Body-t, hiszen csak adatokat kérek le, de minden más metódusnál igen! Például egy 
regisztráció esetében már el kell küldenem egy POST request Body-jába az adatbázisba beillesztendő felhasználónevet és jelszót. 
Például a GET https://hu.wikipedia.org/wiki/Kezdőlap a magyar wikipedia kezdőoldalát jeleníti meg nekem, 
        a POST https://facebook.com/register {username: 'Fido', password: '123456'} a facebooknak jelzi, hogy a Body-ban 
            lévő adatokkal valaki regisztrálni szeretne, adatot szeretne felvinni a facebook adatbázisába.

Minden kérést kötelesek vagyunk lekezelni és valamiféle választ küldeni rá. Egy válasz a következőkből áll: 
Státusz kód (Status code), státusz szöveg (Status text), fejléc (Header), Tartalom (Body). A státusz kód a kérés sikerességét 
jelzi vissza kód formájában. Leggyakrabban előforduló kódok: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, ... A státusz 
szöveg a státusz kód szövegbeni megfelelője. A fejléc hasznos információkat tartalmaz a válasz tartalmáról. Leggyakoribb a 
Content-Type: text/html fejléc. Ezzel azt jelezzük, hogy a válasz Body-jában HTML kód szerepel, amit a böngésző értelmezni tud. 
(Például: Wikipédia kezdőoldal). Másik gyakori fejléc a Content-Type: application/json. Ezzel azt jelezzük, hogy nem 
megjelenítendő kész weboldalt küldünk vissza, hanem adatot, méghozzá JSON formátumban. Ezt nyilván még nem jeleníthetjük meg 
így nyers formában, de a kliens ezeket az adatokat legalább megkaphatja és tovább tud velük dolgozni, számolni, vagy ha azt 
kell, akkor valamilyen köntösben megjeleníteni. A JSON formátumot Javascript objektum formátumban kell elképzelni, mint amit 
a facebookos példánál is láthattunk. {username: 'Fido', password: '123456'} A Body-ban maga a válasz tartalma található. 
A kéréssel ellentétben a válasznak már kötelező Body-t tartalmaznia!