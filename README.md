# tech-blog

![License](https://img.shields.io/badge/License-MIT_License-lightblue.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credit](#credit)

## Description

### User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

screenshots:
(note that the screenshots were taken from the localhost, deployed page has different posts)

homepage:
<img width="490" alt="homepage" src="https://github.com/Ivana-Djordjevic/tech-blog/assets/127266659/4007c522-93f8-4fc8-bec4-139722988cce">

login/sign up page:
<img width="254" alt="login:signup" src="https://github.com/Ivana-Djordjevic/tech-blog/assets/127266659/10e0e43a-9bce-446d-ae3c-907e210f402d">

dashboard:
<img width="358" alt="dashboard" src="https://github.com/Ivana-Djordjevic/tech-blog/assets/127266659/19b4ca28-56bf-4d44-b3c1-6a6a2e86930d">

create new post:
<img width="356" alt="create new post" src="https://github.com/Ivana-Djordjevic/tech-blog/assets/127266659/f3709ff4-f55f-43dc-98f5-b53f290ec199">

[deployed heorku link](https://techblogg-7083d95f8068.herokuapp.com/) 

## Installation

- bcrypt
- connect-session-sequelize
- express
- express-handlebars
- express-session
- mysql2
- sequelize

## Usage 

CMS-style blog site where users can publish articles, blog posts, thoughts and opinions.

## License

This application is covered under: MIT License.  

## Credit

*[UCD readme file](https://git.bootcampcontent.com/University-of-California---Davis/UCD-VIRT-FSF-PT-09-2023-U-LOLC/-/blob/main/14-MVC/02-Challenge/README.md)
