import { getBlogs } from "./api.js";

const blogContainer = document.getElementById("my-blogs");
const totalBlogs = document.getElementById("total-blogs");
const publishedBlogs = document.getElementById("published-blogs");
const welcomeName = document.getElementById("welcome-name");


async function loadDashboard() {
    try {
        const blogs = await getBlogs();
        const userId = localStorage.getItem("user_id");
        const myBlogs = blogs.filter(
            blog => String(blog.author_id) === userId
        );

        totalBlogs.textContent = myBlogs.length;

        const published = myBlogs.filter(blog => blog.status === "published");

        publishedBlogs.textContent = published.length;

        blogContainer.innerHTML = "";

        if (myBlogs.length === 0) {
            blogContainer.textContent = "You have not created any blogs yet.";
            return;
        }

        myBlogs.forEach(blog => {
            const blogCard = document.createElement("div");

            blogCard.className = "dashboard-blog";

            blogCard.innerHTML = `
                <div class="dashboard-blog-info">
                    <h3>${blog.title}</h3>
                    <p>Published on: ${blog.created_at? new Date(blog.created_at).toLocaleDateString(): "Not available"}</p>
                </div>

                <span class="published">
                    ${blog.status || "Published"}
                </span>

                <div class="action-links">
                    <a href="edit-blog.html?id=${blog.id}">Edit</a>
                    <button class="delete-link" data-id="${blog.id}">Delete</button>
                </div>`;

            blogContainer.appendChild(blogCard);
        });

    } catch (error) {
        console.error("Dashboard error:", error);
        blogContainer.textContent = "Unable to load your blogs.";
    }
}
loadDashboard();
console.log("Dashboard JavaScript is working!");
