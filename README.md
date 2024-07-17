#  Crypter

## Overview
This project is a full-stack web application designed to fetch cryptocurrency data every 5 seconds and store it in a MongoDB database. The latest 20 entries are polled from the frontend every few seconds and displayed in a table.

## Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Getting Started

### Clone the Repository
```bash
https://github.com/mdamaan00/Crypter.git
cd Crypter
```

### Setup and Run the Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm start
    ```
    The backend server should now be running at `http://localhost:8000`.

### Setup and Run the Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm run dev
    ```
    The frontend server should now be running at `http://localhost:3000`.

## Usage
- The backend server will handle API requests and serve data.
- The frontend server will render the web application and make API calls to the backend.

You can now start using the application by navigating to `http://localhost:3000` in your web browser.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
