# NewsLok

## React based News app

Welcome to the News App project! This project is an ongoing effort to create a news application with various features. Below you'll find information about the project, its features, and how to get started.

## Features (...In Progress...)

### 1. Fetching News

- [x] Integration with a news API to fetch the latest news articles.
- [x] Support for different news categories (e.g., technology, sports, politics).
- [ ] Infinite scroll for continuous news loading.

### 2. Carousel Display

- [x] Implementation of a carousel to showcase featured news articles.
- [x] Dynamic display of the news articles in the carousel.
- [ ] Customizable carousel settings for user preferences.

### 3. User Interaction

- [ ] Bookmarking and saving articles for future reference.
- [ ] User-friendly interface for a seamless news reading experience.

### 4. Search Functionality

- [ ] Integration of a search bar for users to find specific news articles.
- [ ] Advanced search options, such as filtering by date or category.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from [NewsAPI](https://newsapi.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AnmolDotX/newslok
   ```

2. Navigate to the project directory:

   ```bash
   cd newslok
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key:

   ```env
   VITE_NEWS_API = YOUR_API_KEY_FROM_NewsAPI
   VITE_NEWS_BASE_URL = "https://newsapi.org/v2"
   ```

   Replace `your-api-key` with your actual API key.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the app.

## Contributing

Contributions are welcome! If you have any ideas, feature requests, or bug reports, please open an issue or submit a pull request.

```