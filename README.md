# NewsLok

## React based News app

Welcome to NewsLok, a modern responsive news application built with React. This feature-rich news app provides users with essential functionalities such as bookmarking, article reading, seamless user experience, and effective API management. Explore news effortlessly with a great user interface that enhances your overall news-reading experience.

## Demo Video
<video height="450" autoplay muted loop>
  <source src="./NewsLokcompressDemo.mp4" type="video/mp4">
</video>

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

4. Rename the `.env.example` to `.env` file in the root directory and add your API key:

   ```env
   VITE_NEWS_API = YOUR_API_KEY_FROM_NewsAPI
   VITE_NEWS_BASE_URL = "https://newsapi.org/v2"
   ```

   Replace `YOUR_API_KEY_FROM_NewsAPI` with your actual API key.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the app.

## Tech Stack
- ReactJS
- Redux-Toolkit
- TailwindCSS
- SwiperJS
- Axios

## Features

### 1. Fetching News

- Integration with a news API to fetch the latest news articles.
- Support for different news categories (e.g., technology, sports, politics).
- Infinite scroll for continuous news loading.

### 2. Carousel Display

- Implementation of a carousel to showcase featured news articles.
- Dynamic display of the news articles in the carousel.
- Carousel settings for user preferences.

### 3. User Interaction

- Bookmarking and saving articles for future reference.
- User-friendly interface for a seamless news reading experience.

### 4. Search Functionality

- Integration of a search bar for users to find specific news articles.

## Undeployement reason
This project utilizes the NewsAPI.org free API for fetching news data. During development, CORS (Cross-Origin Resource Sharing) are enabled for localhost for free by NewsAPI.org, allowing seamless integration with the API. However, please note that for production deployment, It requires a paid subscription for CORS support. Consequently, the project has not been deployed to a production environment and a demo video has been attached at top in order to show the workings. Also feel free to set this project locally and test it on your own local machine.


## Contributing

Contributions are welcome! If you have any ideas, feature requests, or bug reports, please open an issue or submit a pull request.
