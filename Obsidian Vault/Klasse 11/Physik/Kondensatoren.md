---
date: 2026-09-03
number headings:
tags:
---
#Physik

# Kapazität von Kondensatoren
Def.: Die Kapazität gibt an, wie viele el. Ladungen ein Kondensator bei einer Spannung von $1 \space V$ speichern kann.
FZ: $C$
$[C]=\frac{1As}{1V}=1F$ ("Farad")

$1 mF = 10^{-3} F$
$1\mu F = 10^{-6}F$
$1nF=10^{-9}F$
$1pF=10^{-12}F$

Gleichung: $C=\frac{Q}{U}$

$U=3000 V;\space Q=2,4\cdot 10^{-8}C\qquad C=\frac{Q}{U}=\frac{2,4\cdot 10^{-8}C}{3000 V}\approx 8\space pF$
$U=220 V;\space C=1,5\mu F\qquad Q=C\cdot U=1,5\mu F\cdot 220 V\approx 330\space \mu C$

## Sonderfall Plattenkondensator
Schaltzeichen 
![[Drawing 2026-09-03 12.18.08.excalidraw|200]]

$C_{P}\sim \frac{1}{d}\qquad\qquad d\space\dots$  Abstand der Kondensatorplatten
$C_{P}\sim A\qquad\qquad A\space\dots$  wirksame Plattenfläche
$C_{P}\sim \frac{A}{D}$

Dielektrikum zw. Kondensatorplatten
$\to$ Medium, welches nicht el. leitfähig ist
$\upvarepsilon_{r}\space\dots$ Dielektrizitätszahl (Stoffkonstante)
$\upvarepsilon_{r}=\frac{C\space mit\space Dielektrikum}{C\space ohne\space Dielektrikum}$

$\color{purple}C_{P}=\upvarepsilon_{0}\cdot\upvarepsilon_{r}\cdot \frac{A}{d}$

$A=314\cdot10^{-4}m^{2};\space d=0,5 \cdot 10^{-3}m;\space\upvarepsilon_{r}=7;\upvarepsilon_{0}=8,85\cdot 10^{-12} \frac{C}{Vm}\space\qquad C_{0}=\upvarepsilon_{0}\cdot\upvarepsilon_{r}\cdot \frac{A}{d}=8,85\cdot 10^{-12} \frac{C}{Vm}\cdot \frac{314\cdot10^{-4}m^{2}}{0,5 \cdot 10^{-3}m}\approx 0,56 nF \qquad C_{P}=\upvarepsilon_{r}\cdot C_{0}=7\cdot C_{0}\approx 3,92 nF$

Bsp.
- Plattenkondensator aufgeladen
- von Spannungsquelle getrennt
- Plattenabstand halbiert
- $Q$ konstant
- $A$ konstant
# $C_{Ges}$ in Reihen und Parallelschaltung

| Reihenschaltung                                                                                                                                                                                                                                              | Parallelschaltung                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $C=\frac{Q}{U}$<br>$I=const$<br>$Q=I\cdot t=Q_{1}=Q_{2}$<br>$U_{Ges}=U_{1}+U_{2}$<br>$C_{Ges}=\frac{Q}{U_{1}+U_{2}}$<br>$\frac{1}{C_{Ges}}=\frac{1}{C_{1}}+\frac{1}{C_{2}}$<br>$$\frac{1}{C_{Ges}}=\frac{1}{C_{1}}+\frac{1}{C_{2}}+\dots+\frac{{1}}{C_{n}}$$ | $C=\frac{Q}{U}$<br>$I_{Ges}=I_{1}+I_{2}+\dots+I_{n}$<br>$Q=I\cdot t=Q_{1}+Q_{2}$<br>$U_{Ges}=U_{1}=U_{2}$<br>$C_{Ges}=\frac{Q_{1}+Q_{2}}{U}$<br>$C_{Ges}=C_{1}+C_{2}$<br>$$C_{Ges}=C_{1}+C_{2}+\dots+C_{n}$$ |
| Reziproke der Gesamtkapazität ist gleich der Summer der Reziproken der Teilkapazitäten                                                                                                                                                                       | Gesamtkapazität ist gleich der Summe der Teilkapazitäten                                                                                                                                                     |
# Auf- & Entladung eines Kondensators
