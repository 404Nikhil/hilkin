<!-- 
layout: post
title: "Parcel is a beast"
description: "NPM bundler"
pubDate: "Jun 26 2023"
heroImage: "/placeholder-hero.jpg" -->


In the fast-paced world of web development, bundling tools play a vital role in optimizing the performance and efficiency of our projects. Among the plethora of options available, ParcelJS stands out as a true beast in the arena. In this article, we will explore the capabilities of ParcelJS and understand why it surpasses other tools. Let's dive in!

### **What is a Bundle?**

Before diving into the wonders of ParcelJS, let's briefly discuss what a bundle is. A bundle is a collection of JavaScript, CSS, and other assets that are combined and optimized for efficient delivery to the browser. It simplifies the deployment process and helps improve the performance of web applications.

## Features:

### **Zero Configuration**

ParcelJS takes the pain out of configuration by offering a zero-config setup. You no longer need to spend time setting up complex configuration files. Just install Parcel globally or locally, and it will automatically detect your project's needs and provide an optimized build out of the box.

### **Hot Module Reloading (HMR)**

One of the most powerful features of ParcelJS is its built-in support for Hot Module Reloading. With HMR, you can see instant updates in the browser as you modify your code, without the need to manually refresh the page. This greatly speeds up the development process and enhances productivity.

### **File Watcher Algorithm - C++**

ParcelJS employs a highly efficient file-watching algorithm written in C++, which ensures lightning-fast recompilation of changed files. This algorithm minimizes the time required for rebuilding the project, making development even more efficient.

### **Bundling and Minification**

ParcelJS excels at bundling JavaScript, CSS, and other assets. It automatically analyzes your project's dependencies and generates optimized bundles. It can handle a wide range of file types out of the box, making it extremely versatile.

### **Code Cleaning**

ParcelJS includes built-in code cleaning and transformation capabilities. It leverages tools like Babel and PostCSS to automatically transform your code to ensure compatibility with different browsers and optimize its performance.

### **Development and Production Builds**

ParcelJS streamlines the development process by providing a development server with live reloading and HMR capabilities. When it comes to production builds, ParcelJS generates optimized, minified, and tree-shaken bundles, ready for deployment to production servers.

### **Image Optimization**

ParcelJS not only handles JavaScript and CSS but also takes care of optimizing images. It automatically compresses and optimizes images during the build process, reducing their size without compromising quality, resulting in faster loading times.

### **Caching during Development**

ParcelJS intelligently caches compiled assets during development, significantly reducing build times for subsequent builds. This caching mechanism ensures that only the modified files are recompiled, resulting in faster feedback loops during development.

### **HTTPS Support on Dev**

For secure development environments, ParcelJS supports serving your project over HTTPS during development. This feature is especially useful when working with APIs that require secure connections, enabling you to test and develop securely without additional configuration.

### **Port Number and Compression**

ParcelJS provides flexibility by allowing you to specify a custom port number for the development server. Additionally, it supports gzip compression, reducing the file sizes served to the browser and improving the overall performance.

### **Consistent Hashing Algorithm**

ParcelJS utilizes a consistent hashing algorithm to generate unique filenames for cache busting. This ensures that whenever you make changes to your code, the browser fetches the latest version from the server, eliminating the need for users to manually clear their browser cache.

### Extensive Docs

[ParcelJS](https://parceljs.org/) provides excellent documentation on its official website, offering comprehensive and well-organized resources for developers. The documentation serves as a valuable guide to understanding and utilizing the full potential of ParcelJS.  

### To install ParcelJS, React, and React DOM, and run your project using ParcelJS, you can follow these steps:

1. Open your terminal.
    
2. Navigate to the root directory of your project.
    
3. Install ParcelJS as a development dependency by running the following command:
    
    ```bash
    npm install -D parcel
    ```
    
4. Install React and React DOM by running the following command:
    
    ```bash
    npm install react react-dom
    ```
    
5. Once the installations are complete, you can use ParcelJS to bundle and run your project(builds production files in dist). Run the following command:
    
    ```bash
    npx parcel index.html
    ```
    

ParcelJS will start the development server and bundle your project. You can access your project at the provided local server URL, usually [**http://localhost:1234**](http://localhost:1234) or a different port if specified.

By running these four commands, you'll have ParcelJS, React, and React DOM installed in your project, and your project will be up and running using ParcelJS.