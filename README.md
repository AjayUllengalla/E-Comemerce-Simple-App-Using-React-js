# 🏎️ RC Cars E-Commerce Store

A fully functional **E-Commerce Application** built using **React**, **Context API**, and **Bootstrap 5**. This project is a complete online store for Remote Control (RC) cars featuring product browsing, shopping cart, admin dashboard, and user registration.

---

## 🚀 Features

### Customer Features
- **🏪 Product Browsing** - Browse RC cars with images, prices, and descriptions
- **🛒 Shopping Cart** - Add/remove items, adjust quantities
- **💰 Price Calculation** - Automatic subtotal, tax, and total calculations
- **📱 Responsive Design** - Works on all devices
- **🔔 Toast Notifications** - Instant feedback for user actions
- **🔍 Product Search** - Find products easily

### Admin Features
- **📊 Admin Dashboard** - Overview of store statistics
- **📦 Inventory Management** - Add, edit, delete products
- **👥 User Management** - Track registered users

### Additional Features
- **🔐 User Registration & Login** - Secure user authentication
- **🏠 Home Page** - Attractive landing page with hero section
- **📄 Product Details** - Detailed view for each product
- **🍕 Footer** - Standard footer with links

---

## 🧰 Tech Stack

- **Frontend:** React 18, React Router v6
- **State Management:** Context API
- **Styling:** Bootstrap 5, Custom CSS
- **Icons:** Bootstrap Icons
- **Mock Backend:** JSON Server
- **Build Tool:** Vite
- **Code Quality:** ESLint

---

## 📂 Project Structure

```
src/
├── assets/                 # Static assets (images, videos)
│   ├── Banner.png
│   ├── bg-video.mp4
│   └── *.jpg              # Product images
├── cart/
│   ├── Cart.jsx          # Cart display component
│   └── carts.jsx         # Cart-related components
├── components/
│   ├── AddProduct.jsx    # Admin: Add new product
│   ├── AdminDashBoard.jsx # Admin dashboard
│   ├── Footer.jsx        # Footer component
│   ├── Home.jsx          # Home page
│   ├── InventoryManagement.jsx # Admin: Manage inventory
│   ├── ProductDetails.jsx # Product detail page
│   └── Products.jsx      # Product listing grid
├── context/
│   └── CartContext.jsx   # Global cart state management
├── Registrations/
│   └── Register.jsx      # User registration
├── App.css               # Global styles
├── App.jsx               # Main app component
├── Header.jsx            # Navigation header
├── index.css             # Index styles
└── main.jsx              # App entry point

db.json                   # Mock database (JSON Server)
index.html                # HTML entry point
package.json              # Dependencies
vite.config.js            # Vite configuration
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1️⃣ **Clone the repository**
```bash
git clone <repository-url>
cd E-commerce-app
```

2️⃣ **Install Dependencies**
```bash
npm install
```

3️⃣ **Start JSON Server (Mock Backend)**
```bash
npx json-server --watch db.json --port 3000
```

4️⃣ **Start the Development Server**
```bash
npm run dev
```

5️⃣ **Open in Browser**
```
http://localhost:5173
```

---

## 📦 Sample Data (db.json)

```json
{
  "products": [
    {
      "id": 1,
      "title": "RC Ferrari",
      "price": 299.99,
      "category": "Sports Car",
      "image": "src/assets/RC Ferrari.jpg",
      "description": "High-speed RC Ferrari sports car"
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "password": "hashed_password"
    }
  ]
}
```

---

## 🔔 Toast Notifications

Bootstrap Toasts are used for instant user feedback:

- ✅ **Product added to cart** - Success notification
- ❌ **Product removed from cart** - Warning notification
- 🔄 **Quantity updated** - Info notification
- 🔐 **Login/Register success** - Success notification

---

## 💳 Payment Integration (Future Enhancement)

The app is structured to support Razorpay payment integration:

```javascript
// Test Card Details for Development
Card Number: 4111 1111 1111 1111
Expiry: Any future date (MM/YY)
CVV: Any 3 digits
OTP: 123456
```

> ⚠️ **Note:** Backend verification is required for production payment processing.

---

## 🧠 Key Concepts Used

### React Fundamentals
- **Hooks:** useState, useEffect, useContext, useParams
- **Component Composition:** Reusable UI components
- **Conditional Rendering:** Dynamic UI based on state

### State Management
- **Context API:** Global cart state across components
- **Immutable Updates:** Proper state manipulation patterns

### Routing
- **React Router v6:** Client-side navigation
- **Dynamic Routes:** Product detail pages with ID parameters

### Styling
- **Bootstrap 5:** Responsive grid and UI components
- **Custom CSS:** Project-specific styling
- **CSS Variables:** Theme consistency

### Development
- **Vite:** Fast build tool and dev server
- **ESLint:** Code quality and consistency
- **JSON Server:** REST API mock for development

---

## 📌 Future Enhancements

| Feature | Priority | Description |
|---------|----------|-------------|
| 🔐 Authentication | High | Implement JWT-based login/logout |
| 💾 Persistence | High | Save cart to localStorage |
| 💳 Payments | Medium | Full Razorpay integration |
| 📦 Order History | Medium | Track past orders |
| 🧾 Invoice Generation | Low | PDF invoice downloads |
| 📧 Email Notifications | Low | Order confirmation emails |
| 🧭 Advanced Search | Medium | Filter by price, category |
| ⭐ Reviews & Ratings | Low | Customer reviews system |
| 🛒 Wishlist | Medium | Save products for later |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ajay Ullengalla**
- Java Full Stack & React Developer
- GitHub: [@ajayullengalla](https://github.com/ajayullengalla)
- Email: ajay.ullengalla@example.com

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

---

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Shopping! 🛒🏎️**
