/* script.js - Final Script for SR Farms Website (Bilingual Multi-Page Logic) - Revised */

document.addEventListener('DOMContentLoaded', () => {
    // --- State Variables ---
    let currentLang = 'en';

    // --- Translation Database ---
    const translations = {
        en: {
            // Navigation
            "nav-home": "Home",
            "nav-mango": "Mango",
            "nav-gallery": "Gallery",
            "nav-contact": "Contact Us",
            "nav-cta": "Call to Order",

            // Home Page
            "hero-title": "Organic Farm Operating Since <span>2021</span>",
            "hero-subtitle": "Welcome to SR Farms. We are an organic farm operating since 2021. We merge traditional homestead agriculture with chemical-free cultivation to harvest sweet, healthy mangoes and other organic crops.",
            "hero-cta-explore": "Explore Mangoes",
            "hero-cta-contact": "Contact Details",
            "promo-organic-title": "100% Chemical-Free",
            "promo-organic-desc": "Grown naturally using bio-compost and zero synthetic pesticides, retaining rich nutrients and authentic taste.",
            "promo-timeline-title": "Earthy Cultivation",
            "promo-timeline-desc": "From sapling care to natural straw ripening, we document every phase of our sustainable mango plantation.",
            "promo-direct-title": "Direct Call Orders",
            "promo-direct-desc": "No middlemen, no online carts. Browse our catalog and call us directly to schedule farm pick-ups or bulk orders.",

            // Mango Section Header
            "mango-section-title": "Our Mangoes & Cultivation",
            "mango-section-subtitle": "We cultivate premium local mango varieties and handle the entire farming cycle carefully. Explore our products and process below.",
            "mango-varieties-head": "Mango Varieties",
            "cultivation-process-head": "Cultivation Process",
            
            // Mango Varieties (2 Types)
            "mangoes-subtitle": "The 2 types of Mango we cultivate are Panchavarnam and Kili Mooku. Check their availability below:",
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
            "step-1-title": "Mango on the tree ready to be plucked",
            "step-1-desc": "Our organic mango tree branches laden with Panchavarnam and Kili Mooku mangoes, reaching full maturity and ready for selective hand harvesting.",
            "step-2-title": "Plucking the mangoes using the tool",
            "step-2-desc": "Harvesting mangoes carefully using a traditional long pole plucker equipped with a net basket to prevent the delicate fruits from falling to the ground and bruising.",
            "step-3-title": "Ripening mango by placing hay",
            "step-3-desc": "Layering the hand-picked green mangoes carefully on a bed of dry paddy straw (hay) inside a clean, aerated room to start the traditional ripening process.",
            "step-4-title": "Ripening mango by placing hay - Detail",
            "step-4-desc": "Covering the stacked mangoes fully with hay loops to trap natural ethylene gas, allowing them to ripen uniformly over 3 to 5 days without any harmful chemical sprays.",
            "step-5-title": "Fresh and organic ripened mangoes",
            "step-5-desc": "The final golden, juicy ripened Panchavarnam and Kili Mooku mangoes, displaying high quality and ready to be packed and delivered directly from our \"SR Farms\".",

            // Gallery Page
            "gallery-title": "Moments from SR Farms",
            "gallery-subtitle": "Browse photographs showing our mango plantation, organic crops, and animal helpers.",
            "gallery-1-title": "[Gallery Photo 1]",
            "gallery-1-desc": "[Gallery Photo 1 Caption Placeholder]",
            "gallery-2-title": "[Gallery Photo 2]",
            "gallery-2-desc": "[Gallery Photo 2 Caption Placeholder]",
            "gallery-3-title": "[Gallery Photo 3]",
            "gallery-3-desc": "[Gallery Photo 3 Caption Placeholder]",
            "gallery-4-title": "[Gallery Photo 4]",
            "gallery-4-desc": "[Gallery Photo 4 Caption Placeholder]",
            "gallery-5-title": "[Gallery Photo 5]",
            "gallery-5-desc": "[Gallery Photo 5 Caption Placeholder]",
            "gallery-6-title": "[Gallery Photo 6]",
            "gallery-6-desc": "[Gallery Photo 6 Caption Placeholder]",

            // Contact Page
            "contact-title": "Contact Details",
            "contact-subtitle": "We are located at the foothill of Saptur Reserve Forest. Get in touch by phone or email to inquire or visit us.",
            "contact-box-title": "Farm Info",
            "contact-email-label": "Email Address",
            "contact-email-desc": "rayyalusamy.ia@gmail.com",
            "contact-address-label": "Farm Location",
            "contact-address-desc": "SR Organic Farm, Saptur R.F., Madurai District, Tamil Nadu 626133, India",
            "call-box-title": "Call Direct to Place Orders",
            "call-box-desc": "We harvest based on order queues. Speak directly to our farm manager to reserve fresh mangos.",
            "call-box-btn": "Call Farm Manager",

            // Footer
            "footer-desc": "Growing organic mangoes, preserving native soil health, and supporting local farming communities in Saptur.",
            "footer-head-explore": "Explore",
            "footer-head-help": "Inquiries",
            "footer-copy": "© 2026 SR Farms. All rights reserved. Natural homestead chemical-free agriculture."
        },
        ta: {
            // Navigation
            "nav-home": "முகப்பு",
            "nav-mango": "மாம்பழம்",
            "nav-gallery": "புகைப்படங்கள்",
            "nav-contact": "தொடர்புக்கு",
            "nav-cta": "ஆர்டர் செய்ய",

            // Home Page
            "hero-title": "<span>2021</span> முதல் செயல்படும் இயற்கை பண்ணை",
            "hero-subtitle": "சப்தூர் எஸ்.ஆர் பண்ணைக்கு தங்களை வரவேற்கிறோம். நாங்கள் 2021 முதல் செயல்பட்டு வரும் ஒரு இயற்கை விவசாய பண்ணையாகும். பாரம்பரிய விவசாய முறைகளுடன் இரசாயனங்கள் இல்லாத சாகுபடியை இணைத்து ஆரோக்கியமான மாம்பழங்கள் மற்றும் இதர இயற்கை பயிர்களை அறுவடை செய்கிறோம்.",
            "hero-cta-explore": "மாம்பழங்கள்",
            "hero-cta-contact": "தொடர்பு விவரங்கள்",
            "promo-organic-title": "100% இரசாயனமற்றது",
            "promo-organic-desc": "செயற்கை பூச்சிக்கொல்லிகள் மற்றும் உரங்கள் இன்றி, இயற்கை உரம் கொண்டு வளர்க்கப்படுவதால், உண்மையான சுவையும் சத்துக்களும் நிறைந்துள்ளது.",
            "promo-timeline-title": "மண் சார்ந்த சாகுபடி",
            "promo-timeline-desc": "கன்று நடுதல் முதல் வைக்கோல் கொண்டு பழுக்க வைப்பது வரை, எங்களது சாகுபடி முறைகளை இங்கு தெளிவாகப் பதிவிட்டுள்ளோம்.",
            "promo-direct-title": "நேரடி தொலைபேசி ஆர்டர்",
            "promo-direct-desc": "ஆன்லைன் கார்ட்கள் இல்லை, இடைத்தரகர்கள் இல்லை. எங்களது பழ வகைகளைப் பார்த்துவிட்டு நேரடியாக எங்களை அழைத்து ஆர்டர் செய்யலாம்.",

            // Mango Section Header
            "mango-section-title": "எங்கள் மாம்பழங்கள் & சாகுபடி",
            "mango-section-subtitle": "நாங்கள் சிறந்த மாம்பழ வகைகளை விளைவித்து, முழு விவசாயப் பணிகளையும் கவனத்துடன் மேற்கொள்கிறோம். எங்களது பழங்கள் மற்றும் சாகுபடி முறைகளை கீழே காண்க.",
            "mango-varieties-head": "மாம்பழ வகைகள்",
            "cultivation-process-head": "சாகுபடி படிநிலைகள்",

            // Mango Varieties (2 Types)
            "mangoes-subtitle": "நாங்கள் பயிரிடும் 2 வகையான மாம்பழங்கள் பஞ்சவர்ணம் மற்றும் கிளி மூக்கு ஆகும். அவற்றின் விவரங்களை கீழே காண்க:",
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
            "step-1-title": "மரத்திலுள்ள பறிக்கத் தயாரான மாம்பழங்கள்",
            "step-1-desc": "அறுவடைக்குத் தயாராக மரங்களில் பழுத்துத் தொங்கும் எங்களது இயற்கை முறை பஞ்சவர்ணம் மற்றும் கிளி மூக்கு மாம்பழங்கள்.",
            "step-2-title": "கருவி மூலம் மாம்பழங்களை பறித்தல்",
            "step-2-desc": "மாம்பழங்கள் கீழே விழுந்து சேதமடைவதைத் தடுக்க, வலைக் கோல் (பாரம்பரியத் தொரட்டி) கருவியைப் பயன்படுத்தி மாம்பழங்களை பாதுகாப்பாகப் பறித்தல்.",
            "step-3-title": "வைக்கோல் கொண்டு பழுக்க வைத்தல் - பகுதி 1",
            "step-3-desc": "அறுவடை செய்யப்பட்ட காய்களை நன்கு காற்றோட்டமான அறையில் உலர் வைக்கோல் படுக்கையில் அடுக்கி வைக்கும் பாரம்பரிய பழுக்க வைக்கும் படிநிலை.",
            "step-4-title": "வைக்கோல் கொண்டு பழுக்க வைத்தல் - பகுதி 2",
            "step-4-desc": "மாம்பழங்களில் இருந்து வெளியாகும் இயற்கை எத்திலீன் வாயுவை உறிஞ்சி, இரசாயனங்கள் இன்றி பழங்கள் சீராக பழுக்க உதவும் வகையில் வைக்கோலால் மூடுதல்.",
            "step-5-title": "புதிய மற்றும் இயற்கை முறையில் பழுத்த மாம்பழங்கள்",
            "step-5-desc": "அறுவடை முடிந்து முழுமையாக பழுத்த, சுவை மிகுந்த புதிய இயற்கை மாம்பழங்கள் எங்களது \"எஸ்.ஆர் பண்ணை\" (SR Farms) இல் இருந்து வாடிக்கையாளர்களுக்கு விநியோகிக்கத் தயார்.",

            // Gallery Page
            "gallery-title": "பண்ணையின் புகைப்படங்கள்",
            "gallery-subtitle": "எங்கள் மாந்தோப்பு, பிற இயற்கை பயிர்கள் மற்றும் பண்ணை சுற்றுச்சூழல் மேம்பாட்டிற்கு உதவும் விலங்குகளின் புகைப்படங்கள்.",
            "gallery-1-title": "[புகைப்படம் 1]",
            "gallery-1-desc": "[புகைப்பட விளக்கம் 1]",
            "gallery-2-title": "[புகைப்படம் 2]",
            "gallery-2-desc": "[புகைப்பட விளக்கம் 2]",
            "gallery-3-title": "[புகைப்படம் 3]",
            "gallery-3-desc": "[புகைப்பட விளக்கம் 3]",
            "gallery-4-title": "[புகைப்படம் 4]",
            "gallery-4-desc": "[புகைப்பட விளக்கம் 4]",
            "gallery-5-title": "[புகைப்படம் 5]",
            "gallery-5-desc": "[புகைப்பட விளக்கம் 5]",
            "gallery-6-title": "[புகைப்படம் 6]",
            "gallery-6-desc": "[புகைப்பட விளக்கம் 6]",

            // Contact Page
            "contact-title": "தொடர்பு கொள்ள",
            "contact-subtitle": "நாங்கள் சப்தூர் காப்புக் காட்டின் அடிவாரத்தில் அமைந்துள்ளோம். எங்களை அழைக்கவும், மின்னஞ்சல் அனுப்பவும் அல்லது பண்ணைக்கு நேரில் வரவும்.",
            "contact-box-title": "பண்ணை விவரங்கள்",
            "contact-email-label": "மின்னஞ்சல் முகவரி",
            "contact-email-desc": "rayyalusamy.ia@gmail.com",
            "contact-address-label": "பண்ணை முகவரி",
            "contact-address-desc": "எஸ்.ஆர் ஆர்கானிக் பண்ணை, சப்தூர் R.F., மதுரை மாவட்டம், தமிழ்நாடு 626133, இந்தியா",
            "call-box-title": "ஆர்டர் செய்ய நேரடியாக அழைக்கவும்",
            "call-box-desc": "ஆர்டர் வரிசையின் அடிப்படையிலேயே நாங்கள் அறுவடை செய்கிறோம். மாம்பழங்களை முன்பதிவு செய்ய பண்ணை மேலாளரைத் தொடர்பு கொள்ளவும்.",
            "call-box-btn": "மேலாளரை அழைக்கவும்",

            // Footer
            "footer-desc": "சப்தூரில் இயற்கை முறையில் மாம்பழங்களை பயிரிட்டு, மண்ணின் வளத்தைப் பாதுகாத்து, உள்ளூர் விவசாய சமூகங்களை ஆதரிக்கிறோம்.",
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
        const container = document.querySelector('.carousel-container');
        if (!container) return;

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

                    if (overlayH4 && overlayP) {
                        title = overlayH4.textContent;
                        subtitle = overlayP.textContent;
                    } else if (cardH3 && cardP) {
                        title = cardH3.textContent;
                        subtitle = cardP.textContent;
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
