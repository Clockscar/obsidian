---
date: 2026-05-13
number headings:
tags:
---
#Mathe
# Wdhg. Zuordnungen (ZO)
<span style="color:rgb(255, 0, 0)"><b>Merke:</b></span>
Eine Zuordnung stellt eine Abbildung dar.
Bei einer Zuordnung wird jedes Element der Ausgangsgröße (Ausgangsmenge; Definitionsbereich, -menge) mindestens ein Element der zugeordneten Größe (Wertemenge, -bereich) zugeordnet.

ZO = Zuordnung
aG = Ausgangsgröße
zG = zugeordnete Größe

| Bsp.                                                                                                                                          | <span style="color:rgb(255, 0, 0)">aG</span> | <span style="color:rgb(0, 176, 80)">zG</span> | Wertepaar                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------- | --------------------------- |
| jedem <span style="color:rgb(255, 0, 0)">Produkt</span> des Supermarkts wird sein <span style="color:rgb(0, 176, 80)">Preis</span> zugeordnet | alle Produkte des Supermarkts                | Preis in €                                    | (Paulaner Spezi 0,33l; 1,5) |
| jedem <span style="color:rgb(255, 0, 0)">Schultag</span> wird die <span style="color:rgb(0, 176, 80)">Anzahl der Blöcke</span> zugeordnet     | alle Schultage                               | Anzahl Blöcke                                 | (Dienstag (A-Woche); 4)     |
| jedem <span style="color:rgb(255, 0, 0)">Schüler</span> wird sein <span style="color:rgb(0, 176, 80)">Lieblingsfach</span> zugeordnet         | alle Schüler                                 | Schulfächer                                   | (Jan; Chemie)               |
| jedem <span style="color:rgb(255, 0, 0)">Wochentag</span> wird die <span style="color:rgb(0, 176, 80)">Anzahl Mahlzeiten</span> zugeordnet    | alle Wochentag                               | Anzahl der Mahlzeiten                         | (Montag; 3)                 |
## Pfeildiagramme
jedem der Lernenden werden dessen Hobbys zugeordnet
![[Drawing 2026-05-13 15.47.40.excalidraw|800]]
<span style="color:rgb(255, 0, 0)"><b>Merke:</b></span>
Die Ausgangsgröße enthält alle Elemente, denen etwas zugeordnet wird. Die Wertemenge enthält alle Elemente, die zugeordnet werden

Bsp.: jeder natürlichen Zahl wird ihr Doppeltes zugeordnet
$\mathbb{D}=\mathbb{N}_{0}=\{0;1;2;3;\dots\}$
$\mathbb{W}=\{0;1;4;6;\dots\}=\{2\times k;\space mit\space k\in \mathbb{N}\}$

```chart
type: line
labels: [1,2,3,4,5,6,7,8,9,10,11,12]
series:
  - title: 
    data: [2,4,6,8,10,12,14,16,18,20,22,24]
tension: 0.2
width: 100%
labelColors: false
fill: false
beginAtZero: true
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
legend: false
xTitle: Abszissenachse
yTitle: Ordinatenachse
```
bei Funktionen:
aG $≙\mathbb{D}$
zG $=\mathbb{W}$
Ordinatenachse ("y-Achse") $\to \mathbb{W}$
Abszissenachse ("x-Achse") $\to \mathbb{D}$

Der Graph einer ZO ist die Darstellung aller Wertepaare, die zu einer Zuordnung gehören
## Klärung des Funktionsbegriffs - Arten von ZO
Funktionen beschreiben Zuordnungen
Darstellungsformen von Zuordnungen
- nonverbale Arten
	- Graph
	- Tabelle
	- Pfeildiagramme
	- Gleichung
- verbale Beschreibung

Bsp.
- 3 Flüsse: Donau, Elbe, Mississippi
- 7 Städte: Budapest, Dresden, Memphis, New Orleans, Passau, Torgau, Wien
jedem Fluss wird die Stadt zugeordnet, durch die er fließt
![[Drawing 2026-05-13 17.39.33.excalidraw]]
jeder Stadt wird ihr Fluss zugeordnet
![[Drawing 2026-05-13 17.43.39.excalidraw]]

