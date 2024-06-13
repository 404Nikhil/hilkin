<!-- 
layout: post
title: "Welcome to the World of Tailcall"
description: "Welcome to the World of Tailcall"
pubDate: "Feb 05 2024"
heroImage: "/placeholder-hero.jpg" -->



# **Welcome to the World of Tailcall**
*Where cloud-native architecture meets innovative GraphQL solutions, promising to revolutionize API management.*

In this comprehensive guide, we will embark on a journey to set up Tailcall using the official repository on GitHub. By the end of this tutorial, you'll have a fully functional Tailcall instance, ready to harness the high-performance capabilities of API orchestration.

## **What is GraphQL, and Why is it Needed?**

Before delving into Tailcall, let's understand the foundation it builds upon—GraphQL. GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. For example, a GraphQL service that tells you who the logged-in user is (me) as well as that user's name might look like this:

```graphql
type Query {
  me: User
}
type User {  
  id: ID  
  name: String
}
```

Along with functions for each field on each type:

```javascript
function Query_me(request) {
  return request.auth.user
}

function User_name(user) {
  return user.getName()
}
```

After a GraphQL service is running (typically at a URL on a web service), it can receive GraphQL queries to validate and execute. The service first checks a query to ensure it only refers to the types and fields defined, and then runs the provided functions to produce a result.

For example, the query:

```graphql
{
  me {
    name
  }
}
```

Could produce the following JSON result:

```json
{
  "me": {
    "name": "John Doe"
  }
}
```

## **How Tailcall Aligns with GraphQL**

Tailcall takes the principles of GraphQL to the next level. Its cloud-native architecture and innovative features make it a seamless fit for GraphQL-driven API development. The platform demystifies the complexity of API composition, offering adaptive performance improvements, global rate limiting, and telemetry for low-level insights into query execution.

## **Key Features of Tailcall**

Tailcall stands out by offering unparalleled ease and efficiency in handling the complexity of API composition. Let's explore the key features that contribute to Tailcall's exceptional performance:

### **Adaptive Performance Improvements**
Tailcall adapts and evolves by analyzing hot queries in your production environment, ensuring continuous performance enhancements tailored to your specific needs.

### **Global Rate Limiting**
Empower your API with the ability to set global rate limits on the access of each field within your data graph. Tailcall puts you in control, enhancing security and optimizing resource utilization.

### **Managed Solution**
Experience seamless reflections of any configuration changes in Tailcall on your GraphQL, providing a hassle-free and dynamic development environment.

### **Telemetry**
Gain low-level insights into execute vs. IO time for each query with Tailcall's comprehensive telemetry feature. Empower your development team with data-driven decision-making.

### **Scripting Flexibility**
Tailcall grants you the flexibility to write custom resolvers in JavaScript, allowing you to tailor your GraphQL API to the unique needs of your project.

## **Introduction: Unveiling GraphQL Frameworks**

This repo orchestrates a thorough analysis of prominent GraphQL frameworks, providing a detailed exploration of their performance metrics.

## **Benchmark Results: Tailcall Leading the Charge**

Witness the benchmark results, a testament to Tailcall's supremacy in the realm of GraphQL frameworks:

| Server          | Requests/sec | Latency (ms) |
|-----------------|--------------|--------------|
| Tailcall        | 7,882.65     | 12.68        |
| Caliban         | 7,020.21     | 14.44        |
| Gqlgen          | 2,059.43     | 50.10        |
| Apollo GraphQL  | 1,883.97     | 52.89        |
| Netflix DGS     | 1,364.72     | 77.37        |

### **Throughput (Higher is Better):**

