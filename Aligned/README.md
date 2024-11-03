# Aligned

# Overview

This is a project made by Tobenna Okonna, Jonathan Nwokeji, Brian Pov, and Luis Fajardo called _Aligned_, which allows users to focus on their tasks and assignments. Users sign in with their email and password, and they are allowed to create projects and assignments on their dashboard. After they create their projects, they can work on their projects for as long as they wish. This is a project we made to tackle procrastination and increase focus for UNC students on their assignments.

# Implementation

We used a React frontend for this app and set up user authentication using Firebase. After the user signs in, we fetch all existing projects (if there are any) from a SQLlite database. We handle API calls to the backend using fastAPI. Each project is represented as a React Component with an image, a title, and a subtitle. When a user selects a project that they want to work on, we implemented a timer to allow users to track and record the time they spent on the project. When a user wants to save/update their time, we make an API call to update the existing time. When a user creates a new project, we make a POST API call to create and store a new project task in the database.

# Next Features

In the future, we hope to add implementation to track the percentage of a project that is completed using emojis.
