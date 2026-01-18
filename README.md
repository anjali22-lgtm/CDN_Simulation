# CDN_Simulation


---

## 🔹 Features

- **Origin Server:** Stores all content (images, videos, files). Responds to edge server requests when cache miss occurs.
- **Edge Servers:** Maintain cache for faster access and reduced load on the origin server.
- **Router / API Gateway:** Direct client requests to the appropriate edge server based on routing logic.
- **Cache Mechanism:** Returns cached content immediately if available; otherwise, fetches from the origin server.
- **Scalable Architecture:** Supports multiple edge servers for load balancing and performance improvement.

---

## 🔹 Technologies Used

- Node.js
- Express.js
- Axios (for HTTP requests)
- Postman (for testing)

---

1️⃣ Clone Repository
git clone https://github.com/anjali22-lgtm/CDN_Simulation.git
cd CDN_Simulation

2️⃣ Install Dependencies
npm install

3️⃣ Start Origin Server
cd origin-server
node server.js


Runs on http://localhost:4000

4️⃣ Start Edge Servers (Open separate terminals)

Edge Server 1

cd edge-servers
node edge1.js


Runs on http://localhost:5000

Edge Server 2

cd edge-servers
node edge2.js


Runs on http://localhost:6000

5️⃣ Start Router
cd router
node router.js


Runs on http://localhost:7000

🧪 API Testing

Use Postman or browser:

GET http://localhost:7000/content/image1
GET http://localhost:7000/content/video1
GET http://localhost:7000/content/file1
