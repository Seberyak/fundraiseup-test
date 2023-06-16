
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
fundraiseup-test
</h1>
<h3 align="center">📍 Test your fundraising limits with fundraiseup-test on GitHub!</h3>
<h3 align="center">⚙️ Developed with the software and tools below:</h3>

<p align="center">
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" alt="MongoDB" />

<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=for-the-badge&logo=ts-node&logoColor=white" alt="tsnode" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
</p>
</div>

---

## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [💫 Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)

---


## 📍 Overview

This project is a customer data management tool that generates and saves customer records in MongoDB. It includes functionality for anonymizing customer data and processing it in batches. The project's value proposition is the ease of generating and managing customer data in a secure and scalable manner.

---

## 💫 Features

| Feature                                  | Description                                                                                                                                                  |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **🏗 Structure and Organization**        | The codebase is organized in a clear and logical manner, with separate folders for services, helpers, and models.                                            |
| **📝 Code Documentation**                | The code is adequately documented, with clear and concise comments explaining the purpose of each function and class.                                        |
| **🧩 Dependency Management**             | Dependencies are managed using NPM and are clearly listed in the package.json file.                                                                          |
| **♻️ Modularity and Reusability**        | The codebase is highly modular, with each file containing a single class or function that can be easily reused in other projects.                            |
| **✔️ Testing and Quality Assurance**     | Although there are no tests included in the repository, the code appears to be of high quality with good error handling and defensive programming practices. |
| **⚡️ Performance and Optimization**      | The code appears to be optimized for performance, using efficient algorithms and libraries for data generation and anonymization.                            |
| **🔒 Security Measures**                 | The code appears to use best practices for security, including secure password hashing and sanitization of user input.                                       |
| **🔄 Version Control and Collaboration** | The codebase appears to be well-maintained, with frequent commits and a clear version history.                                                               |
| **🔌 External Integrations**             | The codebase includes external libraries for data generation, anonymization, and MongoDB database access.                                                    |
| **📈 Scalability and Extensibility**     | The codebase appears to be scalable and extensible, with features such as queue management and modular design allowing for easy expansion and modification.  |

---


<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## 📂 Project Structure


```bash
repo
├── example.env
├── mongo
│   └── docker-compose.yml
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── helpers
│   │   └── mongo-connection.ts
│   ├── models
│   │   ├── customer-anonymized.ts
│   │   ├── customer.ts
│   │   └── queue-record.ts
│   ├── services
│   │   ├── anonymizer.ts
│   │   ├── customer-generator.ts
│   │   └── queue.ts
│   └── sync.ts
└── tsconfig.json

6 directories, 14 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 🧩 Modules

<details closed><summary>Helpers</summary>

| File                | Summary                                                                                                                                                                                                                                                                                                     | Module                          |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| mongo-connection.ts | The code snippet provides a class called "MongoConnection" with static methods to connect, get, and close a MongoDB instance. It also contains methods to save single and multiple records into a specified collection. The "IRecord" interface specifies the expected "_id" property of the record object. | src/helpers/mongo-connection.ts |

</details>

<details closed><summary>Models</summary>

| File                   | Summary                                                                                                                                                                                                                                                                                                                                   | Module                            |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| customer-anonymized.ts | The provided code snippet defines a class called CustomerAnonymized that extends a class called Customer. It also uses the faker and crypto libraries to generate random strings and anonymize customer data such as name, email, and address. The anonymized data is then assigned to the properties of the CustomerAnonymized instance. | src/models/customer-anonymized.ts |
| queue-record.ts        | The code snippet defines a class called "QueueRecord" which takes a generic type parameter "T". It has two properties: "_id" of type ObjectId and "message" of type T. The constructor initializes the "_id" property with a new ObjectId and assigns the provided argument to the "message" property.                                    | src/models/queue-record.ts        |
| customer.ts            | The code defines two classes, "Address" and "Customer". "Address" contains random address information generated by the "faker" library, while "Customer" contains a randomly generated unique ID, name, email, address, and creation date. The classes are intended for use in a MongoDB database.                                        | src/models/customer.ts            |

</details>

<details closed><summary>Services</summary>

| File                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                              | Module                             |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| customer-generator.ts | The code defines a `CustomerGenerator` class that generates and saves customer data to a MongoDB database. It uses the `crypto` library to get a random integer and generates a batch of customers to be saved to the database. It also includes functionality for adding the generated customers to a queue for further processing.                                                                                                                 | src/services/customer-generator.ts |
| anonymizer.ts         | The provided code snippet defines an `Anonymizer` class with methods to collect customer IDs, get customers from a MongoDB database, anonymize customer data and insert it into a separate collection, and run the anonymization process periodically in batches. The class utilizes a `Queue` helper class and a `MongoConnection` helper class to manage database access and collection data.                                                      | src/services/anonymizer.ts         |
| queue.ts              | The provided code snippet defines a class called "Queue" that provides methods to add, collect and delete records from a MongoDB queue. The "addToQueue" method takes an array of messages, creates a QueueRecord instance for each message and saves them to the MongoDB collection. The "collectFromQueue" method returns an array of QueueRecords in batches, while "deleteFromQueue" deletes records from the queue using an array of ObjectIds. | src/services/queue.ts              |

</details>

<details closed><summary>Src</summary>

| File    | Summary                                                                                                                                                                                                                                                                                                                                                               | Module      |
|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| app.ts  | This code snippet first imports necessary modules such as dotenv, CustomerGenerator and MongoConnection. Next, it configures dotenv and initializes the CustomerGenerator. It then connects to MongoDB server using the MongoConnection helper. Finally, it generates customer records every 200 milliseconds using the run method of the CustomerGenerator instance. | src/app.ts  |
| sync.ts | The code snippet imports and initializes a dotenv configuration and a MongoDB connection helper. It also imports and instantiates an Anonymizer service, which is then initialized and run with 100 records. Finally, the main function is called and executed.                                                                                                       | src/sync.ts |

</details>

---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - [📌  Node Latest LTS Version](https://nodejs.org/en/download/)
> - [📌  MongoDB](https://www.mongodb.com/try/download/community)

### 🖥 Installation

1. Clone the fundraiseup-test repository:
```sh
git clone https://github.com/Seberyak/fundraiseup-test
```

2. Change to the project directory:
```sh
cd fundraiseup-test
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Using app

```sh
npm run app
npm run sync
#or
npm run sync-full-reindex
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.


---