![throughput](https://i.imgur.com/BxKtClr.png)

### **Latency (Lower is Better):**

![latency](https://i.imgur.com/auogBUj.png)

## **Why Tailcall Excels: Unveiling the Architecture**

Explore the architecture behind the benchmarks, where a client (wrk) sends requests to a GraphQL server fetching post titles. The GraphQL server, a pivotal player, retrieves data from jsonplaceholder.typicode.com, skillfully navigated through the Nginx reverse proxy. The GraphQL query that fuels this performance spectacle is as follows:

```graphql
{
  posts {
    title
  }
}
```
![archdig](https://i.imgur.com/TKyqEvj.png)

## **Tailcall's Significance: A Paradigm of Excellence**

Tailcall stands tall, not just as a participant but as a front-runner in this performance race. Here's why Tailcall is a beacon of excellence:

### **Unprecedented Throughput**
Tailcall achieves an exceptional throughput of 7,882.65 requests/sec, surpassing competitors and showcasing its capacity to handle a substantial volume of requests with ease.

### **Minimal Latency**
With a latency of 12.68 ms, Tailcall sets a benchmark for low-latency GraphQL APIs, ensuring swift response times and an optimal user experience.

### **Scalable and Efficient**
Tailcall's architecture is designed for scalability and efficiency, making it an ideal choice for high-performance GraphQL API orchestration.

### **Community-Driven Excellence**
Tailcall's ongoing development and community engagement ensure that it evolves with the needs of developers, incorporating feedback and staying at the forefront of GraphQL innovation.

## **Tailcall Installation Guide**

Before you dive into the installation process of Tailcall, let's make sure your system is well-prepared with the necessary tools and dependencies. Here are the prerequisites:

### **Prerequisites:**

#### **Node.js and npm:**

Tailcall relies on Node.js and npm (Node Package Manager) for its installation and execution. If you haven't installed them yet, follow these steps:

- Visit the official Node.js website (https://nodejs.org/).
- Download and install the latest stable version of Node.js.
- Follow the installation instructions to install Node.js and npm.

#### **Git:**

If you plan to clone the Tailcall repository using the git clone command, ensure Git is installed on your machine. Here's how:

- Visit the Git website at https://git-scm.com/.
- Download the Git installer.
- Follow the installation instructions to install Git on your machine.

Now that your system is equipped with the necessary tools, let's proceed with the installation of Tailcall and creating a GraphQL schema file:

#### **Clone the Repository:**

Open your terminal and initiate the Tailcall setup by cloning the repository to your local machine:

```sh
git clone https://github.com/tailcallhq/tailcall.git
```

#### **Navigate to the Tailcall Directory:**

Move into the Tailcall directory:

```sh
cd tailcall
```

#### **NPM Installation:**

```sh
npm i -g @tailcallhq/tailcall
```

#### **Yarn Installation:**

```sh
yarn global add @tailcallhq/tailcall
```

#### **Homebrew Installation:**

```sh
brew tap tailcallhq/tailcall
brew install tailcall
```

#### **Curl Installation:**

```sh
curl -sSL https://raw.githubusercontent.com/tailcallhq/tailcall/master/install.sh | bash
```

#### **Docker Installation:**

```sh
docker pull ghcr.io/tailcallhq/tailcall/tc-server
docker run -p 8080:8080 -p 8081:8081 ghcr.io/tailcallhq/tailcall/tc-server
```

### **Creating Your First GraphQL Schema:**

#### **Create a GraphQL Schema File:**

Create a file named `jsonplaceholder.graphql` using your favorite code editor and paste the following content:

```graphql
 schema
   @server(port: 8000, graphiql: true, hostname: "0.0.0.0")
   @upstream(baseURL: "http://jsonplaceholder.typicode.com", httpCache: true) {
   query: Query
 }

 type Query {
   posts: [Post] @http(path: "/posts")
   user(id: Int!): User @http(path: "/users/{{args.id}}")
 }

 type User {
   id: Int!
   name: String!
   username: String!
   email: String!
   phone: String
   website: String
 }

 type Post {
   id: Int!
   userId: Int!
   title: String!
   body: String!
   user: User @http(path: "/users/{{value.userId}}")
 }
```

#### **Starting Tailcall:**

Start the Tailcall Server:

Save the `jsonplaceholder.graphql` file and run the following command from the Tailcall directory in the terminal:

```sh
tailcall start ./jsonplaceholder.graphql
```

With Tailcall successfully installed and the server initiated with your GraphQL schema, explore the GraphQL playground at http://localhost:8000. Experiment with queries and unlock the full potential of Tailcall's high-performance API orchestration.

Stay tuned for more advanced features and insights as you embark on your journey with GraphQL API development using Tailcall.

## **Join the Tailcall Revolution: Contribute to Excellence**

Tailcall is not just a benchmark participant; it's a symbol of excellence, setting new standards in GraphQL performance. Join the community, contribute, and witness the evolution of GraphQL API management through the lens of Tailcall. Excel with Tailcall, where performance meets innovation