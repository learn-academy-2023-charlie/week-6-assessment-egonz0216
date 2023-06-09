# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The name of the foreign key is Students_id, and it should be added on the student model. 

Researched answer: The foreign key always goes on the "belongs_to" side, which in this case is students. The "belongs_to" model is plural.

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, edit, update and delete. They require params because the user must specify which instance they want to view, or edit, or delete.

Researched answer: Params are required when the user needs to specify an action to take on a specific instance. The params identify the instance the user wnats to work with.

3. Name three rails generator commands. What is created by each?

Your answer: Migration updates the schema; resource-generates a model controller and routes; controller-a controller file and a view file

Researched answer:
    Model: creates a new model in the app. can specify different    attributes that will populate different columns in the db
    Resource: Creates a model, controller, and migration file for a given model name.
    Migration: Creates a new db migration, which is used to add or modify db tables and elements. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    Index. Display all the instances of students.

action: "POST" location: /students
    Create. Takes data from from generated by "new" command, and saves a new instance in the db.

action: "GET" location: /students/new
    New. Displays an html form that allows user to input data that will be used to create an instance in the db

action: "GET" location: /students/2
    Show. Displays the instance of student assigned to id: 2

action: "GET" location: /students/2/edit
    Edit. Displays an html form that allows user to unput data that will be used to create an instance in the db.

action: "PATCH" location: /students/2
    Update. Takes data from existing  Edit html form and modifies an existing instance.

action: "DELETE" location: /students/2
    Destroy. Removes the specified instance from the db. Once the id is removed, it cannot be used again.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
Story 1:
    As a user, I can see a page with the title of the to do list.
Story 2:
    As a user, I can see a button that will create a new list.
Story 3:
    As a user, I can see a menu-style feature to select from different lists.
Story 4:
    As a user, I can see a button to add items to a list
Story 5:
    As a user, I can see a button to remove items from a list.
Story 6:
    As a user, I can see a button to remove entire lists.
Story 7:
    As a user, I can see check boxes that when clicked, show the task as complete.
Story 8:
    As a user, I can see a full list of all completed tasks.
Story 9:
    As a user, I can see additional information about tasks - location, time, due date
Story 10:
    As a user, I can share the lists via email or text.