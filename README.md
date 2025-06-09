# 📱 MoneyApp
A simple mobile app for personal finance management, built with **React Native** and **Expo**. It allows users to register transactions, view a detailed history, and track a financial summary by custom categories.

## ✨ Features

- 📥 **Transaction Registration**  
  A form to add new entries or expenses with:
  - Product or service description
  - Amount
  - Date
  - Category (Income, Food, Housing, Work, Travel)

- 📄 **Transaction History**  
  A list displaying all registered transactions:
  - Category icon and name
  - Color indicators:
    - **Green** for income transactions
    - **Red** for expense transactions

- 📊 **Financial Summary**  
  An overview of your financial status:
  - Total income and expenses
  - Totals by category
  - Final balance with color indication:
    - **Green** for positive balance
    - **Red** for negative balance

## 🧭 Screen Navigation

1. **New Transaction** – Main screen with the registration form  
2. **History** – View all recorded transactions  
3. **Summary** – Analyze and track financial balance

## 🚀 Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) (for screen navigation)
- [Styled Components](https://styled-components.com/) (optional, if used)
- Other helpful libraries (e.g., `date-fns` for date handling or `react-native-vector-icons` for icons, if applicable)

## 📦 Installation & Running

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
3. Start the project using Expo:
   ```bash
   npx expo start
4. Scan the QR code with the Expo Go app on your phone, or run it on an emulator.

📸 Screenshots
(Add screenshots of your app if available. Example:)

Transaction Form

Transaction History

Financial Summary

📈 Possible Future Improvements
Filter transactions by date or category

Export data to CSV or PDF

User authentication

Push notifications for transaction reminders

Cloud storage (Firebase, Supabase, etc.)

