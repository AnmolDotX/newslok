const conf = {
    newsApiKey : String(import.meta.env.VITE_NEWS_API),
    newsBaseUrl : String(import.meta.env.VITE_NEWS_BASE_URL),
    newsEndpoint : {
        everything : "everything",
        topHeadlines : "top-headlines"
    }
}

export default conf;