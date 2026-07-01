/*
  Supplier 360 SRM Demo Prototype
  DATA NOTICE: all records in this file are fictional dummy demo data.
  Do not replace this file with real SAP, SharePoint, supplier, or contact exports in a public repository.
*/

const suppliers = [
  {
    id: "SUP-1000",
    name: "Alpine Fresh Trading Ltd.",
    initials: "AF",
    status: "Approved",
    owner: "Demo Produce Group / Partner Unit",
    region: "IT • DE • PL",
    risk: "Low",
    subtitle: "Fresh produce • Multi-country origin coverage",

    masterData: [
      { label: "Supplier ID", value: "SUP-1000" },
      { label: "Legal Entity", value: "Alpine Fresh Trading Ltd." },
      { label: "BP Portal ID", value: "BP-SUP-1000" },
      { label: "BP Portal Name", value: "Alpine Fresh Portal" },
      { label: "Country Coverage", value: "IT, DE, PL" },
      { label: "Overall Status", value: "Approved" }
    ],

    details: [
      { label: "Agency Coverage", value: "Demo Produce Group, Partner Unit" },
      { label: "Different Invoicing Parties", value: "No deviation" },
      { label: "Retailer Status", value: "Approved" },
      { label: "Partner Status", value: "Approved" },
      { label: "Active / Inactive", value: "Active" }
    ],

    compliance: [
      { label: "Contact Coverage", value: "Sales, Quality, Logistics, Administration" },
      { label: "Approval Completeness", value: "Mostly complete" },
      { label: "Trace Record Status", value: "Recent follow-up available" },
      { label: "Data Quality Note", value: "Prototype-safe supplier record" }
    ],

    timeline: [
      {
        title: "Supplier profile reviewed",
        type: "Review",
        icon: "✓",
        detail: "Master data and material group records were checked for the dashboard prototype.",
        date: "Jun 2026",
        owner: "SRM Team",
        purpose: "Validate supplier profile before custom UI migration",
        status: "Completed"
      },
      {
        title: "Country-origin check completed",
        type: "Data Check",
        icon: "🌍",
        detail: "Supplier has material groups across Italy, Germany, and Poland.",
        date: "Jun 2026",
        owner: "Supplier Data Team",
        purpose: "Confirm country-origin granularity belongs to material group level",
        status: "Completed"
      },
      {
        title: "Quality contact follow-up",
        type: "Follow-up",
        icon: "☎",
        detail: "Quality contact confirmed as main owner for product-related communication.",
        date: "May 2026",
        owner: "Quality Team",
        purpose: "Confirm contact ownership for traceability",
        status: "Closed"
      }
    ],

    contacts: [
      {
        role: "Key Account Manager",
        department: "Sales",
        firstName: "Alex",
        lastName: "Martin",
        email: "alex.martin@demo-supplier-a.example.com",
        phone: "+39 000 100 0001",
        approvalStatus: "Approved"
      },
      {
        role: "Quality Contact",
        department: "Quality Assurance",
        firstName: "Mia",
        lastName: "Carter",
        email: "mia.carter@demo-supplier-a.example.com",
        phone: "+39 000 100 0004",
        approvalStatus: "Approved"
      },
      {
        role: "Logistics Coordinator",
        department: "Logistics",
        firstName: "Nora",
        lastName: "Wilson",
        email: "nora.wilson@demo-supplier-a.example.com",
        phone: "+39 000 100 0005",
        approvalStatus: "Pending"
      },
      {
        role: "Administration Contact",
        department: "Administration",
        firstName: "Emma",
        lastName: "Stone",
        email: "emma.stone@demo-supplier-a.example.com",
        phone: "+39 000 100 0006",
        approvalStatus: "Approved"
      }
    ],

    materialGroups: [
      {
        materialGroup: "Organic Kiwi",
        country: "IT",
        agency: "Demo Produce Group",
        statusRetailer: "Approved",
        statusPartner: "Approved",
        active: "Active"
      },
      {
        materialGroup: "Melons",
        country: "IT",
        agency: "Demo Produce Group",
        statusRetailer: "Approved",
        statusPartner: "Approved",
        active: "Active"
      },
      {
        materialGroup: "Grapefruit",
        country: "DE",
        agency: "Partner Unit",
        statusRetailer: "Approved",
        statusPartner: "Approved",
        active: "Active"
      },
      {
        materialGroup: "Tomatoes",
        country: "PL",
        agency: "Partner Unit",
        statusRetailer: "Approved",
        statusPartner: "Pending",
        active: "Active"
      }
    ],

    performanceSummary: [
      { metric: "Material Groups", value: "4", note: "Active supplier coverage" },
      { metric: "Origin Countries", value: "3", note: "IT, DE, PL" },
      { metric: "Contact Records", value: "4", note: "1 pending approval" }
    ],

    scorecards: [
      { date: "Jun 2026", activity: "Profile Review", comment: "Supplier profile and material groups validated" },
      { date: "May 2026", activity: "Contact Follow-up", comment: "Quality and logistics contacts reviewed" }
    ]
  },

  {
    id: "SUP-2000",
    name: "Tomato Valley Foods Ltd.",
    initials: "TV",
    status: "Pending",
    owner: "Partner Unit",
    region: "IT • PL",
    risk: "Medium",
    subtitle: "Tomatoes • Canned and fresh product groups",

    masterData: [
      { label: "Supplier ID", value: "SUP-2000" },
      { label: "Legal Entity", value: "Tomato Valley Foods Ltd." },
      { label: "BP Portal ID", value: "BP-SUP-2000" },
      { label: "BP Portal Name", value: "Tomato Valley Portal" },
      { label: "Country Coverage", value: "IT, PL" },
      { label: "Overall Status", value: "Pending" }
    ],

    details: [
      { label: "Agency Coverage", value: "Partner Unit" },
      { label: "Different Invoicing Parties", value: "Under review" },
      { label: "Retailer Status", value: "Approved" },
      { label: "Partner Status", value: "Pending" },
      { label: "Active / Inactive", value: "Active" }
    ],

    compliance: [
      { label: "Contact Coverage", value: "Commercial, Quality, Logistics" },
      { label: "Approval Completeness", value: "Pending quality confirmation" },
      { label: "Trace Record Status", value: "Open follow-up" },
      { label: "Data Quality Note", value: "Prototype supplier with multiple contact records" }
    ],

    timeline: [
      {
        title: "Quality approval requested",
        type: "Approval",
        icon: "⏳",
        detail: "Quality team requested missing product confirmation for tomato groups.",
        date: "Jun 2026",
        owner: "Quality Team",
        purpose: "Complete supplier approval workflow",
        status: "Pending"
      },
      {
        title: "Commercial contact added",
        type: "Contact",
        icon: "👤",
        detail: "Oliver Brown was added as the purchasing contact.",
        date: "May 2026",
        owner: "Commercial Team",
        purpose: "Maintain supplier contact responsibility",
        status: "Completed"
      },
      {
        title: "Logistics contact checked",
        type: "Logistics",
        icon: "🚚",
        detail: "Nora Wilson confirmed as logistics coordinator for transport follow-up.",
        date: "Apr 2026",
        owner: "Logistics Team",
        purpose: "Improve route and delivery communication",
        status: "Completed"
      }
    ],

    contacts: [
      {
        role: "Purchasing Contact",
        department: "Commercial",
        firstName: "Oliver",
        lastName: "Brown",
        email: "oliver.brown@demo-supplier-b.example.com",
        phone: "+39 000 100 0002",
        approvalStatus: "Approved"
      },
      {
        role: "Quality Contact",
        department: "Quality Assurance",
        firstName: "Mia",
        lastName: "Carter",
        email: "mia.carter@demo-supplier-b.example.com",
        phone: "+39 000 100 0004",
        approvalStatus: "Pending"
      },
      {
        role: "Logistics Coordinator",
        department: "Logistics",
        firstName: "Nora",
        lastName: "Wilson",
        email: "nora.wilson@demo-supplier-b.example.com",
        phone: "+39 000 100 0005",
        approvalStatus: "Approved"
      }
    ],

    materialGroups: [
      {
        materialGroup: "Tomatoes",
        country: "IT",
        agency: "Partner Unit",
        statusRetailer: "Approved",
        statusPartner: "Pending",
        active: "Active"
      },
      {
        materialGroup: "Canned Tomatoes",
        country: "IT",
        agency: "Partner Unit",
        statusRetailer: "Approved",
        statusPartner: "Pending",
        active: "Active"
      },
      {
        materialGroup: "Tomato Passata",
        country: "PL",
        agency: "Partner Unit",
        statusRetailer: "Approved",
        statusPartner: "Approved",
        active: "Active"
      },
      {
        materialGroup: "Sauce Base",
        country: "IT",
        agency: "Partner Unit",
        statusRetailer: "Pending",
        statusPartner: "Pending",
        active: "Inactive"
      }
    ],

    performanceSummary: [
      { metric: "Material Groups", value: "4", note: "1 inactive material group" },
      { metric: "Origin Countries", value: "2", note: "IT, PL" },
      { metric: "Contact Records", value: "3", note: "1 pending approval" }
    ],

    scorecards: [
      { date: "Jun 2026", activity: "Approval Follow-up", comment: "Partner status still pending for key tomato groups" },
      { date: "May 2026", activity: "Contact Update", comment: "Commercial and logistics contacts available" }
    ]
  },

  {
    id: "SUP-3000",
    name: "Green Valley Produce Co.",
    initials: "GV",
    status: "Approved",
    owner: "Demo Produce Group",
    region: "IT",
    risk: "Low",
    subtitle: "Regional produce • Single-country supplier",

    masterData: [
      { label: "Supplier ID", value: "SUP-3000" },
      { label: "Legal Entity", value: "Green Valley Produce Co." },
      { label: "BP Portal ID", value: "BP-SUP-3000" },
      { label: "BP Portal Name", value: "Green Valley Portal" },
      { label: "Country Coverage", value: "IT" },
      { label: "Overall Status", value: "Approved" }
    ],

    details: [
      { label: "Agency Coverage", value: "Demo Produce Group" },
      { label: "Different Invoicing Parties", value: "No deviation" },
      { label: "Retailer Status", value: "Approved" },
      { label: "Partner Status", value: "Approved" },
      { label: "Active / Inactive", value: "Active" }
    ],

    compliance: [
      { label: "Contact Coverage", value: "Management, Administration" },
      { label: "Approval Completeness", value: "Complete" },
      { label: "Trace Record Status", value: "No open issues" },
      { label: "Data Quality Note", value: "Clean supplier master record" }
    ],

    timeline: [
      {
        title: "Supplier confirmed active",
        type: "Status",
        icon: "✓",
        detail: "Supplier remains active for approved regional produce groups.",
        date: "Jun 2026",
        owner: "SRM Team",
        purpose: "Confirm active supplier usage",
        status: "Completed"
      },
      {
        title: "Management contact validated",
        type: "Contact",
        icon: "👤",
        detail: "Daniel Green confirmed as primary supplier contact.",
        date: "May 2026",
        owner: "Supplier Data Team",
        purpose: "Maintain contact traceability",
        status: "Completed"
      }
    ],

    contacts: [
      {
        role: "Managing Director",
        department: "Management",
        firstName: "Daniel",
        lastName: "Green",
        email: "daniel.green@demo-supplier-c.example.com",
        phone: "+39 000 100 0003",
        approvalStatus: "Approved"
      },
      {
        role: "Administration Contact",
        department: "Administration",
        firstName: "Sara",
        lastName: "Green",
        email: "sara.green@demo-supplier-c.example.com",
        phone: "+39 000 100 0007",
        approvalStatus: "Approved"
      }
    ],

    materialGroups: [
      {
        materialGroup: "Citrus",
        country: "IT",
        agency: "Demo Produce Group",
        statusRetailer: "Approved",
        statusPartner: "Approved",
        active: "Active"
      },
      {
        materialGroup: "Seasonal Vegetables",
        country: "IT",
        agency: "Demo Produce Group",
        statusRetailer: "Approved",
        statusPartner: "Approved",
        active: "Active"
      }
    ],

    performanceSummary: [
      { metric: "Material Groups", value: "2", note: "Both active" },
      { metric: "Origin Countries", value: "1", note: "IT only" },
      { metric: "Contact Records", value: "2", note: "All approved" }
    ],

    scorecards: [
      { date: "Jun 2026", activity: "Status Review", comment: "Supplier status remains approved" },
      { date: "May 2026", activity: "Contact Check", comment: "Primary contact verified" }
    ]
  },

  {
    id: "SUP-4000",
    name: "Continental Fresh Network Ltd.",
    initials: "CF",
    status: "Needs Review",
    owner: "Demo Produce Group / Partner Unit",
    region: "IT • DE",
    risk: "Medium",
    subtitle: "Important example • One supplier with multiple origin countries",

    masterData: [
      { label: "Supplier ID", value: "SUP-4000" },
      { label: "Legal Entity", value: "Continental Fresh Network Ltd." },
      { label: "BP Portal ID", value: "BP-SUP-4000" },
      { label: "BP Portal Name", value: "Continental Fresh Portal" },
      { label: "Country Coverage", value: "IT, DE" },
      { label: "Overall Status", value: "Needs Review" }
    ],

    details: [
      { label: "Agency Coverage", value: "Demo Produce Group, Partner Unit" },
      { label: "Different Invoicing Parties", value: "Requires validation" },
      { label: "Retailer Status", value: "Approved" },
      { label: "Partner Status", value: "No Approval" },
      { label: "Active / Inactive", value: "Active" }
    ],

    compliance: [
      { label: "Contact Coverage", value: "Commercial, Quality, Logistics" },
      { label: "Approval Completeness", value: "Needs review" },
      { label: "Trace Record Status", value: "Country-origin mismatch identified" },
      { label: "Data Quality Note", value: "Country of origin should stay at material-group level, not supplier master level" }
    ],

    timeline: [
      {
        title: "Multi-country issue identified",
        type: "Data Quality",
        icon: "⚠",
        detail: "Supplier SUP-4000 has both Italy and Germany origins. This confirms country belongs to material/product detail level.",
        date: "Jun 2026",
        owner: "SRM Data Team",
        purpose: "Avoid incorrect supplier-level deduplication",
        status: "Needs Review"
      },
      {
        title: "Material group split recommended",
        type: "Modeling",
        icon: "🧩",
        detail: "Material groups should be stored as child records linked by Supplier ID.",
        date: "Jun 2026",
        owner: "Dashboard Team",
        purpose: "Protect the data model from losing origin-level information",
        status: "In Progress"
      },
      {
        title: "Supplier dashboard check",
        type: "Dashboard",
        icon: "📊",
        detail: "Charts now show IT and DE as separate origin countries for this supplier.",
        date: "Jun 2026",
        owner: "Dashboard Team",
        purpose: "Expose country-origin coverage visually",
        status: "Completed"
      }
    ],

    contacts: [
      {
        role: "Commercial Contact",
        department: "Commercial",
        firstName: "Leo",
        lastName: "Adams",
        email: "leo.adams@demo-supplier-d.example.com",
        phone: "+39 000 100 0010",
        approvalStatus: "Approved"
      },
      {
        role: "Quality Contact",
        department: "Quality Assurance",
        firstName: "Hannah",
        lastName: "Brooks",
        email: "hannah.brooks@demo-supplier-d.example.com",
        phone: "+49 000 100 0011",
        approvalStatus: "Pending"
      },
      {
        role: "Logistics Contact",
        department: "Logistics",
        firstName: "Max",
        lastName: "Turner",
        email: "max.turner@demo-supplier-d.example.com",
        phone: "+39 000 100 0012",
        approvalStatus: "Approved"
      }
    ],

    materialGroups: [
      {
        materialGroup: "Apples",
        country: "IT",
        agency: "Demo Produce Group",
        statusRetailer: "Approved",
        statusPartner: "Approved",
        active: "Active"
      },
      {
        materialGroup: "Pears",
        country: "IT",
        agency: "Demo Produce Group",
        statusRetailer: "Approved",
        statusPartner: "No Approval",
        active: "Active"
      },
      {
        materialGroup: "Tomatoes",
        country: "DE",
        agency: "Partner Unit",
        statusRetailer: "Approved",
        statusPartner: "No Approval",
        active: "Active"
      },
      {
        materialGroup: "Leafy Greens",
        country: "DE",
        agency: "Partner Unit",
        statusRetailer: "Pending",
        statusPartner: "No Approval",
        active: "Inactive"
      },
      {
        materialGroup: "Stone Fruit",
        country: "IT",
        agency: "Demo Produce Group",
        statusRetailer: "Approved",
        statusPartner: "Pending",
        active: "Active"
      }
    ],

    performanceSummary: [
      { metric: "Material Groups", value: "5", note: "Split across IT and DE" },
      { metric: "Origin Countries", value: "2", note: "Shows why country is not supplier-level" },
      { metric: "Contact Records", value: "3", note: "1 pending approval" }
    ],

    scorecards: [
      { date: "Jun 2026", activity: "Data Model Review", comment: "Country-origin field moved to material group detail concept" },
      { date: "Jun 2026", activity: "Dashboard Validation", comment: "Charts expose IT / DE split correctly" }
    ]
  }
];

