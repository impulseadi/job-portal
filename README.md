# Job Portal Application

**Live Link**: [Job Portal](https://job-portal-impulseadi.vercel.app)  
**GitHub Repository**: [Job Portal GitHub](https://github.com/impulseadi/job-portal)

## Project Overview

The Job Portal Application is a full-stack web application built using the **MERN Stack** (MongoDB, Express, React, Node.js) with integrated **Clerk Authentication** for secure user login, role-based access control, and session management. This app allows job seekers to search, apply for jobs, and upload resumes, while recruiters can post jobs, manage applications, and track real-time status updates.

## Features

- **Job Seeker Dashboard**:  
  - Search and apply for jobs.
  - Upload resumes (PDFs) for job applications.
  
- **Recruiter Dashboard**:  
  - Post and manage job listings.
  - Review job applications with real-time status updates.
  
- **Authentication & Authorization**:  
  - Secure login and role-based access using **Clerk**.
  - **JWT-based authentication** to secure routes, allowing recruiters to manage job listings while job seekers have access to search and apply for jobs.

- **Performance Monitoring**:  
  - Integrated **Sentry** for error tracking and performance monitoring to optimize MongoDB queries and improve app performance.

- **Responsive UI**:  
  - Built with **React**, **Vite**, and **TailwindCSS** for a fast and responsive user interface.
  - Designed with modern UI principles to ensure a seamless experience across devices.

## Technologies Used

- **Frontend**: React.js, Vite, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Clerk, JWT
- **Error Tracking**: Sentry
- **Deployment**: Vercel (Frontend), Render (Backend)



*Above: Screenshot of the Job Seeker and Recruiter Dashboards.*

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/impulseadi/job-portal.git
