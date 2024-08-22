# React + Vite Job Listings Application

This project is a job listings application built using React and Vite. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules. The application allows users to view, add, edit, and delete job listings.

## Table of Contents

- [Features](#features)
- [React Features Used](#react-features-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Mock Server](#mock-server)

## Features

- View all job listings
- Add a new job listing
- Edit an existing job listing
- Delete a job listing
- Responsive design
- Toast notifications for actions

## React Features Used

- **React Router**: For client-side routing
- **React Hooks**: For state and effect management
- **React Toastify**: For toast notifications
- **Context API**: For state management across components


## Setup and Installation

1. Clone the repository:
    ```sh
    git clone (https://github.com/OmarMah/HireDev.git)
    cd react-jobs
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

    This will start the Vite development server and you can view the application at http://localhost:3000.

## Mock Server
This project uses a mock server to simulate API calls. The mock server is configured to handle the following endpoints:

```sh
GET /api/jobs: Fetch all job listings
POST /api/jobs: Add a new job listing
PUT /api/jobs/:id: Update an existing job listing
DELETE /api/jobs/:id: Delete a job listing
```
To start the mock server, run:

```sh
npm run mock-server
```

## Running the Application

To run the application, use the following command:
```sh
npm run dev
````
