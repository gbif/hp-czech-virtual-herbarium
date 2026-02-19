/*
This is the file in which you configure the data widgets. Feel free to experiment with the configuration options.
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/

const publishingOrg = [
    "75ed8583-8bd8-4f82-9346-75b234fe4682",
    "752e718d-c9d3-425d-baf5-962977256eb7",
    "4c22b91d-aea3-46ba-8b43-3151fb0776fb",
    "33d6af32-c486-4bcc-84eb-808ef68f3eb5",
    "3ae77ff6-a9f1-4487-9d8a-af9f3e40cef9",
    "9a4467a2-eccd-4aa7-bb6d-aea3a31f2a2c",
    "17e8fde5-9144-49c8-a893-87138e95b0b7"
]

const taxa = ["5", "6"]

const collections = [
  "050c4554-5b12-4ce7-b0d7-c60fb0b39792",
  "268388da-3e14-48d6-9df8-e6550bac4ccb",
  "6ba91f3b-a3c0-4142-9ab8-1f326632ad67",
  "debf78bd-cd96-4bac-b4ee-14b4c7c4131c",
  "09dba04b-22fa-40fe-9902-9491cd3476a5",
  "20bb0d47-ab32-4354-88ff-206363c852f0",
  "28b3651a-dbb4-4c1a-a690-499e26ba7633",
  "290d7252-3574-4739-b6a6-a973e75fa006",
  "2d64b718-6caa-456d-9a40-da7b75fbd937",
  "59c1ea9b-53a1-4d82-84d8-851d32bf2a05",
  "6e9dd0e9-4341-4c12-9e5c-3eb3c366b8d5",
  "876b8461-f2fb-49ac-8785-e32d6f6e39e9",
  "94da0ff1-2653-445a-a840-c38bfeefda6a",
  "a0166cf1-c734-4d32-8df9-7a54f6de3772",
  "b74e364a-93af-4557-9c11-4001080f7afe",
  "c48e191a-7ff2-47c7-85a4-16c7f9862223",
  "c809b7e6-c971-4ebf-a1f0-8ed16bce2527",
  "f69b691f-20d6-4438-8bee-f8afd5da32ac",
  "fc6e2145-7495-4ac5-b4d9-a035c9de9ef2",
  "018918e1-6b3e-469e-811f-8c319502e409",
  "0cd3b4ef-7c72-4497-a03a-cf3408e0dff0",
  "1544d2c8-18aa-4fe5-9ba4-2b07b2d4ec71",
  "2ca40f9f-f375-45ac-9728-38f0101e6629",
  "308068a2-196e-4e53-9bd5-14eb033237b7",
  "30f2721b-edd8-4b49-b20c-2f76bfb1ac95",
  "3b6cfafb-73bb-486a-9168-3b61a171e2f9",
  "4352a25a-46a5-4367-940b-4cb82a7d219a",
  "54d62fce-3847-4529-94b9-22089587f60e",
  "5d4909c8-7669-4cee-98d1-618e4ccb572f",
  "7412a39c-a1bc-4fd3-8b79-8fb65d81d5e3",
  "84dc577c-ca92-44ab-8962-61449c801d33",
  "a3143463-b654-4c99-bc8a-75dd81be3f08",
  "b4ff5a39-e68e-4f0b-a1ee-ff4d277d5f6b",
  "b62e10c9-275c-47d4-9684-35b3cfb74451",
  "ba19af15-3ea8-40d5-bc08-d621bbdac470",
  "c94ff6b5-5d1c-4449-93c8-3de89a23da36",
  "ce2e5280-d28a-427b-8c92-99e789caad51",
  "e137eccb-8f0b-4222-8c79-fa7b4e1fe86c",
  "e7728adb-7110-4695-a05f-eacaf96b7343",
  "043a7194-8d0e-4c97-85c2-98e2fe46d6b9",
  "2ea0a000-5dae-4f7e-ab22-a3909323759b",
  "37258b53-ffbf-4a53-822d-c43ae7236332",
  "3b8d43bb-8d48-441a-b371-fe840fd71879",
  "43133814-e808-4765-8b4e-98d992195d6b",
  "4ff6b073-a8c6-4720-85fd-6f8d21ad8a2b",
  "502e7824-ce70-4b05-8c21-43f62fb752b0",
  "53cf1b3d-05c3-49a6-8f94-69775bb2f745",
  "5a06f1c0-7600-4425-ab94-e8b4795490f0",
  "5b4c02e3-c2bb-429e-8a54-61c942cfd7bc",
  "60dddd1d-b05e-464f-a792-ed497b9528ec",
  "6c0a2f33-ebd0-4ecb-b53d-12c1809c8826",
  "736101aa-cbba-48ff-a02d-85f5a7fb3ccf",
  "88149499-ae1b-41e3-953a-d39c7160c4f9",
  "a6b39828-665a-4ec2-bf40-de9c1f8134c5",
  "b2c4af28-79f4-40af-90a7-1e077cd18a2a",
  "b68beb9f-51b1-4b5a-9aa2-71c31aa36f71",
  "c4d88ec4-11dc-426f-a2e9-6600b1eca3ad",
  "d323f3d7-c9a1-42f0-8575-fd7fce42e2f9",
  "dbb9aca9-a95b-477d-bd75-8422f7e35512",
  "26c9eecc-aa14-4434-8bd0-8ee43810d3ff",
  "3634faf2-c8d3-412d-a005-b5d1577898de",
  "acfe8944-420a-473a-b0d5-2744ce1020c3"
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
    "DATASET",
    "PUBLISHER",
    "COLLECTION",
    "INSTITUTION",
    "LITERATURE"
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
      active: true
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
      country: "CZ"
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
