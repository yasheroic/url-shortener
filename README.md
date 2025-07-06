# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.

## Features
- Generate short URLs for any valid URL
- Redirect to original URLs using the short link
- Track analytics (click history) for each short URL

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
   node index.js
   ```
   The server will run on `http://localhost:8001` by default.

## API Endpoints

### 1. Generate a Short URL
- **Endpoint:** `POST /url/`
- **Body:**
  ```json
  { "url": "https://example.com" }
  ```
- **Response:**
  ```json
  { "id": "shortId" }
  ```

### 2. Redirect to Original URL
- **Endpoint:** `GET /:shortId`
- **Description:** Redirects to the original URL.

### 3. Get Analytics for a Short URL
- **Endpoint:** `GET /url/analytics/:shortId`
- **Response:**
  ```json
  {
    "totalClicks": 2,
    "analytics": [
      { "timestamp": 1710000000000 },
      { "timestamp": 1710000001000 }
    ]
  }
  ```

## Example Usage

1. **Create a short URL:**
   ```bash
   curl -X POST http://localhost:8001/url/ -H "Content-Type: application/json" -d '{"url": "https://google.com"}'
   ```
2. **Redirect:**
   Visit `http://localhost:8001/<shortId>` in your browser.
3. **Get analytics:**
   ```bash
   curl http://localhost:8001/url/analytics/<shortId>
   ```

## License
MIT 