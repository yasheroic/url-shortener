# URL Shortener

A full-featured URL shortener service built with Node.js, Express, MongoDB, and EJS templating. Includes user authentication, session management, and personalized URL tracking.

## Features
- 🔐 **User Authentication**: Sign up and login system
- 🔗 **URL Shortening**: Generate short URLs for any valid URL
- 📊 **Analytics**: Track click history and visit timestamps
- 👤 **User-specific URLs**: Each user sees only their own shortened URLs
- 🍪 **Session Management**: Secure cookie-based authentication
- 🎨 **Web Interface**: Clean, responsive UI with EJS templates

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Custom session management with cookies
- **Frontend**: EJS templating engine
- **URL Generation**: Nanoid for unique short IDs

## Project Structure
```
url-shortner/
├── controllers/          # Business logic
│   ├── url.js          # URL shortening logic
│   └── user.js         # User authentication logic
├── middlewares/         # Express middleware
│   └── auth.js         # Authentication middleware
├── models/             # MongoDB schemas
│   ├── url.js          # URL model
│   └── user.js         # User model
├── routes/             # Express routes
│   ├── staticRouter.js # Static pages (home, login, signup)
│   ├── url.js          # URL-related routes
│   └── user.js         # User authentication routes
├── services/           # Business services
│   └── auth.js         # Session management
├── views/              # EJS templates
│   ├── home.ejs        # Main dashboard
│   ├── login.ejs       # Login page
│   └── signup.ejs      # Signup page
├── connect.js          # MongoDB connection
└── index.js            # Main server file
```

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- MongoDB (local or Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd url-shortner
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB (if running locally):
   ```bash
   mongod
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:8001` by default.

## Usage

### 1. User Registration
- Visit `http://localhost:8001/signup`
- Fill in your name, email, and password
- Submit to create your account

### 2. User Login
- Visit `http://localhost:8001/login`
- Enter your email and password
- You'll be redirected to the dashboard

### 3. Create Short URLs
- After logging in, you'll see the URL shortener dashboard
- Enter any URL in the form
- Click "Generate" to create a short URL
- Your short URL will be displayed

### 4. View Your URLs
- The dashboard shows all your shortened URLs
- Each URL displays:
  - Short ID
  - Complete short link
  - Original URL
  - Click count

### 5. Access Shortened URLs
- Click on any short link or visit `http://localhost:8001/url/<shortId>`
- You'll be redirected to the original URL
- Click analytics are automatically tracked

## API Endpoints

### Authentication
- **POST** `/user/signup` - User registration
- **POST** `/user/login` - User login
- **GET** `/login` - Login page
- **GET** `/signup` - Signup page

### URL Management (Protected Routes)
- **POST** `/url` - Generate new short URL
- **GET** `/url/analytics/:shortId` - Get URL analytics
- **GET** `/url/:shortId` - Redirect to original URL

### Static Pages
- **GET** `/` - Main dashboard (requires login)
- **GET** `/test` - Test page with all URLs

## Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String,
  timestamps: true
}
```

### URL Model
```javascript
{
  shortId: String (unique),
  redirectURL: String,
  visitHistory: [{
    timestamp: Number
  }],
  createdBy: ObjectId (ref: User),
  timestamps: true
}
```

## Security Features
- **Session-based Authentication**: Secure cookie management
- **Route Protection**: Middleware ensures only logged-in users can create URLs
- **User Isolation**: Users can only see their own URLs
- **Input Validation**: Server-side validation for all inputs

## Development

### Running in Development Mode
```bash
npm start  # Uses nodemon for auto-restart
```

### Key Dependencies
- `express`: Web framework
- `mongoose`: MongoDB ODM
- `ejs`: Template engine
- `cookie-parser`: Cookie parsing middleware
- `nanoid`: URL-safe unique ID generation
- `uuid`: Session ID generation

## License
MIT 