const supplierBusinessDetails = {
  "SUP-1000": {
    countryOfOrigin: "IT, DE, PL",
    ggn: "GGN-SUP-1000-2026",
    gln: "GLN-8000001000",
    extraInfo: [
      {
        label: "Company history",
        value: "Long-term fresh produce trading partner with multi-country sourcing across Italy, Germany, and Poland.",
        wide: true
      },
      {
        label: "Year of foundation",
        value: "1998"
      },
      {
        label: "Ownership structure",
        value: "Privately owned trading company"
      },
      {
        label: "Location",
        value: "Headquarters in Germany; packing and producer network across IT, DE, and PL",
        wide: true
      },
      {
        label: "Structure of production",
        value: "Supplier works with multiple producers and packing houses depending on season and product group.",
        wide: true
      },
      {
        label: "Collaboration with other customers",
        value: "Works with regional retail and wholesale customers."
      },
      {
        label: "Partner Cooperation History",
        value: "Established supplier relationship with regular quality and logistics follow-ups.",
        wide: true
      }
    ]
  },

  "SUP-2000": {
    countryOfOrigin: "IT, PL",
    ggn: "GGN-SUP-2000-2026",
    gln: "GLN-DEMO-2000",
    extraInfo: [
      {
        label: "Company history",
        value: "Tomato-focused supplier supporting canned, fresh, passata, and sauce-base product groups.",
        wide: true
      },
      {
        label: "Year of foundation",
        value: "2007"
      },
      {
        label: "Ownership structure",
        value: "Family-owned supplier organization"
      },
      {
        label: "Location",
        value: "Italian headquarters with product sourcing and processing support from Italy and Poland",
        wide: true
      },
      {
        label: "Structure of production",
        value: "Mixed production and processing model for fresh tomatoes and processed tomato products.",
        wide: true
      },
      {
        label: "Collaboration with other customers",
        value: "Supplies food service and retail-related tomato product channels."
      },
      {
        label: "Partner Cooperation History",
        value: "Partner approval is still pending for some tomato-related material groups.",
        wide: true
      }
    ]
  },

  "SUP-3000": {
    countryOfOrigin: "IT",
    ggn: "GGN-SUP-3000-2026",
    gln: "GLN-DEMO-3000",
    extraInfo: [
      {
        label: "Company history",
        value: "Regional produce supplier with a simple single-country sourcing structure.",
        wide: true
      },
      {
        label: "Year of foundation",
        value: "1992"
      },
      {
        label: "Ownership structure",
        value: "Family-owned producer/supplier"
      },
      {
        label: "Location",
        value: "Italian headquarters with regional producer and packing structure",
        wide: true
      },
      {
        label: "Structure of production",
        value: "Direct regional production and seasonal vegetable sourcing.",
        wide: true
      },
      {
        label: "Collaboration with other customers",
        value: "Works mainly with regional customers."
      },
      {
        label: "Partner Cooperation History",
        value: "Clean supplier record with no open cooperation issues.",
        wide: true
      }
    ]
  },

  "SUP-4000": {
    countryOfOrigin: "IT, DE",
    ggn: "GGN-SUP-4000-2026",
    gln: "GLN-DEMO-4000",
    extraInfo: [
      {
        label: "Company history",
        value: "Multi-origin produce network used as the key prototype example for showing why supplier-level and material-level data must be separated.",
        wide: true
      },
      {
        label: "Year of foundation",
        value: "2011"
      },
      {
        label: "Ownership structure",
        value: "Network-based supplier structure with multiple production partners"
      },
      {
        label: "Location",
        value: "Commercial presence in Italy and Germany; packing and producer structures vary by material group",
        wide: true
      },
      {
        label: "Structure of production",
        value: "Production is split across different origin countries and business units. This supplier should not be simplified into one country-only master record.",
        wide: true
      },
      {
        label: "Collaboration with other customers",
        value: "Works with other retail and wholesale customers across multiple origin markets."
      },
      {
        label: "Partner Cooperation History",
        value: "Needs review because Partner approval and country-origin handling are not fully clean across all material groups.",
        wide: true
      }
    ]
  }
};
const state = {
  activeSupplierId: suppliers[0].id,
  activeTab: "overview",
  searchTerm: "",
  materialFilters: {
    country: "",
    agency: "",
    status: ""
  },
  contactFilters: {
    department: "",
    status: ""
    },
    activityFilters: {
    type: "",
    status: ""
    },
  editingContactIndex: null,
  editingActivityIndex: null
};

