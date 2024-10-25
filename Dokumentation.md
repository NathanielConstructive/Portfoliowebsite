# Projekt-Dokumentation

Mirhan Özden

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 25.10      | 1.0.0   |   Fertigversion der Porftoliowebsite                                                           |

## 1 Informieren

### 1.1 Ihr Projekt

Mein Projekt ist eine Portfoliowebsite über mich, wo ich alles über mich aufzeige im Bereich IT aber auch ausserhalb der Informatik. Dieses Projekt sollte für die Praktikumssuche helfen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ         | Beschreibung                                                    | Geplante Zeit (Lektionen) |
| ---- | --------------- | ----------- | --------------------------------------------------------------- | ------------------------- |
| 1    | Muss            | Funktional  | Als ein Besucher möchte ich die Startseite sehen, damit ich sofort einen Überblick über die Website-Inhalte bekomme. | 2 Lektionen               |
| 2    | Muss            | Funktional  | Als ein Besucher möchte ich ein Portfolio mit Projekten sehen, damit ich mehr über die Fähigkeiten des Websiten-Besitzers erfahre. | 3 Lektionen               |
|3|muss|Qualität|Als Benutzer möchte ich zu jedem Projekt den Portfoliobeitrag sehen, damit ich lesen kann, wie er gearbeitet hat.|1 Lektion|
|4|muss|Qualität|Als Benutzer möchte ich zu jedem Projekt die Dokumentation sehen, damit ich weiss, was für Anforderungen sein Projekt hatte und was er erreichen konnte.|1 Lektion|
|5|kann|Qualität|Als Benutzer möchte ich zu jedem Projekt ein Bild und ein Video sehen, damit ich schon im Vorhinein weiss, wie das Produkt aussieht.|2 Lektionen|
|6|kann|Qualität|Als Benutzer möchte ich normalerweise das Bild eines Projektes sehen, wenn ich aber mit der Maus darüber hovere, möchte ich das Video sehen, damit ich direkt sehe, ob das Produkt funktioniert|3 Lektionen|
| 7    | Kann            | Rand        | Als ein Besucher möchte ich Social-Media-Links sehen, damit ich dem Websiten-Besitzer auf anderen Plattformen folgen kann. | 1 Lektion                 |
| 8    | Muss            | Funktional  | Als ein Besucher möchte ich die Möglichkeit haben, eine Projektbeschreibung zu jedem Projekt im Portfolio zu sehen, damit ich mehr Details erfahre. | 2 Lektionen               |
| 9    | Muss            | Funktional  | Als ein Besucher möchte ich eine übersichtliche Navigationsleiste sehen, damit ich schnell zwischen den Seiten wechseln kann. | 1 Lektion                 |
|10    | Kann            | Rand        | Als ein Besucher möchte ich eine Feedback-Möglichkeit auf der Kontaktseite haben, damit ich sofort Rückmeldungen geben kann. | 1 Lektion                 |
|11|kann|Qualität|Als Benutzer möchte ich, dass ich auf einer separaten Website auch Projekte über andere Themen sehe, damit man weiss, was der Informatiker ausserhalb von IT schon gemacht hat.|2 Lektionen|
| 12   | Kann            | Qualität    | Als ein Besucher möchte ich Animationen sehen, damit die Seite professioneller und interaktiver wirkt. | 1 Lektion|
| 13   | Kann            | Rand        | Als ein Besucher möchte ich die Möglichkeit haben, das Design der Seite zwischen einem hellen und einem dunklen Modus zu wechseln, damit die Seite angenehmer zu benutzen ist. | 1 Lektion                 |
|14|muss|Funktional|Als Benutzer möchte ich die Website auf Github publishen, damit andere meine Website sehen können.|2 Lektionen|
|15|muss|Funktional|Portfoliobeitrag|4 Lektionen|
|16|muss|Funktional|Tests durchführen|0.5 Lektion|


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Die Website ist geöffnet             |  -       | Die Startwebsite                  |
|2.1|Website hat geladen und ist geöffnet|-|IT Projekte|
|3.1|Projekte sind vorhanden|-|Link zum Portfoliobeitrag|
|4.1|Projekte sind vorhanden|-|Link zur Dokumentation|
|5.1|Projekt mit Bild und Video ist vorhanden|-|Bild|
|6.1|Projekt mit Bild|-(auf das Bild hovern)|Video wird angezeigt|
|7.1|Website ist geladen|Auf eines der beiden Links klicken|Twitter oder LinkedIn account|
|8.1|Website mit Projekt ist geladen|-|Zu jedem Projekt eine kleine Beschreibung, was das Projekt ist.|
|9.1|Website ist geladen|-|Links beim Nav, damit man von Seite zu Seite springen kann.|
|10.1|Website ist geladen|Auf "contact" klicken, das Feedbackformular ausfüllen und auf absenden drücken|Eine Seite von Web3Forms wo steht, dass das Feedback weitergeleitet wurde. |
|11.1|Website ist geladen|Auf "IDAF Projekte" klicken|Projekte ausserhalb der IT.|
|12.1|Website ist geladen|-(Auf Projekt hovern)|Das Projekt wird hervorgehoben|
|13.1|Website ist geladen|Auf den Knopf neben der Sonne und dem Mond klicken|Webseite geht in den Dunkel oder Hellmodus.|
|14.1|Man drückt auf den Link für die Website|-|Man sieht die Startseite|


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  | 04.09      | Mirhan Özden          | Startwebsite programmieren              | 2 Lektionen              |
| 2.A  | 04.09      | Mirhan Özden          |  IT Projekte anzeigen lassen            |             3 Lektionen |
|3.A|04.09|Mirhan Özden  |Portfoliolink|1 Lektion|
|4.A|11.09|Mirhan Özden  |Dokumentationslink|1 Lektion|
|5.A|11.09|Mirhan Özden  |Bild und Video zu jedem Projekt hinzufügen|2 Lektionen|
|6.A|11.09|Mirhan Özden  |Preview Funktion|3 Lektionen|
|7.A|11.10|Mirhan Özden  |Social-Media Links|1 Lektion|
|8.A|11.10|Mirhan Özden  |Projektbeschreibung|2 Lektionen|
|9.A|11.10|Mirhan Özden  |Navigationsleiste|1 Lektion|
|10.A|18.10|Mirhan Özden  |Feedback Möglichkeit|1 Lektion|
|11.A|18.10|Mirhan Özden  |IDAF Projekte zeigen|2 Lektionen|
|12.A|18.10|Mirhan Özden  |Animationen|1 Lektion|
|13.A|18.10|Mirhan Özden  |Hell/Dunkemodus|1 Lektion|
|14.A|25.10|Mirhan Özden  |Website mit Github Pages veröffentlichen|2 Lektionen|
|15.A|25.10.2024|Mirhan Özden  |Portfoliobeitrag machen|4 Lektionen|
|16.A|25.10.2024|Mirhan Özden|Testfälle durchführen|0.5 Lektionen|



