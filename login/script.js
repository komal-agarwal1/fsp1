function storeData()
{
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if(name && email && password)
    {
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
    }
    else
    {
        alert('Fill all fields');
    }
}