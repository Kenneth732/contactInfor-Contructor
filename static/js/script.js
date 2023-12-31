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

function editContact(index) {
    const contact = contacts[index]

    let firstName = prompt('', contact.firstName)
    let lastName = prompt('', contact.lastName)
    let phoneNumber = prompt('', contact.phoneNumber)
    let emailAddress = prompt('', contact.emailAddress)

    contact.firstName = firstName
    contact.lastName = lastName
    contact.phoneNumber = phoneNumber
    contact.emailAddress = emailAddress
    displayContacts();
}

      // Function to delete a contact
      function deleteContact(index) {
        var confirmDelete = confirm("Are you sure you want to delete this contact?");
  
        if (confirmDelete) {
          contacts.splice(index, 1);
          displayContacts();
        }
      }
  
      // Function to clear the input form
      function clearForm() {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("emailAddress").value = "";
      }
  
      // Add event listener to the form for adding contacts
      document.getElementById("form").addEventListener("submit", addContact);
  
      // Call the function to display contacts initially
      displayContacts();