Arten von ZO:
- eindeutige ZO:
  Eine Zuordnung heißt eindeutig, wenn jedem Element der $\mathbb{D}$ genau ein Element der $\mathbb{W}$ zugeordnet wird
- mehrdeutige ZO:
  Eine Zuordnung heißt mehrdeutig, wenn es mindestens ein Element der $\mathbb{D}$ gibt, dem mehr als ein Element der $\mathbb{W}$ zugeordnet wird

><span style="color:rgb(255, 0, 0)"><b><u>Def. Funktion</u></b></span>
>Eine Funktion ist eine ZO, bei der jedem Element der $\mathbb{D}$ genau ein Element aus der $\mathbb{W}$ zugeordnet wird
>Funktion $≙$ eindeutige ZO

Unterteilung der Arten von eindeutigen ZO
- ein-eindeutige ZO:
  $A\leftrightarrows1$
  $B\leftrightarrows2$
  $C\leftrightarrows3$
  $\implies$ Das sind eindeutige ZO, bei denen jedes Element der $\mathbb{W}$ genau einmal zugeordnet wird
- ein-mehrdeutige ZO:
  $A\leftrightarrows1$
  $B\leftrightarrows1$
  $C\leftrightarrows 3$
  $\implies$ Das sind eindeutige ZO, bei denen es mindestens ein Element der $\mathbb{W}$ gibt, das mehr als einmal zugeordnet wird

| ein-eindeutige ZO                                              | ein-mehrdeutige ZO                              | mehrdeutige ZO                                          |
| -------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------- |
| jedem Haus wird seine Adresse zugeordnet                       | jedem Produkt wird sein Preis zugeordnet        | jedem Schüler werden seine 2 Lieblingsfächer zugeordnet |
| jedem Mensch wird sein Fingerabdruck zugeordnet                | jedem Umfang wird sein Flächeninhalt zugeordnet |                                                         |
| der Umfang jedes Quadrats wird seinem Flächeninhalt zugeordnet | jeder Person wird ihr Geburtstag zugeordnet     |                                                         |
## Die verschiedenen Funktionen im Koordinatensystem
![[Drawing 2026-05-13 18.06.43.excalidraw|1000]]
Der Graph einer Zuordnung ist genau dann die graphische Darstellung einer:
- mehrdeutigen ZO, wenn entweder die Ordinatenachse oder eine ihrer Parallelen den Graphen mindestens 2 mal schneidet
- eindeutigen ZO, wenn die Ordinatenachse und jede ihrer Parallelen den Graphen maximal 1 mal schneidet
- ein-eindeutige ZO, wenn beide Koordinatenachsen und jede ihrer Parallelen den Graphen höchstens 1 mal schneidet
- ein-mehrdeutigen ZO, wenn jede Parallele der Ordinatenachse den Graphen höchstens 1 mal schneidet, es aber mindestens eine Parallele der Abszissenachse gibt, die den Graphen mehr als einmal schneidet
## Verwendung der mathematischen Zeichensprache bei der Arbeit mit Funktionen
$h:t\to s$   Funktion $h$ ordnet jedem $t$ ein $s$ zu
$s(t)=\frac{9}{2}\cdot t^{2}$   Funktionsgleichung für das Berechnen des Funktionswert für jede Stelle $t$
$s(t)$   Funktionswert $s$ an der Stelle $t$
$t$   Element des Wertebereichs $\mathbb{W}\space≙$  Argument / Stelle
$G_{g}$   Graph der Funktion $g$

<span style="color:rgb(255, 0, 0)"><b>Merke:</b></span>
Ein Punkt liegt genau dann dem Graph einer Funktion, wenn seine Koordinaten die Funktionsgleichung erfüllen.
$P(t|s(t))$

Nullstelle $x_{n}$ einer Funktion ist die Stelle, an der der Graph der Fkt. die Abszissenachse schneidet.
$f(x_{n})=0$
# Lineare Funktionen
><span style="color:rgb(255, 0, 0)"><b><u>Definition:</u></b></span>
>Eine Funktion, deren Graphen eine Gerade ist, nennt man lineare Funktion

