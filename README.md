# Pang - Personal Portfolio Website

## Table of Contents

- [About This Project](#about-this-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture & Deployment](#architecture--deployment)
- [Installation & Local Setup](#installation--local-setup)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## About This Project

This repository hosts the source code for my personal portfolio website, a dynamic and professional platform designed to showcase my skills, projects, and professional journey. Built with modern web technologies, it offers a seamless and engaging user experience, highlighting my expertise in both frontend development and serverless cloud solutions.

The primary goal of this website is to provide a comprehensive overview of my capabilities as a Communication Student, Aspiring Project Manager with a strong foundation in web development and an understanding of robust cloud infrastructure.

## Features

- **Interactive Hero Section:** Engaging introduction featuring a background video to capture visitor attention.
- **Responsive Design:** Optimized for seamless viewing across various devices (desktop, tablet, mobile).
- **Project Showcase:** Dedicated section to highlight key projects, demonstrating practical application of skills.
- **Comprehensive Contact Form:** A functional contact form powered by serverless AWS services, allowing direct communication.
- **Professional Branding:** Clean, modern UI/UX design reflective of professional standards.
- **Smooth Animations:** Subtle animations and transitions for an enhanced user experience.

## Technologies Used

This project leverages a modern stack to deliver a high-performance and scalable application.

### Frontend

- **JavaScript:** The core programming language for interactive web experiences.
- **HTML5:** Standard markup language for structuring web content.
- **React.js:** A declarative, component-based JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs directly in your HTML.
- **Lucide React:** A beautiful collection of open-source icons for React projects.

### Backend / Cloud Infrastructure (AWS)

- **Amazon Web Services (AWS):** The leading cloud platform used for hosting, serverless functions, and content delivery.
- **Amazon S3 (Simple Storage Service):** Utilized for highly available and scalable static website hosting, storing all frontend assets (HTML, CSS, JS, images, videos).
- **Amazon CloudFront:** A fast content delivery network (CDN) service that securely delivers website content to users globally with low latency and high transfer speeds.
- **Amazon API Gateway:** A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs. Used as the front door for the contact form's serverless function.
- **AWS Lambda:** A serverless compute service used to run the backend logic for the contact form, without provisioning or managing servers.
  - _Specifically:_ Handles incoming contact form submissions (e.g., sending emails via SES, saving to a database, etc.).

### Development Tools

- **npm / Yarn:** Package managers for JavaScript.
- **Git:** Version control system.
- **Vite / Create React App:** Vite for fast development server and bundling

## Architecture & Deployment

The website follows a serverless Single Page Application (SPA) architecture, deployed entirely on AWS:

1.  **Frontend Assets:** All React application build artifacts (HTML, CSS, JavaScript, images, `Post.mp4` video) are uploaded to an **Amazon S3 Bucket**, configured for static website hosting.
2.  **Content Delivery:** **Amazon CloudFront** is configured as a CDN in front of the S3 bucket to cache content at edge locations worldwide, ensuring fast load times and high availability for users regardless of their geographical location.
3.  **Contact Form Backend:**
    - A **React form** on the frontend captures user input.
    - Form data is sent via a `POST` request to an **Amazon API Gateway** endpoint.
    - **API Gateway** acts as an HTTP endpoint, securely receiving the request and triggering a designated **AWS Lambda function**.
    - The **AWS Lambda function** (written in Node.js) processes the form data (e.g., sends an email via AWS SES or stores it in a database) and returns a success/failure response to the frontend.

This architecture ensures a highly scalable, cost-effective, and low-maintenance deployment.

## Installation & Local Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd [your-repo-name]
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    # or if you use Yarn
    # yarn install
    ```

### Running Locally

1.  **Start the development server:**
    ```bash
    npm run dev
    # or if you use Yarn
    # yarn dev
    ```
    The application will typically be available at `http://localhost:3000` (or another port specified by your development server).

## Usage

Once deployed or running locally, navigate through the sections to explore my projects, learn more about my skills, and use the contact form to get in touch.

## Contact

Feel free to connect with me!

- **Portfolio Website:** []
- **LinkedIn:** [https://www.linkedin.com/in/woranan-hernandez]
- **Email:** [worananher@gmail.com]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
