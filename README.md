# 🏛️ Socratic – Great Thinkers, Timeless Conversations
Socratic is an AI-powered web application that allows users to engage in conversations with historical philosophers like Descartes. It combines GPT technology with a modern interface (React & Tailwind) to make philosophy interactive, educational, and accessible to a broad audience.


## ✨ Features
### 🗺️  Real-time conversations with philosophers
- Philosophers respond live based on user-submitted messages and questions.
### 🔍 Philosophical variety across multiple eras
- A diverse range of philosophers from the Modern era, Ancient Rome, and the Enlightenment.
- Currently, users can talk to René Descartes, Marcus Aurelius, and Friedrich Nietzsche.
### 🧠 Choice of Gemini AI models
- Users can choose from different Gemini AI models, such as Gemini 2.0 Flash or Gemini 1.5 Pro.
### 🧩 Optional prompt optimization
- Messages can be optimized before being sent to philosophers, generating shorter and more specific prompts automatically.
### 🎨 Timeless UI/UX
- Responsive design for desktop and mobile
- Styled with Tailwind CSS
- Smooth animations and hover effects
- Intuitive interface with clear user feedback

## 📚 Lessons Learned
Looking back at the past four weeks, this project has been a valuable and intensive learning experience in which I’ve deepened my conceptual, technical, and personal skills. In a relatively short time, I’ve developed an innovative AI concept that brings classical philosophy to life in an accessible and interactive way. While the prototype is not yet fully functional, the foundation is in place and can be technically realized in a short time.

Balancing content, design, and technology proved to be a continuous challenge but provided valuable insights into how AI can be effectively applied in educational and cultural contexts. I also made a conscious effort to focus on my professional standards and personal leadership—skills I now value not only in my studies but in my personal development as well.

Overall, I’m proud of what I’ve built in a limited timeframe. The project has strengthened my creativity, research skills, and technical knowledge, and lays a solid foundation for future development into a fully-fledged and meaningful product.

## 🏗️ Projectstructure
```bash
world-view-news/
├── public/                         # Statische bestanden zoals afbeeldingen of favicon
├── src/
│   ├── components/                 # Herbruikbare UI-componenten
│   │   ├── Header.tsx             # Zoekbalk, logo, navigatie
│   │   ├── MapComponent.tsx       # Leaflet-kaart met locatie-zoekfunctie
│   │   ├── NewsPanel.tsx          # Nieuwsitems in een lijst of slider
│   │   └── ui/                    # (shadcn/ui) gestylede UI-elementen (zoals buttons, modals)
│   ├── pages/                     # Pagina’s voor routing
│   │   ├── Index.tsx              # Hoofdpagina met kaart en nieuws
│   │   ├── Login.tsx              # Inlogpagina
│   │   └── NotFound.tsx           # 404 fallback pagina
│   ├── services/                  # API-interactie of datavergaring
│   │   ├── LocationService.ts     # Geocoding of Leaflet API helper
│   │   └── NewsService.ts         # Haalt nieuws op of simuleert data
│   ├── hooks/                     # Custom React Hooks
│   │   └── use-toast.ts           # Toasts voor gebruikersfeedback
│   ├── lib/                       # Hulpmethodes en utils
│   │   └── utils.ts               # Helperfuncties voor bv. dataverwerking
│   ├── App.tsx                    # Hoofdcomponent met router
│   ├── App.css                    # Stijlen specifiek voor App component
│   ├── index.css                  # Globale CSS (Tailwind import)
│   ├── main.tsx                   # Entry point (render App.tsx)
│   └── vite-env.d.ts              # Types voor Vite omgevingsvariabelen
├── .gitignore
├── bun.lockb                     # (optioneel) bundler lockfile
├── components.json               # Shadcn component configuratie
├── eslint.config.js              # ESLint instellingen
├── index.html                    # Root HTML-bestand
├── package-lock.json
├── package.json
├── postcss.config.js             # PostCSS + Tailwind config
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts                # Vite bundler configuratie
```
## 🚀 Installation
### Requirements
- Node.js (versie 18 of hoger)
- npm, yarn, of bun package manager
### Steps
**Clone the repository**

```bash
git clone https://github.com/your-username/local-story-explorer.git
cd local-story-explorer
```
**Instal dependencies**
```bash
npm install
# of
yarn install
# of
bun install
```

**Start the development server**
```bash
npm run dev
# of
yarn dev
# of
bun dev
```
**Open the application**
```bash
Ga naar http://localhost:5173 in je browser
De applicatie laadt standaard met een overzicht van alle verhalen
```
## 📝 License
This project is licensed under MIT License.


## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2479f9a0-2334-48df-9853-53317d0eaf8e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2479f9a0-2334-48df-9853-53317d0eaf8e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
