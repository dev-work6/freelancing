# DevDaim Professional Development Services

A modern, full-stack web application for professional development services built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive UI with mobile-first approach
- **Authentication**: Secure user authentication system
- **Admin Dashboard**: Comprehensive admin panel for service management
- **Payment Integration**: Secure payment processing with Stripe
- **Professional UI**: Shadcn UI components for consistent design
- **Form Handling**: Type-safe form management with react-hook-form
- **API Integration**: RESTful API endpoints with proper error handling
- **Database**: MongoDB integration with Mongoose ODM

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - React Hook Form
  - Sonner (Toasts)

- **Backend**:
  - Node.js
  - MongoDB
  - Mongoose
  - Express.js

- **Payment**:
  - Stripe Integration

- **Authentication**:
  - JWT
  - HTTP-only cookies

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/DevDaim/devdaim-services.git
```
2. Install dependencies:

```bash
cd devdaim-services
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

## 🔧 Configuration

Create a `.env.local` file with the following variables:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
MONGODB_URI=your_mongodb_uri

# Authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=30d

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Email
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
```

## 📁 Project Structure

```
devdaim-services/
├── app/
│   ├── api/            # API routes
│   ├── (auth)/        # Authentication pages
│   ├── admin/         # Admin dashboard
│   └── [...routes]/   # Other app routes
├── components/        # Reusable components
├── lib/              # Utility functions
├── models/           # Database models
├── public/           # Static assets
└── styles/           # Global styles
```

## 🔒 API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Services
- `GET /api/services` - List all services
- `GET /api/services/:id` - Get service details
- `POST /api/services` - Create service (Admin)
- `PUT /api/services/:id` - Update service (Admin)
- `DELETE /api/services/:id` - Delete service (Admin)

### Payments
- `POST /api/payments` - Create payment session
- `GET /api/payments/:id` - Get payment details
- `POST /api/payments/webhook` - Handle Stripe webhooks

### Contact
- `POST /api/contact` - Submit contact form

## 💳 Testing

### Stripe Test Cards

| Card Number            |        Scenario            |
|------------------------|----------------------------|
| 4242 4242 4242 4242    | Success                    |
| 4000 0000 0000 0002    | Generic Decline            |
| 4000 0000 0000 9995    | Insufficient Funds Decline |
| 4000 0000 0000 9987    | Lost Card Decline          |
| 4000 0000 0000 9979    | Stolen Card Decline        |
| 4000 0000 0000 0069    | Expired Card Decline       |
| 4000 0000 0000 0127    | Incorrect CVC Decline      |
| 4000 0000 0000 0119    | Processing Error Decline   |
| 4242 4242 4242 4241    | Incorrect Number Decline   |
| 4000 0000 0000 6975    | Velocity Limit Decline     |


## 🚀 Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📱 Contact & Support

- **Website**: [daim.is-a.dev](https://daim.is-a.dev)
- **Email**: daimdev6+freelance+software@gmail.com
- **WhatsApp**: +91 7889557560

### Business Hours
Monday - Friday: 9 AM - 6 PM (IST)

## 🔄 Updates & Maintenance

- Regular security updates
- Weekly feature updates
- 24/7 monitoring
- Automated backups

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/YourFeature
```
3. Commit your changes:
```bash
git commit -m 'Add YourFeature'
```
4. Push to the branch:
```bash
git push origin feature/YourFeature
```
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Stripe](https://stripe.com/)
- [MongoDB](https://www.mongodb.com/)

---

Made with ❤️ by [Daim](https://github.com/devdaim6)

