---
number headings: auto, first-level 1
---
#Info 
# 1 Python
Ist eine universell nutzbare, üblicherweise interpretierte, höhere Programmiersprache. Das heißt, man kann sie für unterschiedliche Probleme auf unterschiedlichen Plattformen (PC, Smartphone, etc.) einsetzen und sie wird direkt Zeile für Zeile ausgeführt.

Wir verwenden die Entwicklungsumgebung Thonny und das Tutorial der Universität Waterloo, Kanada.
# 2 Variablen
Variablen sind Speicherorte für verschiedenste Datenwerte. Wir können sie uns als Schubladen vorstellen, die einen Namen haben und in denen beliebig viele zugeordnete Versionen eines Objekts liegen.

Jede Variable hat einen Datentyp, der mittels Deklaration zugewiesen wird und einen Wert, der mittels Initialisierung zugewiesen wird. Nett: Die Deklaration macht Python automatisch.
```python
x = 27
name = "Jochen"
x = x - 42
```
Regeln für Variablenbezeichnung

- Keine Zahlen, Sonderzeichen
- Nichts schon Vorhandenes
- Keine Keywords

- Aussagekräftige Namen
- Camelback-Schreibweise, erstes Wort klein, dann jedes neue Wort groß (tempAußen)
- Umlaute ausschreiben

Es sind auch mehrere Zuweisungen in einer Zeile möglich mit  ,  getrennt
```python
x,y = y,x
```

# 3 Fehler 
Wir  unterscheiden drei Fehlerarten:
- Syntaxfehler (Fehler bei der Schreibweise)
- Laufzeitfehler (Zugriffsfehler bei der Ausführung des Programms)
- Logikfehler (inhaltliche Fehler)
# 4 Turtle-Grafik
Ist eine Bibliothek (Sammlung von Funktionen) in Python zum einfachen Zeichnen von Grafiken. Man steuert eine „Schildkröte", also einen Punkt in einem Fenster, der eine Richtung besitzt und eine Linie hinterlässt. Zum Einbinden der Bibliothek schreibt man an den Anfang der Pythondatei:
```python
from turtle import *
```

| Befehle:                  |                                                                                                          |
| :------------------------ | :------------------------------------------------------------------------------------------------------- |
| forward(pixel), fd(pixel) | Gehe um Pixellänge in Blickrichtung                                                                      |
| Pendown(), pd()           | Stift anschalten                                                                                         |
| left(winkel), lt(winkel)  | Drehe um Winkel (in Grad) nach links                                                                     |
| penup(), pu()             | Stift ausschalten                                                                                        |
| right(winkel), rt(winkel) | Drehe um Winkel (in Grad) nach rechts                                                                    |
| shape(„turtle“)           | Form auf Schildkröte                                                                                     |
| speed(geschwindigkeit)    | Bewegungsgeschwindigkeit auf:<br>- 1...langsamste<br>- 6...normal<br>- 10...schnell<br>- 0...schnellsten |
| delay()                   | Verzögerung                                                                                              |
# 5 Variablentypen
Der Datentyp einer Variable gibt an, welche Art von Daten in ihr gespeichert werden.
•	integer		ganze Zahl 		int
•	float 		Gleitpunktzahl		float
•	string		Zeichenkette		string
•	boolean	Wahrheitswert		bool
In python muss der Datentyp nicht zugewiesen werden. Datentypumwandlung erfolgt als Fkt.:
```python
int(„283“)
```
# 6 Eingabe
```python
input()
```
# 7 If
dient der Verzweigung in einem Programm in Abhängigkeit von einer Bedingung. Dabei werden Anweisungen nur dann ausgeführt, wenn diese Bedingung erfüllt ist. Mit $else$ können auch Anweisungen ausgeführt werden, wenn diese Bedingungen nicht erfüllt ist. MIt $elif$ können weitere Bedingungen abgeprüft werden, falls die erste Bedingung nicht erfüllt ist
```python
if <<Bedingung1>>:
	<<Anweisungen>>
elif <<Bedingungen>>:
	>>Anweisungen>>
...elif... Weitere elif möglich
else:
	<<Anweisung>>
```
## 7.1 Vergleichoperatoren
== Wert ist gleich
<   kleiner
$>$  größer
<= kleiner gleich
$>$= größer gleich
!= ungleich

