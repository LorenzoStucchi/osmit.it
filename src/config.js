export default {
    // title of the website for the meta>title (name that appears in the browser tab)
    siteTitle: 'OSM Italia',
    // title in the navbar (hidden on mobile)
    navbarTitle: 'OpenStreetMap Italia',
    // title of the section about openstreetmap
    osmTitle: 'OpenStreetMap',
    // text of the section about openstreetmap - supports HTML
    osmDescription: `
        <p><a href="https://www.openstreetmap.org/">OpenStreetMap</a> (OSM) è il più grande database geografico libero e modificabile di tutto il mondo costruito dal lavoro di volontari e rilasciato con una <a href="https://www.openstreetmap.org/copyright">licenza libera</a>. Il cui scopo è creare e fornire dati geografici gratuiti a chiunque li voglia utilizzare. Si tratta di una massiccia collaborazione online, con milioni di utenti registrati in tutto il mondo.</p>
        <p>Scegli il tuo stile di mappa preferito (italiano, escursionismo) cliccando il pulsante all’interno della finestra della mappa (in alto a destra). Gli stili diversi di mappa ti permettono di vedere evidenziate diverse funzionalità in base alla tua preferenza/necessità.</p>
    `,
    // title of the section about osm ita
    osmItalyTitle: 'La comunità italiana',
    // text of the section about osm ita - supports HTML
    osmItalyDescription: `
        <p>La comunità italiana è particolarmente attiva non soltanto nel mantenere la mappa di OpenStreetMap aggiornata, ma anche nell'organizzare eventi di formazione, divulgazione e condivisione.<br/>
        La comunità italiana si riunisce annualmente durante il <a href="https://wiki.openstreetmap.org/wiki/IT:OSMit">FOSS4G-IT</a>, conferenza che riunisce tutte le comunità italiane del software geografico libero e dei dati geografici aperti, dove ha a disposizione un’intera giornata dedicata a OpenStreetMap.</p>
        <p><a href="https://www.wikimedia.it/">Wikimedia Italia</a> dal 2016 è il capitolo italiano della <a href="https://wiki.osmfoundation.org/wiki/Main_Page">OpenStreetMap Foundation</a>. Wikimedia Italia supporta ma non controlla il progetto OpenStreetMap incoraggiando la crescita, lo sviluppo e la distribuzione di dati geospaziali liberi usabili e condivisibili da chiunque.</p>
    `,
    // default center of the map
    center: [41.755, 11.711],
    // default zoom of the map
    zoom: 6,
    // layers to display on map
    layers: [
        /* 
            NOTE: Only ONE active layer must be set as `checked: true`
            all the others MUST use `checked: false`
        */
        {
            checked: true,
            name: 'OSM',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }, 
        {
            name: 'CyclOSM',
            url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="/copyright">OpenStreetMap contributors</a>. Stile dei tasselli di <a href="https://www.cyclosm.org" target="_blank">CyclOSM</a> ospitato da <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap Francia</a>. <a href="https://wiki.osmfoundation.org/wiki/Terms_of_Use" target="_blank">Condizioni del sito web e delle API</a>'
        }
    ],
    projects: [
        /*
            Images of projects MUST be placed inside the image/projects folder.
            It's recommended to keep the filename simple and without spaces or special characters (replace space with _).
            When configuring a project specify the filename without extension.
            Description fields supports markdown.
        */
        {
            image: 'wiki',
            name: 'WikiOSM',
            description: 'Una raccolta di tutte le informazioni (documentazione, guide, organizzazione, ecc) legate a OpenStreetMap.',
            link: 'https://wiki.openstreetmap.org/wiki/IT:Main_Page',
        },
        {
            image: 'learnosm',
            name: 'LearnOSM',
            description: 'Un sito con guide su come usare OSM.',
            link: 'https://learnosm.org/it/',
        },
        {
            image: 'tm',
            name: 'Tasking Manager',
            description: 'Uno strumento per permettere ai mapper di lavorare in gruppo per realizzare un progetto. È utilizzato anche in casi di emergenza o per scopi formativi.',
            link: 'https://osmit-tm4.wmcloud.org',
        },
        {
            image: 'estratti',
            name: 'Estratti OSM Italia',
            description: `Scarica i dati presenti in OpenStreetMap per tutta l’italia filtrandoli per regione, provincia o comune. È inoltre possibile scaricare dati tematici.
            I dati sono disponibili in vari formati (GPKG - OGC GeoPackage, PBF - Protocolbuffer Binary Format, OSMAND OBF - OsmAnd Binary Maps Format) a seconda della scala.`,
            link: 'https://osmit-estratti.wmcloud.org',
        },
        {
            image: 'umap',
            name: 'uMap',
            description: 'Crea una mappa in pochi minuti usando i dati di OpenStreetMap',
            link: 'https://osmit-umap.wmflabs.org/it/',
        },
        {
            image: 'suosm',
            name: 'Su OpenStreetMap',
            description: 'Permette di aggiungere segnalazioni su attività commerciali non presenti su OpenStreetMap, anche senza avere un profilo utente.',
            link: 'https://su.openstreetmap.it',
        },
        {
            image: 'welcometool',
            name: 'Welcome Tool',
            description: `OpenStreetMap non è solo un database ma soprattutto una comunità. Questo strumento di consente di accogliere i nuovi collaboratori e dare dei consigli utili.`,
            link: 'https://welcome.osm.be/italy/list',
        },
        {
            image: 'weekly',
            name: 'Weekly OSM',
            description: 'Notizie da tutto il mondo OpenStreetMap, anche in italiano.',
            link: 'https://weeklyosm.eu/it/',
        },
        {
            image: 'osmose',
            name: 'Quality Assurance',
            description: 'Ci sono diversi strumenti che permettono di identificare in maniera automatica la presenza di possibili errori nei dati,, come [OSMCha](https://osmcha.org/), [osmose](http://osmose.openstreetmap.fr/it/map/), [keep it right](https://www.keepright.at/report_map.php), [OSM Inspector](https://tools.geofabrik.de/osmi/), [Mappa dei municipi mancanti in Italia](https://umap.openstreetmap.fr/it/map/missing-pois_564040#6/43.082/12.504), [Controlli aggiuntivi per JOSM](https://github.com/fansanelli/map-this-way) e molti altri',
            link: 'https://wiki.openstreetmap.org/wiki/Quality_assurance',
        },
        {
            image: 'osmand',
            name: 'Applicazioni per telefono',
            description: 'Usa e contribuisci a OSM con il tuo smartphone! Naviga e visualizza le mappe di OSM con [OSMAnd](https://wiki.openstreetmap.org/wiki/OsmAnd). Aggiungi o correggi dati con [Vespucci](https://wiki.openstreetmap.org/wiki/Vespucci), [GoMap!!](https://wiki.openstreetmap.org/wiki/Go_Map!!) e [StreetComplete](https://wiki.openstreetmap.org/wiki/StreetComplete). Queste ed altre app sono descritte nella wikiOSM.',
        },
    ],
    // title of the projects section
    projectsTitle: 'Strumenti',
    // text of the section projects - supports HTML
    projectsDescription: '',
    // title of the contact us section
    contactTitle: 'Contatti',
    // text of the section  contact us - supports HTML
    contactDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et eros congue, porta mi ac, tincidunt lectus. Aenean justo libero, vulputate pharetra vestibulum a, viverra non tellus. Nam eget lacus in ligula volutpat efficitur a ut nisi. Integer hendrerit erat vitae posuere viverra.', // supports HTML
    // alternative text for contacts map on mobile - supports HTML
    contactMobileMapAlternative: 'Esempio di testo visibile solo su mobile con <a href="https://google.com">link esterno</a>', // supports HTML
    // url for the contacts map
    contactsMap: 'https://openstreetmap.community/?map=44.34666,13.10985&zoom=5.00',
    // not used
    github: {
        url: 'https://github.com/osmItalia/',
        text: ''
    },
    // not used
    facebook: {
        url: 'https://it-it.facebook.com/OpenStreetMap.Italia/',
        text: ''
    },
    // not used
    twitter: {
        url: 'https://twitter.com/OpenStreetMapIt',
        text: ''
    },
    // configure the navbar for mobile and desktop
    // use newTab: true to open the link in a new tab
    navbar: [
        {
            title: 'Home',
            href: '#home',
        },
        {
            title: 'Chi Siamo',
            href: '#chisiamo',
        },
        {
            title: 'Strumenti',
            href: '#progetti',
        },
        {
            title: 'Contatti',
            href: '#contatti',
        },
        {
            title: 'News',
            href: 'https://www.wikimedia.it/news/category/openstreetmap/',
            newTab: true,
        },
        {
            title: 'Diventa socio',
            href: 'https://sostieni.wikimedia.it/diventa_socio_o_rinnova/',
            newTab: true,
        }
    ]
}
