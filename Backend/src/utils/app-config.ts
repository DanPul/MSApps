class AppConfig {
    public port = 4000;
    // The query parameter "per_page" is already set to retrieve only 9 images at a time
    public photosUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9`;
    public clientUrl = `http://localhost:5173`
}

const appConfig = new AppConfig();

export default appConfig;