import { getBlogs } from "./api.js";

const blogList = document.getElementById("blog-list");

async function showBlogs() {
    if (!blogList) return;

    try {
        const blogs = await getBlogs();

        blogList.innerHTML = "";

        blogs.forEach(blog => {
            blogList.innerHTML += `<div class="blog-card"> <h2>${blog.title}</h2> <p>${blog.content.slice(0, 100)}...</p> 
            <p>Author: ${blog.author_name}</p> <a href="pages/blog-details.html?id=${blog.id}">Read More</a></div>`;
        });

    } catch (error) {
        console.log(error);
        blogList.innerHTML = "<p>Unable to load blogs.</p>";
    }
}
showBlogs();