![[Drawing 2026-05-13 18.47.06.excalidraw|1000]]
jede lin. Fkt. schneidet die Ordinatenachse an genau einem Punkt
$\color{orange} -$  y-Achsenabschnitt

$g(0)=m\cdot 0+n=n$
$\implies P(0|n) \in G_{g}\space\space\to$ gehört immer zum Graphen

## Untersuchung des Einflusses d. Parameters m
(auf Lage & Gestalt d. Fkt.)

$f(x)=m\cdot x + n$
$f(x)=3x+4\neq g(x)=4x+3$

Vorgehensweise
- $n$ bleibt gleich ($n=0$)
- $m$ wird verändert
- testen mit verschiedenen Fkt.

$f(x)=m\cdot x$   ($\implies$ prop. Zuordnung)

$m_{1}=-2\space\space\space\space\space\space\space f_{1}(x)=-2x$
$m_{2}=-0,5\space\space\space f_{2}(x)=-0,5x$
$m_{3}=0\space\space\space\space\space\space\space\space\space\space f_{3}(x)=0x$
$m_{4}=1,5\space\space\space\space\space\space f_{4}(x)=1,5x$
$m_{5}=3\space\space\space\space\space\space\space\space\space\space f_{5}(x)=3x$
![[Drawing 2026-05-13 22.21.22.excalidraw|1000]]

Gemeinsamkeiten
- verlaufen alle durch Koordinatenursprung
- alle Geraden
Unterschiede
- Steilheit der Graphen
	- $f_{1}$ und $f_{2}$ fallend
	- $f_{3}$ konstant
	- $f_{4}$ und $f_{5}$ steigend

$m$ negativ $\to$ fallend
$m=0 \to$ konstant
$m$ positiv $\to$ steigend
je größer $|m|$, desto steiler
## Anstiegsdreieck 
$f(x)=-\frac{1}{2}\cdot x+6 =-\frac{1}{2}\cdot\left( x+\left( -\frac{2}{1} \right) \cdot 6\right)=\frac{1}{2}\cdot(x-12)$
$S_{0}(0|6)$
$S_{x}(12|0)$

[[20260513_235325.jpg]]

$f(x)=m\cdot x+n$
$A(x_{A}|f(x_{A}))$
$B(x_{B}|f(x_{B}))$
D
$\overrightarrow{AB}=\overrightarrow{\varDelta x_{AB}}+\overrightarrow{\varDelta y_{AB}}$
$\overrightarrow{\varDelta x_{AB}}=x_{B}-x_{A}$
$\overrightarrow{\varDelta y_{AB}}=f(x_{B})-f(x_{A})=(mx_{B}+n)-(mx_{A}+n)=mx_{B}-mx_{A}=m\cdot(x_{B}-x_{A})$
$\frac{\varDelta y}{\varDelta x }=\frac{m\cdot(x_{B}-x_{A})}{x_{B}-x_{A}}=m$

<span style="color:rgb(255, 0, 0)"><b>Merke:</b></span>
Für jedes Anstiegsdreieck der Funktion $f$ mit $f(x)=m\cdot x+n$ gilt:
$m=\frac{\Delta y}{\Delta x}=\frac{Änderung\space der\space Funktionswerte}{Änderung\space der\space Argumente}$

bei $\Delta x=1$:
$m=\frac{\Delta y}{\Delta x}=\frac{\Delta y}{1}$
Wenn das Argument um 1 zunimmt, so ändern sich die Funktionswerte um den Wert $m$

<u>Zusammenfassung d. Einflusses der Parameter</u>
$f_{1}(x)=m_{1}\cdot x+n_{1}$
$f_{2}(x)=m_{2}\cdot x+n_{2}$

1. $m_{1}=m_{2}$
   $\implies$ Graphen sind parallel
	   a) $n_{1}=n_{2}$
	   $\to$ $G_{f_{1}}=G_{f_{2}}$
	   b) $n_{1}\neq n_{2}$
	   $\to$ $G_{f_{1}}\parallel G_{f_{2}}$ (echt parallel)
