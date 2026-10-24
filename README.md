# 🎨 ArtSpace 

ArtSpace is a full-stack web application that connects artists with art enthusiasts across Indonesia. The platform provides a space for users to discover artworks, explore artists, watch art-related videos, and manage their profiles through a simple and user-friendly interface.

## ✨ Features

- 🏠 **Beranda** — Explore the platform and discover art content.
- 🖼️ **Ruang Karya** — Browse artworks and view artwork details.
- 📹 **Ruang Video** — Explore art-related video content.
- 👩‍🎨 **Seniman** — Discover artists and view their profiles, biographies, artworks, and videos.
- 👤 **Profil** — View and manage personal profile information.
- 🔐 **Authentication** — Register and log in to an account.
- 🎨 **Karya Saya** — View and manage personal artworks.
- 📹 **Video Saya** — View and manage personal video content.

## 🚀 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Ant Design
- Axios
- React Router

### Backend
- Python
- Flask
- REST API
- JWT Authentication

### Database
- TiDB Cloud (MySQL-compatible)

### Deployment
- Vercel — Frontend
- Render — Backend
- TiDB Cloud — Database

## 📁 Project Structure

```text
ArtGallery-Fullstack/
│
├── Backend/
│   ├── app/
│   │   ├── __init__.py
│   │   └── ...
│   ├── requirements.txt
│   └── ...
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── util/
│   │   └── ...
│   ├── package.json
│   └── ...
│
└── README.md
```

## 🌐 Live Application

- **Website:** [ArtSpace — ArtGallery](https://art-gallery-fullstack.vercel.app)
- **Backend API:** [ArtGallery API](https://artgallery-fullstack.onrender.com)

## 🏗️ Deployment Architecture

The application uses a full-stack architecture consisting of three main components:

1. **Frontend:** React.js application deployed on Vercel.
2. **Backend:** Flask REST API deployed on Render.
3. **Database:** TiDB Cloud for storing application data.

The frontend communicates with the backend through REST API endpoints, while the backend handles application logic, authentication, and database operations.

## ⚙️ Run Locally

Although the application is deployed online, developers can also run it locally for development.

### Prerequisites

- Git
- Node.js and npm
- Python
- Database connection credentials

### 1. Clone the Repository

```bash
git clone https://github.com/amelia-iky/ArtGallery-Fullstack.git
cd ArtGallery-Fullstack
```

### 2. Run the Backend

```bash
cd Backend
python -m venv venv
```

Activate the virtual environment.

**Windows:**

```bash
venv\Scripts\activate
```

**macOS / Linux:**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Configure the required environment variables and start Flask using the backend entry point configured in the project.

### 3. Run the Frontend

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL provided by Vite.

## 🔐 Environment Variables

Configure the required environment variables for your local environment.

- Database connection URI
- Flask secret key
- JWT authentication settings, if required
- Frontend backend API base URL

Never commit passwords, access tokens, or secret credentials to the repository.

## 👩‍💻 Developer

**Amelia Rizky Yuniar**

---

<p align="center">
  Made with ❤️.
</p>
