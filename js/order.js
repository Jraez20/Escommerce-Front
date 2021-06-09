$(document).ready(() => {
    var order = $("#order");
    var token = localStorage.getItem('tokenSession')
    var addressId = localStorage.getItem('tokenSession')
    order.click(() => {

        if ($("#terminos").is(":checked")) {
            if ($("#pago2").is(":checked")) {
                if (token != null && addressId != null) {

                    createOrder(token,addressId,2).then((response) => {

                    });
                }
            } else {
                alert("Selecciona un método de pago");
            }
        } else {
            alert("Primero debes aceptar los términos y condiciones");
            $("#terminos").focus()
        }


    });


    //$("#compra").modal("show")

});


const createOrder = (token, addressId, paymentId) => {
    return $.ajax({
        method: "POST",
        url: 'http://localhost:5001/order',
        dataType: 'json',
        headers: { 'Access-Control-Allow-Origin': '*', 'token': token },
        data: { addressId: addressId, paymentId: paymentId },
        accepts: 'application/json',
        success: (data, status) => {
            return data;
        }
    })

}