const supplierList = document.getElementById("supplierList");
const globalSearch = document.getElementById("globalSearch");

const supplierAvatar = document.getElementById("supplierAvatar");
const supplierName = document.getElementById("supplierName");
const supplierStatus = document.getElementById("supplierStatus");
const supplierSubtitle = document.getElementById("supplierSubtitle");

const supplierId = document.getElementById("supplierId");
const supplierCountries = document.getElementById("supplierCountries");
const supplierMaterialCount = document.getElementById("supplierMaterialCount");
const supplierOwner = document.getElementById("supplierOwner");

const supplierInsightStrip = document.getElementById("supplierInsightStrip");
const masterData = document.getElementById("masterData");
const activityTimeline = document.getElementById("activityTimeline");
const activitySummaryStrip = document.getElementById("activitySummaryStrip");
const activityTypeFilter = document.getElementById("activityTypeFilter");
const activityStatusFilter = document.getElementById("activityStatusFilter");
const clearActivityFilters = document.getElementById("clearActivityFilters");
const activityTimelineFull = document.getElementById("activityTimelineFull");
const overviewContacts = document.getElementById("overviewContacts");
const detailsList = document.getElementById("detailsList");
const complianceList = document.getElementById("complianceList");
const extraInfoGrid = document.getElementById("extraInfoGrid");
const openExtraInfoFormButton = document.getElementById("openExtraInfoFormButton");
const extraInfoForm = document.getElementById("extraInfoForm");
const extraCompanyHistory = document.getElementById("extraCompanyHistory");
const extraYearFoundation = document.getElementById("extraYearFoundation");
const extraOwnershipStructure = document.getElementById("extraOwnershipStructure");
const extraLocation = document.getElementById("extraLocation");
const extraProductionStructure = document.getElementById("extraProductionStructure");
const extraOtherCustomers = document.getElementById("extraOtherCustomers");
const extraPartnerHistory = document.getElementById("extraPartnerHistory");

const sapMasterGrid = document.getElementById("sapMasterGrid");
const openSapMasterFormButton = document.getElementById("openSapMasterFormButton");
const sapMasterForm = document.getElementById("sapMasterForm");
const sapSupplierId = document.getElementById("sapSupplierId");
const sapSupplierName = document.getElementById("sapSupplierName");
const sapSupplierStatus = document.getElementById("sapSupplierStatus");
const sapCountryOrigin = document.getElementById("sapCountryOrigin");
const sapGgn = document.getElementById("sapGgn");
const sapGln = document.getElementById("sapGln");
const sapOwner = document.getElementById("sapOwner");
const sapBpPortalId = document.getElementById("sapBpPortalId");
const sapBpPortalName = document.getElementById("sapBpPortalName");

const materialSummaryStrip = document.getElementById("materialSummaryStrip");
const materialGroupsBody = document.getElementById("materialGroupsBody");
const materialCountryFilter = document.getElementById("materialCountryFilter");
const materialAgencyFilter = document.getElementById("materialAgencyFilter");
const materialStatusFilter = document.getElementById("materialStatusFilter");
const clearMaterialFilters = document.getElementById("clearMaterialFilters");

const contactSummaryStrip = document.getElementById("contactSummaryStrip");
const contactDepartmentFilter = document.getElementById("contactDepartmentFilter");
const contactStatusFilter = document.getElementById("contactStatusFilter");
const clearContactFilters = document.getElementById("clearContactFilters");
const contactsGrid = document.getElementById("contactsGrid");

const kpiMaterials = document.getElementById("kpiMaterials");
const kpiCountries = document.getElementById("kpiCountries");
const kpiContacts = document.getElementById("kpiContacts");
const kpiRisk = document.getElementById("kpiRisk");

const performanceSummaryBody = document.getElementById("performanceSummaryBody");
const scorecardBody = document.getElementById("scorecardBody");

const countryChartCanvas = document.getElementById("countryChart");
const approvalChartCanvas = document.getElementById("approvalChart");
const departmentChartCanvas = document.getElementById("departmentChart");
const activityChartCanvas = document.getElementById("activityChart");

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const commandButtons = document.querySelectorAll("[data-command]");
const commandFeedback = document.getElementById("commandFeedback");

const openContactFormButton = document.getElementById("openContactFormButton");
const openBigTraceFormButton = document.getElementById("openBigTraceFormButton");
const openSmallTraceFormButton = document.getElementById("openSmallTraceFormButton");

const addContactForm = document.getElementById("addContactForm");
const addActivityForm = document.getElementById("addActivityForm");
const closeFormButtons = document.querySelectorAll("[data-close-form]");

const contactFormTitle = document.getElementById("contactFormTitle");
const contactFormSubtitle = document.getElementById("contactFormSubtitle");
const saveContactButton = document.getElementById("saveContactButton");

const newContactName = document.getElementById("newContactName");
const newContactRole = document.getElementById("newContactRole");
const newContactDepartment = document.getElementById("newContactDepartment");
const newContactEmail = document.getElementById("newContactEmail");
const newContactPhone = document.getElementById("newContactPhone");
const newContactStatus = document.getElementById("newContactStatus");
const newContactCulturalInfos = document.getElementById("newContactCulturalInfos");

const newActivityTraceCategory = document.getElementById("newActivityTraceCategory");
const activityFormTitle = document.getElementById("activityFormTitle");
const activityFormSubtitle = document.getElementById("activityFormSubtitle");
const saveActivityButton = document.getElementById("saveActivityButton");
const bigTraceTimelineFull = document.getElementById("bigTraceTimelineFull");
const smallTraceTimelineFull = document.getElementById("smallTraceTimelineFull");
const bigTraceCount = document.getElementById("bigTraceCount");
const smallTraceCount = document.getElementById("smallTraceCount");

const newActivityTitle = document.getElementById("newActivityTitle");
const newActivityDate = document.getElementById("newActivityDate");
const newActivityType = document.getElementById("newActivityType");
const newActivityStatus = document.getElementById("newActivityStatus");
const newActivityPeople = document.getElementById("newActivityPeople");
const newActivityPurpose = document.getElementById("newActivityPurpose");
const newActivityNotes = document.getElementById("newActivityNotes");
let charts = {};

function statusClass(value = "") {
  return String(value).toLowerCase().trim().replace(/\s+/g, "-");
}

function statusPill(value = "-") {
  return `<span class="status-pill ${statusClass(value)} mini">${value}</span>`;
}

function getActiveSupplier() {
  return suppliers.find((supplier) => supplier.id === state.activeSupplierId) || suppliers[0];
}

function getCountries(supplier) {
  return [...new Set(supplier.materialGroups.map((item) => item.country))];
}
function getSupplierBusinessDetails(supplier) {
  if (!supplierBusinessDetails[supplier.id]) {
    supplierBusinessDetails[supplier.id] = {
      countryOfOrigin: getCountries(supplier).join(", "),
      ggn: "-",
      gln: "-",
      extraInfo: []
    };
  }

  return supplierBusinessDetails[supplier.id];
}

function getExtraInfoValue(businessDetails, label) {
  const row = businessDetails.extraInfo.find((item) => item.label === label);
  return row ? row.value : "";
}

function buildExtraInfoRows(values) {
  return [
    {
      label: "Company history",
      value: values.companyHistory || "-",
      wide: true
    },
    {
      label: "Year of foundation",
      value: values.yearOfFoundation || "-"
    },
    {
      label: "Ownership structure",
      value: values.ownershipStructure || "-"
    },
    {
      label: "Location",
      value: values.location || "-",
      wide: true
    },
    {
      label: "Structure of production",
      value: values.productionStructure || "-",
      wide: true
    },
    {
      label: "Collaboration with other customers",
      value: values.otherCustomers || "-"
    },
    {
      label: "Partner Cooperation History",
      value: values.oglHistory || "-",
      wide: true
    }
  ];
}
const BIG_TRACE_TYPES = ["Retailer Event", "Partner Conference", "Audit", "Project"];
const SMALL_TRACE_TYPES = ["Call", "Email", "Visit", "Follow-up"];
const LEGACY_BIG_TRACE_TYPES = ["Review", "Approval", "Data Check", "Data Quality", "Modeling", "Dashboard", "Audit", "Project", "Conference", "Retailer Event", "Partner Conference"];

function getTraceCategory(item) {
  if (item.traceCategory === "Big" || item.traceCategory === "Small") {
    return item.traceCategory;
  }

  return LEGACY_BIG_TRACE_TYPES.includes(item.type) ? "Big" : "Small";
}

function setActivityTypeOptions(traceCategory) {
  if (!newActivityType) {
    return;
  }

  const options = traceCategory === "Big" ? BIG_TRACE_TYPES : SMALL_TRACE_TYPES;

  newActivityType.innerHTML = options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");
}