Bsp.
```python
age = int(input())
if age >= 18:
   print("You can vote")
elif 0 <= age <=17:
   print("Too young to vote")
else:
   print("You are a time traveller")
```
# 8 Zeichenketten (strings)
Sind Listen von Buchstaben. Die Zeichen werden mit Indizes 0 bis (len -1) durchnummeriert.
Mit \[ ] kann auf eine einzelne oder mehrerer Zeichen zugegriffen werden.
```python
name = "Hello world"

print(name[0])   - H
print(name[1:3]) - al
print(name[:4])  - Hall
print(name[7:])  - elt
print(name[-1])  - t
```
Weitere wichtige Befehle:
```python
len(str)
str1 + str2
str * n
ord(Zeichen)  
chr(Zahl)
```
# 9 Schleifen
**while**
 Mit  Hilfe  der while Schleife werden Anweisungen in Abhängigkeit einer vorab zu prüfenden Bedingung solange durchgeführt, bis diese Bedingung nicht mehr erfüllt wird
```python
while a<n:
	print(a**2)
	a += 1
```
**for**
Bei der for schleife (Zählschleife) durchläuft eine Variable einen Zählbereich für den Anweisungen ausgeführt werden.
```python
for i in range(0, 100, 2)
	print(f"{i} Schäfchen")
```
Anstatt range können auch Listen, strings und Dictionariels verwendet werden

**break continue**
break bricht die gesamte Schleife ohne weiter Anweisungen ab
continue bricht den aktuellen Durchlauf ab und startet den nächsten
# 10 Entwurf von Programmen
## 10.1 Kommentare
dienen dazu Code für andere Nutzer verständlich zu machen. In Python können wir am Ende einer Zeile einen Kommentar mit # einleiten.

Für einen guten Entwurf sind Kommentare in folgenden Fällen zu setzen:
- Erstellen einer Variable
- Erstellen einer Funktion
- Initialisierung einer Schleife oder Abfrage
- bei komplexen Aufrufen und mathematischen Formeln

Nicht notwendig sind Kommentare in folgenden Situationen:
- einfache Ausgaben
- einfache Zuweisungen

```python
x=0                  # Erstellen einer Zaehlvariable, Start bei 0
while x<=10:         # Erstellen einer Schleife, Abbruch bei x>10
	print(x)
	x+=1
```
Mit Kommentaren lässt sich Code auch strukturieren (Kopfzeile, Trennzeile zwischen Funktionen, etc.)
## 10.2 Struktogramme
sind eine vereinheitlichte Darstellung von Programmen bzw. Algorithmen.
Für verschiedene Kontrollstrukturen gibt es Darstellungen innerhalb eines rechteckigen Schemas
# 11 Funktionen
Funktionen sind Programmteile, die dazu dienen Programmabläufe zu vereinfachen und Variablen zu organisieren.

Aufbau:
```python
def <Funktionsname>:
	<Anweisung>
	return <Rückgabe> #optional
```

Hinweise:
- Rückgabewert ist optional, Funktionen ohne Rückgabewert nennt man auch Prozedur
- In der Parameterliste können so genannte Defaultwerte eingegebenen werden
  Hiermit kann die Funktion nur mit den Parametern `a,b` aufgerufen werden, der Winkel ist dann immer 90°. Sie kann aber auch mit den Parametern `a,b,gamma` aufgerufen werden, wenn ein spezieller Winkel gesucht ist
  Achtung: Defaultwerte werden immer von hinten aufgebaut.
	```python
	from math impoort *
	def dreiecksfläche (a,b,gamma=90)
		return a*b*math.cos(gamma)
	```
- Variablen, die innerhalb einer Funktion initialisiert und deklariert werden, existieren nur innerhalb des Funktionsbereichs. Es sind sogenannte lokale Variablen. Dies gilt auch, wenn sie die selbe Bezeichnung wie Variablen außerhalb haben. Es wird dann eine gleichnamige Variable erstellt, die nach dem Abschluss der Funktion wieder freigegeben wird. Danach steht der ursprüngliche Bezug wieder zur Verfügung
- Will man auf die globale Variable zugreifen und diese auch verändern, so muss man dies mit `global <Variablenname>` kennzeichnen. 

