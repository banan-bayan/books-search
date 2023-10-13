# BookSearch_test_task

BookSearch via Google Books API

## Build:
### Steps to build a Docker image:

1. Clone this repo
   ```bash
   git clone https://github.com/banan-bayan/books-search.git
2. Create .env file with REACT_APP_API_KEY='YOUR_KEY'
3. Build the image
    ```bash
   docker build -t="bookforsearch" .
4. Run the image
    ```bash
   docker run -p 8080:3000 bookforsearch
5. Access App
   Open a web browser and navigate to [http://localhost:8080](http://localhost:8080) to access the app
