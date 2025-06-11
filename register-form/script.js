function reg(){
    const name1=document.getElementById('name1').value
    const name2=document.getElementById('name2').value
    const email=document.getElementById('email').value
    const pass=document.getElementById('pwd').value
    const phone=document.getElementById('phone').value
    if(name1 && email && pass && phone){
        document.getElementById('res').innerHTML="registreration successful"+ name1 + "."
    } else{
        document.getElementById('res').innerHTML="please fill out the required fields"
    }
}
