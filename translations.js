/* ===================================
   BMS TRANSLATIONS
   Professional Greek & English content
   =================================== */

const translations = {
    en: {
        // Meta & Page Title
        pageTitle: "BMS - Building Management System | Modern Property Management Solution",
        metaDescription: "Transform how you manage residential buildings with BMS - automated expense tracking, smart cost distribution, and seamless resident billing. The future of property management.",

        // Navigation
        nav: {
            problem: "Problem",
            solution: "Solution",
            features: "Features",
            preview: "Preview",
            partner: "Partner With Us"
        },

        // Hero Section
        hero: {
            badge: "Seeking Development Partner",
            titleLine1: "The Future of",
            titleLine2: "Building Management",
            description: "Transform how residential buildings are managed. Automate expense tracking, intelligent cost distribution, seamless billing, and autonomous calculations of resident share — all in one powerful platform.",
            stats: {
                time: {
                    value: "90%",
                    label: "Less Admin Time"
                },
                transparency: {
                    value: "100%",
                    label: "Transparency"
                },
                errors: {
                    value: "Zero",
                    label: "Manual Errors"
                }
            },
            ctaPrimary: "Become Our Development Partner",
            ctaSecondary: "View App Preview"
        },

        // Problem Section
        problem: {
            tag: "The Problem",
            title: "Building Management",
            titleHighlight: "Current State",
            subtitle: "Managing residential buildings today means drowning in spreadsheets, chasing payments, and spending countless hours on tasks that should be automated.",
            cards: [
                {
                    icon: "📑",
                    title: "Spreadsheet Chaos",
                    description: "Building managers waste hours maintaining complex Excel files that are error-prone, hard to share, and impossible to scale."
                },
                {
                    icon: "🧮",
                    title: "Manual Calculations",
                    description: "Dividing expenses among residents requires tedious manual calculations every month — one mistake can cause disputes and delays."
                },
                {
                    icon: "📞",
                    title: "Communication Gaps",
                    description: "Important information gets lost in email chains, WhatsApp groups, and phone calls. No central source of truth exists."
                },
                {
                    icon: "💸",
                    title: "Payment Tracking Nightmare",
                    description: "Tracking who paid, who hasn't, sending reminders, and reconciling payments is a full-time job in itself."
                },
                {
                    icon: "📂",
                    title: "No Transparency",
                    description: "Residents don't know what they're paying for. This lack of transparency breeds distrust and constant inquiries."
                },
                {
                    icon: "📉",
                    title: "No Insights",
                    description: "Without proper tools, building managers can't analyze spending trends or make data-driven decisions."
                }
            ]
        },

        // Solution Section
        solution: {
            tag: "Our Solution",
            title: "Meet",
            titleHighlight: "BMS",
            subtitle: "One application to manage everything. From expense entry to bill delivery — automated, transparent, and incredibly simple.",
            steps: [
                {
                    number: "01",
                    title: "Enter Building Expenses",
                    description: "Simply enter expenses as they come — electricity, water, cleaning, maintenance. Categorized and organized automatically."
                },
                {
                    number: "02",
                    title: "Set Distribution Rules",
                    description: "Define how costs are split: equally, by apartment size, or custom percentages. Different rules for different expense types."
                },
                {
                    number: "03",
                    title: "Auto-Generate Bills",
                    description: "The system calculates each resident's share and generates detailed, professional bills with RF/QR payment codes."
                },
                {
                    number: "04",
                    title: "Track Everything",
                    description: "Monitor payments in real-time. See who paid, who's pending, who's overdue — all at a glance."
                }
            ]
        },

        // Features Section
        features: {
            tag: "Features",
            title: "Everything You",
            titleHighlight: "Need",
            subtitle: "Comprehensive tools designed specifically for residential building management.",
            cards: [
                {
                    badge: "Core Feature",
                    icon: "🧮",
                    title: "Smart Expense Distribution",
                    description: "Our allocation matrix automatically calculates how much each resident owes based on your rules. Equal split, by square footage, or custom percentages — per expense category.",
                    list: [
                        "Real-time validation (must equal 100%)",
                        "Copy allocations from previous months",
                        "Different rules per expense type",
                        "Visual matrix editor"
                    ]
                },
                {
                    icon: "🏢",
                    title: "Multi-Building Support",
                    description: "Manage multiple buildings from one account. Each building has its own residents, expenses, and settings."
                },
                {
                    icon: "👥",
                    title: "Resident Management",
                    description: "Complete resident profiles with contact info, apartment assignment, lease dates, and payment history."
                },
                {
                    icon: "📄",
                    title: "Professional Bills",
                    description: "Auto-generated bills with detailed expense breakdown, building info, and multiple payment options including QR codes."
                },
                {
                    icon: "📧",
                    title: "Email Automation",
                    description: "Send bills to all residents with one click. Automatic reminders for pending payments."
                },
                {
                    icon: "💳",
                    title: "Payment Tracking",
                    description: "Real-time payment status: Paid, Pending, Overdue. Never lose track of who owes what."
                },
                {
                    icon: "🏷️",
                    title: "Expense Categories",
                    description: "Organize expenses: Electricity, Water, Cleaning, Elevator, Heat, Property Management, Maintenance, and more."
                },
                {
                    icon: "📱",
                    title: "Responsive Design",
                    description: "Works on desktop, tablet, and mobile. Manage your buildings from anywhere."
                }
            ]
        },

        // Preview Section
        preview: {
            tag: "App Preview",
            title: "See It In",
            titleHighlight: "Action",
            subtitle: "Explore our UI designs. Clean, intuitive, and built for efficiency.",
            tabs: {
                buildings: "Buildings",
                residents: "Residents",
                expenses: "Expenses",
                allocations: "Allocations",
                bills: "Bills"
            },
            panels: {
                buildings: {
                    title: "Buildings Dashboard",
                    description: "Overview of all your managed buildings. See total units, occupancy rates, and recent activity at a glance. Add new buildings with a simple form.",
                    features: [
                        "Summary statistics (buildings, units, occupancy)",
                        "Building cards with key information",
                        "Visual occupancy rate indicators",
                        "Quick search and filtering"
                    ]
                },
                residents: {
                    title: "Resident Management",
                    description: "Manage all residents with detailed profiles. Track their apartment assignments, contact information, lease dates, and payment status.",
                    features: [
                        "Card view of all residents",
                        "Payment status badges (paid/pending)",
                        "Filter by status and floor",
                        "Add new residents easily"
                    ]
                },
                expenses: {
                    title: "Expense Tracking",
                    description: "Track all building expenses by category. See what's been paid, what's outstanding, and easily add new expenses with full details.",
                    features: [
                        "Expense cards with category badges",
                        "Paid vs Total amount tracking",
                        "Vendor and date information",
                        "Filter by year, month, category"
                    ]
                },
                allocations: {
                    title: "Allocation Matrix",
                    description: "The heart of our system. Set how each expense category is distributed among residents. Real-time validation ensures allocations always equal 100%.",
                    features: [
                        "Visual percentage matrix",
                        "Per-category allocation rules",
                        "Automatic validation",
                        "Copy from previous month"
                    ]
                },
                bills: {
                    title: "Bill Generation",
                    description: "Professional bills generated automatically. Each resident sees exactly what they're paying for, with clear expense breakdowns and multiple payment options.",
                    features: [
                        "Detailed expense breakdown",
                        "Building and resident info",
                        "QR codes for easy payment",
                        "One-click send to all"
                    ]
                }
            },
            galleryTitle: "More Screenshots",
            galleryCaptions: {
                addBuilding: "Add New Building",
                addExpense: "Add New Expense",
                addResident: "Add New Resident",
                billPayment: "Bill with Payment Info",
                allocationInvalid: "Allocation Validation",
                billsList: "Resident Bills List"
            }
        },

        // Partner Section
        partner: {
            tag: "For Development Companies",
            title: "Let's Build This",
            titleHighlight: "Together",
            description: "We have a clear vision, detailed requirements, and UI designs ready. We're looking for a development partner to bring BMS to life.",
            weHave: {
                title: "What We Bring to the Table",
                items: [
                    "Complete product vision and requirements",
                    "Detailed UI/UX designs (Figma)",
                    "Data structure specifications",
                    "Feature prioritization",
                    "Commitment to long-term partnership"
                ]
            },
            weNeed: {
                title: "What We're Looking For",
                items: [
                    "Full-stack development capabilities",
                    "Experience with web applications",
                    "Secure payment implementation",
                    "Scalable architecture design",
                    "Professional development process"
                ]
            },
            cta: {
                title: "Interested in Partnering?",
                description: "Let's discuss how we can work together to build BMS.",
                emailLabel: "Email Us",
                email: "contact@example.com",
                phoneLabel: "Call Us",
                phone: "+30 XXX XXX XXXX",
                locationLabel: "Location",
                location: "Greece",
                button: "Get In Touch"
            }
        },

        // Footer
        footer: {
            tagline: "Building Management System — The Future of Property Management",
            copyright: "© 2025 BMS Project. Seeking development partners."
        }
    },

    el: {
        // Meta & Page Title
        pageTitle: "BMS - Σύστημα Διαχείρισης Κτιρίων | Σύγχρονη Λύση Διαχείρισης Ακινήτων",
        metaDescription: "Μετασχηματίστε τον τρόπο διαχείρισης πολυκατοικιών. Αυτοματοποιημένη καταγραφή εξόδων, έξυπνη κατανομή κόστους και απρόσκοπτη χρέωση ενοικιαστών — το μέλλον της διαχείρισης ακινήτων.",

        // Navigation
        nav: {
            problem: "Πρόβλημα",
            solution: "Λύση",
            features: "Χαρακτηριστικά",
            preview: "Προεπισκόπηση",
            partner: "Συνεργασία"
        },

        // Hero Section
        hero: {
            badge: "Αναζητούμε Αναπτυξιακό Συνεργάτη",
            titleLine1: "Το Μέλλον της",
            titleLine2: "Διαχείρισης Κτιρίων",
            description: "Μετασχηματίστε τον τρόπο διαχείρισης πολυκατοικιών. Αυτοματοποιήστε την παρακολούθηση εξόδων, την έξυπνη κατανομή κόστους, την απρόσκοπτη χρέωση και τη διαφανή επικοινωνία με τους ενοικιαστές — όλα σε μία ισχυρή πλατφόρμα.",
            stats: {
                time: {
                    value: "80%",
                    label: "Λιγότερος Χρόνος Διαχείρισης"
                },
                transparency: {
                    value: "100%",
                    label: "Διαφάνεια"
                },
                errors: {
                    value: "Μηδέν",
                    label: "Χειροκίνητα Λάθη"
                }
            },
            ctaPrimary: "Γίνετε Συνεργάτης Ανάπτυξης",
            ctaSecondary: "Δείτε την Εφαρμογή"
        },

        // Problem Section
        problem: {
            tag: "Το Πρόβλημα",
            title: "Η Διαχείριση Κτιρίων είναι",
            titleHighlight: "Προβληματική",
            subtitle: "Η διαχείριση πολυκατοικιών σήμερα σημαίνει ατελείωτα spreadsheets, καταδίωξη πληρωμών και αμέτρητες ώρες σε εργασίες που θα έπρεπε να είναι αυτοματοποιημένες.",
            cards: [
                {
                    icon: "📑",
                    title: "Χάος με Spreadsheets",
                    description: "Οι διαχειριστές χάνουν ώρες συντηρώντας πολύπλοκα αρχεία Excel που είναι επιρρεπή σε λάθη, δύσκολα στον διαμοιρασμό και αδύνατο να κλιμακωθούν."
                },
                {
                    icon: "🧮",
                    title: "Χειροκίνητοι Υπολογισμοί",
                    description: "Η κατανομή εξόδων μεταξύ των ενοικιαστών απαιτεί κουραστικούς χειροκίνητους υπολογισμούς κάθε μήνα — ένα λάθος μπορεί να προκαλέσει διαφωνίες και καθυστερήσεις."
                },
                {
                    icon: "📞",
                    title: "Κενά Επικοινωνίας",
                    description: "Σημαντικές πληροφορίες χάνονται σε αλυσίδες email, ομάδες WhatsApp και τηλεφωνικές κλήσεις. Δεν υπάρχει κεντρική πηγή αλήθειας."
                },
                {
                    icon: "💸",
                    title: "Εφιάλτης Παρακολούθησης Πληρωμών",
                    description: "Η παρακολούθηση ποιος πλήρωσε, ποιος όχι, η αποστολή υπενθυμίσεων και η συμφωνία πληρωμών είναι από μόνη της μια δουλειά πλήρους απασχόλησης."
                },
                {
                    icon: "📂",
                    title: "Έλλειψη Διαφάνειας",
                    description: "Οι ενοικιαστές δεν ξέρουν τι πληρώνουν. Αυτή η έλλειψη διαφάνειας δημιουργεί δυσπιστία και συνεχείς ερωτήσεις."
                },
                {
                    icon: "📉",
                    title: "Καμία Ανάλυση",
                    description: "Χωρίς τα κατάλληλα εργαλεία, οι διαχειριστές δεν μπορούν να αναλύσουν τις τάσεις εξόδων ή να πάρουν τεκμηριωμένες αποφάσεις."
                }
            ]
        },

        // Solution Section
        solution: {
            tag: "Η Λύση μας",
            title: "Γνωρίστε το",
            titleHighlight: "BMS",
            subtitle: "Μία πλατφόρμα για τη διαχείριση όλων. Από την καταχώρηση εξόδων μέχρι την παράδοση λογαριασμών — αυτοματοποιημένο, διαφανές και εξαιρετικά απλό.",
            steps: [
                {
                    number: "01",
                    title: "Καταχωρήστε Έξοδα Κτιρίου",
                    description: "Απλά καταχωρήστε τα έξοδα καθώς προκύπτουν — ρεύμα, νερό, καθαρισμός, συντήρηση. Κατηγοριοποιούνται και οργανώνονται αυτόματα."
                },
                {
                    number: "02",
                    title: "Ορίστε Κανόνες Κατανομής",
                    description: "Καθορίστε πώς κατανέμεται το κόστος: ισόποσα, ανά τετραγωνικά μέτρα ή προσαρμοσμένα ποσοστά. Διαφορετικοί κανόνες για διαφορετικούς τύπους εξόδων."
                },
                {
                    number: "03",
                    title: "Αυτόματη Δημιουργία Λογαριασμών",
                    description: "Το σύστημα υπολογίζει το μερίδιο κάθε ενοικιαστή και δημιουργεί αναλυτικούς, επαγγελματικούς λογαριασμούς με QR κωδικούς πληρωμής."
                },
                {
                    number: "04",
                    title: "Παρακολουθήστε τα Πάντα",
                    description: "Παρακολουθήστε τις πληρωμές σε πραγματικό χρόνο. Δείτε ποιος πλήρωσε, ποιος εκκρεμεί, ποιος έχει καθυστέρηση — όλα με μια ματιά."
                }
            ]
        },

        // Features Section
        features: {
            tag: "Χαρακτηριστικά",
            title: "Όλα όσα",
            titleHighlight: "Χρειάζεστε",
            subtitle: "Ολοκληρωμένα εργαλεία σχεδιασμένα ειδικά για τη διαχείριση πολυκατοικιών.",
            cards: [
                {
                    badge: "Κύριο Χαρακτηριστικό",
                    icon: "🧮",
                    title: "Έξυπνη Κατανομή Εξόδων",
                    description: "Η μήτρα κατανομής μας υπολογίζει αυτόματα πόσο χρωστά ο κάθε ενοικιαστής βάσει των κανόνων σας. Ίση κατανομή, ανά τετραγωνικά μέτρα ή προσαρμοσμένα ποσοστά — ανά κατηγορία εξόδων.",
                    list: [
                        "Επαλήθευση σε πραγματικό χρόνο (πρέπει να ισούται με 100%)",
                        "Αντιγραφή κατανομών από προηγούμενους μήνες",
                        "Διαφορετικοί κανόνες ανά τύπο εξόδου",
                        "Οπτικός επεξεργαστής μήτρας"
                    ]
                },
                {
                    icon: "🏢",
                    title: "Υποστήριξη Πολλαπλών Κτιρίων",
                    description: "Διαχειριστείτε πολλαπλά κτίρια από έναν λογαριασμό. Κάθε κτίριο έχει τους δικούς του ενοικιαστές, έξοδα και ρυθμίσεις."
                },
                {
                    icon: "👥",
                    title: "Διαχείριση Ενοικιαστών",
                    description: "Πλήρη προφίλ ενοικιαστών με στοιχεία επικοινωνίας, ανάθεση διαμερίσματος, ημερομηνίες μισθώσεως και ιστορικό πληρωμών."
                },
                {
                    icon: "📄",
                    title: "Επαγγελματικοί Λογαριασμοί",
                    description: "Αυτόματα δημιουργημένοι λογαριασμοί με αναλυτική κατανομή εξόδων, πληροφορίες κτιρίου και πολλαπλές επιλογές πληρωμής συμπεριλαμβανομένων QR κωδικών."
                },
                {
                    icon: "📧",
                    title: "Αυτοματοποίηση Email",
                    description: "Στείλτε λογαριασμούς σε όλους τους ενοικιαστές με ένα κλικ. Αυτόματες υπενθυμίσεις για εκκρεμείς πληρωμές."
                },
                {
                    icon: "💳",
                    title: "Παρακολούθηση Πληρωμών",
                    description: "Κατάσταση πληρωμών σε πραγματικό χρόνο: Πληρωμένο, Απεσταλμένο, Εκκρεμές, Καθυστερημένο. Μην χάσετε ποτέ το ποιος χρωστά τι."
                },
                {
                    icon: "🏷️",
                    title: "Κατηγορίες Εξόδων",
                    description: "Οργανώστε τα έξοδα: Ηλεκτρικό, Νερό, Καθαρισμός, Ασανσέρ, Θέρμανση, Διαχείριση Ακινήτων, Συντήρηση και άλλα."
                },
                {
                    icon: "📱",
                    title: "Responsive Σχεδιασμός",
                    description: "Λειτουργεί σε υπολογιστή, tablet και κινητό. Διαχειριστείτε τα κτίριά σας από οπουδήποτε."
                }
            ]
        },

        // Preview Section
        preview: {
            tag: "Προεπισκόπηση Εφαρμογής",
            title: "Δείτε την σε",
            titleHighlight: "Δράση",
            subtitle: "Εξερευνήστε τον σχεδιασμό μας. Καθαρός, διαισθητικός και φτιαγμένος για αποτελεσματικότητα.",
            tabs: {
                buildings: "Κτίρια",
                residents: "Ενοικιαστές",
                expenses: "Έξοδα",
                allocations: "Κατανομές",
                bills: "Λογαριασμοί"
            },
            panels: {
                buildings: {
                    title: "Πίνακας Κτιρίων",
                    description: "Επισκόπηση όλων των κτιρίων που διαχειρίζεστε. Δείτε συνολικές μονάδες, ποσοστά πληρότητας και πρόσφατη δραστηριότητα με μια ματιά. Προσθέστε νέα κτίρια με μια απλή φόρμα.",
                    features: [
                        "Συνοπτικά στατιστικά (κτίρια, μονάδες, πληρότητα)",
                        "Κάρτες κτιρίων με βασικές πληροφορίες",
                        "Οπτικοί δείκτες ποσοστού πληρότητας",
                        "Γρήγορη αναζήτηση και φιλτράρισμα"
                    ]
                },
                residents: {
                    title: "Διαχείριση Ενοικιαστών",
                    description: "Διαχειριστείτε όλους τους ενοικιαστές με αναλυτικά προφίλ. Παρακολουθήστε τις αναθέσεις διαμερισμάτων, τα στοιχεία επικοινωνίας, τις ημερομηνίες μίσθωσης και την κατάσταση πληρωμών.",
                    features: [
                        "Προβολή καρτών όλων των ενοικιαστών",
                        "Σήματα κατάστασης πληρωμής (πληρωμένο/εκκρεμές)",
                        "Φιλτράρισμα ανά κατάσταση και όροφο",
                        "Εύκολη προσθήκη νέων ενοικιαστών"
                    ]
                },
                expenses: {
                    title: "Παρακολούθηση Εξόδων",
                    description: "Παρακολουθήστε όλα τα έξοδα του κτιρίου ανά κατηγορία. Δείτε τι έχει πληρωθεί, τι είναι εκκρεμές και προσθέστε εύκολα νέα έξοδα με πλήρεις λεπτομέρειες.",
                    features: [
                        "Κάρτες εξόδων με σήματα κατηγορίας",
                        "Παρακολούθηση πληρωμένου έναντι συνολικού ποσού",
                        "Πληροφορίες προμηθευτή και ημερομηνίας",
                        "Φιλτράρισμα ανά έτος, μήνα, κατηγορία"
                    ]
                },
                allocations: {
                    title: "Μήτρα Κατανομής",
                    description: "Η καρδιά του συστήματός μας. Ορίστε πώς κατανέμεται κάθε κατηγορία εξόδων μεταξύ των ενοικιαστών. Η επαλήθευση σε πραγματικό χρόνο διασφαλίζει ότι οι κατανομές ισούνται πάντα με 100%.",
                    features: [
                        "Οπτική μήτρα ποσοστών",
                        "Κανόνες κατανομής ανά κατηγορία",
                        "Αυτόματη επαλήθευση",
                        "Αντιγραφή από προηγούμενο μήνα"
                    ]
                },
                bills: {
                    title: "Δημιουργία Λογαριασμών",
                    description: "Επαγγελματικοί λογαριασμοί που δημιουργούνται αυτόματα. Κάθε ενοικιαστής βλέπει ακριβώς τι πληρώνει, με σαφείς αναλύσεις εξόδων και πολλαπλές επιλογές πληρωμής.",
                    features: [
                        "Αναλυτική ανάλυση εξόδων",
                        "Πληροφορίες κτιρίου και ενοικιαστή",
                        "QR κωδικοί για εύκολη πληρωμή",
                        "Αποστολή σε όλους με ένα κλικ"
                    ]
                }
            },
            galleryTitle: "Περισσότερα Στιγμιότυπα",
            galleryCaptions: {
                addBuilding: "Προσθήκη Νέου Κτιρίου",
                addExpense: "Προσθήκη Νέου Εξόδου",
                addResident: "Προσθήκη Νέου Ενοικιαστή",
                billPayment: "Λογαριασμός με Πληροφορίες Πληρωμής",
                allocationInvalid: "Επαλήθευση Κατανομής",
                billsList: "Λίστα Λογαριασμών Ενοικιαστών"
            }
        },

        // Partner Section
        partner: {
            tag: "Για Εταιρείες Ανάπτυξης",
            title: "Ας το Φτιάξουμε",
            titleHighlight: "Μαζί",
            description: "Έχουμε ξεκάθαρο όραμα, λεπτομερείς απαιτήσεις και έτοιμους σχεδιασμούς UI. Αναζητούμε έναν αναπτυξιακό συνεργάτη για να δώσουμε ζωή στο BMS.",
            weHave: {
                title: "Τι Προσφέρουμε",
                items: [
                    "Πλήρες όραμα προϊόντος και απαιτήσεις",
                    "Λεπτομερείς σχεδιασμοί UI/UX (Figma)",
                    "Προδιαγραφές δομής δεδομένων",
                    "Ιεράρχηση χαρακτηριστικών",
                    "Εξειδίκευση στη διαχείριση ακινήτων",
                    "Δέσμευση για μακροχρόνια συνεργασία"
                ]
            },
            weNeed: {
                title: "Τι Αναζητούμε",
                items: [
                    "Δυνατότητες full-stack ανάπτυξης",
                    "Εμπειρία με web εφαρμογές",
                    "Εξειδίκευση σε ενσωμάτωση email",
                    "Σχεδιασμός κλιμακούμενης αρχιτεκτονικής",
                    "Επαγγελματική διαδικασία ανάπτυξης"
                ]
            },
            cta: {
                title: "Ενδιαφέρεστε για Συνεργασία;",
                description: "Ας συζητήσουμε πώς μπορούμε να συνεργαστούμε για να φτιάξουμε το BMS.",
                emailLabel: "Στείλτε Email",
                email: "contact@example.com",
                phoneLabel: "Τηλεφωνήστε",
                phone: "+30 XXX XXX XXXX",
                locationLabel: "Τοποθεσία",
                location: "Ελλάδα",
                button: "Επικοινωνήστε Μαζί μας"
            }
        },

        // Footer
        footer: {
            tagline: "Σύστημα Διαχείρισης Κτιρίων — Το Μέλλον της Διαχείρισης Ακινήτων",
            copyright: "© 2025 Πρόγραμμα BMS. Αναζητούμε αναπτυξιακούς συνεργάτες."
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
