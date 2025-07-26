# Mesothelioma Legal Claims - React.js + Node.js

A complete full-stack application with React.js frontend and Node.js backend for mesothelioma legal claims.

## 🚀 Project Structure

\`\`\`
mesothelioma-react-site/
├── frontend/                 # React.js application
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   └── package.json
├── backend/                  # Node.js API server
│   ├── server.js
│   ├── database/
│   │   └── init.sql
│   ├── package.json
│   └── .env.example
└── README.md
\`\`\`

## 🛠 Tech Stack

**Frontend:**
- React.js 18
- CSS3 (Responsive Design)
- Fetch API for HTTP requests

**Backend:**
- Node.js
- Express.js
- MySQL2
- CORS enabled

## 📋 Prerequisites

- Node.js 16+ installed
- MySQL database
- Git

## 🏃‍♂️ Local Development Setup

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd mesothelioma-react-site
\`\`\`

### 2. Backend Setup
\`\`\`bash
cd backend
npm install

# Create environment file
cp .env.example .env

# Edit .env with your database credentials
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mesothelioma_claims
DB_PORT=3306
\`\`\`

### 3. Database Setup
\`\`\`bash
# Create MySQL database
mysql -u root -p
CREATE DATABASE mesothelioma_claims;

# Run the initialization script
mysql -u root -p mesothelioma_claims < database/init.sql
\`\`\`

### 4. Start Backend Server
\`\`\`bash
cd backend
npm run dev
# Server runs on http://localhost:5000
\`\`\`

### 5. Frontend Setup
\`\`\`bash
# Open new terminal
cd frontend
npm install
npm start
# React app runs on http://localhost:3000
\`\`\`

## 🌐 API Endpoints

### Backend API (http://localhost:5000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/form` | Submit form data |
| GET | `/api/form` | Get all submissions |
| GET | `/api/admin/submissions` | Admin view of submissions |

### Example API Usage

**Submit Form:**
\`\`\`javascript
fetch('http://localhost:5000/api/form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'John Doe',
    email: 'john@example.com',
    message: JSON.stringify(formData)
  })
})
\`\`\`

## 🚀 Deployment Guide

### Frontend Deployment (Netlify)

1. **Build the React app:**
\`\`\`bash
cd frontend
npm run build
\`\`\`

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect your Git repository

3. **Update API URL:**
   - In `ClaimForm.js`, change:
   \`\`\`javascript
   const response = await fetch('https://your-backend-url.com/api/form', {
   \`\`\`

### Backend Deployment (Railway/Render)

#### Option A: Railway
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Add MySQL database service
4. Set environment variables
5. Deploy

#### Option B: Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set build command: `cd backend && npm install`
5. Set start command: `cd backend && npm start`
6. Add environment variables

### Environment Variables for Production

\`\`\`env
DB_HOST=your-production-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=mesothelioma_claims
DB_PORT=3306
PORT=5000
NODE_ENV=production
\`\`\`

## 🔧 Features

### Frontend Features
- ✅ Responsive design (mobile & desktop)
- ✅ Live clock display
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Professional UI design

### Backend Features
- ✅ RESTful API
- ✅ MySQL database integration
- ✅ Input validation
- ✅ Error handling
- ✅ CORS enabled
- ✅ Health check endpoint

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Optimized layouts for all screen sizes
- Touch-friendly interface

## 🔒 Security Features

- Input validation on both client and server
- SQL injection prevention
- XSS protection
- CORS configuration
- Environment variable protection

## 🐛 Troubleshooting

### Common Issues

**CORS Error:**
- Ensure backend is running on port 5000
- Check proxy setting in frontend package.json

**Database Connection:**
- Verify MySQL is running
- Check database credentials in .env
- Ensure database exists

**Form Not Submitting:**
- Check browser console for errors
- Verify backend API is accessible
- Check network tab in developer tools

### Debug Commands
\`\`\`bash
# Check if backend is running
curl http://localhost:5000/api/health

# Check database connection
mysql -u root -p -e "USE mesothelioma_claims; SHOW TABLES;"

# View backend logs
cd backend && npm run dev

# Build frontend for production
cd frontend && npm run build
\`\`\`

## 📊 Testing

### Test Form Submission
1. Fill out the form completely
2. Check browser console for any errors
3. Verify data appears in database:
\`\`\`sql
SELECT * FROM form_submissions ORDER BY created_at DESC LIMIT 5;
\`\`\`

### Test API Endpoints
\`\`\`bash
# Health check
curl http://localhost:5000/api/health

# Get submissions
curl http://localhost:5000/api/form
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Open a GitHub issue
- Contact the development team

---

**Quick Start Checklist:**
- [ ] Node.js installed
- [ ] MySQL database created
- [ ] Backend dependencies installed
- [ ] Environment variables configured
- [ ] Database initialized
- [ ] Backend server running (port 5000)
- [ ] Frontend dependencies installed
- [ ] React app running (port 3000)
- [ ] Form submission tested
- [ ] Ready for deployment!