```python
def hypotenuse(a, b):
   return (a**2+b**2)**0.5
```
# 12 Programmtest
Um ein Programm zu testen, geben wir in der Leistungsbewertung die Eingabe und Ausgabe von in der Regel drei verschiedenen und markanten Eingaben

Test1:
Aufruf:
```python
dreieck(90,120,75)
```
Ergebnis / Ausgabe:
- Ausgabe aus Shell oder
- Screenshot von Turtle 

das ganze dreimal 

Wichtig:
- Falls mehr oder weniger Test verlangt werden, muss es in der Aufgabenstellung stehen
- ansonsten immer 3
- Der Operator hierfür ist: Teste dein Programm und dokumentiere den Test
- Der Test bringt immer Punkte in der Leistungsbewertung, auch wenn das Programm nicht funktioniert

Übung:
```python
from turtle import *    # Importieren von turtle für die grafische Darstellung
import time             # Importieren von time für die Verzögerung am Ende

speed(0)                
fillcolor("red")        

def blume(a):            # Definition der Funktion blume; a ist der Radius der Blütenblätter
    for i in range(8):  # Schleife mit 8 Iterationen, um 8 Blütenblätter zu zeichnen
        begin_fill()
        circle(a, 90)
        lt(90)
        circle(a, 90)
        end_fill()
        lt(135)

blume(50)               # TEST: Aufruf der Funktion blume,mit Radius 50
time.sleep(5)
```
Test:
Aufruf:
```python
blume(100)
```
Ausgabe:
![[Pasted image 20260319123619.png]]
# 13 Listen
sind in Python geordnete Sammlungen von Variablen. Dabei können sie auch verschiedene Datentypen enthalten und eine "beliebige" Länge haben.
Aufbau von Listen:
```python
Liste = [Element0, Element1, Element2,...]
```
Zugriff auf Listen mit Index:
```python
Liste[0] #erstes Element
Liste[-1] #letztes Element
Liste[1] #zweites Element
Liste[-2] #vorletztes Element

L = [[1,2,3],
     [2,4,5],
     [7,8,9]]
print(L[O][2]) # -> 3
```
## 13.1 Operationen mit Listen

| Operation              | Bemerkung                                            |
| ---------------------- | ---------------------------------------------------- |
| Liste1 + Liste2        | Zusammenfügen(Konkatenation) von Listen              |
| Liste*n                | konkateniert die Liste n-Mal iteriert hintereinander |
| len(Liste)             | Länge der Liste                                      |
| max(Liste), min(Liste) | Maximalwert, Minimalwert                             |
| sum(L)                 | Summe aller Elemente                                 |
| L[a:b]                 | Teilliste von a bis b-1                              |
| L[a:b:n]               | Teilliste mit Schrittweite n                         |
| L[:b]                  | Teilliste bis b-1                                    |
| L[a:]                  | Teilliste ab a                                       |
| L[::-1]                | umgekehrte Liste                                     |
| L.index(X)             | Index erstes Auftreten von X                         |
| L.count(X)             | Anzahl von X in Liste                                |
| L.append(X)            | X ans Ende anhängen                                  |
| L.insert(i, X)         | X am i-ten Index einfügen                            |
| L.remove(X)            | erstes X in Liste entfernen                          |
| L.pop(i)               | i-tes Element entfernen und ausgeben                 |
| L.reverse()            | dreht Liste um                                       |
| L.sort()               | Sortiert Liste                                       |
# 14 Glossar

| Code               | Wirkung                               |
| ------------------ | ------------------------------------- |
| print()            | gibt in einer Zeile der Konsole aus   |
| max()              | gibt den maximalen Wert zurück        |
| min()              | gibt den minimalen Wert zurück        |
| type()             | gibt den Datentyp der Variable zurück |
| a**b               | $a^b$                                 |
| a//b               | ganzzahlige DIvision                  |
| x+=1, -=,  *=,  /= | x = x+1                               |

