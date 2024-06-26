### Live Demo : [link](https://sm8uti.github.io/Ineuron-Full-JavaScript-2.0/DOM%20Projects/Projects%201,2,3)

## DOM Assignments 1 

<br>

### Task 1 

<br>

#### Question : The user to append a new element in the navigation menu named "Hire me" after the projects.

<br>

#### After Image : 

<br>

![image](./firstAssignmentImage/task1Output.png)

<br>

#### Solution : 

```Javascript
    let ul = document.querySelector("header nav ul");
    let li = document.createElement("li");
    li.innerHTML = `<a href="#">Hire me</a>`;
    ul.appendChild(li);
```


<br>

### Task 2

<br>

#### Question : The user to change the search input placeholder text to "search" ==> "Search my projects"

<br>

#### After Image : 

<br>

![image](./firstAssignmentImage/task2Output.png)

<br>

#### Solution : 

```Javascript
    let searchInput = document.querySelector(".search-field input");
    searchInput.placeholder = "Search my projects";
```



<br>

### Task 3

<br>

#### Question : The user to change the "a freelancer " to "an employee"and also change the company name to "iNeuron intelligence Pvt Ltd" in hero text section

<br>

#### After Image : 

<br>

![image](./firstAssignmentImage/task3Output.png)

<br>

#### Solution : 

```Javascript
    let span = document.querySelectorAll(".hero-left-section p span")
    span[1].innerText = "an Employee";
    span[2].innerText = "iNeuron intelligence Pvt Ltd";
```




<br>

### Task 4

<br>

#### Question : The user to change the hero avtar image to new avatar image

<br>

#### After Image : 

<br>

![image](./firstAssignmentImage/task4Output.png)

<br>

#### Solution : 

```Javascript
    let img = document.querySelector(".hero-right-section img");
    img.src = "./newAvatar.png";
```



<br>

### Task 5

<br>

#### Question : The user to append a new btn element in the hero-right-section-btns class btn named "Support me"

<br>

#### After Image : 

<br>

![image](./firstAssignmentImage/task5Output.png)

<br>

#### Solution : 

```Javascript
    let btnGroups = document.querySelector(".hero-right-section-btns");
    let newBtn = document.createElement("button");
    newBtn.innerText = "Support me";
    btnGroups.appendChild(newBtn);
```

<br>

## DOM Assignments 2 

<br>

### Task 1

<br>

#### Question : The user write the faq section javascript code

<br>

#### After Image

<br>

![image](./secondAssignmentImage/task1Output.png)

<br>

#### Solution

```Javascript
    let accordian = document.querySelectorAll(".accordian h3");
    accordian.forEach((elem) => {
    elem.addEventListener("click", () => {
        let para = elem.nextElementSibling;
        if (para.style.display === "block") {
        para.style.display = "none";
        } else {
        para.style.display = "block";
        }
    });
    });
```

<br>


### Task 2

<br>

#### Question : The user append a new faq child in the faq section faq child name "Skills"

<br>

#### After Image

<br>

![image](./secondAssignmentImage/task2Output.png)

<br>

#### Solution

```Javascript

    function addedNewFaq(name,description){
    let accordianWrapper = document.querySelector(".accordian-wrapper");

    let newDiv = document.createElement("div");
    newDiv.className = "accordian";
    newDiv.innerHTML = `<h3>${name}</h3>
            <p>${description}</p>`;
    
    accordianWrapper.appendChild(newDiv);

        
    }

    addedNewFaq("Skills","I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the Github");

```


<br>

## DOM Assignments 3

<br>

### Task 1

<br>

#### Question : The user input the form and you display in the output form

<br>

#### After Image

<br>

![image](./thirdAssignmentImage/task1Output.png)

<br>

#### Solution

```Javascript

const inputName = document.querySelector(".userName")
const inputEmail = document.querySelector(".userEmail")
const inputMessage = document.querySelector(".userMessage")
const outputName = document.querySelector(".enterName")
const outputEmail = document.querySelector(".enterMail")
const outputMessage = document.querySelector(".enterMessage")

window.localStorage.setItem("inputName",inputName.value)

const btns = document.querySelectorAll("button")


btns[2].addEventListener("click",(event)=>{   
    outputName.value = inputName.value;
    outputEmail.value = inputEmail.value;
    outputMessage.value = inputMessage.value;
    event.preventDefault()
})

btns[1].addEventListener("click",(event)=>{
    outputName.value = "";
    outputEmail.value = "";
    outputMessage.value = "";
    event.preventDefault()
})

```
