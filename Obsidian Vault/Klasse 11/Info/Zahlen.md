---
date: 2026-08-19
number headings:
tags:
---
#Info
# Dualzahlen

Zahlensystem mit Basis 2
## Umrechnen
**1000 in Dual**
### Variante 1: Subtraktion von 2er Potenzen 
1000-512=488
488-256=232
232-128=104
104-64=40
40-32=8
8-8=0
### Variante 2: Division
1000/2=500 R0
500/2=250 R0
250/2=125 R0
125/2=62 R1
62/2=31 R0
31/2=15 R1
15/2=7 R1
7/2=3 R1
3/2=1 R1
1/2=0 R1
Reste $\uparrow$

11 1110 1000$_{2}$

| 512 | 256 | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | 1   | 1   | 1   | 0   | 1   | 0   | 0   | 0   |
## Addition
Wie schriftliches addieren
## Multiplikation
schriftliches multiplizieren
## Gleitkommazahlen / Umrechnung von Nachkommastellen
$0,5_{10}=\frac{1}{2}_{10}=\frac{1}{10}_{2}=0\space^{2^0},1\space^{ 2^{-1} }\space _{2}$

$0,101_{2}=\frac{1}{2}+ 0\cdot \frac{1}{4}+\frac{1}{8}=\frac{5}{8}=0,5+0,25+0,125=0,625_{10}$
$0,0101_{2}=0,25+0,0625=0,3125_{10}$
$0,8125_{10}=0,5+0,25+0,0625=0,1101_{2}$

$0,8125\cdot 2 =\color{green}1\color{white},6250$
$0,625\cdot 2= \color{green}1\color{white},250$
$0,25\cdot 2 = \color{green}0\color{white},5$
$0,5\cdot 2= \color{green}1\color{white},0$
$\color{green}\uparrow$

$0,0101_{2}=0,25+0,0625=0,3125_{10}$
$0,11_{2}=0,5+0,25=0,75_{10}$

$0,75\cdot 2= 1,5$
$0,5\cdot 2=1,0$
$0,75_{10}=0,11_{2}$

$0,7\cdot 2=1,4$
$0,4\cdot 2=0,8$
$0,8\cdot 1,6$
$0,6\cdot 2 =1,2$
$0,2\cdot =0,4$
$0,7=0,1\overline{0110}$
## Umrechnen von Gleitpunktzahlen
Schritte: 20,26
1. Vorkommazahl umrechnen
	   $20_{10}=10100_{2}$
2. Nachkommazahl umrechnen
	   $0,26\cdot 2=0,52$
	   $0,52\cdot 2 = 1,04$
	   $0,04 \cdot 2=0,08$
	   $0,08\cdot 2 = 0,16$
	   $0,16\cdot 2 = 0,32$
	   $\dots$ 
	   $0,26_{10}=0,0\overline{10000101000111101011}$
3. Normalisieren
	   $1,010000100001010001111010\cdot 2^{4}$
4. Exponent umrechnen
	   4+127=131
	   $131_{10}=10000011_{2}$
5. Vorzeichenbit bestimmen
   $- \hat{=}1$
	   1
6. Zusammensetzen
	   1 10000011 01000010000101000111101
$\implies$ 32-Bit float


|           | VZ  | EXP       | MANT         |
| --------- | --- | --------- | ------------ |
| +0,0      | 0   | 0000 0000 | 000...0000   |
| -0,0      | 1   | 0000 0000 | 000...0000   |
| $+\infty$ | 0   | 1111 1111 | 000...0000   |
| $-\infty$ | 1   | 1111 1111 | 000...0000   |
| NaN       | 0/1 | 1111 1111 | 0...010...00 |

| Dezimal | Dual      | Oktal | Hexadezimal |
| ------- | --------- | ----- | ----------- |
| 0       | 0         | 0     | 0           |
| 1       | 1         | 1     | 1           |
| 2       | 10        | 2     | 2           |
| 3       | 11        | 3     | 3           |
| 4       | 100       | 4     | 4           |
| 5       | 101       | 5     | 5           |
| 6       | 110       | 6     | 6           |
| 7       | 111       | 7     | 7           |
| 8       | 1000      | 10    | 8           |
| 9       | 1001      | 11    | 9           |
| 10      | 1010      | 12    | A           |
| 11      | 1011      | 13    | B           |
| 12      | 1100      | 14    | C           |
| 13      | 1101      | 15    | D           |
| 14      | 1110      | 16    | E           |
| 15      | 1111      | 17    | F           |
| 16      | 1 0000    | 20    | 10          |
| 17      | 1 0001    | 21    | 11          |
| 18      | 1 0010    | 22    | 12          |
| 19      | 10011     | 23    | 13          |
| 20      | 1 0100    | 24    | 14          |
| 100     | 110 0100  | 144   | 64          |
| 250     | 1111 1010 | 372   | FA          |
| 198     | 1100 0110 | 306   | C6          |
| 19      | 01 0011   | 23    | 13          |
| 66      | 0100 0010 | 102   | 42          |
| 59      | 11 1011   | 73    | 3B          |
| 67      | 100 0011  | 103   | 43          |
| NaN     | 67        | NaN   | NaN         |
| 55      | 11 0111   | 67    | 37          |
| 103     | 110 0111  | 147   | 67          |
Warum verwechseln Informatiker Weihnachten und Halloween?
25 Dez = 31 Okt