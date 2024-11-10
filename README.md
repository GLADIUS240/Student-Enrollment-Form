# Student Enrollment Form with JsonPowerDB Integration

## Table of Contents
- [Project Overview](#project-overview)
- [Benefits of Using JsonPowerDB](#benefits-of-using-jsonpowerdb)
- [Release History](#release-history)
- [Scope of Functionalities](#scope-of-functionalities)
- [Examples of Use](#examples-of-use)
- [Project Status](#project-status)
- [Sources](#sources)

---

## Project Overview
This project is a **Student Enrollment Form** built with a database integration using JsonPowerDB. It serves as a simple web application that allows users to enter, save, update, and manage student enrollment data directly in the `STUDENT-TABLE` of the `SCHOOL-DB` database. With essential CRUD functionalities, this form provides a seamless experience for handling student records with a modern, user-friendly interface.

## Benefits of Using JsonPowerDB
JsonPowerDB is chosen for its unique features that streamline database interactions and enhance performance:
- **NoSQL Database Support**: JsonPowerDB provides both key-value and document-based data models.
- **Lightweight and Fast**: Ideal for quick and efficient data storage and retrieval.
- **In-Memory Database**: Reduces the need for traditional server-side scripting, making the app faster and easier to maintain.
- **Schema-Free and Flexible**: Eliminates complex setup, allowing developers to focus on core functionality.

## Release History
- **v1.0** - Initial release with basic CRUD functionalities (Save, Update, Reset)
- **v1.1** - Minor bug fixes and UI improvements
- **v1.2** - Added validation for primary key fields and enhanced form usability

## Scope of Functionalities
1. **Form Controls**  
   - [Save], [Update], and [Reset] buttons for easy data management.
   
2. **Primary Key Validation**  
   - Prevents duplicate entries based on the primary key (`Roll No`) and enables automatic data population for existing entries.
   
3. **User-Friendly Interface**  
   - Fields are auto-enabled based on user interaction, providing a smooth and guided data entry experience.

## Examples of Use
- **Student Enrollment Form**  
  Input fields include:
  - `Roll-No` (Primary Key)
  - `Full-Name`
  - `Class`
  - `Birth-Date`
  - `Address`
  - `Enrollment-Date`

- **Usage Flow**  
  - Enter a new Roll-No, which enables the [Save] and [Reset] buttons if it doesn’t already exist in the database.
  - For existing Roll-Nos, data populates automatically, and the [Update] button becomes available.

## Project Status
This project is currently in a **stable release** phase, with core functionalities operational. Future updates may include additional validation, advanced filtering, and enhanced UI styling.

## Sources
- [JsonPowerDB Documentation](https://login2explore.com/jpdb/docs.html)
- [JsonPowerDB Official Portal](https://login2explore.com/jpdb/index.html)

---

**Note**: JsonPowerDB provides a real-time data experience and is ideal for lightweight applications without heavy server-side requirements.
