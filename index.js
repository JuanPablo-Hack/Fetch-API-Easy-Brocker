function obtener_datos() {
  fetch("#")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function ingresar_cliente(username, phone, email, property_id) {
    fetch('#', {
            method: 'POST',
            body: JSON.stringify({
                name: username,
                phone: phone,
                email: email,
                property_id: property_id
            }),
            headers: {
                "Content-type": "application/json"
            })
      .then(response => response.json())
      .then(json => console.log(json))
}