function getMasterDataValue(supplier, label, fallback = "") {
  const row = supplier.masterData.find((item) => item.label === label);
  return row ? row.value : fallback;
}

function setMasterDataValue(supplier, label, value) {
  const row = supplier.masterData.find((item) => item.label === label);

  if (row) {
    row.value = value;
    return;
  }

  supplier.masterData.push({ label, value });
}

function deriveInitials(name) {
  const words = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) {
    return "SR";
  }

  return words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function countBy(items, key) {
  const counts = new Map();

  items.forEach((item) => {
    const value = item[key] || "Unknown";
    counts.set(value, (counts.get(value) || 0) + 1);
  });

  return {
    labels: Array.from(counts.keys()),
    values: Array.from(counts.values())
  };
}

function setSelectOptions(select, values, defaultLabel) {
  const previousValue = select.value;

  select.innerHTML = `<option value="">${defaultLabel}</option>`;

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });

  select.value = values.includes(previousValue) ? previousValue : "";
}

function renderSupplierList() {
  const filteredSuppliers = suppliers.filter((supplier) => {
    const text = `${supplier.id} ${supplier.name} ${supplier.region}`.toLowerCase();
    return text.includes(state.searchTerm);
  });

  supplierList.innerHTML = "";

  if (!filteredSuppliers.length) {
    supplierList.innerHTML = `
      <div class="contact-card">
        <p>No suppliers matched your search.</p>
      </div>
    `;
    return;
  }

  filteredSuppliers.forEach((supplier) => {
    const card = document.createElement("div");
    card.className = `supplier-card ${supplier.id === state.activeSupplierId ? "active" : ""}`;

    card.innerHTML = `
      <span class="name">${supplier.name}</span>
      <div class="subtext">${supplier.id} • ${supplier.region}</div>
      <div style="margin-top: 6px;">${statusPill(supplier.status)}</div>
    `;

    card.addEventListener("click", () => {
      state.activeSupplierId = supplier.id;

      state.materialFilters = {
        country: "",
        agency: "",
        status: ""
      };

      state.contactFilters = {
        department: "",
        status: ""
        };

        state.activityFilters = {
        type: "",
        status: ""
        };

      render();
    });

    supplierList.appendChild(card);
  });
}

function renderProfile(supplier) {
  const countries = getCountries(supplier);

  supplierAvatar.textContent = supplier.initials;
  supplierName.textContent = supplier.name;
  supplierStatus.textContent = supplier.status;
  supplierStatus.className = `status-pill ${statusClass(supplier.status)}`;
  supplierSubtitle.textContent = supplier.subtitle;

  supplierId.textContent = supplier.id;
  supplierCountries.textContent = countries.join(", ");
  supplierMaterialCount.textContent = supplier.materialGroups.length;
  supplierOwner.textContent = supplier.owner;
}

