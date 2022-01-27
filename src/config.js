export default {
    siteTitle: 'OSM Italia',
    headerGradientOverlay: `linear-gradient(rgba(255, 255, 255, 0.40), rgba(255, 255, 255, 0.6))`,
    osmTitle: 'OpenStreetMap',
    osmDescription: `
        <p><a href="https://www.openstreetmap.org/">OpenStreetMap</a> (OSM) è il più grande database geografico libero e modificabile di tutto il mondo costruito dal lavoro di volontari e rilasciato con una <a href="https://www.openstreetmap.org/copyright">licenza libera</a>. Il cui scopo è creare e fornire dati geografici gratuiti a chiunque li voglia utilizzare. Si tratta di una massiccia collaborazione online, con milioni di utenti registrati in tutto il mondo.</p>
        <p>Scegli il tuo stile di mappa preferito (italiano, sentieristica) cliccando il pulsante all’interno della finestra della mappa (in alto a destra). Gli stili diversi di mappa ti permettono di vedere evidenziate diverse funzionalità in base alla tua preferenza/necessità.</p>
    `, // supports HTML
    osmItalyTitle: 'OpenStreetMap Italia',
    osmItalyDescription: `
        <p>La comunità italiana è particolarmente attiva non soltanto nel mantenere la mappa di OpenStreetMap aggiornata, ma anche nell'organizzare eventi di formazione, divulgazione e condivisione.<br/>
        La comunità italiana si riunisce annualmente durante FOSS4G-IT, conferenza che riunisce tutte le comunità italiane del software geografico libero e dei dati geografici aperti, dove ha a disposizione un’intera giornata dedicata a OpenStreetMap.</p>
        <p><a href="https://www.wikimedia.it/">Wikimedia Italia</a> dal 2016 è il capitolo italiano della <a href="https://wiki.osmfoundation.org/wiki/Main_Page">OpenStreetMap Foundation</a>. Wikimedia Italia supporta ma non controlla il progetto OpenStreetMap incoraggiando la crescita, lo sviluppo e la distribuzione di dati geospaziali liberi usabili e condivisibili da chiunque.</p>
    `,
    center: [51.505, -0.09],
    zoom: 13,
    layers: [
        /* 
            Only the active layer must be set as `checked: true`
            all the others MUST use `checked: false`
        */
        {
            checked: true,
            name: 'OSM',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
            image: 'welcometool',
            name: 'Welcome Tool',
            description: `OpenStreetMap non è solo un database ma anche persone, questo strumente di consente di accogliere i nuovi contributori e dare dei consigli utili.
            Lo strumento di benvenuto di OpenStreetMap tramite il quale vengono contattati i nuovi mappatori per dare loro il benvenuto al progetto.
            Per usarlo devi entrare con il tuo profilo OpenStreetMap`,
            link: 'https://welcome.osm.be/italy/list',
        },
        {
            image: 'tm',
            name: 'Tasking Manager',
            description: 'Un tool tramite il quale singoli contributori possono lavorare in gruppo per realizzare mappature coordinando le loro attività in casi di emergenza o per scopi formativi. Per usarlo devi entrare con il tuo profilo OpenStreetMap.',
            link: 'https://osmit-tm4.wmcloud.org',
        },
        {
            image: 'estratti',
            name: 'Estratti OSM Italia',
            description: `Uno strumento che permette di scaricare i dati presenti in OpenStreetMap per tutta l’italia filtrandoli per regione, provincia o comune. È inoltre possibile scaricare dati tematici.
            Si possono scaricare i dati in vari formati (GPKG - OGC GeoPackage, PBF - Protocolbuffer Binary Format, OSMAND OBF - OsmAnd Binary Maps Format) a seconda della scala.`,
            link: 'https://osmit-estratti.wmcloud.org',
        },
        {
            image: 'suosm',
            name: 'Su OpenStreetMap',
            description: 'n sito sviluppato da mappatori italiani che permette di aggiungere segnalazioni su attività commerciali mancanti inserendo note su OpenStreetMap anche senza avere un profilo utente.',
            link: 'https://su.openstreetmap.it',
        },
        {
            image: 'wiki',
            name: 'WikiOSM',
            description: 'Una raccolta di tutte le informazioni (documentazione, guide, organizzazione, ecc) legate a OpenStreetMap.',
            link: 'https://wiki.openstreetmap.org/wiki/Main_Page',
        },
        {
            image: 'umap',
            name: 'uMap',
            description: 'Uno strumento perfetto per creare una mappa in pochi minuti usando i dati di OpenStreetMap',
            link: 'https://osmit-umap.wmflabs.org/it/',
        },
        {
            image: 'weekly',
            name: 'Weekly OSM',
            description: 'Notizie da tutto il mondo OpenStreetMap tradotte in diverse lingue tra cui l\'italiano.',
            link: 'https://weeklyosm.eu/it/',
        },
        {
            image: 'learnosm',
            name: 'LearnOSM',
            description: 'Un sito con guide su come usare OSM.',
            link: 'https://learnosm.org/it/',
        },
        {
            image: 'osmose',
            name: 'Quality Assurance',
            description: 'Molti strumenti sono stati creati dei contributori di OpenStreetMap per identificare in maniera automatica la presenza di errori nei dati, come [OSMCha](https://osmcha.org/), [osmose](http://osmose.openstreetmap.fr/it/map/), [keep it right](https://www.keepright.at/report_map.php), [OSM Inspector](https://tools.geofabrik.de/osmi/), [Mappa dei municipi mancanti in Italia](https://umap.openstreetmap.fr/it/map/missing-pois_564040#6/43.082/12.504), [Controlli aggiuntivi per JOSM](https://github.com/fansanelli/map-this-way) e molti altri',
            link: 'https://wiki.openstreetmap.org/wiki/Quality_assurance',
        },
        {
            image: 'osmand',
            name: 'Applicazioni per telefono',
            description: `I dati di OpenStreetMap possono essere anche consultati tramite applicazioni per telefono, sia per l'inserimento che per la consultazione. Le app di editing più usate sono [Vespucci](), [GoMap!!]() e [StreetComplete](https://wiki.openstreetmap.org/wiki/StreetComplete). Molto diffuse sono anche le app di navigazione come [OSMAnd](https://wiki.openstreetmap.org/wiki/OsmAnd). Tutte le app sono presenti nella wikiOSM.`,
            link: 'https://wiki.openstreetmap.org/wiki/Software/Mobile',
        },
    ],
    projectsDescription: '', // supports HTML
    contactDescription: '', // supports HTML
    contactTitle: 'Contatti',
    github: {
        url: 'https://github.com/osmItalia/',
        text: ''
    },
    facebook: {
        url: 'https://it-it.facebook.com/OpenStreetMap.Italia/',
        text: ''
    },
    twitter: {
        url: 'https://twitter.com/OpenStreetMapIt',
        text: ''
    }
}
