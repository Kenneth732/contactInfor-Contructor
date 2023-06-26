function Contact(firstName, lastName, phoneNumber, emailAddress) {
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.emailAddress = emailAddress
}

let contacts = [];

function displayContacts() {
    const contactContainer = document.querySelector('#contacts')
    contactContainer.innerHTML = '';

    if(contacts.length === 0) {
        contactContainer.innerHTML = '<p>No contact found...</p>'
    }else{
        contacts.forEach((contact, index) => {
            const contactElement = document.createElement('div')
            contactElement.classList.add('contact')
            contactElement.innerHTML = "<h3>" + contact.firstName + "</h3>" +
            "<h3>" + contact.lastName + "</h3>" +
            "<p>" + contact.phoneNumber +"</p>" +
            "<p>" + contact.emailAddress +"</p>" +
            "<button class='editContact("+ index +")'>Edit</button>" +
            "<button class='deleteContact("+ index +")'>Delete</button>" ;
            contactContainer.appendChild(contactElement);
        })
    }
}

function addContact(event){
    event.preventDefault();
    const firstName = document.querySelector('#firstName').value 
    const lastName = document.querySelector('#lastName').value
    const phoneNumber = document.querySelector('#phoneNumber').value
    const emailAddress = document.querySelector('#emailAddress').value

    let contact = new Contact(firstName, lastName, phoneNumber, emailAddress)
    contacts.push(contact)
    displayContacts()
    clearForm();
}
