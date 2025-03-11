# Next.js Project Installation

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)

## Installation Steps

1. **Install dependencies**  
   Using npm:
   ```sh
   npm install
   ```

2. **Set up environment variables**  
   Create a `.env` file in the root directory and add the following contents:

   ```ini
   SECRET="Zfx8gj8zfyJlBSLQMZ2J8GfKhvWlSE1sX/iI1BrdQBI="
   AUTH_GOOGLE_ID=1003329551250-91p54un1p408k595p95n77mienm8337j.apps.googleusercontent.com
   AUTH_GOOGLE_SECRET=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
   NEXT_PUBLIC_API_URL="http://135.225.56.21:8000"
   ```

3. **Run the development server**  
   Using npm:
   ```sh
   npm run dev
   ```

4. **Access the application**  
   Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Building for Production
To create a production build:
```sh
npm run build
```
Then start the production server:
```sh
npm start
