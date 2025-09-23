# JWT Auth API

A backend-only JWT-based authentication service built with Node, Express and PostgreSQL.

## Features

- User registration & login  
- Password hashing (bcrypt)  
- JWT issuance & verification  
- Protected routes  
- Automated tests & CI/CD pipeline

## Prerequisites

- Node.js ≥ 16  
- PostgreSQL server  
- (Optional) Docker & Docker Compose  

## Installation

1. Clone the repo  
   git clone https://github.com/your-username/jwt-auth-api.git
   cd jwt-auth-api

# Architecture: Modular Monolith (Node + Express)

This project is a **modular monolith**: one deployable application split into clear **business modules** (auth, user, …).  
It keeps development simple like a monolith but enforces boundaries so modules stay independent.

## Why modular monolith?
- **Single deployable** for simplicity (one server/container).
- **Explicit module boundaries** for maintainability and team ownership.
- **Easy evolution**: any module can later be extracted into a microservice with minimal coupling.