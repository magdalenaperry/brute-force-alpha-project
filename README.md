<div id="top"></div>

<div align="center">

![GitHub followers](https://img.shields.io/github/followers/magdalenaperry?style=for-the-badge)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]

---

# Chiron Private Practice

<a href="https://github.com/magdalenaperry/brute-force-alpha-project">
    <img src="https://gravatar.com/avatar/86e910b84e0d541baa?s=400&d=robohash&r=x" alt="Logo" width="150px" height="150px">
  </a>

</div>

## Table of contents

1. [Description](#description)
1. [Technologies](#technologies)
1. [Prerequisites](#prerequisites)
3. [Installation](#installation)
3. [Usage](#usage)
2. [Visuals](#visuals)
8. [Contributors](#contributors)
9. [Roadmap](#roadmap)
10. [Contact](#contact)
11. [Acknowledgements](#acknowledgements)

---
## Description
Chiron is an application created with patient and physician interaction in mind. The application has a user authentication system that allows patients to sign up or login and view their patient portal. Upon signup, the patient will create their login credentials, input contact information, patient history, and give information on lifestyle choices regarding drugs/alcohol. This information is then populated into the patient portal, Chiron Portal. Within the portal, the patient has the ability to schedule an appointment and is taken to a list of doctors to select the doctor they would like to see. 

#### Deployed Links:
[Chiron Repository Link ](https://github.com/magdalenaperry/brute-force-alpha-project)

[Chiron Link ](https://polar-peak-28753.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

---


## Technologies
- axios
- bcrypt
- connect-session-sequelize
- dotenv
- express 
- express-handlebars
- mysql2
- sequelize

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Prerequisites
1. Node.js
    - [Node.js download](https://nodejs.org/en/)
2. verify installation
```  
node -v
npm -v
```
<p align="right">(<a href="#top">back to top</a>)</p>

---




## Installation

1. Install dependencies at root
```
npm install
```

2. Create MYSQL schema
```
mysql -u root
    SOURCE db/schema.sql
    exit
```
3. Seed data
```
npm run seed 
```

4. Create a .env file at the root of your file and add the following environment variables
```
DB_NAME=NAMEOFYOURDB
DB_USER=root
DB_PASSWORD=yourdbpasswordatsetup

```

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Usage

1. Run your program 
```
npm start (or)
node server.jss
```    

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Visuals
<div align="center">

### Homepage
![Chiron Portal](/public/images/chiron.png)

### Sign Up
![Chiron Signup](/public/images/chrion-signup.png)

### Login
![Chiron Portal](/public/images/chiron-login.png)

---
</div>


## Contributors

Magdalena Perry: 

- [Linkedin](https://www.linkedin.com/in/magdalena-perry/)

- [Github](https://github.com/magdalenaperry)

Michael Hoyle: 

- [Linkedin](https://www.linkedin.com/in/michael-hoyle-523143226/)

Jasmin Bouasavatdy:

- [Linkedin](https://www.linkedin.com/in/jasmin-bouasavatdy-0a9559227/)

David Aylward: 

- [Linkedin](https://www.linkedin.com/in/david-aylward-0a3819230/)

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Roadmap
- [x] Create server.js and connection.js
- [x] Create MYSQL database
- [x] Create Models
- [x] Create seeds
- [x] Create View pages
    - [x] Home
    - [x] About
    - [x] Patient Portal
    - [x] Login/Signup

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Contact
For any additional questions, please reach out to me through email and follow me on GitHub.

Name - [Magdalena Perry LinkedIn](https:www.linkedin.com/in/magdalenaperry)

Github - [magdalenaperry](https://www.github.com/magdalenaperry)

email - [mageltron@gmail.com](mageltron@gmail.com)

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Acknowledgements

- [Img Shields](https://shields.io)
- [Heroku](https://heroku.com)
- [Robot Avatars](https://gravatar.com/)



[contributors-shield]: https://img.shields.io/github/contributors/magdalenaperry/brute-force-alpha-project.svg?style=for-the-badge
[contributors-url]: https://github.com/magdalenaperry/brute-force-alpha-project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/magdalenaperry/brute-force-alpha-project.svg?style=for-the-badge
[forks-url]: https://github.com/magdalenaperry/brute-force-alpha-project/network/members
[stars-shield]: https://img.shields.io/github/stars/magdalenaperry/brute-force-alpha-project.svg?style=for-the-badge
[stars-url]: https://github.com/magdalenaperry/brute-force-alpha-project/stargazers
[issues-shield]: https://img.shields.io/github/issues/magdalenaperry/brute-force-alpha-project.svg?style=for-the-badge
[issues-url]: https://github.com/magdalenaperry/brute-force-alpha-project/issues
[license-shield]: https://img.shields.io/github/license/magdalenaperry/brute-force-alpha-project.svg?style=for-the-badge
[license-url]: https://github.com/magdalenaperry/brute-force-alpha-project/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/magdalena-perry
