## Aufgabe 4: ToDo-App – Dynamische Anzeige von ToDos

Nachdem wir in der letzten Übung ein Formular zur Eingabe von ToDos erstellt haben, wollen wir dieses Mal dynamisch ToDos
anzeigen.

Wir gehen dabei davon aus, dass wir ein JavaScript-Objekt mit den ToDos haben (später werden wir dieses Objekt als JSON-Datei vom Backend erhalten):

```JavaScript
    const TODOS = [
        {
            "id":1671056616571,
            "title":"Übung 4 machen",
            "due":"2022-11-12T00:00:00.000Z",
            "status":0
        },
        {
            "id":1671087245763,
            "title":"Für die Klausur Webentwicklung lernen",
            "due":"2023-01-14T00:00:00.000Z",
            "status":2
        },
    ];
```

Die fertige Lösung besteht aus

- einer ‚minimalen‘ Datei todo.html mit Ihrem Formular und einem Zielelement, das die dynamisch erzeugte ToDo-Liste aufnimmt,
- einer Datei todo.js, die die ToDo-Liste im DOM erzeugt,
- einer Datei todo.css zur Formatierung.

### Aufgabe 4.1 Anzeige der ToDo-Liste

Schreiben Sie eine JavaScript-Funktion, die aus dem obigen Array `TODOS` entsprechende DOM-Elemente erzeugt und
diese in das HTML-Dokument einfügt. Über den Eventhandler `onload` des `<body>`-Elements können Sie die Funktion nach dem Laden der HTML-Datei ausführen lassen.

### Aufgabe 4.2 Anlegen von neuen ToDos

Schreiben Sie eine JavaScript-Funktion, die als Eventhandler `onsubmit` für das Formular aus der letzten Aufgabe fungiert und das anzulegende ToDo an das Array `TODOS` anhängt.
