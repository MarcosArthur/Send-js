class Send {

  static toSend(form, route, method, operation) {
    document.querySelector(form).addEventListener('submit', e => {
      e.preventDefault();
      fetch(route, {
          method: method,
          body: new FormData(document.querySelector(form))
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          new Error('Error to send');
          return;
        })
        .then(response => {
          operation(response);
        })
        .catch(e => {
          new Error(e.statusText);
        })
    })

  }

  static get(route, operation = null) {
    fetch(route)
      .then(response => response.json())
      .then(response => {
        operation(response);
      })
  }

}