function renderInfoList(container, rows) {
  container.innerHTML = rows
    .map(
      (item) => `
        <div class="row">
          <span class="info-label">${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");
}

function renderInsightStrip(supplier) {
  const countries = getCountries(supplier);
  const pendingContacts = supplier.contacts.filter(
    (contact) => contact.approvalStatus !== "Approved"
  ).length;

  const hasDataQualityReview =
    supplier.status === "Needs Review" ||
    supplier.compliance.some((item) =>
      item.value.toLowerCase().includes("country-origin")
    );

  const dataQualityLabel = hasDataQualityReview
    ? "Review needed"
    : countries.length > 1
      ? "Multi-country"
      : "Clean";

  const dataQualityNote = hasDataQualityReview
    ? "Check country/origin at material-group level"
    : countries.length > 1
      ? "Multiple countries, but valid as detail-level data"
      : "Single country supplier record";

  supplierInsightStrip.innerHTML = `
    <div class="insight-tile">
      <div class="insight-label">Origin Countries</div>
      <div class="insight-value">${countries.join(", ")}</div>
      <div class="insight-note">Country belongs to material-group detail level</div>
    </div>

    <div class="insight-tile">
      <div class="insight-label">Material Groups</div>
      <div class="insight-value">${supplier.materialGroups.length}</div>
      <div class="insight-note">Linked child records for this supplier</div>
    </div>

    <div class="insight-tile ${pendingContacts > 0 ? "warning" : "good"}">
      <div class="insight-label">Pending Contacts</div>
      <div class="insight-value">${pendingContacts}</div>
      <div class="insight-note">
        ${pendingContacts > 0 ? "Some contact approvals are still pending" : "All contacts are approved"}
      </div>
    </div>

    <div class="insight-tile ${hasDataQualityReview ? "warning" : "good"}">
      <div class="insight-label">Data Quality</div>
      <div class="insight-value">${dataQualityLabel}</div>
      <div class="insight-note">${dataQualityNote}</div>
    </div>
  `;
}

function renderMasterData(supplier) {
  const businessDetails = getSupplierBusinessDetails(supplier);

  const baseRows = supplier.masterData.filter(
    (item) => item.label !== "Country Coverage"
  );

  const supplierMasterRows = [
    ...baseRows,
    {
      label: "Country of origin",
      value: businessDetails.countryOfOrigin
    },
    {
      label: "GGN",
      value: businessDetails.ggn
    },
    {
      label: "GLN",
      value: businessDetails.gln
    }
  ];

  renderInfoList(masterData, supplierMasterRows);
}


function renderSapMasterData(supplier) {
  if (!sapMasterGrid) {
    return;
  }

  const businessDetails = getSupplierBusinessDetails(supplier);

  const rows = [
    { label: "Supplier ID / SAP ID", value: supplier.id },
    { label: "Supplier Name", value: supplier.name },
    { label: "Status", value: statusPill(supplier.status), html: true },
    { label: "Country of origin", value: businessDetails.countryOfOrigin || "-" },
    { label: "GGN", value: businessDetails.ggn || "-" },
    { label: "GLN", value: businessDetails.gln || "-" },
    { label: "Agency / Owner", value: supplier.owner || "-", wide: true },
    { label: "BP Portal ID", value: getMasterDataValue(supplier, "BP Portal ID", "-") },
    { label: "BP Portal Name", value: getMasterDataValue(supplier, "BP Portal Name", "-") }
  ];

  sapMasterGrid.innerHTML = rows
    .map(
      (item) => `
        <div class="sap-master-card ${item.wide ? "wide" : ""}">
          <div class="sap-master-label">${item.label}</div>
          <div class="sap-master-value">${item.html ? item.value : item.value}</div>
        </div>
      `
    )
    .join("");
}

function renderDetails(supplier) {
  renderInfoList(detailsList, supplier.details);
  renderInfoList(complianceList, supplier.compliance);
}
function renderExtraInfo(supplier) {
  const businessDetails = getSupplierBusinessDetails(supplier);

  if (!businessDetails.extraInfo.length) {
    extraInfoGrid.innerHTML = `
      <div class="extra-info-card wide">
        <div class="extra-info-label">No extra info available</div>
        <div class="extra-info-value">
          Supplier extra information has not been added yet.
        </div>
      </div>
    `;
    return;
  }

  extraInfoGrid.innerHTML = businessDetails.extraInfo
    .map(
      (item) => `
        <div class="extra-info-card ${item.wide ? "wide" : ""}">
          <div class="extra-info-label">${item.label}</div>
          <div class="extra-info-value">${item.value}</div>
        </div>
      `
    )
    .join("");
}
function activityItem(item, activityIndex = null, showActions = false) {
  const traceCategory = getTraceCategory(item);
  const actionButtons = showActions && activityIndex !== null
    ? `
      <div class="record-actions">
        <button class="record-action-button" type="button" data-edit-activity="${activityIndex}">Edit</button>
        <button class="record-action-button danger" type="button" data-delete-activity="${activityIndex}">Delete</button>
      </div>
    `
    : "";

  return `
    <li class="timeline-item">
      <div class="timeline-icon">${item.icon}</div>

      <div class="timeline-body">
        <div class="timeline-head">
          <div>
            <div class="timeline-type">${item.type} • ${traceCategory} trace</div>
            <strong>${item.title}</strong>
          </div>
          ${statusPill(item.status)}
        </div>

        <div class="timeline-meta">
          <span>${item.date}</span>
          <span>People: ${item.owner}</span>
        </div>

        <div class="timeline-purpose">Purpose: ${item.purpose}</div>
        <div class="timeline-detail">${item.detail}</div>

        ${actionButtons}
      </div>
    </li>
  `;
}

function renderTimeline(supplier) {
  activityTimeline.innerHTML = supplier.timeline
    .slice(0, 3)
    .map((item) => activityItem(item, null, false))
    .join("");
}
function renderActivityFilters(supplier) {
  const types = [...new Set(supplier.timeline.map((item) => item.type))].sort();
  const statuses = [...new Set(supplier.timeline.map((item) => item.status))].sort();

  setSelectOptions(activityTypeFilter, types, "All");
  setSelectOptions(activityStatusFilter, statuses, "All");

  activityTypeFilter.value = state.activityFilters.type;
  activityStatusFilter.value = state.activityFilters.status;
}

function getFilteredActivities(supplier) {
  return supplier.timeline.filter((item) => {
    const matchesType =
      !state.activityFilters.type ||
      item.type === state.activityFilters.type;

    const matchesStatus =
      !state.activityFilters.status ||
      item.status === state.activityFilters.status;

    return matchesType && matchesStatus;
  });
}

function renderEmptyTraceList(container, message) {
  if (!container) {
    return;
  }

  container.innerHTML = `
    <li class="timeline-item">
      <div class="timeline-icon">-</div>
      <div class="timeline-body">
        <strong>${message}</strong>
      </div>
    </li>
  `;
}

function renderActivitySummary(supplier, filteredActivities) {
  const openStatuses = ["Pending", "In Progress", "Needs Review", "Action Required"];
  const openActions = filteredActivities.filter((item) =>
    openStatuses.includes(item.status)
  ).length;

  const bigTraces = filteredActivities.filter((item) => getTraceCategory(item) === "Big").length;
  const smallTraces = filteredActivities.filter((item) => getTraceCategory(item) === "Small").length;

  const latestActivity = filteredActivities.length
    ? filteredActivities[0].date
    : "-";

  activitySummaryStrip.innerHTML = `
    <div class="activity-summary-tile">
      <div class="activity-summary-label">Trace records shown</div>
      <div class="activity-summary-value">${filteredActivities.length}</div>
      <div class="activity-summary-note">Filtered relationship records for this supplier</div>
    </div>

    <div class="activity-summary-tile">
      <div class="activity-summary-label">Big contact traces</div>
      <div class="activity-summary-value">${bigTraces}</div>
      <div class="activity-summary-note">Events, conferences, audits, and projects</div>
    </div>

    <div class="activity-summary-tile">
      <div class="activity-summary-label">Small contact traces</div>
      <div class="activity-summary-value">${smallTraces}</div>
      <div class="activity-summary-note">Calls, emails, visits, and routine follow-ups</div>
    </div>

    <div class="activity-summary-tile ${openActions > 0 ? "warning" : "good"}">
      <div class="activity-summary-label">Open actions</div>
      <div class="activity-summary-value">${openActions}</div>
      <div class="activity-summary-note">Latest trace: ${latestActivity}</div>
    </div>
  `;
}

function renderActivities(supplier) {
  const filteredActivities = getFilteredActivities(supplier);
  const bigTraces = filteredActivities.filter((item) => getTraceCategory(item) === "Big");
  const smallTraces = filteredActivities.filter((item) => getTraceCategory(item) === "Small");

  renderActivitySummary(supplier, filteredActivities);

  if (bigTraceCount) {
    bigTraceCount.textContent = bigTraces.length;
  }

  if (smallTraceCount) {
    smallTraceCount.textContent = smallTraces.length;
  }

  if (bigTraceTimelineFull) {
    if (!bigTraces.length) {
      renderEmptyTraceList(bigTraceTimelineFull, "No big contact traces match the selected filters.");
    } else {
      bigTraceTimelineFull.innerHTML = bigTraces
        .map((item) => activityItem(item, supplier.timeline.indexOf(item), true))
        .join("");
    }
  }

  if (smallTraceTimelineFull) {
    if (!smallTraces.length) {
      renderEmptyTraceList(smallTraceTimelineFull, "No small contact traces match the selected filters.");
    } else {
      smallTraceTimelineFull.innerHTML = smallTraces
        .map((item) => activityItem(item, supplier.timeline.indexOf(item), true))
        .join("");
    }
  }

  if (activityTimelineFull) {
    activityTimelineFull.innerHTML = filteredActivities
      .map((item) => activityItem(item, supplier.timeline.indexOf(item), true))
      .join("");
  }
}
function renderMaterialFilters(supplier) {
  const countries = getCountries(supplier).sort();
  const agencies = [...new Set(supplier.materialGroups.map((item) => item.agency))].sort();

  setSelectOptions(materialCountryFilter, countries, "All");
  setSelectOptions(materialAgencyFilter, agencies, "All");

  materialCountryFilter.value = state.materialFilters.country;
  materialAgencyFilter.value = state.materialFilters.agency;
  materialStatusFilter.value = state.materialFilters.status;
}

function renderMaterialSummary(supplier, filteredRows) {
  const countries = [...new Set(filteredRows.map((item) => item.country))];
  const agencies = [...new Set(filteredRows.map((item) => item.agency))];

  const activeCount = filteredRows.filter((item) => item.active === "Active").length;
  const inactiveCount = filteredRows.filter((item) => item.active === "Inactive").length;

  const totalCountries = getCountries(supplier).length;
  const hasMultipleCountries = totalCountries > 1;

  materialSummaryStrip.innerHTML = `
    <div class="material-summary-tile ${hasMultipleCountries ? "warning" : "good"}">
      <div class="material-summary-label">Countries shown</div>
      <div class="material-summary-value">${countries.length ? countries.join(", ") : "None"}</div>
      <div class="material-summary-note">
        ${hasMultipleCountries ? "Supplier has multiple origin countries" : "Single origin country"}
      </div>
    </div>

    <div class="material-summary-tile">
      <div class="material-summary-label">Agencies shown</div>
      <div class="material-summary-value">${agencies.length ? agencies.join(", ") : "None"}</div>
      <div class="material-summary-note">Responsible business units for filtered rows</div>
    </div>

    <div class="material-summary-tile good">
      <div class="material-summary-label">Active groups</div>
      <div class="material-summary-value">${activeCount}</div>
      <div class="material-summary-note">Currently usable material groups</div>
    </div>

    <div class="material-summary-tile ${inactiveCount > 0 ? "warning" : "good"}">
      <div class="material-summary-label">Inactive groups</div>
      <div class="material-summary-value">${inactiveCount}</div>
      <div class="material-summary-note">
        ${inactiveCount > 0 ? "Review inactive or blocked groups" : "No inactive groups in current view"}
      </div>
    </div>
  `;
}

function renderMaterialGroups(supplier) {
  const filtered = supplier.materialGroups.filter((item) => {
    const matchesCountry = !state.materialFilters.country || item.country === state.materialFilters.country;
    const matchesAgency = !state.materialFilters.agency || item.agency === state.materialFilters.agency;
    const matchesStatus = !state.materialFilters.status || item.active === state.materialFilters.status;

    return matchesCountry && matchesAgency && matchesStatus;
  });

  renderMaterialSummary(supplier, filtered);

  if (!filtered.length) {
    materialGroupsBody.innerHTML = `
      <tr>
        <td colspan="6">No material groups match the selected filters.</td>
      </tr>
    `;
    return;
  }

  materialGroupsBody.innerHTML = filtered
    .map(
      (item) => `
        <tr>
          <td>${item.materialGroup}</td>
          <td>${item.country}</td>
          <td>${item.agency}</td>
          <td>${statusPill(item.statusRetailer)}</td>
          <td>${statusPill(item.statusPartner)}</td>
          <td>${statusPill(item.active)}</td>
        </tr>
      `
    )
    .join("");
}

function renderContactFilters(supplier) {
  const departments = [...new Set(supplier.contacts.map((contact) => contact.department))].sort();
  const statuses = [...new Set(supplier.contacts.map((contact) => contact.approvalStatus))].sort();

  setSelectOptions(contactDepartmentFilter, departments, "All");
  setSelectOptions(contactStatusFilter, statuses, "All");

  contactDepartmentFilter.value = state.contactFilters.department;
  contactStatusFilter.value = state.contactFilters.status;
}

function getFilteredContacts(supplier) {
  return supplier.contacts.filter((contact) => {
    const matchesDepartment =
      !state.contactFilters.department ||
      contact.department === state.contactFilters.department;

    const matchesStatus =
      !state.contactFilters.status ||
      contact.approvalStatus === state.contactFilters.status;

    return matchesDepartment && matchesStatus;
  });
}

function getContactCoverage(supplier) {
  const departments = supplier.contacts.map((contact) => contact.department.toLowerCase());

  const hasCommercial =
    departments.some((department) => department.includes("commercial")) ||
    departments.some((department) => department.includes("sales")) ||
    departments.some((department) => department.includes("management"));

  const hasQuality = departments.some((department) => department.includes("quality"));
  const hasLogistics = departments.some((department) => department.includes("logistics"));

  const coverageCount = [hasCommercial, hasQuality, hasLogistics].filter(Boolean).length;

  if (coverageCount === 3) {
    return {
      label: "Complete",
      className: "good",
      note: "Commercial, quality, and logistics coverage available"
    };
  }

  if (coverageCount === 2) {
    return {
      label: "Partial",
      className: "warning",
      note: "One key contact area is missing"
    };
  }

  return {
    label: "Limited",
    className: "warning",
    note: "Contact ownership needs improvement"
  };
}

function renderContactSummary(supplier, filteredContacts) {
  const departments = [...new Set(filteredContacts.map((contact) => contact.department))];
  const pendingContacts = filteredContacts.filter(
    (contact) => contact.approvalStatus !== "Approved"
  ).length;

  const coverage = getContactCoverage(supplier);

  contactSummaryStrip.innerHTML = `
    <div class="contact-summary-tile">
      <div class="contact-summary-label">Contacts shown</div>
      <div class="contact-summary-value">${filteredContacts.length}</div>
      <div class="contact-summary-note">Filtered supplier contact records</div>
    </div>

    <div class="contact-summary-tile">
      <div class="contact-summary-label">Departments shown</div>
      <div class="contact-summary-value">${departments.length ? departments.join(", ") : "None"}</div>
      <div class="contact-summary-note">Contact responsibility areas</div>
    </div>

    <div class="contact-summary-tile ${pendingContacts > 0 ? "warning" : "good"}">
      <div class="contact-summary-label">Pending approvals</div>
      <div class="contact-summary-value">${pendingContacts}</div>
      <div class="contact-summary-note">
        ${pendingContacts > 0 ? "Some contact records need approval" : "All shown contacts are approved"}
      </div>
    </div>

    <div class="contact-summary-tile ${coverage.className}">
      <div class="contact-summary-label">Coverage</div>
      <div class="contact-summary-value">${coverage.label}</div>
      <div class="contact-summary-note">${coverage.note}</div>
    </div>
  `;
}

function contactCard(contact, isPrimary = false, contactIndex = null, showActions = false) {
  const actionButtons = showActions && contactIndex !== null
    ? `
      <div class="record-actions">
        <button class="record-action-button" type="button" data-edit-contact="${contactIndex}">Edit</button>
        <button class="record-action-button danger" type="button" data-delete-contact="${contactIndex}">Delete</button>
      </div>
    `
    : "";

  return `
    <div class="contact-card ${isPrimary ? "primary" : ""}">
      <div class="contact-card-header">
        <h4>${contact.firstName} ${contact.lastName}</h4>
        ${isPrimary ? '<span class="primary-badge">Primary</span>' : ""}
      </div>

      <p><strong>Role:</strong> ${contact.role}</p>
      <p><strong>Department:</strong> ${contact.department}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone || "-"}</p>
      <p><strong>Cultural infos:</strong> ${contact.culturalInfos || "-"}</p>

      <div style="margin-top: 8px;">
        ${statusPill(contact.approvalStatus)}
      </div>

      ${actionButtons}
    </div>
  `;
}

function renderOverviewContacts(supplier) {
  overviewContacts.innerHTML = supplier.contacts
    .slice(0, 3)
    .map((contact, index) => contactCard(contact, index === 0, null, false))
    .join("");
}

function renderContacts(supplier) {
  const filteredContacts = getFilteredContacts(supplier);

  renderContactSummary(supplier, filteredContacts);

  if (!filteredContacts.length) {
    contactsGrid.innerHTML = `
      <div class="contact-card">
        <p>No contacts match the selected filters.</p>
      </div>
    `;
    return;
  }

  contactsGrid.innerHTML = filteredContacts
    .map((contact) => {
      const contactIndex = supplier.contacts.indexOf(contact);
      return contactCard(contact, contact === supplier.contacts[0], contactIndex, true);
    })
    .join("");
}

function destroyCharts() {
  Object.values(charts).forEach((chart) => chart.destroy());
  charts = {};
}

function getChartData(supplier) {
  return {
    materialGroupsByCountry: countBy(supplier.materialGroups, "country"),
    approvalStatusDistribution: countBy(supplier.contacts, "approvalStatus"),
    contactsByDepartment: countBy(supplier.contacts, "department"),
    contactActivitiesOverTime: {
      labels: supplier.timeline.map((item) => item.date),
      values: supplier.timeline.map((_, index) => index + 1)
    }
  };
}

function renderCharts(supplier) {
  destroyCharts();

  if (!window.Chart) {
    return;
  }

  const chartData = getChartData(supplier);

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#64748b",
          precision: 0
        },
        grid: {
          color: "rgba(15, 23, 42, 0.06)"
        }
      },
      x: {
        ticks: {
          color: "#64748b",
          precision: 0
        },
        grid: {
          display: false
        }
      }
    }
  };

  charts.country = new Chart(countryChartCanvas, {
    type: "bar",
    data: {
      labels: chartData.materialGroupsByCountry.labels,
      datasets: [
        {
          label: "Material groups",
          data: chartData.materialGroupsByCountry.values,
          backgroundColor: ["#2158d5", "#60a5fa", "#8cb9ff", "#93c5fd"],
          borderRadius: 6
        }
      ]
    },
    options: barOptions
  });

  charts.approval = new Chart(approvalChartCanvas, {
    type: "doughnut",
    data: {
      labels: chartData.approvalStatusDistribution.labels,
      datasets: [
        {
          data: chartData.approvalStatusDistribution.values,
          backgroundColor: ["#15803d", "#f59e0b", "#b42318"],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#64748b",
            boxWidth: 8,
            padding: 8,
            font: {
              size: 10
            }
          }
        }
      }
    }
  });

  charts.department = new Chart(departmentChartCanvas, {
    type: "bar",
    data: {
      labels: chartData.contactsByDepartment.labels,
      datasets: [
        {
          label: "Contacts",
          data: chartData.contactsByDepartment.values,
          backgroundColor: ["#0f766e", "#2563eb", "#7c3aed", "#f59e0b"],
          borderRadius: 6
        }
      ]
    },
    options: barOptions
  });

  charts.activity = new Chart(activityChartCanvas, {
    type: "line",
    data: {
      labels: chartData.contactActivitiesOverTime.labels,
      datasets: [
        {
          label: "Activities",
          data: chartData.contactActivitiesOverTime.values,
          borderColor: "#2158d5",
          backgroundColor: "rgba(33, 88, 213, 0.16)",
          tension: 0.3,
          fill: true,
          pointRadius: 3,
          pointHoverRadius: 4
        }
      ]
    },
    options: barOptions
  });
}

function renderPerformance(supplier) {
  const countries = getCountries(supplier);

  kpiMaterials.textContent = supplier.materialGroups.length;
  kpiCountries.textContent = countries.length;
  kpiContacts.textContent = supplier.contacts.length;
  kpiRisk.textContent = supplier.risk;

  performanceSummaryBody.innerHTML = supplier.performanceSummary
    .map(
      (item) => `
        <tr>
          <td>${item.metric}</td>
          <td>${item.value}</td>
          <td>${item.note}</td>
        </tr>
      `
    )
    .join("");

  scorecardBody.innerHTML = supplier.scorecards
    .map(
      (item) => `
        <tr>
          <td>${item.date}</td>
          <td>${item.activity}</td>
          <td>${item.comment}</td>
        </tr>
      `
    )
    .join("");

  renderCharts(supplier);
}

function renderTabs() {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.activeTab);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === state.activeTab);
  });
}
activityTypeFilter.addEventListener("change", (event) => {
  state.activityFilters.type = event.target.value;
  renderActivities(getActiveSupplier());
});

activityStatusFilter.addEventListener("change", (event) => {
  state.activityFilters.status = event.target.value;
  renderActivities(getActiveSupplier());
});

clearActivityFilters.addEventListener("click", () => {
  state.activityFilters = {
    type: "",
    status: ""
  };

  activityTypeFilter.value = "";
  activityStatusFilter.value = "";

  renderActivities(getActiveSupplier());
});
function render() {
  const supplier = getActiveSupplier();

  renderSupplierList();
  renderProfile(supplier);
  renderInsightStrip(supplier);
  renderMasterData(supplier);
  renderSapMasterData(supplier);
  renderTimeline(supplier);
  renderActivityFilters(supplier);
  renderActivities(supplier);
  renderOverviewContacts(supplier);
  renderDetails(supplier);
  renderExtraInfo(supplier);

  renderMaterialFilters(supplier);
  renderMaterialGroups(supplier);

  renderContactFilters(supplier);
  renderContacts(supplier);

  renderPerformance(supplier);
  renderTabs();
}

globalSearch.addEventListener("input", (event) => {
  state.searchTerm = event.target.value.toLowerCase().trim();
  renderSupplierList();
});
function buildSupplierSummary(supplier) {
  const businessDetails = getSupplierBusinessDetails(supplier);

  const pendingContacts = supplier.contacts.filter(
    (contact) => contact.approvalStatus !== "Approved"
  ).length;

  const inactiveGroups = supplier.materialGroups.filter(
    (item) => item.active === "Inactive"
  ).length;

  return [
    `Supplier: ${supplier.name}`,
    `Supplier ID: ${supplier.id}`,
    `Status: ${supplier.status}`,
    `Country of origin: ${businessDetails.countryOfOrigin}`,
    `GGN: ${businessDetails.ggn}`,
    `GLN: ${businessDetails.gln}`,
    `Material groups: ${supplier.materialGroups.length}`,
    `Contacts: ${supplier.contacts.length}`,
    `Pending contacts: ${pendingContacts}`,
    `Inactive material groups: ${inactiveGroups}`,
    `Risk level: ${supplier.risk}`,
    `Owner: ${supplier.owner}`
  ].join("\n");
}

function setCommandFeedback(message) {
  if (commandFeedback) {
    commandFeedback.textContent = message;
  }

  console.log(message);
}

function setElementVisibility(element, visible) {
  if (!element) {
    return;
  }

  element.classList.toggle("hidden", !visible);
  element.hidden = !visible;
  element.style.display = visible ? "" : "none";
}

function hideInlineForms() {
  if (addContactForm) {
    addContactForm.hidden = true;
    addContactForm.classList.remove("hidden", "form-hidden");
  }

  if (addActivityForm) {
    addActivityForm.hidden = true;
    addActivityForm.classList.remove("hidden", "form-hidden");
  }

  if (extraInfoForm) {
    extraInfoForm.hidden = true;
    extraInfoForm.classList.remove("hidden", "form-hidden");
  }

  if (sapMasterForm) {
    sapMasterForm.hidden = true;
    sapMasterForm.classList.remove("hidden", "form-hidden");
  }
}

function showInlineForm(formType) {
  hideInlineForms();

  if (formType === "contact") {
    if (!addContactForm) {
      setCommandFeedback("Contact form is missing in the Contacts tab.");
      console.error("addContactForm not found");
      return;
    }

    addContactForm.classList.remove("hidden", "form-hidden");
    addContactForm.hidden = false;
    addContactForm.reset();

    setCommandFeedback("Add Contact form opened.");
    console.log("Add Contact form opened");

    setTimeout(() => {
      if (newContactName) {
        newContactName.focus();
      }

      addContactForm.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 50);

    return;
  }

  if (formType === "activity") {
    if (!addActivityForm) {
      setCommandFeedback("Activity form is missing in the Activities tab.");
      console.error("addActivityForm not found");
      return;
    }

    addActivityForm.classList.remove("hidden", "form-hidden");
    addActivityForm.hidden = false;
    addActivityForm.reset();

    setCommandFeedback("Add Activity form opened.");
    console.log("Add Activity form opened");

    setTimeout(() => {
      if (newActivityTitle) {
        newActivityTitle.focus();
      }

      addActivityForm.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 50);
  }
}


function openSapMasterForm() {
  const supplier = getActiveSupplier();
  const businessDetails = getSupplierBusinessDetails(supplier);

  if (!sapMasterForm) {
    setCommandFeedback("SAP master form is missing in the SAP Master Data tab.");
    console.error("sapMasterForm not found");
    return;
  }

  hideInlineForms();

  if (sapSupplierId) sapSupplierId.value = supplier.id;
  if (sapSupplierName) sapSupplierName.value = supplier.name;
  if (sapSupplierStatus) sapSupplierStatus.value = supplier.status;
  if (sapCountryOrigin) sapCountryOrigin.value = businessDetails.countryOfOrigin || getCountries(supplier).join(", ");
  if (sapGgn) sapGgn.value = businessDetails.ggn || "";
  if (sapGln) sapGln.value = businessDetails.gln || "";
  if (sapOwner) sapOwner.value = supplier.owner || "";
  if (sapBpPortalId) sapBpPortalId.value = getMasterDataValue(supplier, "BP Portal ID", "");
  if (sapBpPortalName) sapBpPortalName.value = getMasterDataValue(supplier, "BP Portal Name", "");

  sapMasterForm.hidden = false;
  state.activeTab = "sap-master";
  renderTabs();
  setCommandFeedback(`Supplier Master Data form opened for ${supplier.id}.`);

  setTimeout(() => {
    if (sapSupplierName) {
      sapSupplierName.focus();
    }

    sapMasterForm.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, 50);
}

function saveSapMasterData(event) {
  event.preventDefault();

  const supplier = getActiveSupplier();
  const businessDetails = getSupplierBusinessDetails(supplier);

  const newName = sapSupplierName ? sapSupplierName.value.trim() : supplier.name;
  const newStatus = sapSupplierStatus ? sapSupplierStatus.value : supplier.status;
  const newOwner = sapOwner ? sapOwner.value.trim() : supplier.owner;
  const newCountryOrigin = sapCountryOrigin ? sapCountryOrigin.value.trim() : businessDetails.countryOfOrigin;
  const newGgn = sapGgn ? sapGgn.value.trim() : businessDetails.ggn;
  const newGln = sapGln ? sapGln.value.trim() : businessDetails.gln;
  const newBpPortalId = sapBpPortalId ? sapBpPortalId.value.trim() : getMasterDataValue(supplier, "BP Portal ID", "");
  const newBpPortalName = sapBpPortalName ? sapBpPortalName.value.trim() : getMasterDataValue(supplier, "BP Portal Name", "");

  supplier.name = newName || supplier.name;
  supplier.initials = deriveInitials(supplier.name);
  supplier.status = newStatus;
  supplier.owner = newOwner || supplier.owner;

  businessDetails.countryOfOrigin = newCountryOrigin || getCountries(supplier).join(", ");
  businessDetails.ggn = newGgn || "-";
  businessDetails.gln = newGln || "-";

  setMasterDataValue(supplier, "Supplier ID", supplier.id);
  setMasterDataValue(supplier, "Legal Entity", supplier.name);
  setMasterDataValue(supplier, "BP Portal ID", newBpPortalId || "-");
  setMasterDataValue(supplier, "BP Portal Name", newBpPortalName || "-");
  setMasterDataValue(supplier, "Country Coverage", businessDetails.countryOfOrigin);
  setMasterDataValue(supplier, "Overall Status", supplier.status);

  const agencyRow = supplier.details.find((item) => item.label === "Agency Coverage");
  if (agencyRow && supplier.owner) {
    agencyRow.value = supplier.owner;
  }

  state.activeTab = "sap-master";

  hideInlineForms();
  render();

  setCommandFeedback(`Supplier Master Data saved for ${supplier.id}.`);
}

function openExtraInfoForm() {
  const supplier = getActiveSupplier();
  const businessDetails = getSupplierBusinessDetails(supplier);

  if (!extraInfoForm) {
    setCommandFeedback("Extra info form is missing in the Extra Info tab.");
    return;
  }

  hideInlineForms();

  if (extraCompanyHistory) {
    extraCompanyHistory.value = getExtraInfoValue(businessDetails, "Company history");
  }

  if (extraYearFoundation) {
    extraYearFoundation.value = getExtraInfoValue(businessDetails, "Year of foundation");
  }

  if (extraOwnershipStructure) {
    extraOwnershipStructure.value = getExtraInfoValue(businessDetails, "Ownership structure");
  }

  if (extraLocation) {
    extraLocation.value = getExtraInfoValue(businessDetails, "Location");
  }

  if (extraProductionStructure) {
    extraProductionStructure.value = getExtraInfoValue(businessDetails, "Structure of production");
  }

  if (extraOtherCustomers) {
    extraOtherCustomers.value = getExtraInfoValue(businessDetails, "Collaboration with other customers");
  }

  if (extraPartnerHistory) {
    extraPartnerHistory.value = getExtraInfoValue(businessDetails, "Partner Cooperation History");
  }

  extraInfoForm.hidden = false;
  extraInfoForm.classList.remove("hidden", "form-hidden");
  setCommandFeedback(`Extra info form opened for ${supplier.id}.`);

  setTimeout(() => {
    if (extraCompanyHistory) {
      extraCompanyHistory.focus();
    }

    extraInfoForm.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, 50);
}

function saveExtraInfo(event) {
  event.preventDefault();

  const supplier = getActiveSupplier();
  const businessDetails = getSupplierBusinessDetails(supplier);

  businessDetails.extraInfo = buildExtraInfoRows({
    companyHistory: extraCompanyHistory?.value.trim(),
    yearOfFoundation: extraYearFoundation?.value.trim(),
    ownershipStructure: extraOwnershipStructure?.value.trim(),
    location: extraLocation?.value.trim(),
    productionStructure: extraProductionStructure?.value.trim(),
    otherCustomers: extraOtherCustomers?.value.trim(),
    oglHistory: extraPartnerHistory?.value.trim()
  });

  state.activeTab = "extra-info";
  hideInlineForms();
  render();
  setCommandFeedback(`Extra info saved for ${supplier.id}.`);
}

function splitContactName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts.shift() || "";
  const lastName = parts.join(" ") || "";

  return {
    firstName,
    lastName
  };
}

function getActivityIcon(type) {
  const icons = {
    Call: "☎",
    Email: "✉",
    Visit: "👥",
    Audit: "🔎",
    Project: "🧩",
    Conference: "🎤",
    "Partner Conference": "🎤",
    "Retailer Event": "🏬",
    "Follow-up": "☎",
    "Data Quality": "⚠"
  };

  return icons[type] || "•";
}

function handleCommand(command) {
  const supplier = getActiveSupplier();

  if (command === "edit-supplier") {
    hideInlineForms();
    setCommandFeedback(`Edit Supplier clicked for ${supplier.id}. Backend form integration pending.`);
    return;
  }

 
  if (command === "export-summary") {
    hideInlineForms();

    const summary = buildSupplierSummary(supplier);

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(summary)
        .then(() => {
          setCommandFeedback(`SRM summary copied for ${supplier.id}.`);
        })
        .catch(() => {
          console.log(summary);
          setCommandFeedback(`SRM summary printed to console for ${supplier.id}.`);
        });
    } else {
      console.log(summary);
      setCommandFeedback(`SRM summary printed to console for ${supplier.id}.`);
    }

    return;
  }

  if (command === "refresh") {
    hideInlineForms();

    state.activeTab = "overview";

    render();

    setCommandFeedback(`Dashboard refreshed for ${supplier.id}. Returned to Overview.`);
    return;
  }

  setCommandFeedback(`Unknown command: ${command}`);
}

function saveNewContact(event) {
  event.preventDefault();

  const supplier = getActiveSupplier();
  const nameParts = splitContactName(newContactName.value);
  const isEditing = Number.isInteger(state.editingContactIndex);

  const contactRecord = {
    role: newContactRole.value.trim(),
    department: newContactDepartment.value.trim(),
    firstName: nameParts.firstName,
    lastName: nameParts.lastName,
    email: newContactEmail.value.trim(),
    phone: newContactPhone.value.trim(),
    approvalStatus: newContactStatus.value,
    culturalInfos: newContactCulturalInfos.value.trim()
  };

  if (isEditing && supplier.contacts[state.editingContactIndex]) {
    supplier.contacts[state.editingContactIndex] = contactRecord;
  } else {
    supplier.contacts.unshift(contactRecord);
  }

  state.contactFilters = {
    department: "",
    status: ""
  };

  state.activeTab = "contacts";
  const feedbackMessage = isEditing
    ? `Contact updated for ${supplier.id}.`
    : `New contact saved for ${supplier.id}.`;

  state.editingContactIndex = null;
  hideInlineForms();
  render();

  setCommandFeedback(feedbackMessage);
}

function saveNewActivity(event) {
  event.preventDefault();

  const supplier = getActiveSupplier();
  const traceCategory = newActivityTraceCategory?.value || "Small";
  const isEditing = Number.isInteger(state.editingActivityIndex);

  const activityRecord = {
    title: newActivityTitle.value.trim(),
    type: newActivityType.value,
    traceCategory,
    icon: getActivityIcon(newActivityType.value),
    detail: newActivityNotes.value.trim(),
    date: newActivityDate.value.trim(),
    owner: newActivityPeople.value.trim() || "SRM Team",
    purpose: newActivityPurpose.value.trim(),
    status: newActivityStatus.value
  };

  if (isEditing && supplier.timeline[state.editingActivityIndex]) {
    supplier.timeline[state.editingActivityIndex] = activityRecord;
  } else {
    supplier.timeline.unshift(activityRecord);
  }

  state.activityFilters = {
    type: "",
    status: ""
  };

  state.activeTab = "activities";
  const feedbackMessage = isEditing
    ? `${traceCategory} contact trace updated for ${supplier.id}.`
    : `New ${traceCategory.toLowerCase()} contact trace saved for ${supplier.id}.`;

  state.editingActivityIndex = null;
  hideInlineForms();
  render();

  setCommandFeedback(feedbackMessage);
}
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideInlineForms();
    state.activeTab = button.dataset.tab;
    renderTabs();
  });
});

materialCountryFilter.addEventListener("change", (event) => {
  state.materialFilters.country = event.target.value;
  renderMaterialGroups(getActiveSupplier());
});

materialAgencyFilter.addEventListener("change", (event) => {
  state.materialFilters.agency = event.target.value;
  renderMaterialGroups(getActiveSupplier());
});

materialStatusFilter.addEventListener("change", (event) => {
  state.materialFilters.status = event.target.value;
  renderMaterialGroups(getActiveSupplier());
});

clearMaterialFilters.addEventListener("click", () => {
  state.materialFilters = {
    country: "",
    agency: "",
    status: ""
  };

  materialCountryFilter.value = "";
  materialAgencyFilter.value = "";
  materialStatusFilter.value = "";

  renderMaterialGroups(getActiveSupplier());
});

contactDepartmentFilter.addEventListener("change", (event) => {
  state.contactFilters.department = event.target.value;
  renderContacts(getActiveSupplier());
});

contactStatusFilter.addEventListener("change", (event) => {
  state.contactFilters.status = event.target.value;
  renderContacts(getActiveSupplier());
});

clearContactFilters.addEventListener("click", () => {
  state.contactFilters = {
    department: "",
    status: ""
  };

  contactDepartmentFilter.value = "";
  contactStatusFilter.value = "";

  renderContacts(getActiveSupplier());
});
commandButtons.forEach((button) => {
  button.disabled = false;
  button.removeAttribute("disabled");
  button.removeAttribute("aria-disabled");

  button.addEventListener("click", () => {
    const command = button.dataset.command;

    if (!command) {
      setCommandFeedback("This command button is missing data-command.");
      return;
    }

    handleCommand(command);
  });
});

if (addContactForm) {
  addContactForm.addEventListener("submit", saveNewContact);
}

if (addActivityForm) {
  addActivityForm.addEventListener("submit", saveNewActivity);
}


if (sapMasterForm) {
  sapMasterForm.addEventListener("submit", saveSapMasterData);
}

if (extraInfoForm) {
  extraInfoForm.addEventListener("submit", saveExtraInfo);
}

if (closeFormButtons.length > 0) {
  closeFormButtons.forEach((button) => {
    button.addEventListener("click", () => {
      hideInlineForms();
      setCommandFeedback("Form closed.");
    });
  });
}
function populateContactForm(contactIndex) {
  const supplier = getActiveSupplier();
  const contact = supplier.contacts[contactIndex];

  if (!contact) {
    setCommandFeedback("Contact record not found.");
    return;
  }

  state.editingContactIndex = contactIndex;

  if (contactFormTitle) {
    contactFormTitle.textContent = "Edit Supplier Contact";
  }

  if (contactFormSubtitle) {
    contactFormSubtitle.textContent = `Update contact details for ${supplier.name}.`;
  }

  if (saveContactButton) {
    saveContactButton.textContent = "Save Contact Changes";
  }

  if (newContactName) {
    newContactName.value = `${contact.firstName || ""} ${contact.lastName || ""}`.trim();
  }

  if (newContactRole) newContactRole.value = contact.role || "";
  if (newContactDepartment) newContactDepartment.value = contact.department || "";
  if (newContactEmail) newContactEmail.value = contact.email || "";
  if (newContactPhone) newContactPhone.value = contact.phone || "";
  if (newContactStatus) newContactStatus.value = contact.approvalStatus || "Approved";
  if (newContactCulturalInfos) newContactCulturalInfos.value = contact.culturalInfos || "";

  setCommandFeedback(`Editing contact ${contact.firstName || ""} ${contact.lastName || ""}.`);
}

function resetContactFormMode() {
  state.editingContactIndex = null;

  if (contactFormTitle) {
    contactFormTitle.textContent = "Add Supplier Contact";
  }

  if (contactFormSubtitle) {
    contactFormSubtitle.textContent = "Create a new contact for the selected supplier.";
  }

  if (saveContactButton) {
    saveContactButton.textContent = "Save Contact";
  }
}

function populateActivityForm(activityIndex) {
  const supplier = getActiveSupplier();
  const activity = supplier.timeline[activityIndex];

  if (!activity) {
    setCommandFeedback("Relationship trace record not found.");
    return;
  }

  const traceCategory = getTraceCategory(activity);
  state.editingActivityIndex = activityIndex;

  if (newActivityTraceCategory) {
    newActivityTraceCategory.value = traceCategory;
  }

  setActivityTypeOptions(traceCategory);

  if (newActivityType && !Array.from(newActivityType.options).some((option) => option.value === activity.type)) {
    const option = document.createElement("option");
    option.value = activity.type;
    option.textContent = activity.type;
    newActivityType.appendChild(option);
  }

  if (newActivityTitle) newActivityTitle.value = activity.title || "";
  if (newActivityDate) newActivityDate.value = activity.date || "";
  if (newActivityType) newActivityType.value = activity.type || "";
  if (newActivityStatus) newActivityStatus.value = activity.status || "Completed";
  if (newActivityPeople) newActivityPeople.value = activity.owner || "";
  if (newActivityPurpose) newActivityPurpose.value = activity.purpose || "";
  if (newActivityNotes) newActivityNotes.value = activity.detail || "";

  if (activityFormTitle) {
    activityFormTitle.textContent = `Edit ${traceCategory} Contact Trace`;
  }

  if (activityFormSubtitle) {
    activityFormSubtitle.textContent = `Update this ${traceCategory.toLowerCase()} relationship trace for ${supplier.name}.`;
  }

  if (saveActivityButton) {
    saveActivityButton.textContent = "Save Trace Changes";
  }

  setCommandFeedback(`Editing ${traceCategory.toLowerCase()} contact trace.`);
}

function deleteContact(contactIndex) {
  const supplier = getActiveSupplier();
  const contact = supplier.contacts[contactIndex];

  if (!contact) {
    setCommandFeedback("Contact record not found.");
    return;
  }

  const contactName = `${contact.firstName || ""} ${contact.lastName || ""}`.trim();
  const confirmed = window.confirm(`Delete contact ${contactName || "this contact"}?`);

  if (!confirmed) {
    return;
  }

  supplier.contacts.splice(contactIndex, 1);
  state.editingContactIndex = null;
  hideInlineForms();
  render();
  setCommandFeedback(`Contact deleted for ${supplier.id}.`);
}

function deleteActivity(activityIndex) {
  const supplier = getActiveSupplier();
  const activity = supplier.timeline[activityIndex];

  if (!activity) {
    setCommandFeedback("Relationship trace record not found.");
    return;
  }

  const confirmed = window.confirm(`Delete trace: ${activity.title || "this trace"}?`);

  if (!confirmed) {
    return;
  }

  supplier.timeline.splice(activityIndex, 1);
  state.editingActivityIndex = null;
  hideInlineForms();
  render();
  setCommandFeedback(`Relationship trace deleted for ${supplier.id}.`);
}

function openContactForm(contactIndex = null) {
  console.log("openContactForm called", contactIndex);

  state.activeTab = "contacts";
  renderTabs();
  showInlineForm("contact");
  resetContactFormMode();

  if (Number.isInteger(contactIndex)) {
    populateContactForm(contactIndex);
  }
}

function openActivityForm(traceCategory = "Small", activityIndex = null) {
  const normalizedCategory = traceCategory === "Big" ? "Big" : "Small";

  console.log("openActivityForm called", normalizedCategory, activityIndex);

  state.activeTab = "activities";
  renderTabs();
  showInlineForm("activity");
  state.editingActivityIndex = null;

  if (newActivityTraceCategory) {
    newActivityTraceCategory.value = normalizedCategory;
  }

  setActivityTypeOptions(normalizedCategory);

  if (activityFormTitle) {
    activityFormTitle.textContent = normalizedCategory === "Big"
      ? "Add Big Contact Trace"
      : "Add Small Contact Trace";
  }

  if (activityFormSubtitle) {
    activityFormSubtitle.textContent = normalizedCategory === "Big"
      ? "Use this for Retailer events, Partner conferences, audits, and projects."
      : "Use this for calls, emails, visits, and routine follow-ups.";
  }

  if (saveActivityButton) {
    saveActivityButton.textContent = normalizedCategory === "Big"
      ? "Save Big Trace"
      : "Save Small Trace";
  }

  setCommandFeedback(`${normalizedCategory} contact trace form opened.`);

  if (Number.isInteger(activityIndex)) {
    populateActivityForm(activityIndex);
  }
}

window.openSapMasterForm = openSapMasterForm;
window.openExtraInfoForm = openExtraInfoForm;
window.openContactForm = openContactForm;
window.openActivityForm = openActivityForm;
window.deleteContact = deleteContact;
window.deleteActivity = deleteActivity;


if (openSapMasterFormButton) {
  openSapMasterFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    openSapMasterForm();
  });
} else {
  console.warn("openSapMasterFormButton not found");
}

if (openExtraInfoFormButton) {
  openExtraInfoFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    openExtraInfoForm();
  });
} else {
  console.warn("openExtraInfoFormButton not found");
}

if (openContactFormButton) {
  openContactFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    openContactForm();
  });
} else {
  console.warn("openContactFormButton not found");
}

if (openBigTraceFormButton) {
  openBigTraceFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    openActivityForm("Big");
  });
} else {
  console.warn("openBigTraceFormButton not found");
}

if (openSmallTraceFormButton) {
  openSmallTraceFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    openActivityForm("Small");
  });
} else {
  console.warn("openSmallTraceFormButton not found");
}

/* Delegated backup listener: useful if the button is recreated later */
document.addEventListener("click", (event) => {
  const sapMasterButton = event.target.closest("#openSapMasterFormButton");
  const extraInfoButton = event.target.closest("#openExtraInfoFormButton");
  const contactButton = event.target.closest("#openContactFormButton");
  const bigTraceButton = event.target.closest("#openBigTraceFormButton");
  const smallTraceButton = event.target.closest("#openSmallTraceFormButton");
  const editContactButton = event.target.closest("[data-edit-contact]");
  const deleteContactButton = event.target.closest("[data-delete-contact]");
  const editActivityButton = event.target.closest("[data-edit-activity]");
  const deleteActivityButton = event.target.closest("[data-delete-activity]");

  if (sapMasterButton) {
    event.preventDefault();
    openSapMasterForm();
    return;
  }

  if (extraInfoButton) {
    event.preventDefault();
    openExtraInfoForm();
    return;
  }

  if (contactButton) {
    event.preventDefault();
    openContactForm();
    return;
  }

  if (bigTraceButton) {
    event.preventDefault();
    openActivityForm("Big");
    return;
  }

  if (smallTraceButton) {
    event.preventDefault();
    openActivityForm("Small");
    return;
  }

  if (editContactButton) {
    event.preventDefault();
    openContactForm(Number(editContactButton.dataset.editContact));
    return;
  }

  if (deleteContactButton) {
    event.preventDefault();
    deleteContact(Number(deleteContactButton.dataset.deleteContact));
    return;
  }

  if (editActivityButton) {
    event.preventDefault();
    const activityIndex = Number(editActivityButton.dataset.editActivity);
    const supplier = getActiveSupplier();
    const activity = supplier.timeline[activityIndex];
    openActivityForm(activity ? getTraceCategory(activity) : "Small", activityIndex);
    return;
  }

  if (deleteActivityButton) {
    event.preventDefault();
    deleteActivity(Number(deleteActivityButton.dataset.deleteActivity));
  }
});

console.log("Supplier 360 script loaded - extra info edit version");
setActivityTypeOptions("Small");

hideInlineForms();
render();
hideInlineForms();
