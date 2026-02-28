<div align="center">

# ◆ MAISON STAY

### A premium luxury hotel & spa booking experience — built with React + Vite

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)

<br/>

> Where silence becomes luxury.
> A frontend-only hotel booking platform inspired by Aman Resorts and Bottega Veneta — minimal, editorial, typographic.

<br/>

</div>

---

## ✦ What is this?

Maison Stay is a luxury hotel & spa booking website built as a single-page application. It features a clean editorial storefront, room browsing with filtering, a spa treatments page, full authentication flow, and a personal profile with reservation history and saved rooms.

All data is local (JSON) and all state is managed through React Context with localStorage persistence.

---

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router v6 |
| State | Context API (Auth, Booking, Favorites) |
| Styling | Plain CSS (no Tailwind, no UI libraries) |
| Data | Local JSON |
| Fonts | Cormorant Garamond + Inter (Google Fonts) |

---

## ✦ Pages

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home | No |
| `/rooms` | Rooms & Suites | No |
| `/room/:id` | Room Detail + Booking | Login to reserve |
| `/spa` | Spa & Wellness | No |
| `/login` | Login | No |
| `/register` | Register | No |
| `/profile` | Profile & Reservations | ✓ Yes |

---

## ✦ Features

### 🏨 Hotel
- Editorial homepage with hero, suite showcase, services grid
- Rooms catalog with category filter (Suite / Villa / Penthouse)
- Room detail with specs, gallery, amenities
- Sticky booking panel with check-in/check-out, guests, total price
- Spa page with treatment categories and booking CTAs

### 🔐 Auth
- Register & Login with form validation
- Protected routes — redirect to `/login` if not authenticated
- After login: profile link appears in nav, booking becomes available
- User state persisted in localStorage

### 👤 Profile
- Account info: name, email, member since
- My Reservations: room name, dates, total, status, cancel option
- Saved Rooms: favorited suites grid
- Loyalty tier: SILVER / GOLD / PLATINUM based on booking count
- Sign out

---

## ✦ Project Structure

```
maison-stay/
│
└── src/
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── RoomsPage.jsx
    │   ├── RoomDetailPage.jsx
    │   ├── SpaPage.jsx
    │   ├── LoginPage.jsx
    │   ├── RegisterPage.jsx
    │   └── ProfilePage.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── RoomCard.jsx
    │   └── ProtectedRoute.jsx
    ├── contexts/
    │   ├── AuthContext.jsx
    │   ├── BookingContext.jsx
    │   └── FavoritesContext.jsx
    ├── styles/
    │   ├── Header.css
    │   ├── Footer.css
    │   ├── HomePage.css
    │   ├── RoomsPage.css
    │   ├── RoomCard.css
    │   ├── RoomDetailPage.css
    │   ├── SpaPage.css
    │   ├── ProfilePage.css
    │   └── AuthPages.css
    ├── data/
    │   └── rooms.js
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
npm run preview
```

---

## ✦ Design System

Inspired by **aman.com** and **bottegaveneta.com**:

- **Background:** `#F5F3EF` warm off-white
- **Text:** `#1A1A1A` primary · `#888888` secondary
- **Accent:** `#B8975A` warm gold
- **Typography:** Cormorant Garamond (display) + Inter (UI)
- **Buttons:** `border-radius: 0`, thin border, ALL CAPS, Inter 300
- **Nav hover:** small `●` dot slides in from left
- **Cursor:** custom hollow circle `○`, fills on hover

---

<div align="center">

**Maison Stay** — built with React + Vite

</div>
