/*
This is the file in which you configure the data widgets. Feel free to experiment with the configuration options.
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/

const publishingOrg = [
    "b678ac23-e4ab-411a-9b40-dc61b86e36b2", //NM
    "d1fe2c50-27bd-4a9e-bacf-bbea9d897799", // PrF CUNI
    "4860e0da-cf52-4973-b5ca-cf558075eb62", //MZM
    "1b322f71-8e7e-432c-8915-112cfe2e3b48", //MUNI
    "dd07351c-e96f-483f-94f3-17c8b3196a1e", //IBOT
    "5e244565-c3c0-4d24-9bd1-5d70a263f70f", //Muz Pardubice
    "b68a6043-7e4d-4fa3-89f9-3d4aebd70b22", //UPOL
]

const taxa = ["5", "6"]

const collections = [
    "acfe8944-420a-473a-b0d5-2744ce1020c3",  //PR
    "28b3651a-dbb4-4c1a-a690-499e26ba7633", //PRC
    "043a7194-8d0e-4c97-85c2-98e2fe46d6b9", //BRNM
    "e7728adb-7110-4695-a05f-eacaf96b7343", //BRNU
    "a6b39828-665a-4ec2-bf40-de9c1f8134c5", // PRA
    "736101aa-cbba-48ff-a02d-85f5a7fb3ccf", //MP
    "4352a25a-46a5-4367-940b-4cb82a7d219a", // OL
]


var siteConfig = {
    "version": 3,
    "pages": [ // which pages do we want to enable
        {
            "id": "occurrenceSearch"
        },
        {
            "id": "occurrenceKey"
        },
        {
            "id": "collectionSearch"
        },
        {
            "id": "collectionKey"
        },
        {
            "id": "datasetSearch"
        },
        {
            "id": "datasetKey"
        },
        {
            "id": "institutionSearch"
        },
        {
            "id": "institutionKey"
        },
        // {
        //     "id": "literatureSearch"
        // }
    ],
    "disableInlineTableFilterButtons": false,
    "availableCatalogues": [
        // TODO: you should remove types you do not want to use
        "OCCURRENCE",
        "DATASET",
        "PUBLISHER",
        "COLLECTION",
        "INSTITUTION",
        // "LITERATURE"
    ],
    "dataHeader": {
        "enableApiPopup": false,
        "enableInfoPopup": false
    },
    "theme": {
        "primary": themeStyle.colors.primary,
        "borderRadius": 3,
        "stickyOffset": "0px"
    },
    "maps": {
        "mapStyles": {
            "defaultProjection": "MERCATOR",
            "defaultMapStyle": "BRIGHT",
            "options": {
                "MERCATOR": [
                    "BRIGHT",
                    "NATURAL"
                ]
            }
        }
    },
    "languages": [
        {
            "code": "en",
            "localeCode": "en",
            "label": "English",
            "default": true,
            "textDirection": "ltr",
            "iso3LetterCode": "eng",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        "scope": {
            "type": "and",
            "predicates": [
                {
                    "type": "in",
                    "key": "publishingOrg",
                    "values": publishingOrg
                },
                // {
                //     "type": "equals",
                //     "key": "basisOfRecord",
                //     "value": "PRESERVED_SPECIMEN"
                // },
                {
                    "type": "in",
                    "key": "taxonKey",
                    "values": taxa
                }
            ]
        },
        "highlightedFilters": [
            "taxonKey",
            "verbatimScientificName",
            // "institutionKey",
            // "collectionKey",
            "catalogNumber",
            "recordedBy",
            "identifiedBy"
        ],
        "excludedFilters": [
            "occurrenceStatus",
            "networkKey",
            "hostingOrganizationKey",
            "protocol",
            "publishingCountry",
            "institutionCode",
            "collectionCode"
        ],
        "defaultEnabledTableColumns": [
            "features",
            "scientificName",
            "country",
            "year",
            "iucnRedListCategory",
            "catalogNumber",
            "institutionKey",
            "recordedBy",
            "dataset",
            "typeStatus"
        ],
        "tabs": [
            "table",
            "gallery",
            "map",
            // "clusters",
            // "dashboard",
            "download"
        ],
        "mapSettings": {
            "lat": 52,
            "lng": 12,
            "zoom": 4.911544076366507
        }
    },
    "collectionSearch": {
        excludedFilters: ['country', 'active'],
        // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            active: true,
            collectionKey: collections
        },
    },
    "institutionSearch": {
        excludedFilters: ['country', 'active'],
        // highlightedFilters: ['q', 'type'],
        // defaultTableColumns: ['title', 'type'],
        scope: {
            // TODO: you should add a scope here if you need search to be limited to a subset
            // search filters have the format {field: [values]}
            active: true,
            institutionKey: publishingOrg
        }
    },
    "datasetSearch": {
        excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
        highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        scope: {
            // TODO: you should add a scope here if you need search to be limited to a subset
            // search filters have the format {field: [values]}
            type: ['OCCURRENCE', 'CHECKLIST'],
            country: "CZ"
        },
    },
    "publisherSearch": {
        scope: {
            // TODO: you should add a scope here if you need search to be limited to a subset
            // search filters have the format {field: [values]}
            country: "CZ"
        }
    },
    "literatureSearch": {
        scope: {
            // TODO: you should add a scope here if you need search to be limited to a subset
            // literature search use the predicate format similar to occurrence search
            "type": "in",
            "key": "country",
            "values": [
                "CZ"
            ]
        }

    }
}
