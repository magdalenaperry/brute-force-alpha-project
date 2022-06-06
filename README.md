


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Chiron Private Practice

<a href="https://github.com/magdalenaperry/brute-force-alpha-project">
    <img src="https://via.placeholder.com/200" alt="Logo" width="100%" height="100%">
  </a>

## Table of contents

1. [Description](#Description)
2. [Visuals](#Visuals)
3. [Installation](#Installation)
4. [User Story](#Story)
5. [Technologies](#Technologies)
6. [Heroku](#Heroku)
7. [GitHub](#GitHub)
8. [Creators](#Creators)
  

---
## Description
Chiron is an application created with patient and physician interaction in mind. The application has a user authentication system that allows patients to sign up or login and view their patient portal. Upon signup, the patient will create their login credentials, input contact information, patient history, and give information on lifestyle choices regarding drugs/alcohol. This information is then populated into the patient portal, Chiron Portal. Within the portal, the patient has the ability to schedule an appointment and is taken to a list of doctors to select the doctor they would like to see. 


---
## Visuals
![Chiron Portal](/public/images/chiron.png)
![Chiron Signup](/public/images/chrion-signup.png)
![Chiron Portal](/public/images/chiron-login.png)


---
## Installation 
````
  npm install

  mysql -u root
    SOURCE db/schema.sql
    exit

  npm run seed 
````

---
## User Story
````
AS a patient who wants to make an appointment with my physician of choosing

I WANT to able to signup and login onto the Chiron site

SO THAT I can view all physicians and view my information and make an appointment that is best for me.
````


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

---
## Heroku 

[Heroku Deployed Link ](https://polar-peak-28753.herokuapp.com/)

---
## GitHub Repository

[Chiron Respository Link ](https://github.com/magdalenaperry/brute-force-alpha-project)

---
## Creators

[Michael Hoyle's Linkedin](https://www.linkedin.com/in/michael-hoyle-523143226/)


[Magdalena Perry's Linkedin](https://www.linkedin.com/in/magdalena-perry/)


[Jasmin Bouasavatdy's Linkedin](https://www.linkedin.com/in/jasmin-bouasavatdy-0a9559227/)


[David Aylward's Linkedin](https://www.linkedin.com/in/david-aylward-0a3819230/)



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
[linkedin-url]: https://linkedin.com/in/magdalenaperry
[product-screenshot]: images/screenshot.png

