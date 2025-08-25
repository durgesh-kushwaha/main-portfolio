---
title: 'From Idea to Deployment: The Journey of Building My New Portfolio'
date: '2025-08-25'
featuredImage: '/blog-images/portfolio.webp'
description: 'A look into the process and technologies used to build my new personal portfolio website from the ground up with Next.js.'
---

## The Start of a New Project

Every developer knows that a portfolio is more than just a resume—it's a living showcase of your skills, projects, and passion. My old portfolio was functional, but it didn't truly represent the kind of work I love to do. I decided it was time for a complete overhaul, and I wanted to build it using a modern, powerful tech stack. This is the story of how my new portfolio came to be.

### Choosing the Right Tools

For this project, I chose **Next.js**, a React framework that offers the best of both worlds: the power of server-side rendering for fast initial loads and SEO, combined with the rich interactivity of a client-side single-page application. For styling, I opted for custom CSS modules to have full control over the design and to keep things lightweight.

The goal was to create a site that was not only visually appealing but also highly functional and easy for me to update in the future.

### Key Features I Built

This project was a fantastic learning experience, and I'm proud of the features I was able to implement:

#### 1. Fully Responsive Design
From a wide desktop monitor to a mobile phone, the layout adapts seamlessly. I used modern CSS techniques like Flexbox and Grid to ensure every component looks great on any screen size, including a fully functional slide-out menu for mobile navigation.

#### 2. Light & Dark Mode
A crucial feature for any modern website! I implemented a theme switcher that allows users to toggle between a bright, clean light mode and a sleek, eye-friendly dark mode. The user's preference is saved, so the site remembers their choice on their next visit.

#### 3. Dynamic Blog from Markdown
One of my main goals was to have a blog that was easy to manage. All my posts, including this one, are written in simple Markdown files. The website automatically reads these files, parses the content, and generates a new page for each post at build time. This means I can add a new post just by adding a new `.md` file!

#### 4. Client-Side Fuzzy Search
On the "All Posts" page, I implemented a live search bar using `Fuse.js`. It's a lightweight fuzzy-search library that instantly filters the posts as you type. It's smart enough to find matches even if there are small typos, making for a great user experience.

#### 5. Professional Blog Post Layout
Each blog post features a two-column layout on larger screens. The main content is on the left, and on the right, there's a sticky sidebar with my author details and a list of recent posts. This sidebar stays in view as you scroll, keeping key information accessible.

### The Journey and What's Next

Building this portfolio was an iterative process of coding, testing, and refining. From wrestling with CSS Flexbox to implementing a clean client/server architecture for the search functionality, every step was a valuable lesson.

I'm incredibly happy with the result, and I'm excited to continue adding new projects and blog posts to it. Feel free to explore the site and let me know what you think!