class Send {

  /**
  |--------------------------------------------------------------------------
  * @Author: Marcos Arthur Cruz De Oliveira
  |--------------------------------------------------------------------------
  * @E-mail: cruzartur61@gmail.com
  * @GitHub: https://github.com/MarcosArthur?tab=repositories
  * @linkedin: https://www.linkedin.com/in/marcos-arthur-630a56159/
  */

  static toSend(form, route, method, operation = null) {
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
          if (typeof operation === "function") {
            operation(response);
          }         
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
        if (typeof operation === "function") {
          operation(response);
        }
      })
  }

  static sendForLink(route, operation = null) {
    fetch(route)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      new Error('error')
    })
    .then(response => {
      if (typeof operation === "function") {
        operation(response);
      }
    })
  }

}