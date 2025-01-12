const form = document.querySelector("form");
const fileInput = document.querySelector(".user-image");
const userImage = document.querySelector(".current-image");
const userName = document.querySelector(".name-container input");
const userEmail = document.querySelector(".email-container input");
const githubName = document.querySelector(".github-username input");
const defaultImageSrc = userImage.src;
const ticketBar = document.createElement("div");
ticketBar.classList.add("ticket-bar")
document.body.appendChild(ticketBar);
const btn = document.createElement("button");
btn.classList.add("back-button");
document.body.appendChild(btn);
const errorMessage = document.querySelector(".error-msg");



ticketBar.style.display = "none";
btn.style.display = "none"
errorMessage.style.opacity = "0";
// errorMaessage.style.display = "none";


// Ticket Bar Content
const imageUpload = () => {
    fileInput.addEventListener("change" , (event) => {
        event.preventDefault();
        // console.log("Image read");

        const file = event.target.files[0]
        const maxSize = 500 * 1024;
        
        if(file.size > maxSize) {
            errorMessage.innerHTML = "The file size exceeds 500KB";
            errorMessage.style.color = "red";
            errorMessage.style.marginBottom = "10px";
            errorMessage.style.opacity = "1";
            errorMessage.style.transition = "opacity 1s ease";

            setTimeout(() => {
                errorMessage.style.opacity = "0";
                errorMessage.style.transition = "opacity 1s ease";
                setTimeout(() => {
                    errorMessage.style.display = "none"
                }, 500);
            }, 4000);


            


        } else { 
            const reader = new FileReader();
            reader.addEventListener("load" , (e) => {
            userImage.src = e.target.result;
            console.log("This is image");
        })

        reader.readAsDataURL(file);
       }
    })
}

imageUpload();

const userDetails = () => {
    form.addEventListener("submit" , (e) => {
        e.preventDefault();

        if(userName.value === "" || userEmail.value === "" || githubName.value === "" || userImage.src === defaultImageSrc) {
            alert("Dont Enter empty fields , as well as any image");

        } else {
            form.style.display = "none"

            ticketBar.innerHTML = `<div class="ticket-bar">
        <div class="ticket-content">
            <div class="user-headings">
                <h1><img src="./conference-ticket-generator-main/assets/images/logo-full.svg" alt=""></h1>
                <p>7TH January , 2025 / Location Here</p>
            </div>
            <div class="user-content">
                <img src="${userImage.src}" alt="" class="user-img">
                <div class="side-content">
                    <h1>${userName.value}</h1>
                    <p>${userEmail.value}</p>
                </div>
            </div>
        </div>
     </div>
     <button class="back-button">Go Back</button>`

            console.log(ticketBar);
            ticketBar.style.display = "block";

            const backButton = () => {
                const button = document.querySelector(".back-button");

                button.addEventListener("click" , () => {
                    ticketBar.style.display = "none";
                    btn.style.display = "none";
                    form.style.display = "block";
                })
            };

            backButton();

            userName.value = "";
            userEmail.value = "";
            githubName.value = "";
            
        }

    })
}

userDetails();

document.addEventListener('DOMContentLoaded', function () {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select elements to animate
    const heading = document.querySelector('.heading h1');
    const paragraph = document.querySelector('.heading p');
    const form = document.querySelector('form');
    const topLine = document.querySelector('.pattern-squiggly-line-top');
    const bottomLine = document.querySelector('.pattern-squiggly-line-bottom');

    gsap.fromTo(heading, {
        opacity: 0,
        y: 100, 
    }, {
        opacity: 1, 
        y: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: heading, 
            start: 'top 80%',
            end: 'top 30%', 
            toggleActions: 'play none none none', 
        }
    });

    gsap.fromTo(paragraph, {
        opacity: 0, 
        y: 100, 
    }, {
        opacity: 1,
        y: 0, 
        duration: 1.5, 
        ease: 'easeOut', 
        scrollTrigger: {
            trigger: paragraph,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none none',
        }
    });

    gsap.fromTo(form, {
        opacity: 0,
        x: -200, 
    }, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'easeOut',
        scrollTrigger: {
            trigger: form,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none none',
        }
    });

    gsap.fromTo(topLine, 
        { x: "100%" },
        { 
            x: "0%",
            duration: 1.5,
            ease: "power1.inOut"
        }
    );
    gsap.fromTo(bottomLine, 
        { x: "-100%" },
        { 
            x: "0%",
            duration: 1.5,
            ease: "power1.inOut"
        }
    );
});
