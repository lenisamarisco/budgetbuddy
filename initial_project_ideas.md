## Capstone 2 idea 1
Project Proposal: FitTrack – A Personalized Fitness Companion
Overview
FitTrack is a web-based fitness app designed to help users set, track, and achieve their fitness goals through personalized workout plans, nutrition tracking, and progress analytics. The app will provide a user-friendly interface for logging workouts, tracking calorie intake, and monitoring fitness progress over time.
Core Features
1. User Authentication (Signup/Login)
    * Secure user accounts with authentication (JWT/Auth0/Firebase).
2. Personalized Workout Plans
    * Users select goals (weight loss, muscle gain, endurance) and receive suggested workouts.
    * Option to create and log custom workouts.
3. Exercise Library
    * Browse exercises by category (cardio, strength, flexibility) with GIFs/videos.
4. Progress Tracking
    * Users log their workouts and track reps, sets, duration, and weight.
    * Weekly and monthly analytics to visualize progress.
5. Nutrition & Calorie Tracking
    * Integration with a nutrition API (like Edamam or Spoonacular) to suggest meal plans.
    * Daily calorie intake tracking.
6. Community & Motivation
    * Users can set goals, earn badges, and compete with friends.
    * Optional social feed for sharing milestones.
7. Responsive UI/UX
    * Mobile-friendly with a clean dashboard for ease of use.
Tech Stack
* Frontend: React (with Redux or Context API for state management), Tailwind CSS
* Backend: Node.js + Express.js (for API endpoints)
* Database: PostgreSQL or MongoDB (for user profiles and logs)
* API Integration: Spoonacular (nutrition) or ExerciseDB
* Authentication: Firebase/Auth0
* Deployment: Vercel/Netlify (Frontend) + Render/Heroku (Backend)
Project Timeline (2 Weeks/65 Hours)

## Capstone 2 idea 2 (chosen)
Capstone 2 

BudgetBuddy – Smart Expense Tracker & Budget Planner
📌 Overview
BudgetBuddy is a personal finance management app designed to help users track expenses, set budgets, and gain insights into their financial habits. The goal is to simplify money management with automation, smart analytics, and an intuitive interface.

🌟 Key Features
1️⃣ Smart Expense Tracking
* Users log expenses manually or connect to bank accounts (optional).
* Categorization of transactions (e.g., groceries, bills, entertainment).
* AI-powered expense suggestions based on past spending patterns.
2️⃣ Budgeting & Alerts
* Users set monthly budgets for different categories.
* Real-time notifications when close to exceeding budget limits.
* Visual progress bars to indicate spending against set budgets.
3️⃣ Monthly Spending Insights
* Graphical breakdown of income vs. expenses using Chart.js.
* AI-based financial advice based on spending trends.
* Predictive analysis of future expenses based on past behavior.
4️⃣ Export & Data Management
* Download monthly spending reports as CSV or PDF.
* Integration with Google Sheets for automatic data syncing.
* Secure cloud backup to store and retrieve past financial data.
5️⃣ Gamification & Goals
* Users set saving goals and receive encouragement for progress.
* Streak tracking for good financial habits.
* Reward badges for milestones like "Saved $500 this month!"
6️⃣ Multi-User & Family Budgeting (Optional for Future Expansion)
* Shared household budgeting with multiple accounts.
* Expense-splitting feature for roommates or family members.

🛠 Tech Stack
Frontend:
* React – Interactive UI for budget tracking
* Redux – State management for expenses & budgets
* Chart.js – Graphs and spending analytics visualization
Backend:
* Node.js + Express – API for expense tracking and budget management
* JWT Authentication – Secure login & user sessions
Database:
* PostgreSQL – Structured storage for transactions & budgets
* Mongoose – Easy database interaction
Deployment:
* Netlify – Frontend hosting
* Render/Vercel – Backend deployment
* AWS S3 – Optional cloud storage for user reports

🚀 Development Plan (2 Weeks / 65 Hours)
Day	Task	Estimated Hours
1-2	    Setup project, install dependencies	5h
3-4	    Design & implement UI for adding expenses	10h
5	    Set up database & API for expenses	8h
6-7	    Implement budgeting & alerts feature	10h
8	    Add chart visualizations for insights	6h
9	    User authentication & data export	8h
10-11   Testing & debugging	8h
12-13   Polish UI, optimize performance	6h
14	    Deployment & final testing	4h

📈 Future Enhancements
✅ AI-powered smart budgeting recommendations✅ Automatic bank transaction import✅ Subscription tracking to prevent forgotten charges✅ Multi-user budgeting & family finance tools
## Capstone 2 idea 3 
Capstone 2 idea 3

TeleMedConnect – Virtual Healthcare Platform
📌 Overview
TeleMedConnect is a telemedicine platform that connects patients with healthcare providers for remote consultations. The app enables video appointments, secure messaging, prescription management, and health record storage to ensure seamless virtual healthcare.

🌟 Key Features
1️⃣ Virtual Appointments
* Patients book appointments with doctors, therapists, or specialists.
* Video & voice consultations with secure encryption.
* Real-time availability of doctors with a booking calendar.
2️⃣ Secure Messaging & Chat
* HIPAA-compliant chat for secure communication with healthcare providers.
* Asynchronous messaging for quick medical inquiries.
* AI-powered symptom checker to suggest when to consult a doctor.
3️⃣ Electronic Prescriptions & Medical Records
* Doctors issue e-prescriptions, sent directly to partner pharmacies.
* Patients can store and access their medical history, prescriptions, and test results.
* Automated reminders for medication refills and follow-ups.
4️⃣ AI-Powered Health Insights & Symptom Checker
* Symptom checker provides preliminary health guidance.
* Personalized health tips based on past consultations and conditions.
* Integration with wearable devices (Apple Health, Fitbit) for vitals monitoring.
5️⃣ Insurance & Payment Integration
* Integration with insurance providers for seamless billing.
* Patients pay via credit/debit cards, PayPal, or Health Savings Accounts (HSA/FSA).
* Option for subscription-based telemedicine plans.
6️⃣ Multi-Specialty Support
* General practitioners, mental health therapists, dermatologists, etc.
* Pediatric, geriatric, and chronic disease management.
* 24/7 urgent care availability.

🛠 Tech Stack
Frontend:
* React – User-friendly UI for scheduling and consultations
* Redux – State management for appointments & chat
* WebRTC – Secure video and voice calls
Backend:
* Node.js + Express – API for appointment management
* Socket.io – Real-time chat & notifications
* JWT Authentication – Secure user authentication
Database:
* PostgreSQL – Storage for patient records & appointments
* MongoDB (optional) – Storing unstructured health data
Deployment:
* Netlify – Frontend hosting
* Render/Vercel – Backend hosting
* Twilio API – Video and chat integration

🚀 Development Plan (2 Weeks / 65 Hours)
Day	Task	Estimated Hours
1-2	Setup project, install dependencies	5h
3-4	Design UI for appointment booking	10h
5	Implement backend for user authentication	6h
6-7	Develop video consultation feature	10h
8	Secure messaging & chat implementation	8h
9-10	Add prescription & medical record storage	8h
11-12	Payment & insurance integration	10h
13	Testing & debugging	5h
14	Deployment & final fixes	3h
📈 Future Enhancements
✅ AI chatbot for basic health guidance✅ Remote monitoring via wearable integration✅ Multi-language support for global reach✅ Doctor ratings & patient feedback system
