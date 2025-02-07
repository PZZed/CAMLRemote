let suivi = false;
let suiviStd = false;
let retour = false;

const defaultUrl = "http://localhost:3000";
const suiviPath = '/bp_suivi/';
const suiviStdPath = '/bp_suivi_std/';
const retourPath = '/bp_retour/';
const statusPath = "/status";
const keepAlivePath = "/keep_alive/";

function updateSpeed() {
    const speedInput = document.getElementById('speed');
    const speedValue = speedInput.value;
    alert(`Vitesse mise à jour : ${speedValue}`);
}

function syncSpeed() {
    const speedInput = document.getElementById('speed');
    const speedRange = document.getElementById('speedRange');
    speedInput.value = speedRange.value;
}

async function toogleSuiviStd(event){
    const url = defaultUrl + suiviStdPath + (event.target.checked ? 'on': 'off');
    const response = await fetch(url);
    if(!response.ok){
        alert('Une erreur est survenue');
    }
    console.log('Suivi standard '+ (event.target.checked ? 'activé' : 'désactivé'));
}



async function toogleSuivi(event){
    const url = defaultUrl + suiviPath + (event.target.checked ? 'on': 'off');
    const response = await fetch(url);
    if(!response.ok){
        alert('Une erreur est survenue');
    }
    console.log('Suivi '+ (event.target.checked ? 'activé' : 'désactivé'));
}


async function toogleRetour(event){
    const url = defaultUrl + retourPath + (event.target.checked ? 'on': 'off');
    const response = await fetch(url);
    if(!response.ok){
        alert('Une erreur est survenue');
    }
    console.log('retour '+ (event.target.checked ? 'activé' : 'désactivé'));
}