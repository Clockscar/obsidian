---
date: 2026-09-10
number headings:
tags:
---
#Info

| und ($\wedge$) | oder ($\vee$) | nicht ($\neg$) |
| -------------- | ------------- | -------------- |
| a b a$\wedge$b | a b a$\vee$b  | a  $\neg$a     |
| 0 0   0        | 0 0   0       | 0    1         |
| 1 0   0        | 1 0   1       | 1    0         |
| 0 1   0        | 0 1   1       |                |
| 1 1   1        | 1 1   1       |                |
Reihenfolge: (); $\neg$, $\wedge$, $\vee$, $\to$

| a   | $\vee$                             | $\neg$ | b   | $\wedge$ | c   |
| --- | ---------------------------------- | ------ | --- | -------- | --- |
| 0   | <font color="#00b050">**0**</font> | 1      | 0   | 0        | 0   |
| 1   | <font color="#00b050">**1**</font> | 1      | 0   | 0        | 0   |
| 0   | <font color="#00b050">**0**</font> | 0      | 1   | 0        | 0   |
| 1   | <font color="#00b050">**1**</font> | 0      | 1   | 0        | 0   |
| 0   | <font color="#00b050">**1**</font> | 1      | 0   | 1        | 1   |
| 1   | <font color="#00b050">**1**</font> | 1      | 0   | 1        | 1   |
| 0   | <font color="#00b050">**0**</font> | 0      | 1   | 0        | 1   |
| 1   | <font color="#00b050">**1**</font> | 0      | 1   | 0        | 1   |

$\to$ Implikation (Folgerung) 

| a   | b   | a $\to$ b |
| --- | --- | --------- |
| 0   | 0   | 1         |
| 1   | 0   | 0         |
| 0   | 1   | 1         |
| 1   | 1   | 1         |
Implikation als und oder nicht
nicht a oder b: $\neg a \vee b$

$0\to a=1$   Tautologie: Für jede Belegung wahr
0  1  1
0  1  1

$0\to a$: ex falso quodlibet "Aus falschem folgt beliebiges"
$a\to 1$: ex quodlibet verum "Aus beliebigem folgt wahres"

$a\to b=\neg b \to \neg a$  Prinzip des indirekten Beweises

$\leftrightarrow$ Äquivalenz
a  b  a$\leftrightarrow$b   $\neg(a\leftrightarrow b)$
0  0     1              0
1  0     1              1
0  1     1              1
1  1     1              0

a $\leftrightarrow$ b = (a$\to$b) $\wedge$ (b$\to$a)
0  1  0     0 1 0   1  0 1 0
1  0  0     1 0 0   0  0 1 1
0  0  1     0 1 1   0  1 0 0
1  1  1     1 1 1  1   1 1 1

zwei boolesche Ausdrücke sind wertgleich, wenn ihre Wertetabellen gleich sind
$a\wedge b = b\wedge a$
0 0 0    0 0 0
1 0 0    1 0 0
0 0 1    0 0 1
1 1 1    1 1 1

$a\vee b = b\vee a$
0 0 0    0 0 0
1 1 0    1 1 0
0 1 1    0 1 1
1 1 1    1 1 1

$a\wedge \neg a= 0$
0 0 1
1 0 0

$a\vee \neg a= 1$
0 1 1
1 1 0

$a\wedge a=a$
0 0 0 = 0
1 1 1 = 1

$a\vee a=a$
0 0 0 = 0
1 1 1 = 1

$a\wedge 1=a$
0 0 1 = 0
1 1 1 = 1

$a\vee 0=a$
0 0 0 = 0
1 1 0 = 1

$a\wedge (b\vee c)= a\wedge b\vee a \wedge c$
0 0  0 0 0  = 0 0 0 0 0 0 0
1 0  0 0 0  = 1 0 0 0 1 0 0
0 0  1 1 0  = 0 0 1 0 0 0 0
0 0  0 1 1  = 1 1 1 1 1 0 0