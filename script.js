/* script.js - Final Script for SR Farms Website (Bilingual Multi-Page Logic) - Revised */

document.addEventListener('DOMContentLoaded', () => {
    // --- State Variables ---
    let currentLang = 'en';

    // --- Translation Database ---
    const translations = {
        en: {
            // Navigation
            "nav-home": "Home",
            "nav-produce": "Our Harvest",
            "nav-gallery": "Gallery",
            "nav-contact": "Contact Us",
            "nav-cta": "Call to Order",

            // Home Page
            "hero-title": "Organic Farm Operating Since <span>2021</span>",
            "hero-subtitle": "Welcome to SR Farms. We are an organic farm operating since 2021. We merge traditional homestead agriculture with chemical-free cultivation to maintain rich, organic plantations and harvest healthy, natural crops.",
            "hero-cta-explore": "Explore Our Harvest",
            "hero-cta-contact": "Contact Details",
            "promo-organic-title": "100% Chemical-Free",
            "promo-organic-desc": "Grown naturally using bio-compost and zero synthetic pesticides, retaining rich nutrients and authentic taste.",
            "promo-timeline-title": "Earthy Cultivation",
            "promo-timeline-desc": "From organic soil care to natural straw ripening, we document every phase of our sustainable harvests.",
            "promo-direct-title": "Direct Call Orders",
            "promo-direct-desc": "No middlemen, no online carts. Browse our catalog and call us directly to schedule farm pick-ups or bulk orders.",

            // Farm Tours
            "tour-title": "Experience Organic Farm Life",
            "tour-desc": "Bring your family for a refreshing day outing at SR Farms! Walk through our lush organic plantations, meet our farm animals, feel at one with nature, and experience sustainable homestead farming.",
            "tour-cta": "Plan a Tour",

            // Produce Page Headers
            "produce-section-title": "Our Farm Harvest",
            "produce-section-subtitle": "We cultivate premium organic crops. Explore our chemical-free coconuts, fresh bananas, and local mango varieties.",
            
            // Coconut Section
            "coconut-section-title": "Coconut Cultivation",
            "coconut-section-subtitle": "Our main agricultural focus is sustainable, pesticide-free coconut farming where we cycle natural nutrients and utilize solar dome drying.",
            "coconut-1-title": "Natural Fertilization",
            "coconut-1-desc": "Fallen coconut fronds (leaves) are recycled as organic fertilizer/compost to enrich our soil naturally.",
            "coconut-2-title": "Soil Mushrooms",
            "coconut-2-desc": "Nature's proof of rich soil health: wild mushrooms growing naturally across our organic grounds.",
            "coconut-3-title": "Solar Dome Dryer",
            "coconut-3-desc": "Processing coconuts hygienically in a high-efficiency solar dome dryer to produce clean, premium copra.",
            "coconut-4-title": "Coconut Groves",
            "coconut-4-desc": "Our groves feature tall, mature coconut palms cultivated chemical-free, yielding rich, sweet coconuts.",
            
            // Banana Section
            "banana-section-title": "Banana Plantation",
            "banana-section-subtitle": "Grown naturally using sustainable organic homestead farming.",
            "banana-desc": "Our banana trees flourish alongside coconut palms, irrigated with clean water and nourished by natural organic compost. We grow delicious, high-quality native bananas without any chemical sprays.",

            // Mango Section Header
            "mango-section-title": "Mango Varieties & Cultivation",
            "mango-drawer-desc": "We also cultivate premium local mangoes (Panchavarnam and Kili Mooku) in limited quantities. Click below to explore our varieties and traditional ripening timeline.",
            "mango-btn-show": "Explore Mango Details",
            "mango-btn-hide": "Hide Mango Details",
            "mango-varieties-head": "Mango Varieties",
            "cultivation-process-head": "Cultivation Process",
            
            // Mango Varieties (2 Types)
            "mangoes-subtitle": "The 2 types of Mango we cultivate are Panchavarnam and Kili Mooku.",
            "mango-p-title": "Panchavarnam",
            "mango-p-desc": "Named after its beautiful five colors, this variety offers a unique sweet flavor with a rich, fibrous texture that is highly cherished in Tamil Nadu.",
            "mango-k-title": "Kili Mooku",
            "mango-k-desc": "Also known as Totapuri or parrot-beaked mango, it has a distinct curved shape, slightly sour-sweet crunchy taste when raw, and sweet juicy pulp when ripe.",
            "badge-available": "Harvesting Now",
            "taste-sweet": "Flavor: Rich Sweet & Fibrous",
            "taste-tangy": "Flavor: Sour-Sweet Juicy",
            "season-p": "Season: April – June",
            "season-k": "Season: April – May",

            // Cultivation Process Steps (Order 1 to 5)
            "process-title": "Mango Cultivation Process",
            "process-subtitle": "Our step-by-step mango harvest process, documented with original photos and videos directly from Saptur.",
            "step-1-title": "Sun-Ripened Orchard Maturity",
            "step-1-desc": "Panchavarnam and Kili Mooku mangoes maturing naturally on the branches, hanging in heavy clusters ready for selective handpicking.",
            "step-2-title": "Traditional Pole Harvesting",
            "step-2-desc": "Harvesting high-hanging fruits carefully using a traditional pole plucker equipped with a net basket to prevent bruising and drop damage.",
            "step-3-title": "Paddy Straw Bedding",
            "step-3-desc": "Arranging freshly picked green mangoes on dry paddy straw inside a clean, aerated chamber to initiate natural organic ripening.",
            "step-4-title": "Traditional Hay Curing",
            "step-4-desc": "Covering the stacked mangoes with hay to capture natural ethylene gas, ensuring uniform ripening over 3 to 5 days without chemical gases.",
            "step-5-title": "Premium Harvest Readiness",
            "step-5-desc": "The final golden, aromatic Panchavarnam and Kili Mooku mangoes, ready to be packed and delivered fresh from the groves of SR Farms.",

            // Gallery Page
            "gallery-title": "Moments from SR Farms",
            "gallery-subtitle": "Browse photographs showing our organic plantations, chemical-free crops, and animal helpers.",
            "gallery-1-title": "SR Farms Plantation",
            "gallery-1-desc": "Panoramic view of our sustainable, organic homestead agricultural rows in Saptur.",
            "gallery-2-title": "Coconut Fronds Mulch",
            "gallery-2-desc": "Recycling fallen coconut leaves back into the soil as natural moisture-retaining organic compost.",
            "gallery-3-title": "Soil Mushrooms",
            "gallery-3-desc": "Wild mushrooms growing naturally, standing as nature's proof of rich, chemical-free soil health.",
            "gallery-4-title": "Solar Dome Dryer",
            "gallery-4-desc": "Hygienic copra processing utilizing clean solar tent dryers.",
            "gallery-5-title": "Native Banana Trees",
            "gallery-5-desc": "Healthy raw banana bunches hanging from native palms cultivated chemical-free.",
            "gallery-6-title": "Coconut Palms",
            "gallery-6-desc": "Lush, mature coconut palm groves forming the backbone of our homestead.",
            "gallery-7-title": "Maturing Mangoes",
            "gallery-7-desc": "Fresh organic mangoes reaching full maturity on the tree branch.",
            "gallery-8-title": "Straw Ripening",
            "gallery-8-desc": "Layering mangoes on dry paddy straw for natural chemical-free ripening.",
            "gallery-9-title": "Panchavarnam Harvest",
            "gallery-9-desc": "Golden, delicious ripened Panchavarnam mangoes ready for delivery.",
            "gallery-10-title": "Kili Mooku Mangoes",
            "gallery-10-desc": "Distinctive parrot-beaked local mangoes freshly harvested from our orchard.",
            "gallery-11-title": "Organic Soil Nourishment",
            "gallery-11-desc": "Applying rich, homemade organic compost to nourish crop roots.",
            "gallery-12-title": "Duck Helpers",
            "gallery-12-desc": "Ducks roaming free, helping with natural pest control and weeding.",

            // Contact Page
            "contact-title": "Contact Details",
            "contact-subtitle": "We are located at the foothill of Saptur Reserve Forest. Get in touch by phone or email to inquire or visit us.",
            "contact-box-title": "Farm Info",
            "contact-email-label": "Email Address",
            "contact-email-desc": "rayyalusamy.ia@gmail.com",
            "contact-address-label": "Farm Location",
            "contact-address-desc": "SR Organic Farm, Saptur R.F., Madurai District, Tamil Nadu 626133, India",
            "contact-tour-title": "Farm Tours & Outings",
            "contact-tour-desc": "Interested in a family day outing? Contact us to schedule a guided tour and feel in one with nature.",
            "call-box-title": "Call Direct to Place Orders",
            "call-box-desc": "We harvest based on order queues. Speak directly to our farm manager to reserve fresh mangos.",
            "call-box-btn": "Call Farm Manager",

            // Footer
            "footer-desc": "Growing organic coconuts, bananas, and mangoes, preserving native soil health, and supporting local farming communities in Saptur.",
            "footer-head-explore": "Explore",
            "footer-head-help": "Inquiries",
            "footer-copy": "© 2026 SR Farms. All rights reserved. Natural homestead chemical-free agriculture."
        },
        ta: {
            // Navigation
            "nav-home": "முகப்பு",
            "nav-produce": "எங்கள் விளைச்சல்",
            "nav-gallery": "புகைப்படங்கள்",
            "nav-contact": "தொடர்புக்கு",
            "nav-cta": "ஆர்டர் செய்ய",

            // Home Page
            "hero-title": "<span>2021</span> முதல் செயல்படும் இயற்கை பண்ணை",
            "hero-subtitle": "சப்தூர் எஸ்.ஆர் பண்ணைக்கு தங்களை வரவேற்கிறோம். நாங்கள் 2021 முதல் செயல்பட்டு வரும் ஒரு இயற்கை விவசாய பண்ணையாகும். பாரம்பரிய விவசாய முறைகளுடன் இரசாயனங்கள் இல்லாத சாகுபடியை இணைத்து சிறந்த இயற்கை பண்ணையை உருவாக்கி, ஆரோக்கியமான இயற்கை பயிர்களை அறுவடை செய்கிறோம்.",
            "hero-cta-explore": "எங்கள் விளைச்சல்",
            "hero-cta-contact": "தொடர்பு விவரங்கள்",
            "promo-organic-title": "100% இரசாயனமற்றது",
            "promo-organic-desc": "செயற்கை பூச்சிக்கொல்லிகள் மற்றும் உரங்கள் இன்றி, இயற்கை உரம் கொண்டு வளர்க்கப்படுவதால், உண்மையான சுவையும் சத்துக்களும் நிறைந்துள்ளது.",
            "promo-timeline-title": "மண் சார்ந்த சாகுபடி",
            "promo-timeline-desc": "கன்று நடுதல் முதல் வைக்கோல் கொண்டு பழுக்க வைப்பது வரை, எங்களது சாகுபடி முறைகளை இங்கு தெளிவாகப் பதிவிட்டுள்ளோம்.",
            "promo-direct-title": "நேரடி தொலைபேசி ஆர்டர்",
            "promo-direct-desc": "ஆன்லைன் கார்ட்கள் இல்லை, இடைத்தரகர்கள் இல்லை. எங்களது பழ வகைகளைப் பார்த்துவிட்டு நேரடியாக எங்களை அழைத்து ஆர்டர் செய்யலாம்.",

            // Farm Tours
            "tour-title": "இயற்கை பண்ணை சுற்றுலா",
            "tour-desc": "எங்களது எஸ்.ஆர் பண்ணையை நேரில் பார்வையிட வாருங்கள்! குடும்பத்துடன் ஒரு நாள் தங்கி, இயற்கையோடு இணைந்து மகிழ்ந்து, எங்களது சாகுபடி முறைகளை நேரில் கண்டு மகிழுங்கள்.",
            "tour-cta": "சுற்றுலா முன்பதிவு",

            // Produce Page Headers
            "produce-section-title": "பண்ணை விளைச்சல்",
            "produce-section-subtitle": "நாங்கள் சிறந்த இயற்கை பயிர்களை விளைவிக்கிறோம். இரசாயனங்கள் இல்லாத தென்னை சாகுபடி, புதிய வாழைத் தோட்டம் மற்றும் மாம்பழங்களை இங்கு காண்க.",
            
            // Coconut Section
            "coconut-section-title": "தென்னை சாகுபடி",
            "coconut-section-subtitle": "எங்களது முதன்மை விவசாயப் பணி இரசாயனமற்ற தென்னை சாகுபடியாகும். இங்கு கழிவுகள் மறுசுழற்சி செய்யப்பட்டு சூரிய கூடார உலர்த்தி பயன்படுத்தப்படுகிறது.",
            "coconut-1-title": "இயற்கை உரம்",
            "coconut-1-desc": "உதிர்ந்த தென்னை மட்டைகளை இயற்கை உரமாக மாற்றி மண்ணிற்கு ஊட்டமளித்தல்.",
            "coconut-2-title": "மண்ணின் ஆரோக்கியம்",
            "coconut-2-desc": "மண்ணின் ஆரோக்கியத்திற்கு இயற்கை சான்றாக பண்ணையில் தானாக முளைத்த காளான்கள்.",
            "coconut-3-title": "சூரிய கூடார உலர்த்தி",
            "coconut-3-desc": "சூரிய கூடார உலர்த்தி மூலம் தென்னங்காய்களை இயற்கை முறையில் காயவைத்து சுத்தமான கொப்பரை தயாரிக்கிறோம்.",
            "coconut-4-title": "தென்னை சோலைகள்",
            "coconut-4-desc": "இரசாயன உரம் ஏதுமின்றி வளர்ந்துள்ள அடர்ந்த, நெடிய தென்னை மரங்கள் எங்களது விவசாயத்தின் முதன்மை ஆதாரமாகும்.",
            
            // Banana Section
            "banana-section-title": "வாழை சாகுபடி",
            "banana-section-subtitle": "பாரம்பரிய முறையில் இரசாயனங்கள் இன்றி பயிரிடப்படும் இயற்கை வாழை.",
            "banana-desc": "மண்ணின் சத்து மற்றும் இயற்கை உரங்களைக் கொண்டு வாழை மரங்களை தென்னை மரங்களுக்கு இடையே பயிரிடுகிறோம். எங்களது வாழைகள் எந்தவொரு இரசாயன தெளிப்பும் இன்றி ஆரோக்கியமாகவும் சுவையாகவும் வளர்கின்றன.",

            // Mango Section Header
            "mango-section-title": "மாம்பழ சாகுபடி",
            "mango-drawer-desc": "எங்களது பண்ணையில் குறைந்த எண்ணிக்கையிலான பஞ்சவர்ணம் மற்றும் கிளி மூக்கு மாமரங்களும் உள்ளன. எங்களது மாம்பழ வகைகள் மற்றும் பழுக்க வைக்கும் முறைகளை கீழே காண்க.",
            "mango-btn-show": "மாம்பழ விவரங்களைக் காட்டு",
            "mango-btn-hide": "மாம்பழ விவரங்களை மறை",
            "mango-varieties-head": "மாம்பழ வகைகள்",
            "cultivation-process-head": "சாகுபடி படிநிலைகள்",
            
            // Mango Varieties (2 Types)
            "mangoes-subtitle": "நாங்கள் பயிரிடும் 2 வகையான மாம்பழங்கள் பஞ்சவர்ணம் மற்றும் கிளி மூக்கு ஆகும்.",
            "mango-p-title": "பஞ்சவர்ணம்",
            "mango-p-desc": "ஐந்து வண்ணங்களைக் கொண்ட தோலமைப்பைக் கொண்ட இவ்வகை மாம்பழம், தமிழ்நாட்டின் பாரம்பரிய இனிப்புச் சுவையும் தனித்துவமான நாரமைப்பும் கொண்டது.",
            "mango-k-title": "கிளி மூக்கு",
            "mango-k-desc": "கிளியின் மூக்கு போன்ற வளைந்த அமைப்பைக் கொண்ட இவ்வகை மாம்பழம், காயாக இருக்கும் போது புளிப்பு-இனிப்பு சுவையும், பழுத்த பின் சாறு நிறைந்த இனிப்புச் சுவையும் கொண்டது.",
            "badge-available": "இப்போது அறுவடை",
            "taste-sweet": "சுவை: அதிக இனிப்பு & நார்ச்சத்துள்ளவை",
            "taste-tangy": "சுவை: புளிப்பு-இனிப்பு சாறு நிறைந்தவை",
            "season-p": "காலம்: ஏப்ரல் – ஜூன்",
            "season-k": "காலம்: ஏப்ரல் – மே",

            // Cultivation Process Steps (Order 1 to 5)
            "process-title": "மாம்பழ சாகுபடி படிநிலைகள்",
            "process-subtitle": "சப்தூரில் இருந்து நேரடியாக எடுக்கப்பட்ட புகைப்படங்கள் மற்றும் வீடியோக்கள் கொண்ட எங்களின் சாகுபடி படிநிலைகள்.",
            "step-1-title": "அறுவடைத் தயார் நிலை",
            "step-1-desc": "மாமரக் கிளைகளில் பஞ்சவர்ணம் மற்றும் கிளி மூக்கு மாம்பழங்கள் இயற்கையாக விளைந்து, அறுவடைக்குத் தயாராக இருக்கும் தோற்றம்.",
            "step-2-title": "தொரட்டி கொண்டு பறித்தல்",
            "step-2-desc": "உயரமாகத் தொங்கும் பழங்கள் கீழே விழுந்து சேதமடைவதைத் தடுக்க, நெட்டு வலை (பாரம்பரியத் தொரட்டி) கொண்டு மாம்பழங்களைச் சேகரித்தல்.",
            "step-3-title": "வைக்கோல் படுக்கையில் அடுக்குதல்",
            "step-3-desc": "பறிக்கப்பட்ட பச்சைக் காய்களை காற்றோட்டமான அறையில் வைக்கோல் படுக்கை அமைத்து, இயற்கை முறையில் பழுக்க வைக்கும் ஆரம்பப் படிநிலை.",
            "step-4-title": "இயற்கை வைக்கோல் மூட்டம்",
            "step-4-desc": "வைக்கோலால் காய்களை முழுமையாக மூடி, இயற்கையாக வெளிப்படும் எத்திலீன் வாயு மூலம் இரசாயனங்கள் இன்றி பழங்களைச் சீராகப் பழுக்க வைத்தல்.",
            "step-5-title": "அறுவடை நிறைவு & விநியோகம்",
            "step-5-desc": "முழுமையாகப் பழுத்துத் தங்க நிறத்தில் சுவையும் நறுமணமும் மிக்க புதிய மாம்பழங்கள் வாடிக்கையாளர்களுக்கு விநியோகிக்கத் தயாரான நிலை.",

            // Gallery Page
            "gallery-title": "பண்ணையின் புகைப்படங்கள்",
            "gallery-subtitle": "எங்கள் இயற்கை தோட்டங்கள், இரசாயனமற்ற பயிர்கள் மற்றும் பண்ணைக்கு உதவும் விலங்குகளின் புகைப்படங்கள்.",
            "gallery-1-title": "எஸ்.ஆர் பண்ணை தோற்றம்",
            "gallery-1-desc": "சப்தூரில் அமைந்துள்ள எங்களது இயற்கை விவசாய பண்ணையின் எழில்மிகு தோற்றம்.",
            "gallery-2-title": "தென்னை மட்டை உரம்",
            "gallery-2-desc": "உதிர்ந்த தென்னை மட்டைகளை இயற்கை உரமாக மாற்றி மண்ணிற்கு ஊட்டமளித்தல்.",
            "gallery-3-title": "மண் காளான்",
            "gallery-3-desc": "மண்ணின் ஆரோக்கியத்திற்கு இயற்கை சான்றாக பண்ணையில் தானாக முளைத்த காளான்கள்.",
            "gallery-4-title": "சூரிய கூடார உலர்த்தி",
            "gallery-4-desc": "சூரிய கூடார உலர்த்தி மூலம் தென்னங்காய்களை இயற்கை முறையில் காயவைத்தல்.",
            "gallery-5-title": "இயற்கை வாழை மரம்",
            "gallery-5-desc": "இரசாயன உரம் ஏதுமின்றி இயற்கை உரம் கொண்டு விளைவிக்கப்பட்ட வாழைத் தோட்டம்.",
            "gallery-6-title": "பண்ணை தென்னை மரங்கள்",
            "gallery-6-desc": "எங்களது பண்ணையின் முதன்மை பயிரான அடர்ந்த தென்னை மரங்களின் தோற்றம்.",
            "gallery-7-title": "மரத்திலுள்ள மாம்பழங்கள்",
            "gallery-7-desc": "அறுவடைக்குத் தயாராக மாமரங்களில் நன்கு விளைந்து தொங்கும் மாம்பழங்கள்.",
            "gallery-8-title": "வைக்கோல் கொண்டு பழுக்க வைத்தல்",
            "gallery-8-desc": "இரசாயனம் இன்றி பழுக்க வைக்க வைக்கோல் படுக்கையில் மாம்பழங்களை அடுக்குதல்.",
            "gallery-9-title": "பஞ்சவர்ண மாம்பழம்",
            "gallery-9-desc": "அறுவடைக்குப் பின் வைக்கோலில் பழுத்த புதிய பஞ்சவர்ண மாம்பழங்கள்.",
            "gallery-10-title": "கிளி மூக்கு மாம்பழம்",
            "gallery-10-desc": "தனித்துவமான கிளி மூக்கு வடிவம் கொண்ட சுவை மிகுந்த மாம்பழங்கள்.",
            "gallery-11-title": "இயற்கை உரப் பயன்பாடு",
            "gallery-11-desc": "மண்ணின் வளத்தை மேம்படுத்த பண்ணையில் தயாரிக்கப்பட்ட இயற்கை உரம்.",
            "gallery-12-title": "பண்ணை வாத்துகள்",
            "gallery-12-desc": "பண்ணையில் பூச்சிகளைக் கட்டுப்படுத்தவும் மண்ணை கிளறவும் உதவும் வளர்ப்பு வாத்துகள்.",

            // Contact Page
            "contact-title": "தொடர்பு கொள்ள",
            "contact-subtitle": "நாங்கள் சப்தூர் காப்புக் காட்டின் அடிவாரத்தில் அமைந்துள்ளோம். எங்களை அழைக்கவும், மின்னஞ்சல் அனுப்பவும் அல்லது பண்ணைக்கு நேரில் வரவும்.",
            "contact-box-title": "பண்ணை விவரங்கள்",
            "contact-email-label": "மின்னஞ்சல் முகவரி",
            "contact-email-desc": "rayyalusamy.ia@gmail.com",
            "contact-address-label": "பண்ணை முகவரி",
            "contact-address-desc": "எஸ்.ஆர் ஆர்கானிக் பண்ணை, சப்தூர் R.F., மதுரை மாவட்டம், தமிழ்நாடு 626133, இந்தியா",
            "contact-tour-title": "பண்ணை சுற்றுலா",
            "contact-tour-desc": "குடும்பத்தினருடன் பண்ணை சுற்றுலா வர விரும்புகிறீர்களா? எங்களை தொடர்பு கொண்டு முன்பதிவு செய்யுங்கள்.",
            "call-box-title": "ஆர்டர் செய்ய நேரடியாக அழைக்கவும்",
            "call-box-desc": "ஆர்டர் வரிசையின் அடிப்படையிலேயே நாங்கள் அறுவடை செய்கிறோம். மாம்பழங்களை முன்பதிவு செய்ய பண்ணை மேலாளரைத் தொடர்பு கொள்ளவும்.",
            "call-box-btn": "மேலாளரை அழைக்கவும்",

            // Footer
            "footer-desc": "சப்தூரில் இயற்கை முறையில் தென்னை, வாழை மற்றும் மாம்பழங்களை பயிரிட்டு, மண்ணின் வளத்தைப் பாதுகாத்து, உள்ளூர் விவசாய சமூகங்களை ஆதரிக்கிறோம்.",
            "footer-head-explore": "பிரிவுகள்",
            "footer-head-help": "விசாரணைக்கு",
            "footer-copy": "© 2026 எஸ்.ஆர் பண்ணை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. இரசாயனமற்ற இயற்கை விவசாயம்."
        }
    };

    // Function to translate the page
    const translatePage = (lang) => {
        currentLang = lang;
        
        // Save preference to localStorage
        localStorage.setItem('sr_farms_lang', lang);

        // Update language buttons active class
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Set document language attribute
        document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';

        // Translate all elements with data-key
        const translatableElements = document.querySelectorAll('[data-key]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (translations[lang][key].includes('<span')) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    };

    // Attach click events to language togglers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            translatePage(selectedLang);
        });
    });


    // --- Mobile Hamburger Menu Drawer ---
    const initMobileMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                hamburger.classList.toggle('open');
                navLinks.classList.toggle('active');
            });

            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('open');
                    navLinks.classList.remove('active');
                });
            });

            document.addEventListener('click', (e) => {
                if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('open');
                    navLinks.classList.remove('active');
                }
            });
        }
    };


    // --- Horizontal Card Slider Carousel Logic ---
    const initCarousel = () => {
        const containers = document.querySelectorAll('.carousel-container');
        containers.forEach(container => {
            const track = container.querySelector('.carousel-track');
            const prevBtn = container.querySelector('.carousel-arrow.prev');
            const nextBtn = container.querySelector('.carousel-arrow.next');
            const dotsContainer = container.querySelector('.carousel-dots');
            const slides = container.querySelectorAll('.carousel-slide');
            const totalSlides = slides.length;
            let currentIndex = 0;

            if (totalSlides === 0) return;

            // Generate dot elements
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('button');
                dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
                dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                dotsContainer.appendChild(dot);

                dot.addEventListener('click', () => {
                    goToSlide(i);
                });
            }

            const dots = dotsContainer.querySelectorAll('.carousel-dot');

            const updateCarousel = () => {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex === totalSlides - 1;

                dots.forEach((dot, idx) => {
                    if (idx === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            };

            const goToSlide = (index) => {
                if (index < 0 || index >= totalSlides) return;
                
                const activeVideo = slides[currentIndex].querySelector('video');
                if (activeVideo) {
                    activeVideo.pause();
                }

                currentIndex = index;
                updateCarousel();

                const newVideo = slides[currentIndex].querySelector('video');
                if (newVideo) {
                    newVideo.currentTime = 0;
                    newVideo.play().catch(err => console.log("Autoplay check:", err));
                }
            };

            prevBtn.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
            });

            nextBtn.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
            });

            updateCarousel();
        });
    };


    // --- Lightbox Modal (Supports Images and Videos) ---
    const initLightbox = () => {
        const lightbox = document.getElementById('lightbox');
        const triggerElements = document.querySelectorAll('.gallery-item, .carousel-media');

        if (lightbox && triggerElements.length > 0) {
            const viewArea = lightbox.querySelector('.lightbox-view');
            const closeBtn = lightbox.querySelector('.lightbox-close');
            const caption = lightbox.querySelector('.lightbox-caption');

            triggerElements.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const img = trigger.querySelector('img');
                    const video = trigger.querySelector('video');
                    let title = "";
                    let subtitle = "";

                    const overlayH4 = trigger.querySelector('.gallery-overlay h4');
                    const overlayP = trigger.querySelector('.gallery-overlay p');
                    const cardH3 = trigger.closest('.carousel-slide')?.querySelector('.carousel-body h3');
                    const cardP = trigger.closest('.carousel-slide')?.querySelector('.carousel-body p');
                    const cardH4 = trigger.querySelector('.produce-card-details h4');
                    const cardPText = trigger.querySelector('.produce-card-details p');
                    const bananaH4 = trigger.closest('.banana-split-card')?.querySelector('.banana-content-wrap h4');
                    const bananaPText = trigger.closest('.banana-split-card')?.querySelector('.banana-content-wrap p');

                    if (overlayH4 && overlayP) {
                        title = overlayH4.textContent;
                        subtitle = overlayP.textContent;
                    } else if (cardH3 && cardP) {
                        title = cardH3.textContent;
                        subtitle = cardP.textContent;
                    } else if (cardH4 && cardPText) {
                        title = cardH4.textContent;
                        subtitle = cardPText.textContent;
                    } else if (bananaH4 && bananaPText) {
                        title = bananaH4.textContent;
                        subtitle = bananaPText.textContent;
                    }

                    viewArea.innerHTML = '';

                    if (video) {
                        const cloneVideo = video.cloneNode(true);
                        cloneVideo.setAttribute('controls', 'true');
                        cloneVideo.removeAttribute('autoplay');
                        cloneVideo.removeAttribute('muted');
                        cloneVideo.style.width = '100%';
                        cloneVideo.style.height = '100%';
                        viewArea.appendChild(cloneVideo);
                        cloneVideo.play();
                    } else if (img) {
                        const newImg = document.createElement('img');
                        newImg.src = img.src;
                        newImg.alt = img.alt;
                        viewArea.appendChild(newImg);
                    }

                    caption.textContent = title ? `${title} – ${subtitle}` : "";
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });

            const closeLightbox = () => {
                const videoInside = viewArea.querySelector('video');
                if (videoInside) {
                    videoInside.pause();
                }

                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            };

            closeBtn.addEventListener('click', closeLightbox);
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target === viewArea) {
                    closeLightbox();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                    closeLightbox();
                }
            });
        }
    };

    // --- Run Modules ---
    const savedLang = localStorage.getItem('sr_farms_lang') || 'en';
    translatePage(savedLang); // Apply stored translation or English default
    initMobileMenu();
    initCarousel();
    initLightbox();
});
