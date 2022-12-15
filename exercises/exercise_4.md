## Aufgabe 4: ToDo-App – Dynamische Anzeige von ToDos

Nachdem wir in der letzten Übung ein Formular zur Eingabe von ToDos erstellt haben, wollen wir dieses Mal dynamisch ToDos
anzeigen.

Wir gehen dabei davon aus, dass wir ein Javascript-Objekt mit den ToDos haben (später werden wir dieses Objekt als JSON-Datei vom Backend erhalten):

```JavaScript
    const TODOS = [
        {
            id: 0,
            title: 'Aufgabe 4 abgeben',
            due: '2021-05-21T10:00:00.000Z',
            status: 'done'
        },
        {
            id: 1,
            title: 'Aufgabe 6 abgeben',
            due: '2021-06-08T10:00:00.000Z',
            status: 'doing'
        },
        {
            id: 2,
            title: 'ToDo-Anwendung fertig stellen',
            due: '2021-06-22T10:00:00.000Z',
            status: 'open'
        },
        {
            id: 3,
            title: 'Für die Klausur lernen',
            due: '2021-07-01T11:00:00.000Z',
            status: 'open'
        }
    ];
```

Die fertige Lösung besteht aus

- einer ‚minimalen‘ Datei todo.html mit Ihrem Formular und einem Zielelement, das die dynamisch erzeugte ToDo-Liste aufnimmt,
- einer Datei todo.js, die die ToDo-Liste im DOM erzeugt,
- einer Datei todo.css zur Formatierung.

### Aufgabe 4.1 Anzeige der ToDo-Liste

Schreiben Sie eine Javascript-Funktion, die aus dem obigen Array `TODOS` entsprechende DOM-Elemente erzeugt und
diese in das HTML-Dokument einfügt. Über den Eventhandler `onload` des `<body>`-Elements können Sie die Funktion nach dem Laden der HTML-Datei ausführen lassen.

### Aufgabe 4.2 Anlegen von neuen ToDos

Schreiben Sie eine Javascript-Funktion, die als Eventhandler `onsubmit` für das Formular aus der letzten Aufgabe fungiert und das anzulegende ToDo an das Array `TODOS` anhängt.
