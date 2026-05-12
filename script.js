// ======================
// Schemes Data (60+)
// ======================
const schemes = [
    // Farmers (18)
    {id:1,name:'PM-KISAN Samman Nidhi',category:'farmer',desc:'₹6,000/year to landholding farmers',eligibility:'Small/marginal farmers',benefits:'3 installments/year',applyLink:'https://pmkisan.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:2,name:'PM Fasal Bima Yojana',category:'farmer',desc:'Crop insurance scheme',eligibility:'All farmers',benefits:'Premium subsidy',applyLink:'https://pmfby.gov.in',deadline:'Kharif/Rabi',status:'ongoing'},
    {id:3,name:'Soil Health Card',category:'farmer',desc:'Free soil testing',eligibility:'All farmers',benefits:'Fertilizer advice',applyLink:'https://soilhealth.dac.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:4,name:'Mukhyamantri Saur Krushi Pump Yojana (MH)',category:'farmer',desc:'Solar pump subsidy in Maharashtra',eligibility:'Registered farmers',benefits:'Subsidy on solar pumps',applyLink:'https://solar.mahadiscom.in',deadline:'Ongoing',status:'ongoing'},
    {id:5,name:'Namo Shetkari Maha Samman Nidhi (MH)',category:'farmer',desc:'Additional income support for farmers',eligibility:'PM-Kisan beneficiaries in Maharashtra',benefits:'State top-up amount',applyLink:'https://mahadbt.maharashtra.gov.in',deadline:'Seasonal',status:'ongoing'},
    {id:6,name:'Rashtriya Krishi Vikas Yojana',category:'farmer',desc:'Support for agriculture projects',eligibility:'Farmers via states',benefits:'Subsidy for agri infra',applyLink:'https://rkvy.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:7,name:'Paramparagat Krishi Vikas Yojana',category:'farmer',desc:'Organic farming promotion',eligibility:'Farmer groups',benefits:'Assistance for organic farming',applyLink:'https://pgsindia-ncof.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:8,name:'Kisan Credit Card (KCC)',category:'farmer',desc:'Easy credit for farmers',eligibility:'Farmers, fishers, dairy farmers',benefits:'Working capital loan',applyLink:'https://pmkisan.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:9,name:'e-NAM',category:'farmer',desc:'Online agri market',eligibility:'Registered farmers/traders',benefits:'Better price discovery',applyLink:'https://enam.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:10,name:'PM Krishi Sinchai Yojana',category:'farmer',desc:'Irrigation support',eligibility:'Farmers via states',benefits:'Irrigation infra support',applyLink:'https://pmksy.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:11,name:'National Horticulture Mission',category:'farmer',desc:'Horticulture development',eligibility:'Horticulture farmers',benefits:'Plantation, drip, training',applyLink:'https://nhb.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:12,name:'PM Formalization of Micro Food Processing (PM-FME)',category:'farmer',desc:'Food processing support',eligibility:'Micro food units',benefits:'Credit-linked subsidy',applyLink:'https://mofpi.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:13,name:'Dairy Entrepreneurship Development Scheme',category:'farmer',desc:'Support for dairy units',eligibility:'Farmers, SHGs',benefits:'Subsidy for dairy infra',applyLink:'https://nabard.org',deadline:'Ongoing',status:'ongoing'},
    {id:14,name:'National Livestock Mission',category:'farmer',desc:'Livestock development',eligibility:'Livestock farmers',benefits:'Assistance for livestock',applyLink:'https://dahd.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:15,name:'Interest Subvention Scheme for KCC',category:'farmer',desc:'Interest subsidy',eligibility:'KCC holders',benefits:'Reduced interest rate',applyLink:'https://pmkisan.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:16,name:'Gramin Bhandaran Yojana',category:'farmer',desc:'Rural godown scheme',eligibility:'Farmers, NGOs, cooperatives',benefits:'Subsidy for storage',applyLink:'https://nhb.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:17,name:'PM Kisan Maan Dhan Yojana',category:'farmer',desc:'Pension scheme for small farmers',eligibility:'Small/marginal farmers 18-40',benefits:'₹3,000/month after 60 yrs',applyLink:'https://pmkmy.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:18,name:'Atal Bhujal Yojana',category:'farmer',desc:'Groundwater management',eligibility:'Selected blocks',benefits:'Community groundwater planning',applyLink:'https://ataljal.mowr.gov.in',deadline:'Ongoing',status:'ongoing'},

    // Health (12)
    {id:19,name:'Ayushman Bharat PM-JAY',category:'health',desc:'₹5 lakh health insurance per family',eligibility:'Eligible poor families',benefits:'Free hospitalization',applyLink:'https://pmjay.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:20,name:'Mahatma Jyotirao Phule Jan Arogya Yojana (MH)',category:'health',desc:'State health insurance in Maharashtra',eligibility:'Eligible low-income families',benefits:'Cashless treatment',applyLink:'https://jeevandayee.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:21,name:'Jan Aushadhi Yojana',category:'health',desc:'Affordable generic medicines',eligibility:'Open to all citizens',benefits:'Low-cost quality medicines',applyLink:'https://janaushadhi.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:22,name:'PM Ayushman Bharat Health & Wellness Centres',category:'health',desc:'Comprehensive primary health care',eligibility:'All citizens',benefits:'Free primary care services',applyLink:'https://ab-hwc.nhp.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:23,name:'Mission Indradhanush',category:'health',desc:'Universal immunization programme',eligibility:'Children and pregnant women',benefits:'Free vaccines',applyLink:'https://nhm.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:24,name:'Pradhan Mantri Surakshit Matritva Abhiyan',category:'health',desc:'Antenatal care for pregnant women',eligibility:'Pregnant women',benefits:'Free check-ups on 9th of every month',applyLink:'https://pmsma.nhp.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:25,name:'Rashtriya Swasthya Bima Yojana',category:'health',desc:'Health insurance for BPL workers',eligibility:'BPL families',benefits:'Hospitalization cover',applyLink:'https://labour.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:26,name:'National Programme for Health Care of the Elderly',category:'health',desc:'Geriatric health services',eligibility:'Senior citizens',benefits:'Specialized geriatric care',applyLink:'https://nhm.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:27,name:'PM National Dialysis Programme',category:'health',desc:'Free dialysis for poor',eligibility:'BPL patients',benefits:'Free dialysis sessions',applyLink:'https://nhm.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:28,name:'Ayushman Bharat Digital Mission',category:'health',desc:'Digital health ID',eligibility:'All citizens',benefits:'Digital health records',applyLink:'https://abdm.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:29,name:'PM TB Mukt Bharat Abhiyan',category:'health',desc:'TB elimination programme',eligibility:'TB patients',benefits:'Support and nutrition',applyLink:'https://tbcindia.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:30,name:'Janani Suraksha Yojana',category:'health',desc:'Institutional delivery incentive',eligibility:'Pregnant women (BPL/SC/ST)',benefits:'Cash incentive',applyLink:'https://nhm.gov.in',deadline:'Ongoing',status:'ongoing'},

    // Education (10)
    {id:31,name:'National Scholarship Portal Schemes',category:'education',desc:'Central & state scholarships',eligibility:'Students from various categories',benefits:'Scholarship amount',applyLink:'https://scholarships.gov.in',deadline:'As per scheme',status:'ongoing'},
    {id:32,name:'PM Scholarship Scheme for Wards of CAPF/Assam Rifles',category:'education',desc:'Scholarship for CAPF wards',eligibility:'Eligible wards',benefits:'Annual scholarship',applyLink:'https://scholarships.gov.in',deadline:'Annual',status:'ongoing'},
    {id:33,name:'Post Matric Scholarship for SC/ST/OBC',category:'education',desc:'Scholarship for higher education',eligibility:'SC/ST/OBC students',benefits:'Tuition & maintenance',applyLink:'https://scholarships.gov.in',deadline:'Annual',status:'ongoing'},
    {id:34,name:'National Means-cum-Merit Scholarship',category:'education',desc:'For class 8 meritorious students',eligibility:'Class 8, low-income',benefits:'Annual scholarship',applyLink:'https://scholarships.gov.in',deadline:'Annual',status:'ongoing'},
    {id:35,name:'AICTE Pragati Scholarship for Girls',category:'education',desc:'Technical education support for girls',eligibility:'Girl students in technical courses',benefits:'Tuition and incidentals',applyLink:'https://aicte-india.org',deadline:'Annual',status:'ongoing'},
    {id:36,name:'AICTE Saksham Scholarship (Differently Abled)',category:'education',desc:'Scholarship for specially-abled',eligibility:'Differently-abled students',benefits:'Scholarship + contingency',applyLink:'https://aicte-india.org',deadline:'Annual',status:'ongoing'},
    {id:37,name:'PM eVidya / DIKSHA',category:'education',desc:'Digital learning content',eligibility:'All students',benefits:'Free digital resources',applyLink:'https://diksha.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:38,name:'SWAYAM Online Courses',category:'education',desc:'MOOCs platform',eligibility:'Anyone interested',benefits:'Free/low-cost courses',applyLink:'https://swayam.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:39,name:'Samagra Shiksha Abhiyan',category:'education',desc:'School education support',eligibility:'School students',benefits:'Infra, quality, inclusion',applyLink:'https://samagra.education.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:40,name:'PM Ujjwal Balamitra (example local)',category:'education',desc:'Supplementary learning support',eligibility:'Govt school students',benefits:'After-school classes',applyLink:'#',deadline:'Ongoing',status:'ongoing'},

    // Women (8)
    {id:41,name:'Majhi Kanya Bhagyashree Scheme (MH)',category:'women',desc:'Girl child support in Maharashtra',eligibility:'Girl child in eligible families',benefits:'Financial support till 18',applyLink:'https://mahadbt.maharashtra.gov.in',deadline:'On birth/registration',status:'ongoing'},
    {id:42,name:'PM Ujjwala Yojana',category:'women',desc:'Free LPG connections for women',eligibility:'BPL women',benefits:'Free LPG connection',applyLink:'https://pmuy.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:43,name:'Beti Bachao Beti Padhao',category:'women',desc:'Girl child welfare programme',eligibility:'Girl children',benefits:'Awareness & incentives',applyLink:'https://wcd.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:44,name:'One Stop Centre Scheme',category:'women',desc:'Support to women in distress',eligibility:'Women facing violence',benefits:'Counselling, legal aid',applyLink:'https://wcd.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:45,name:'Swadhar Greh Scheme',category:'women',desc:'Shelter for women in difficulty',eligibility:'Women in need',benefits:'Shelter, food, training',applyLink:'https://wcd.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:46,name:'Working Women Hostel Scheme',category:'women',desc:'Hostels for working women',eligibility:'Working women, trainees',benefits:'Safe & affordable stay',applyLink:'https://wcd.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:47,name:'National Creche Scheme',category:'women',desc:'Crèches for working mothers',eligibility:'Children of working women',benefits:'Daycare services',applyLink:'https://wcd.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:48,name:'PM Matru Vandana Yojana',category:'women',desc:'Maternity benefit programme',eligibility:'Pregnant/lactating women',benefits:'Cash incentive',applyLink:'https://pmvvy.gov.in',deadline:'Ongoing',status:'ongoing'},

    // Housing (6)
    {id:49,name:'PM Awas Yojana (Gramin)',category:'housing',desc:'Affordable pucca house in rural areas',eligibility:'Homeless/poor rural families',benefits:'Subsidy + assistance',applyLink:'https://pmayg.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:50,name:'PM Awas Yojana (Urban)',category:'housing',desc:'Affordable housing in urban areas',eligibility:'EWS/LIG/MIG',benefits:'Subsidy on home loan',applyLink:'https://pmay-urban.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:51,name:'Swachh Bharat Mission (Gramin)',category:'housing',desc:'Toilets for rural households',eligibility:'Rural households without toilets',benefits:'Incentive for toilet construction',applyLink:'https://swachhbharatmission.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:52,name:'Swachh Bharat Mission (Urban)',category:'housing',desc:'Urban sanitation mission',eligibility:'Urban local bodies',benefits:'Funds for sanitation infra',applyLink:'https://swachhbharatmission.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:53,name:'Pradhan Mantri Awas Yojana – Credit Linked Subsidy Scheme',category:'housing',desc:'Interest subsidy on home loan',eligibility:'EWS/LIG/MIG home buyers',benefits:'Interest subsidy',applyLink:'https://pmay-urban.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:54,name:'Urban Rental Housing Complexes (ARHC)',category:'housing',desc:'Rental housing for migrants',eligibility:'Urban migrants/poor',benefits:'Affordable rental houses',applyLink:'https://pmay-urban.gov.in',deadline:'Ongoing',status:'ongoing'},

    // Employment (5)
    {id:55,name:'MGNREGA',category:'employment',desc:'100 days wage employment',eligibility:'Adult members of rural households',benefits:'Guaranteed unskilled work',applyLink:'https://nrega.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:56,name:'PM Mudra Yojana',category:'employment',desc:'Loans for micro/small units',eligibility:'Non-corporate small businesses',benefits:'Shishu, Kishore, Tarun loans',applyLink:'https://mudra.org.in',deadline:'Ongoing',status:'ongoing'},
    {id:57,name:'Stand Up India',category:'employment',desc:'Loans for SC/ST and women entrepreneurs',eligibility:'SC/ST or women entrepreneurs',benefits:'Bank loans 10L–1Cr',applyLink:'https://standupmitra.in',deadline:'Ongoing',status:'ongoing'},
    {id:58,name:'PM SVANidhi',category:'employment',desc:'Loan for street vendors',eligibility:'Street vendors',benefits:'Working capital loan',applyLink:'https://pmsvanidhi.mohua.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:59,name:'National Career Service',category:'employment',desc:'Job portal and career services',eligibility:'Job seekers, employers',benefits:'Free job matching',applyLink:'https://ncs.gov.in',deadline:'Ongoing',status:'ongoing'},

    // Seniors (4)
    {id:60,name:'National Social Assistance Programme',category:'senior',desc:'Pension for elderly, widows, disabled',eligibility:'BPL seniors, widows, disabled',benefits:'Monthly pension',applyLink:'https://nsap.nic.in',deadline:'Ongoing',status:'ongoing'},
    {id:61,name:'Atal Pension Yojana',category:'senior',desc:'Pension scheme',eligibility:'18–40 years with bank account',benefits:'Guaranteed pension after 60',applyLink:'https://npscra.nsdl.co.in',deadline:'Ongoing',status:'ongoing'},
    {id:62,name:'PM Vaya Vandana Yojana',category:'senior',desc:'Pension for senior citizens',eligibility:'Citizens 60+ years',benefits:'Guaranteed return pension plan',applyLink:'https://licindia.in',deadline:'Ongoing',status:'ongoing'},
    {id:63,name:'Indira Gandhi National Old Age Pension Scheme',category:'senior',desc:'Pension for BPL elderly',eligibility:'60+ BPL elderly',benefits:'Monthly pension',applyLink:'https://nsap.nic.in',deadline:'Ongoing',status:'ongoing'},

    // Disabled (3)
    {id:64,name:'ADIP Scheme',category:'disabled',desc:'Assistive devices for disabled persons',eligibility:'Persons with disabilities',benefits:'Free/subsidized aids',applyLink:'https://disabilityaffairs.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:65,name:'Deendayal Disabled Rehabilitation Scheme',category:'disabled',desc:'Rehabilitation services',eligibility:'NGOs working for disabled',benefits:'Grant-in-aid',applyLink:'https://disabilityaffairs.gov.in',deadline:'Ongoing',status:'ongoing'},
    {id:66,name:'Unique Disability ID (UDID)',category:'disabled',desc:'Unified disability ID card',eligibility:'Persons with benchmark disability',benefits:'Single ID for all schemes',applyLink:'https://swavlambancard.gov.in',deadline:'Ongoing',status:'ongoing'}
];

// ======================
// Language Support
// ======================
const translations = {
    en: {
        title: 'Government Schemes Portal',
        search: 'Search schemes...',
        all: 'All Categories',
        apply: 'Apply Now',
        official: 'Official Portal',
        totalSchemesLabel: 'Total Schemes',
        favoritesLabel: 'Favorites',
        ongoingLabel: 'Ongoing',
        footer: 'Made for India | Contact: support@govschemes.in',
        contactName: 'Name',
        contactEmail: 'Email',
        contactMessage: 'Message',
        contactSend: 'Send',
        noSchemes: 'No schemes found. Try a different search!',
        deadlineLabel: 'Deadline',
        statusLabel: 'Status',
        categories: {
            farmer: 'Farmers',
            health: 'Health',
            education: 'Education',
            women: 'Women',
            housing: 'Housing',
            employment: 'Employment',
            senior: 'Seniors',
            disabled: 'Disabled'
        }
    },
    hi: {
        title: 'सरकारी योजनाएं पोर्टल',
        search: 'योजनाएं खोजें...',
        all: 'सभी श्रेणियां',
        apply: 'आवेदन करें',
        official: 'आधिकारिक पोर्टल',
        totalSchemesLabel: 'कुल योजनाएं',
        favoritesLabel: 'पसंदीदा',
        ongoingLabel: 'चालू',
        footer: 'भारत के लिए बनाया गया | संपर्क: support@govschemes.in',
        contactName: 'नाम',
        contactEmail: 'ईमेल',
        contactMessage: 'संदेश',
        contactSend: 'भेजें',
        noSchemes: 'कोई योजना नहीं मिली। कृपया अलग खोज आज़माएं!',
        deadlineLabel: 'अंतिम तिथि',
        statusLabel: 'स्थिति',
        categories: {
            farmer: 'किसान',
            health: 'स्वास्थ्य',
            education: 'शिक्षा',
            women: 'महिलाएं',
            housing: 'आवास',
            employment: 'रोजगार',
            senior: 'वरिष्ठ नागरिक',
            disabled: 'विकलांग'
        }
    },
    mr: {
        title: 'सरकारी योजना पोर्टल',
        search: 'योजना शोधा...',
        all: 'सर्व वर्ग',
        apply: 'अर्ज करा',
        official: 'अधिकृत पोर्टल',
        totalSchemesLabel: 'एकूण योजना',
        favoritesLabel: 'आवडत्या',
        ongoingLabel: 'चालू',
        footer: 'भारतासाठी तयार | संपर्क: support@govschemes.in',
        contactName: 'नाव',
        contactEmail: 'ई-मेल',
        contactMessage: 'संदेश',
        contactSend: 'पाठवा',
        noSchemes: 'एकही योजना सापडली नाही. कृपया वेगळी शोध करा!',
        deadlineLabel: 'अंतिम तारीख',
        statusLabel: 'स्थिती',
        categories: {
            farmer: 'शेतकरी',
            health: 'आरोग्य',
            education: 'शिक्षण',
            women: 'महिला',
            housing: 'घरे',
            employment: 'रोजगार',
            senior: 'ज्येष्ठ नागरिक',
            disabled: 'अपंग'
        }
    }
};

let currentLang = 'en';

// ======================
// State
// ======================
let filteredSchemes = [...schemes];
let currentPage = 1;
const itemsPerPage = 12;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let deferredPrompt = null;

// ======================
// Elements
// ======================
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const schemesContainer = document.getElementById('schemes-container');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const pagination = document.getElementById('pagination');
const darkToggle = document.getElementById('darkToggle');
const langToggle = document.getElementById('langToggle');
const voiceSearch = document.getElementById('voiceSearch');
const installBtn = document.getElementById('installBtn');
const contactForm = document.getElementById('contactForm');
const schemeCount = document.getElementById('schemeCount');
const stats = document.getElementById('stats');
const onlineStatus = document.getElementById('onlineStatus');

// ======================
// Init
// ======================
document.addEventListener('DOMContentLoaded', init);

window.addEventListener('load', () => {
    updateOnlineStatus();
    updateStats();
    renderSchemes();
    registerSW();
});

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function init() {
    setLanguage(currentLang);

    searchInput.addEventListener('input', filterSchemes);
    categoryFilter.addEventListener('change', filterSchemes);
    darkToggle.addEventListener('click', toggleDark);
    langToggle.addEventListener('click', toggleLang);
    voiceSearch.addEventListener('click', startVoiceSearch);
    contactForm.addEventListener('submit', handleContact);
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    installBtn.addEventListener('click', installPWA);
}

// ======================
// Language Functions
// ======================
function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById('title').textContent = t.title;
    document.getElementById('navTitle').textContent = t.title;
    searchInput.placeholder = `🔍 ${t.search}`;
    categoryFilter.querySelector('option[value=""]').textContent = t.all;

    // Update footer and contact form
    document.getElementById('footerText').textContent = t.footer;
    document.getElementById('contactName').placeholder = t.contactName;
    document.getElementById('contactEmail').placeholder = t.contactEmail;
    document.getElementById('contactMessage').placeholder = t.contactMessage;
    document.getElementById('contactSubmit').textContent = t.contactSend;

    // Update stats labels
    document.querySelector('[data-i18n="totalSchemesLabel"]').textContent = t.totalSchemesLabel;
    document.querySelector('[data-i18n="favoritesLabel"]').textContent = t.favoritesLabel;
    document.querySelector('[data-i18n="ongoingLabel"]').textContent = t.ongoingLabel;

    // Update category names in dropdown (except emojis)
    Array.from(categoryFilter.options).forEach(opt => {
        const val = opt.value;
        if (!val || !t.categories[val]) return;
        // Keep emoji, replace text after space
        const parts = opt.textContent.split(' ');
        const emoji = parts[0];
        opt.textContent = `${emoji} ${t.categories[val]} (${countSchemesByCategory(val)})`;
    });

    langToggle.textContent = lang.toUpperCase();

    renderSchemes(); // re-render text if needed
}

function toggleLang() {
    const langs = ['en', 'hi', 'mr'];
    const next = langs[(langs.indexOf(currentLang) + 1) % langs.length];
    setLanguage(next);
}

function countSchemesByCategory(cat) {
    return schemes.filter(s => s.category === cat).length;
}

// ======================
// Filtering & Rendering
// ======================
function filterSchemes() {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    filteredSchemes = schemes.filter(scheme =>
        (!query ||
            scheme.name.toLowerCase().includes(query) ||
            scheme.desc.toLowerCase().includes(query)) &&
        (!category || scheme.category === category)
    );

    currentPage = 1;
    if (filteredSchemes.length === 0) {
        onEmptyResults();
    } else {
        renderSchemes();
    }
    updateSchemeCount();
}

function renderSchemes() {
    if (filteredSchemes.length === 0) {
        onEmptyResults();
        return;
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageSchemes = filteredSchemes.slice(start, end);
    const t = translations[currentLang];

    schemesContainer.innerHTML = pageSchemes.map(scheme => `
        <div class="scheme-card ${favorites.includes(scheme.id) ? 'favorite' : ''}" data-id="${scheme.id}">
            <h3>${scheme.name}</h3>
            <span class="category">
                ${t.categories[scheme.category] || scheme.category.toUpperCase()}
            </span>
            <p>${scheme.desc}</p>
            <div class="status ${scheme.status}">
                ${t.statusLabel}: ${scheme.status.toUpperCase()}
            </div>
            <div class="deadline">
                ${t.deadlineLabel}: ${scheme.deadline}
            </div>
            <button class="favorite-toggle" data-favid="${scheme.id}">
                ${favorites.includes(scheme.id) ? '★' : '☆'}
            </button>
        </div>
    `).join('');

    // Attach click handlers (not inline)
    document.querySelectorAll('.scheme-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = Number(card.getAttribute('data-id'));
            showModal(id);
        });
    });
    document.querySelectorAll('.favorite-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = Number(btn.getAttribute('data-favid'));
            toggleFavorite(id);
        });
    });

    renderPagination();
}

function renderPagination() {
    const pages = Math.ceil(filteredSchemes.length / itemsPerPage);
    if (pages <= 1) {
        pagination.classList.add('hidden');
        pagination.innerHTML = '';
        return;
    }
    pagination.classList.remove('hidden');

    pagination.innerHTML = `
        <button ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">← Prev</button>
        <span>Page ${currentPage} of ${pages}</span>
        <button ${currentPage === pages ? 'disabled' : ''} data-page="${currentPage + 1}">Next →</button>
    `;

    pagination.querySelectorAll('button[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
            changePage(Number(btn.getAttribute('data-page')));
        });
    });
}

function changePage(page) {
    currentPage = page;
    renderSchemes();
}

// ======================
// Modal
// ======================
function showModal(id) {
    const scheme = schemes.find(s => s.id === id);
    if (!scheme) return;

    const t = translations[currentLang];

    modalBody.innerHTML = `
        <h2>${scheme.name}</h2>
        <p><strong>Description:</strong> ${scheme.desc}</p>
        <p><strong>Eligibility:</strong> ${scheme.eligibility}</p>
        <p><strong>Benefits:</strong> ${scheme.benefits}</p>
        <p><strong>${t.statusLabel}:</strong> ${scheme.status.toUpperCase()} |
           <strong>${t.deadlineLabel}:</strong> ${scheme.deadline}</p>
        <a href="${scheme.applyLink}" target="_blank">${t.official}</a>
        <a href="${scheme.applyLink}" target="_blank" class="official">${t.apply}</a>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// ======================
// Dark Mode & Favorites
// ======================
function toggleDark() {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx > -1) favorites.splice(idx, 1);
    else favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderSchemes();
    updateStats();
}

// ======================
// Voice Search
// ======================
function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = currentLang === 'hi' ? 'hi-IN' :
                           currentLang === 'mr' ? 'mr-IN' : 'en-IN';
        recognition.onresult = (e) => {
            searchInput.value = e.results[0][0].transcript;
            filterSchemes();
        };
        recognition.start();
    } else {
        alert('Voice search not supported in this browser');
    }
}

// ======================
// Contact Form
// ======================
function handleContact(e) {
    e.preventDefault();
    alert('Message sent! We\'ll reply soon.');
    contactForm.reset();
}

// ======================
// Stats & Online Status
// ======================
function updateSchemeCount() {
    schemeCount.textContent = `${filteredSchemes.length} Schemes Found`;
}

function updateStats() {
    document.getElementById('totalSchemes').textContent = schemes.length;
    document.getElementById('favoritesCount').textContent = favorites.length;
    document.getElementById('ongoingCount').textContent =
        schemes.filter(s => s.status === 'ongoing').length;

    stats.classList.toggle('hidden', schemes.length === 0);
}

function updateOnlineStatus() {
    const isOnline = navigator.onLine;
    onlineStatus.textContent = isOnline ? '🟢 Online' : '🔴 Offline';
    document.body.classList.toggle('offline', !isOnline);
}

// ======================
// PWA Basics
// ======================
function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js')
            .catch(() => {});
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installBtn.style.display = 'inline-block';
    });
}

function installPWA() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
}

// ======================
// Empty Results View
// ======================
function onEmptyResults() {
    const t = translations[currentLang];
    schemesContainer.innerHTML = `
        <p style="grid-column:1/-1;text-align:center;font-size:1.2rem;">
            ${t.noSchemes}
        </p>
    `;
    stats.classList.remove('hidden');
    contactForm.classList.remove('hidden');
}