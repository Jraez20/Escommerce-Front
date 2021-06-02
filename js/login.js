$(document).ready(()=>{

    var email = $("#email");
    var password = $("#password");
    var button = $("#button");

    button.click(()=>{
        e = email.val();
        pass = password.val();

        if (e != null && pass != null){
            login(e,pass).then((response)=>{
                if(response.success){
                    localStorage.setItem('tokenSession',response.client.token)
                    window.location.href=("./index.html")
                }else{
                    switch(response.error.code){
                        case 5001:
                            alert(response.error.message)
                            email.val("")
                            password.val("")
                            email.focus()
                    }
                }

            });
        }
    });

});


const login = (email,password)=>{

    return $.ajax({
        method: "POST",
        url:'http://localhost:5001/login',
        dataType:'json',
        headers: { 'Access-Control-Allow-Origin':'*' },
        data:{password:password,email:email},
        accepts:'application/json',
        success:(data,status)=>{
            return data;
        }
    })

}