class Send {

  constructor(form, route, elementAlert) {
    this.form = document.querySelector(form);
    this.elementAlert = document.querySelector(elementAlert);
    this.route = route;
    this.response;
    this.eventSubmitForm();
  }

  eventSubmitForm() {
    this.form.addEventListener('submit', this.send.bind(this));
  }

  send(event) {
    event.preventDefault();

    fetch(this.route, {
      method: "POST",
      body: new FormData(document.querySelector(this.form))
    })
    .then(response => {

      if (response.ok) {
        return response.json()
      }

      new Error(response.statusText);
      return;

    })
    .then(response => {
      this.response = response;
    })

  }

}