## 3 Entscheiden

Mein Projekt ist eine Portfoliowebsite in HTML, CSS und JavaScript, wo ich mich präsentiere für zukünftige Arbeitsgeber. Dabei zeige ich meine Projekte, Dokumentationen und Informationen über mich. Auch habe ich mich entschieden, zwei Unterseiten abseits der Hauptseite zu machen. Auf der Hauptseite sieht man meine IT-Projekte und wie man mich erreichen kann. Wenn man meine Projekte sieht, kann man dort entweder meine Dokumentation zum Projekt lesen oder meinen Portfoliobeitrag dazu. Man kann mir auch ein Feedback geben, indem man oben auf Kontakt drückt. Dort kann man mir eine E-Mail mit einem Text senden. Auch habe ich mich entschieden, meine IDAF Projekte zu zeigen, die man auf einer separaten Website sehen kann.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit  |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |  04.09     |  Mirhan Özden         | 2  Lektionen             | 1 Lektion               |
| 2.A  |  04.09     |  Mirhan Özden         | 3  Lektionen            | 3 Lektionen                 |
|3.A|04.09|Mirhan Özden|1 Lektion|2 Lektionen|
|4.A|11.09|Mirhan Özden|1 Lektion|1 Lektion|
|5.A|11.09|Mirhan Özden|2 Lektionen|2 Lektionen|
|6.A|11.09|Mirhan Özden|3 Lektionen|2 Lektionen|
|7.A|11.10|Mirhan Özden|1 Lektion|2 Lektionen|
|8.A|11.10|Mirhan Özden|2 Lektionen|2 Lektionen|
|9.A|11.10|Mirhan Özden|1 Lektion|2 Lektionen|
|10.A|18.10|Mirhan Özden|1 Lektion|1 Lektion|
|11.A|18.10|Mirhan Özden|2 Lektionen|2 Lektionen|
|12.A|18.10|Mirhan Özden|1|2 Lektionen|
|13.A|18.10|Mirhan Özden|1 Lektion|1 Lektion|
|14.A|25.10|Mirhan Özden|2 Lektionen|2 Lektionen|
|15.A|25.10|Mirhan Özden|4 Lektionen|4 Lektionen|
|16.A|25.10|Mirhan Özden|0.5|0.5





## 5 Auswerten

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  | 25.10.2024      | Funktioniert         | Mirhan Özden       |
| 2.1  | 25.10.2024      |  Funktioniert        |   Mirhan Özden       |
|3.1|25.10.2024|Funktioniert|Mirhan Özden|
|4.1|25.10.2024|Funktioniert|Mirhan Özden|
|5.1|25.10.2024|Funktioniert|Mirhan Özden|
|6.1|25.10.2024|Funktioniert|Mirhan Özden|
|7.1|25.10.2024|Funktioniert|Mirhan Özden|
|8.1|25.10.2024|Funktioniert|Mirhan Özden|
|9.1|25.10.2024|Funktioniert|Mirhan Özden|
|10.1|25.10.2024|Funktioniert|Mirhan Özden|
|11.1|25.10.2024|Funktioniert|Mirhan Özden|
|12.1|25.10.2024|Funktioniert|Mirhan Özden|
|13.1|25.10.2024|Funktioniert|Mirhan Özden|
|14.1|25.10.2024|Funktioniert|Mirhan Özden|

Fazit:
Alle Tests waren erfolreich
