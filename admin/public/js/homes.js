const admin = document.querySelector('.admin');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/TestAdder';
    } else{
        admin.innerHTML = `${sessionStorage.name}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}
