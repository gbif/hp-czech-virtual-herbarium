/*
This is the file in which you configure the data widgets. Feel free to experiment with the configuration options.
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/

/** GBIF publishing orgs */
const publishingOrg = [
    "75ed8583-8bd8-4f82-9346-75b234fe4682", //HerbPRC - only GBIF, that is not present at GRSciColl
    "752e718d-c9d3-425d-baf5-962977256eb7", // muz Buděj
    "4c22b91d-aea3-46ba-8b43-3151fb0776fb", // OL, only GBIF
    "33d6af32-c486-4bcc-84eb-808ef68f3eb5", // JCU, only GBIF
    "3ae77ff6-a9f1-4487-9d8a-af9f3e40cef9", // IBOT onyl GBIF
    "9a4467a2-eccd-4aa7-bb6d-aea3a31f2a2c", // MUNI onyl GBIF
    "17e8fde5-9144-49c8-a893-87138e95b0b7", // NM only GBIF
    "e042bad4-6ff2-4855-b6ac-fbadffd70852" //Muz Pardubice
]

/** GRSciColl institutions */
const institutions = [
  "4860e0da-cf52-4973-b5ca-cf558075eb62", //MZM
  "d1fe2c50-27bd-4a9e-bacf-bbea9d897799", // CUNI
    "b678ac23-e4ab-411a-9b40-dc61b86e36b2", // NM
    "1b322f71-8e7e-432c-8915-112cfe2e3b48", // MUNI
    "dd07351c-e96f-483f-94f3-17c8b3196a1e", // ibot
    "5e244565-c3c0-4d24-9bd1-5d70a263f70f", //MP
    "4f17abac-cac6-4d38-ac33-f13c5b68339a", // JCU Muz
    "4c1cc7a6-50d6-4ea8-806c-5bd01a5a56f4", // Jihal Muze
    "b68a6043-7e4d-4fa3-89f9-3d4aebd70b22",  //UPOL
    "23a2eb86-0693-40c7-8cef-ec9a011f02c2", // UPOL

]
const taxa = ["5", "6"]

const collections = [
  "e7728adb-7110-4695-a05f-eacaf96b7343", //BRNU
]

const collectionsCode = [
  "BRNU",
    "PRC",
    "PR",
    "OL",
    "MP"

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
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    // TODO: you should remove types you do not want to use
    "OCCURRENCE",
    // "DATASET",
    // "PUBLISHER",
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
        {
          "type": "equals",
          "key": "basisOfRecord",
          "value": "PRESERVED_SPECIMEN"
        },
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
      country: "CZ",
      code: collectionsCode,

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
      country: "CZ",
      institutionKey: institutions,
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
      country: "CZ",
      publisher: publishingOrg
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