2. $m_{1}\neq m_{2}$
   $\implies$ $G_{f_{1}}$ schneidet $G_{f_{2}}$
## Aufstellen von Funktionsgleichungen
(aus 2 Punkten)
$f(x)=m\cdot x+n$
$A(x_{A}|y_{A});B(x_{B}|y_{B})$
1. Berechnen von $m$ mit $m=\frac{\Delta y}{\Delta x}=\frac{y_{B}-y_{A}}{x_{B}-x_{A}}$
2. Berechnen von $n$:
   Einsetzen eines Punktes in eine Funktionsgleichung 
   $f(x_{A})=m\cdot x_{A}+n=y_{A}$
   $n=y_{A}-m\cdot x_{A}$
   $n=y_{A}-\frac{y_{B}-y_{A}}{x_{B}-x_{A}}\cdot x_{A}$
## Berechnen von Nullstellen
$f(x)=m\cdot x+n$
$f(x_{N})=m\cdot x_{N}+n=0$
$x_{N}=\frac{0-m}{m}$
## Schnittpunktberechnung
$f_{1}(x)=m_{1}\cdot x+n_{1}$
$f_{2}(x)=m_{2}\cdot x+n_{2}$

$S(x_{S}|y_{S})$
$S\in f_{1},f_{2}$
$f_{1}(x_{S})=m_{1}\cdot x_{S}+n_{1}=y_{S}$
$f_{2}(x_{S})=m_{2}\cdot x_{S}+n_{2}=y_{S}$

$\Longleftrightarrow$ 
$m_{1}\cdot x_{S}+n_{1}=m_{2}\cdot x_{S}+n_{2} \qquad /-m_{2}\cdot x_{S};-n_{1}$
$m_{1}\cdot x_{S}-m_{2}\cdot x_{S}=n_{2}-n_{1}$

$(m_{2}-m_{1})\cdot x_{S}=n_{2}-n_{1}$
$x_{S}=\frac{m_{2}-n_{1}}{m_{1}-n_{2}}$

$x_{S}$ in eine der Formel einsetzen, um $y_{S}$ zu berechnen
## Orthogonalität v. linearen Funktionen
![[Drawing 2026-05-15 23.51.25.excalidraw|1000]]
$\implies$ Achseneinteilung muss gleich sein, um Orthogonalität direkt zu erkennen

$m_{1};m_{2}\neq 0$
$f_{1}(x)=m_{1}\cdot x+n_{1}$
$f_{2}(x)=m_{2}\cdot x+n_{2}$

$G_{1}\perp G_{2}$
![[Drawing 2026-05-16 00.10.47.excalidraw|600]]
$\alpha+\beta=90°$

$m_{1}=m_{SA}=\frac{\Delta y_{SA}}{\Delta x_{SA}}=\frac{\overrightarrow{HA}}{\overrightarrow{SH}}$
Festlegung $\overrightarrow{SH}=1\space LE;\space\overrightarrow{SH}=+1$
$m_{2}=m_{SB}=\frac{\Delta y_{SB}}{\Delta x_{SB}}=\frac{\overrightarrow{HB}}{\overrightarrow{SH}}$
$|\overrightarrow{HA}|\cdot|\overrightarrow{HB}|=1$

$\Delta x=1$
$\frac{\Delta y_{1}}{1}\cdot \frac{\Delta y_{2}}{1}=-1=m_{1}\cdot m_{2}$
$-1=m_{1}\cdot m_{2}$

<span style="color:rgb(255, 0, 0)"><b>Merke:</b></span> 
Die Graphen zweier linearer Fkt. $f_{1}(x)=m_{1}\cdot x+n_{1}$ & $f_{1}(x)=m_{2}\cdot x+n_{2}$ verlaufen orthogonal zueinander, wenn gilt:
- ($m_{1};m_{2}\neq0$)
- $m_{1}\cdot m_{2}=-1$
- $m_{1}=-\frac{1}{m_{2}}$
- $m_{2}=-\frac{1}{m_{1}}$