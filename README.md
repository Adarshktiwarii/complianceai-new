# ComplianceAI SaaS Platform

AI-powered legal document generation and compliance management for Indian businesses.

## 🚀 Features

- **🤖 AI Document Generation**: Generate legally compliant documents in seconds with AI assistance
- **📋 Compliance Management**: Track and manage all compliance tasks with automated reminders
- **📊 Analytics & Reports**: Get insights into your compliance status with detailed analytics
- **💬 AI Legal Assistant**: Intelligent chat interface for legal queries and document assistance
- **⚙️ Settings Management**: Complete user and company settings with multiple tabs
- **🔐 Authentication**: Secure JWT-based authentication system
- **📱 Responsive Design**: Modern, mobile-friendly interface

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development), PostgreSQL (production)
- **UI Components**: Shadcn/UI, Lucide React Icons
- **Authentication**: JWT-based auth system
- **Styling**: TailwindCSS with custom components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adarshktiwarii/complianceai-new.git
   cd complianceai-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your configuration.

4. **Set up the database**
   ```bash
   npx prisma db push
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3002`

## 🔑 Default Login Credentials

- **Email**: `admin@techsolutions.com`
- **Password**: `password123`

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   │   ├── documents/     # Document management
│   │   ├── compliance/    # Compliance tasks
│   │   ├── ai-assistant/  # AI chat interface
│   │   ├── reports/       # Analytics & reports
│   │   └── settings/      # User settings
│   ├── login/            # Authentication pages
│   └── register/
├── components/           # Reusable UI components
│   └── ui/               # Shadcn/UI components
├── lib/                  # Utility functions
└── styles/               # Global styles
```

## 🎯 Key Pages

### Dashboard
- **Main Dashboard**: Overview with stats, quick actions, and recent activity
- **Documents**: Create, manage, and track legal documents
- **Compliance**: Task management with filtering and status updates
- **AI Assistant**: Intelligent chat for legal queries
- **Reports**: Analytics with charts and insights
- **Settings**: User profile, company info, notifications, security, billing

### Authentication
- **Login**: Secure authentication with JWT
- **Register**: User registration with validation

## 🔧 API Endpoints

- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration
- `GET /api/documents` - Fetch documents
- `POST /api/documents` - Create document
- `GET /api/compliance/tasks` - Fetch compliance tasks
- `POST /api/compliance/tasks` - Create compliance task

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Database Setup
```bash
# Development
npx prisma db push

# Production
npx prisma migrate deploy
```

## 📊 Features Overview

### Document Management
- Create new documents with AI assistance
- Use pre-built templates
- Track document status (Draft, Review, Signed)
- E-signature integration
- Document versioning

### Compliance Management
- Task creation and assignment
- Deadline tracking with reminders
- Status updates and progress tracking
- Category-based organization
- Recurring task setup

### AI Assistant
- Natural language queries
- Document generation assistance
- Legal compliance guidance
- Quick action suggestions
- Voice input support

### Analytics & Reports
- Compliance score tracking
- Task completion metrics
- Time and cost savings
- Category breakdowns
- AI insights and recommendations

### Settings Management
- User profile management
- Company information
- Notification preferences
- Security settings
- Billing and subscription

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Environment variable security

## 🎨 UI/UX Features

- Modern, responsive design
- Dark/light mode support
- Mobile-first approach
- Accessible components
- Smooth animations and transitions
- Intuitive navigation

## 📈 Performance

- Server-side rendering (SSR)
- Static generation where possible
- Optimized images and assets
- Efficient database queries
- Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@complianceai.com or create an issue in the GitHub repository.

## 🔮 Roadmap

- [ ] Advanced AI features
- [ ] Mobile app
- [ ] API documentation
- [ ] Third-party integrations
- [ ] Advanced analytics
- [ ] Multi-language support

---

**Built with ❤️ for Indian businesses**