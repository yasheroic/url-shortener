# 🔗 URL Shortener

A modern, full-featured URL shortener service built with Node.js, Express, MongoDB, and EJS templating. Features beautiful UI, user authentication, session management, and personalized URL tracking with analytics.

![URL Shortener](https://img.shields.io/badge/Node.js-14+-green)
![URL Shortener](https://img.shields.io/badge/Express-4.x-blue)
![URL Shortener](https://img.shields.io/badge/MongoDB-5.x-green)
![URL Shortener](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🔐 **User Authentication**: Secure sign up and login system
- 🔗 **URL Shortening**: Generate short, memorable URLs instantly
- 📊 **Analytics Dashboard**: Track click history and visit timestamps
- 👤 **User-specific URLs**: Each user sees only their own shortened URLs
- 🍪 **Session Management**: Secure cookie-based authentication
- 🎨 **Modern UI**: Beautiful, responsive design with gradient backgrounds
- 📱 **Mobile Responsive**: Works perfectly on all devices
- 🔒 **Route Protection**: Middleware ensures secure access
- ⚡ **Fast Performance**: Optimized for quick URL generation

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Custom session management with cookies
- **Frontend**: EJS templating engine with modern CSS
- **URL Generation**: Nanoid for unique short IDs
- **Styling**: Custom CSS with gradients and animations

## 📁 Project Structure

```
url-shortner/
├── controllers/          # Business logic
│   ├── url.js          # URL shortening logic
│   └── user.js         # User authentication logic
├── middlewares/         # Express middleware
│   └── auth.js         # Authentication & authorization middleware
├── models/             # MongoDB schemas
│   ├── url.js          # URL model with analytics
│   └── user.js         # User model
├── routes/             # Express routes
│   ├── staticRouter.js # Static pages (home, login, signup)
│   ├── url.js          # URL-related routes
│   └── user.js         # User authentication routes
├── services/           # Business services
│   └── auth.js         # JWT session management
├── views/              # EJS templates with modern UI
│   ├── home.ejs        # Main dashboard with analytics
│   ├── login.ejs       # Beautiful login page
│   └── signup.ejs      # Modern signup page
├── connect.js          # MongoDB connection
├── index.js            # Main server file
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd url-shortner
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - **Local MongoDB**: Start your local MongoDB server
   - **MongoDB Atlas**: Update connection string in `connect.js`

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Access the application:**
   - Open your browser and go to `http://localhost:8001`
   - The server runs on port 8001 by default

## 📖 Usage Guide

### 1. User Registration
- Visit `http://localhost:8001/signup`
- Fill in your full name, email, and password
- Click "Create Account" to register
- You'll be automatically logged in

### 2. User Login
- Visit `http://localhost:8001/login`
- Enter your email and password
- Click "Sign In" to access your dashboard

### 3. Create Short URLs
- After logging in, you'll see the beautiful dashboard
- Enter any URL in the form (e.g., `https://example.com`)
- Click "Generate Short URL" to create a short link
- Your short URL will be displayed with a copy-friendly format

### 4. View Your URLs & Analytics
- The dashboard shows all your shortened URLs in a beautiful table
- Each URL displays:
  - **Short ID**: Unique identifier
  - **Short Link**: Complete clickable URL
  - **Original URL**: The destination URL
  - **Click Count**: Number of visits with a badge

### 5. Access Shortened URLs
- Click on any short link in the dashboard
- Or visit `http://localhost:8001/url/<shortId>` directly
- You'll be automatically redirected to the original URL
- Click analytics are tracked automatically

## 🔌 API Endpoints

### Authentication Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/user` | User registration |
| `POST` | `/user/login` | User login |
| `GET` | `/login` | Login page |
| `GET` | `/signup` | Signup page |

### URL Management (Protected Routes)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/url` | Generate new short URL |
| `GET` | `/url/analytics/:shortId` | Get URL analytics |
| `GET` | `/url/:shortId` | Redirect to original URL |

### Static Pages
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Main dashboard (requires login) |
| `GET` | `/test` | Test page with all URLs |

## 🗄️ Database Models

### User Model
```javascript
{
  name: String,           // User's full name
  email: String,          // Unique email address
  password: String,       // Hashed password
  role: String,           // User role (normal, admin)
  timestamps: true        // Created/updated timestamps
}
```

### URL Model
```javascript
{
  shortId: String,        // Unique short identifier
  redirectURL: String,    // Original URL to redirect to
  visitHistory: [{        // Array of visit records
    timestamp: Number      // Visit timestamp
  }],
  createdBy: ObjectId,    // Reference to User model
  timestamps: true        // Created/updated timestamps
}
```

## 🔒 Security Features

- **Session-based Authentication**: Secure cookie management with JWT
- **Route Protection**: Middleware ensures only authenticated users can create URLs
- **User Isolation**: Users can only see and manage their own URLs

## 🎨 UI Features

- **Modern Design**: Beautiful gradient backgrounds and card-based layout
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **User-Friendly**: Intuitive navigation and clear call-to-action buttons
- **Analytics Display**: Visual click counters and visit tracking
- **Copy-Friendly**: Easy-to-copy short URLs with proper formatting

## 🛠️ Development

### Running in Development Mode
```bash
npm start  # Uses nodemon for auto-restart on file changes
```

### Key Dependencies
```json
{
  "express": "Web framework",
  "mongoose": "MongoDB ODM",
  "ejs": "Template engine",
  "cookie-parser": "Cookie parsing middleware",
  "nanoid": "URL-safe unique ID generation",
  "jsonwebtoken": "JWT token management",
}
```

### Environment Variables
Create a `.env` file in the root directory:
```env
PORT=8001
MONGODB_URI=mongodb://localhost:27017/url-shortener
JWT_SECRET=your-secret-key
```


## 🙏 Acknowledgments

- Built with ❤️ using Node.js and Express
- Beautiful UI inspired by modern web design principles
- MongoDB for reliable data storage
- Nanoid for secure URL generation

---

**Made with ❤️ by yasheroic ** 