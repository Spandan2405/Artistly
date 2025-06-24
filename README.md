# Artistly - Performing Artist Booking Platform

Welcome to **Artistly**, a fictional performing artist booking platform built as a frontend demo for a React + Next.js developer test assignment. This web application connects event planners with artists and allows artist managers to onboard talent and manage submissions. The project is deployed live at [https://artistly-sg.vercel.app/](https://artistly-sg.vercel.app/) and is open-source on GitHub.

## Overview
Artistly is a responsive, single-page application (SPA) designed to demonstrate frontend engineering best practices using Next.js, React, and Tailwind CSS. The platform includes a homepage, artist listing page with filters, an artist onboarding form, and an optional manager dashboard. This project was developed as part of a test assignment for Eventful India, with a focus on code structure, responsiveness, and performance optimization.

- **Live Demo**: [https://artistly-sg.vercel.app/](https://artistly-sg.vercel.app/)
- **GitHub Repository**: [https://github.com/Spandan2405/Artistly](https://github.com/Spandan2405/Artistly)

## Features
### 1. Homepage
- **Hero Section**: A welcoming banner with a call-to-action (CTA) to explore artists, featuring smooth animations using Framer Motion.
- **Artist Categories**: A grid of cards (Singers, Dancers, Speakers, DJs) with hover effects, linking to the artist listing page.
- **Testimonial Carousel**: A sliding carousel of user testimonials using ShadCN’s Carousel component with animated transitions.
- **Feature Highlights**: A grid of cards showcasing platform benefits (e.g., Diverse Talent, Easy Booking) with load animations.
- **CTA Banner**: A prominent section encouraging users to book artists or onboard as talent.

**Implementation**: Built with React functional components, styled with Tailwind CSS, and animated using Framer Motion. Reusable components like `Card` and `Button` from ShadCN UI ensure consistency.

### 2. Artist Listing Page
- **Grid Layout**: Displays artist cards with details (Name, Category, Price Range, Location) in a responsive grid.
- **Filtering**: Real-time filtering by Category (Singer, DJ, Dancer), Location (Mumbai, Delhi, Bangalore), and Price Range (3000-8000, 5000-10000, 10000-20000) using React state and `useEffect`.
- **Ask for Quote CTA**: A button on each card for user interaction.

**Implementation**: Utilizes a reusable `ArtistCard` component and a `FilterBlock` component with ShadCN’s `Select` for dropdowns. Mock data from `artists.json` is filtered client-side, ensuring all 9 filter combinations are covered.

### 3. Artist Onboarding Form
- **Multi-Section Form**: Fields for Name, Bio, Categories, Languages Spoken, Fee Range, Profile Image (optional), and Location.
- **Validation**: Real-time validation with React Hook Form and Yup, requiring at least one category and language selection.
- **Multi-Select Dropdowns**: Custom `MultiSelect` component using ShadCN’s `DropdownMenu` and `Checkbox` for categories and languages.

**Implementation**: Managed with `useForm` for controlled inputs, styled with ShadCN’s `Input`, `Textarea`, and `Select`, and submitted to the console as a mock API endpoint.

### 4. Manager Dashboard
- **Submission Table**: A table displaying artist submissions with columns for Name, Category, City, Fee, and an Action button.
- **Conditional Rendering**: Shows a “No submissions” message if the data is empty.

**Implementation**: Built with a reusable `ArtistTable` component using ShadCN’s `Table`, populated with mock data from `artists.json`, and styled with Tailwind CSS.

### 5. Responsive Design
- Fully responsive across mobile, tablet, and desktop devices using Tailwind CSS utility classes.

**Implementation**: Applied mobile-first design with breakpoints (e.g., `sm:`, `lg:`) to adjust layouts, grids, and spacing.

### 6. Deployment
- Hosted on Vercel with a live preview link and temporary credentials provided for review.

**Implementation**: Configured with `vercel.json` and deployed via the Vercel CLI, ensuring seamless integration with Next.js.

## Tech Stack
- **Frontend**: Next.js (v13+ App Router), React (Functional Components with Hooks)
- **Styling**: Tailwind CSS, ShadCN UI Components
- **Form Handling**: React Hook Form, Yup
- **Animations**: Framer Motion
- **Data**: Static JSON (`artists.json`)
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Spandan2405/Artistly.git
   cd Artistly
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- **Homepage**: Explore artist categories and testimonials, or use the CTA to navigate.
- **Artist Listing**: Filter artists by category, location, or price range to find suitable talent.
- **Onboarding**: Fill out the form to simulate onboarding an artist (data logs to console).
- **Dashboard**: View a table of artist submissions as a manager.

## Project Structure
```
Artistly/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.jsx          # Root layout with header
│   │   ├── page.jsx            # Homepage
│   │   ├── artists/            # Artist Listing Page
│   │   ├── onboarding/         # Artist Onboarding Form
│   │   ├── dashboard/          # Manager Dashboard
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # ShadCN UI components
│   │   ├── ArtistCard.jsx      # Artist card component
│   │   ├── FilterBlock.jsx     # Filter controls component
│   │   ├── Header.jsx          # Navigation header
│   │   ├── MultiSelect.jsx     # Custom multi-select dropdown
│   │   ├── TestimonialCarousel.jsx  # Testimonial slider
│   │   ├── FeatureHighlights.jsx    # Feature grid
│   │   ├── CTABanner.jsx            # CTA banner
│   ├── data/                   # Static JSON data
│   │   ├── artists.json        # Mock artist data
│   ├── lib/                    # Utility functions (if added)
│   ├── styles/                 # Global styles
│   │   ├── globals.css         # Tailwind CSS imports
│   ├── public/                 # Static assets (images, etc.)
├── package.json                # Project dependencies
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.mjs             # Next.js configuration
├── vercel.json                 # Vercel deployment configuration
```

