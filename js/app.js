const $employeesWrapper = document.querySelector(".employees-wrapper")

// MODAL //
const modal = document.createElement('div')
modal.classList.add('modal')
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-employee-info"></div>
    </div>
`
document.body.appendChild(modal)

// const employee = {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./assets/user.jpg"
// }


const employees = [
    {
        id: 1,
        firstName: "Billo",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./assets/user.jpg"
    }
]



fetch("https://randomuser.me/api/?results=10")
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        data.results.forEach(function (employee) {
            const $employeeCard = document.createElement("div")
            $employeeCard.classList.add("employee-card")

            const $employeePicture = document.createElement("img")
            $employeePicture.src = employee.picture.large

            const $employeeInfos = document.createElement("ul")
            $employeeInfos.classList.add("employee-infos")

            const $employeeFullname = document.createElement("li")
            $employeeFullname.classList.add("employee-fullname")
            $employeeFullname.textContent = employee.name.first + " " + employee.name.last

            $employeeInfos.appendChild($employeeFullname)
            $employeeCard.appendChild($employeePicture)
            $employeeCard.appendChild($employeeInfos)
            $employeesWrapper.appendChild($employeeCard)

            $employeeCard.addEventListener('click', function () {
                const modalContent = document.querySelector('.modal-employee-info')
                modalContent.innerHTML = `
                    <img src="${employee.picture.large}" alt="Employee photo">
                    <h2>${employee.name.first} ${employee.name.last}</h2>
                    <p>${employee.email}</p>
                    <p>${employee.phone}</p>
                    <p>${employee.location.city}, ${employee.location.country}</p>
                    <p>${employee.dob.age}</p>
                `
                modal.style.display = 'block'
            })
        })
    })
    .catch(function (err) {
        console.log("Une erreur est survenue", err)
    })

// Close modal when clicking on X
document.querySelector('.close').addEventListener('click', function () {
    modal.style.display = 'none'
})

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})