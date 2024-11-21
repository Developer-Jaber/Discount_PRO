# Discount PRO: A Coupon Collecting Application

**Live URL:** [Discount PRO]()

## Purpose

Discount PRO is a simple Coupon Collecting Application designed to help users easily find and use discount coupons for popular e-commerce shops in Bangladesh. The application collects all the available coupons from various stores, allowing users to achieve discounts and save money effortlessly.

## Key Features

- **User Authentication**: Users can sign up or log in using their email or Google account through Firebase Authentication.
- **Browse Coupons**: Users can browse available coupons for different brands, view details such as discount amount, expiry date, and product categories.
- **Copy Coupon Codes**: Easily copy coupon codes with a single click using the `react-copy-to-clipboard` package.
- **Use Now**: Redirects users to the brand's website where they can use the coupon.
- **Brand Information**: View detailed information about each brand, including logo, rating, and available coupons.
- **Responsive Design**: Optimized for both desktop and mobile devices using TailwindCSS and DaisyUI.
- **Toast Notifications**: Displays success notifications after copying coupon codes.

## npm Packages Used

- **react**: Front-end JavaScript library for building user interfaces.
- **react-router-dom**: Declarative routing for React applications.
- **firebase**: Backend-as-a-service providing authentication, database, and more.
- **tailwindcss**: Utility-first CSS framework for styling.
- **daisyui**: UI component library built on top of TailwindCSS.
- **react-icons**: Collection of popular icons for React.
- **react-copy-to-clipboard**: Component for copying text to the clipboard.
- **react-toastify**: React notifications library.

## Installation and Setup

To get started with Discount PRO locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/discount-pro.git
    ```
2. Navigate to the project directory:
    ```bash
    cd discount-pro
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your Firebase configuration:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```
5. Start the development server:
    ```bash
    npm start
    ```

## Usage

- **Browse Brands**: Navigate to the Brands page to see a list of available brands.
- **View Coupons**: Click on a brand to view all available coupons for that brand.
- **Copy Code**: Click the "Copy Code" button to copy a coupon code to your clipboard.
- **Use Now**: Click the "Use Now" button to be redirected to the brand's website where you can use the coupon.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or improvements.

## License

This project is licensed under the MIT License.



- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
