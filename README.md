# Pearl White Dental Clinic Website

A modern, responsive website for **Pearl White**, a premier dental clinic based in India. This project showcases the clinic's services, doctors, and facilities, and features an interactive appointment booking system.

## Features

*   **Responsive Design:** Fully responsive layout that works beautifully on desktops, tablets, and mobile devices.
*   **Glassmorphism UI:** Features a modern glass-effect navigation bar and booking card.
*   **Interactive Appointment Booking:**
    *   Custom JavaScript calendar for date selection.
    *   Time slot selection.
    *   Booking confirmation form.
*   **Smooth Navigation:** Smooth scrolling to sections (Home, About, Services, Gallery, Reviews).
*   **Services Showcase:** Detailed list of specialized dental treatments.
*   **Gallery:** Visual tour of the clinic's interior and facilities.

## Technologies Used

*   **HTML5:** Semantic markup.
*   **CSS3:** Custom styling with CSS variables, Flexbox, Grid, and media queries.
*   **JavaScript (ES6+):** DOM manipulation for the mobile menu, calendar logic, and booking flow.
*   **Font Awesome:** For iconography.
*   **Google Fonts:** Using 'Inter' and 'Outfit' for typography.

## Project Structure

*   `index.html`: The main entry point containing the structure, styles, and logic.
*   `css/`: Directory for stylesheets (styles currently embedded in HTML for portability).
*   `js/`: Directory for scripts (logic currently embedded in HTML for portability).

## Setup

1. Clone the repository.
2. Install dependencies with `npm ci`.
3. Start the local preview with `npm run dev`.
4. Create a production build with `npm run build`.

The Vite build uses `pearl-white-clinic/` as its site root, so the generated `dist/` folder is ready to publish as a static site. A GitHub Actions workflow in `.github/workflows/deploy-pages.yml` deploys every push to `main` to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## License

This project is open source and available under the [MIT License](LICENSE).