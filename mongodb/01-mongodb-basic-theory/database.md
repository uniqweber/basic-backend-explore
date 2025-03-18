## Database, SQL vs NoSQL, MongoDB, and More

## **What is a Database?**

A **database** is a structured collection of data that is stored and managed efficiently for easy access, retrieval, and modification. It helps in organizing data systematically so that users can store, retrieve, and manipulate it effectively.

## **Types of Databases**

Databases are mainly categorized into two types:

1. **SQL (Relational Databases)**

   - Data is stored in structured tables with rows and columns.
   - Uses Structured Query Language (SQL) for managing data.
   - Example: MySQL, PostgreSQL, SQL Server, Oracle.

2. **NoSQL (Non-Relational Databases)**
   - Data is stored in flexible formats like JSON, key-value pairs, documents, or graphs.
   - Designed for scalability and handling unstructured or semi-structured data.
   - Example: MongoDB, Firebase, CouchDB, Redis.

## What is **SQL vs NoSQL**

| Feature            | SQL (Relational DB)                                            | NoSQL (Non-Relational DB)                                     |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------------------- |
| **Structure**      | Table-based (Rows & Columns)                                   | Document, Key-Value, Graph, Column-based                      |
| **Schema**         | Fixed schema (Predefined structure)                            | Dynamic schema (Flexible structure)                           |
| **Scalability**    | Vertical Scaling (More CPU, RAM)                               | Horizontal Scaling (More servers)                             |
| **Query Language** | Uses SQL (Structured Query Language)                           | Uses different query models (e.g., JSON, key-value)           |
| **Transactions**   | ACID (Atomicity, Consistency, Isolation, Durability) compliant | BASE (Basically Available, Soft state, Eventually consistent) |
| **Best for**       | Structured data, relationships, financial applications         | Big data, real-time applications, flexible data storage       |
| **Examples**       | MySQL, PostgreSQL, SQL Server, Oracle                          | MongoDB, Firebase, Cassandra, DynamoDB                        |

## Why do we need Databases?

- Data Organization: Helps in structuring and organizing large amounts of data.
- Fast Access & Retrieval: Databases optimize data access and improve efficiency.
- Security: Protects sensitive information from unauthorized access.
- Scalability: Supports business growth and large-scale applications.
- Backup & Recovery: Prevents data loss by storing backups.

## What is MongoDB?

MongoDB is a NoSQL document-oriented database that stores data in a flexible JSON-like format (BSON). It is designed for scalability, high performance, and ease of development.

## Why MongoDB?

- Flexible Schema: No fixed structure, stores data in JSON format.
- Scalability: Handles large amounts of data with horizontal scaling.
- High Performance: Fast read/write operations compared to SQL databases.
- Real-time Data Handling: Great for modern web applications.

## How to Use MongoDB?

```sh
# Install MongoDB on Mac
brew install mongodb-community@8.0

# Start MongoDB server
brew services start mongodb-community@8.0

# Open MongoDB shell
mongosh

```

## What is Mongoose?

Mongoose is a Node.js library that provides an Object Data Modeling (ODM) layer for MongoDB. It helps in managing MongoDB schemas and validation in an easier way.

### Why Use Mongoose?

- Defines schemas and models easily.
- Provides built-in data validation.
- Helps in handling relationships between data.
- Offers query building and middleware support.

## What is a Data Management System (DBMS)?

A DBMS (Database Management System) is software that manages databases by providing tools for storing, retrieving, and modifying data efficiently.
Example: MySQL, PostgreSQL, MongoDB, Firebase.

## What is ODM (Object Data Mapping)?

- ODM is a way to interact with NoSQL databases like MongoDB using object-oriented programming. It converts objects into a format suitable for NoSQL databases.
- Example: Mongoose is an ODM for MongoDB.

## What is ORM (Object-Relational Mapping)?

- ORM is used for interacting with SQL databases (Relational Databases) using object-oriented programming. It maps objects to relational tables.
- Example: Sequelize, TypeORM, Prisma are ORM tools for SQL databases.
