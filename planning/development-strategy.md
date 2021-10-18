# Must-have

#### 1. As a **user who wants to adopt an animal** I want to see general information how can I adopt a pet to understand if I can adopt an animal.

**Given:**
- general conditions about adoption
- FAQ

<details>
<summary>Tasks summary </summary><br>


section "faq"</br>
**article component**<br>
header "FAQ section will answer your questions about animal adoption."<br>
paragraph: null
**faq component:**<br>
class ="faq-list"<br>


>section "useful-links" ??<br>
**article component:** <br>
class = "article useful-links" <br>
header "Useful links" <br>
paragraph:text <br>

</details>

#### 2. As  a **user who lives in Belgium** I want to see the list of all Belgian shelters to choose shelter to adopt from.
**Given:**
  - list of shelters, with locations:
    three columns: shelter, location, animals
  - by default sorted alphabetical by shelters
  - locations - sorts by province + city
  - when click on link:
      - if open street api gives this info - card
      - if open street api does not give info - link on shelter's website with icon indicating we leave this website
 
  
<details><summary> Tasks summary </summary>
section "shelter-search-menu"<br>
**button** class ="btn remove-filters-btn" -> **remove filters handler**<br>
**search shelters menu component**<br>
**sort shelters handler**<br>
**shelters search result component**<br>
__

section "shelter-search-results"<br>
**search results component**
 </details>

#### 3. As a **user who wants to adopt an animal** I want to see publications of animals available for adoption.
**Given:**   
  - build an API
  - connect to API
  - page with ALL animals for adoption
  - sort by type, breed, age, gender, character, province
  - search result: card -> Name, animal picture, info - age, health, gender, location(region, city, shelter) 
  - change cursor to POINTER - user know he can click and see more
  any bigger description/story, details: name, bread, dob, gender,char,location more pictures ( animal page), "get in touch" -> form to write message
  - modal: form -> name, email, phone, message; it send email to shelter's email
  - add animal to favorites: heart
  - hover label "add to favorites"
  - submit - notify user that email is sent
  
  

<details><summary> Tasks summary </summary>

build API<br>
fetch API<br>


section "intro"<br>
**article component**<br>
header "Animals waiting for adoption"<br>
text: ???



section "animal-search-menu"<br>
**animal search menu component**<br>
**button** class= "btn animal-search-btn" ->
 **sort animals handler**<br>


section "animal-search-results"<br>

**render search results component**<br>
**animal card component**
**add to favorites** ->
**add to favorites handler**<br>
**show more handler**<br>


(Animal Profile page)
section "navigation"
**back to search results component**

section "animal-info"<br>
**animal photos component**<br>
**animal info component** <br>

div "get-in-touch"
**button** "Get In Touch" class="btn contact-shelter-btn" ->
**get in touch handler**
__

section "pet-story"<br>
**article component**
</details>

#### 4. As **user who has an animal for adoption** I want to  be able to put animal for adoption so that I can find him a new owner.

**Given:**   
  - create an account: login, register form<br>
        - name<br>
        - email<br>
  - add animal page


<details><summary> Tasks summary </summary>
section "animal-info"
**article component**
**add animal menu component**
section "animal-photos"
>placeholders?
**add animal photo component**
**button** "Add Photo" class = "btn add-photo-btn" -> **add animal photo handler**
**choose animal avatar handler**
**button** class = "btn register-animal-btn" 
-> **register animal handler**
</details>


#### 5. As **user** I want to report about problem with app/shelter/ adopting person.

**Given:**   
- add animal ID so you can report by id
- contact form: name, topic, message in the footer


<details><summary> Tasks summary </summary>
footer:
**contact us form component**
  </details>

#### 6. As a **user who found an animal I like** I want to contact shelter to adopt it, ask questions.
   **Given:**   
   - button to send email -> modal with form to fill
   - email of shelter is already there - form knows where to send
   - fields: name, email, phone-number, message
   - notification - email is sent
 

  <details><summary> Tasks summary </summary>
  
section "contact-shelter" on the "Animal Profile Page"

**button** class= btn get-in-touch-btn **get in touch handler**
**modal component**
**get in touch form component**
**button** class= btn send-message-btn" -> **send message handler**
>**submit success notification component**??
 </details>

#### 7. As a **user with account** I want to edit my account, see my publications, modify publications.
**Given:** 
   - account settings page -> fields(same as when register) that can be edited
   - user can delete account
   - edit: delete animals, edit information
   - user can change password

<details><summary> Tasks summary</summary>
??
</details>

9. As a **stackholder** I want to make people more sensitive to motivate people to adopt animals or help them and put them for adoption.
**Given:**
- article "Why adoption is important?"
- article "When lonely pet needs your help?"

<details><summary> Tasks summary </summary>

section "why-adoption-is-important"

**article component**

section "lonely-pet-needs-help"
**article component**
 
# Should-have


#### 1. As **user** I want to be able to register a new shelter which is not in the list to help more animals/shelters/pet seekers. 
**Given:**
   -  form to register a shelter(take fields from link)
  
  <details>
  <summary> Tasks summary </summary>

section "add-shelter" on "Search Shelter Page"<br>

**article component**<br>
header "You know a shelter which is not in  our  list?"<br>
**button** "Add Shelter" class = "btn add-shelter-btn" ->
 **open add shelter form handler**<br>

 **modal component**<br>
  **article component**
  header "Add new shelter"
  text: null<br>
</details>
#### 2. As **user who wants a specific character** I want to see characters of animals to chose the one which fits me.
 - character filed in about animal card
 - search by character
   
#### 4. As **user who wants to adopt** I want to chose a city to search for an animal there.
- search by location
  
#### 1. As **user with some limitations** I want to post/notify that I want a pet in specific area so it is easy for me to pick it up.
 - registration for pet seeker with option to post 
   **register form for person:**<br>
        - name<br>
        - surname<br>
        - location<br>
        - contact: phone, email<br>
        - avatar<br>
- account page, notification
- separate page with "zoekertjes" from people who search for specific animals with characteristics

#### 1. As **user who wants to adopt a specific animal** I want to see if this animal appears  for adoption to be able to adopt it.
- notification 
- in account there is something where they can chose/mark what they look for(you didn't find what you looking for...blah blah ) - form with fields we have for animals characteristics

#### 2. As **user** I want to be able to contact the app owners to improve it.
+ 
#### As **user** I want to be able to live feedback/comments to improve app/experience.
  - contact form: email, text(footer)
  

# Might-have
#### 1. As **user who can help** I want to be able to donate to app/shelters/animals.
   - donation button -> form; info how you can help; in menu, in footer
   
#### 2. As a **shelter** I want to be sure the animal fits to it's future owner.
+
#### As a **user who want a pet but is not sure** I want to understand better which animals I can adopt.
  - questionary about the person and sum up with suggestions

#### 5. As a **shelter** I want people to see happy stories about adopted animals so they adopt.
   -forum/ section with success stories

#### 6. As a **user** I wan to be able to add animal to favorites.
  