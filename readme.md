# Rasoda - AI Recipe Generator

Rasoda is a modern web application that leverages AI to generate personalized recipes based on user inputs. Whether you're looking for specific dishes or want to explore recipes with particular ingredients, Rasoda has got you covered.

[Live Demo](https://rasoda.vercel.app/)

## Features

- 🤖 AI-powered recipe generation
- 🔐 User authentication system
- 📧 Email verification
- 🔄 Password reset functionality
- 📱 Responsive design
- 🍽️ Specialized recipe categories:
  - Vegetarian
  - Vegan
  - Gluten-Free
  - Keto

## Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Bootstrap & Custom CSS for styling
- Chart.js for nutritional information visualization
- Axios for API requests
- React Toastify for notifications

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for email services
- LangChain for AI integration
- OpenAI API for recipe generation

## Project Structure

### Frontend
FRONTEND/
├── src/
│ ├── components/
│ │ ├── Authentication/
│ │ ├── Categories/
│ │ ├── Common/
│ │ ├── Home/
│ │ └── Legal/
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx

### Backend
BACKEND/
├── Controllers/
├── Routes/
├── middleware/
├── config/
└── server.js

## Getting Started

1. Clone the repository
  - git clone <repository-url>

2. Install dependencies for both frontend and backend
    Frontend
        cd frontend
        npm install
    Backend
        cd backend
        npm install

3. Set up environment variables
    Backend .env
        MONGO_URL=
        JWT_SECRET=
        ADMIN_EMAIL=
        ADMIN_APP_PASSWORD=
        OPENAI_API_KEY=
        FrontEndURL=
    Frontend
        Change the BackendUrl in FRONTEND/src/components/Context/Context.jsx
    
4. Run the development servers
    Frontend
        npm run dev
    Backend
        npm run server

## API Endpoints

### User Routes
- POST `/api/user/login` - User login
- POST `/api/user/register` - User registration
- POST `/api/user/verifyEmailOtp` - Email verification
- POST `/api/user/forgot_password` - Password reset request
- POST `/api/user/reset_password/:token` - Password reset

### Recipe Routes
- POST `/api/recipie/generate_recipie` - Generate AI recipes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any queries or support, please contact:
- Support and Privacy concerns: sharanjitdotsingh@gmail.com