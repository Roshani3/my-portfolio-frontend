# Professional Developer Portfolio - Angular 18

A modern, high-performance portfolio website designed for a .NET and Angular Full Stack Developer. Featuring glassmorphism design, smooth scroll animations, and a responsive enterprise-ready layout.

## 🚀 Key Features

- **Angular 18**: Built with latest standalone components and modern routing.
- **Glassmorphism Design**: High-end visual style using backdrop filters and subtle gradients.
- **AOS (Animate On Scroll)**: Smooth component transitions as users browse.
- **Bootstrap 5**: Mobile-first grid and UI components.
- **Reactive Forms**: Fully functional contact form with validation.
- **Dynamic Content**: Data is centralized in `portfolio-data.ts` for quick updates.

## 🛠️ Tech Stack

- **Frontend**: Angular 18, TypeScript, SCSS.
- **UI Frameworks**: Bootstrap 5, Angular Material.
- **Animations**: AOS, CSS3 Keyframes.
- **Icons**: Bootstrap Icons.

## 📦 Prerequisites

- **Node.js**: v18.13.0 or higher
- **Angular CLI**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

## 📥 Installation

1. Install dependencies:
    npm install

## ▶️ Running the Application

1. Start the development server:
    ng serve

2. Open your browser:
    Navigate to `http://localhost:4200`

## ⚙️ Configuration

To update your profile information:
Open `src/app/data/portfolio-data.ts` and modify the `PORTFOLIO_DATA` object.

Changes will reflect immediately across:
- Hero Intro
- Experience Timeline (Rheal Software Pvt. Ltd.)
- Skills Cards
- Projects (Conference Management System)
- Contact Links

## 📁 Project Structure

- `src/app/components/`: Modular UI sections (Navbar, Hero, Experience, etc.)
- `src/app/models/`: TypeScript interfaces for portfolio data structures.
- `src/app/data/`: The "Content Source of Truth" JSON-like configuration.
- `src/styles.scss`: Global styling including glassmorphism and theme variables.

## 🔧 Troubleshooting

- **AOS Animations not showing**: Ensure `node_modules/aos/dist/aos.css` is correctly linked in `angular.json` and `AOS.init()` is called in `AppComponent`.
- **Bootstrap Styles**: Verify the `angular.json` styles array includes the bootstrap path.
