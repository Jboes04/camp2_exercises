curl -H "Content-Type: application/json" -X POST --data "{\"userId\": \"$1\", \"title\": \"$2\", \"body\": \"$3\"}" "http://jsonplaceholder.typicode.com/posts"
