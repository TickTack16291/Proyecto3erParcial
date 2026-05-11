document.addEventListener('DOMContentLoaded', () => {
    checkSession();

    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const registroForm = document.getElementById('registro-form');
    if(registroForm) {
        registroForm.addEventListener('submit', handleRegistro);
    }
});

// Comprobar si el usuario tiene sesión persistente
function checkSession() {
    fetch('php/sesion.php')
        .then(res => res.json())
        .then(data => {
            const navRight = document.querySelectorAll('.nav-right'); 
            // Esto actualiza todos los .nav-right en la página.
            navRight.forEach(nav => {
                if(data.success) {
                    nav.innerHTML = `
                        <span style="color: var(--accent); margin-right: 15px;">Hola, ${data.nombre}</span>
                        <a href="#" onclick="logout(event)">Cerrar Sesión</a>
                    `;
                } else {
                    nav.innerHTML = `
                        <a href="login.html">Iniciar Sesion</a>
                    `;
                }
            });
        })
        .catch(error => console.error('Error verificando sesión:', error));
}

// Manejar el submit del login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('login-message');

    fetch('php/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email, contrasena: password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            messageEl.style.color = 'lightgreen';
            messageEl.textContent = data.message;
            setTimeout(() => {
                window.location.href = 'index.html'; // redirigir
            }, 1000);
        } else {
            messageEl.style.color = '#ff6b6b';
            messageEl.textContent = data.message;
        }
    })
    .catch(err => {
        messageEl.style.color = '#ff6b6b';
        messageEl.textContent = 'Error de conexión con el servidor.';
    });
}

// Manejar el submit del registro
function handleRegistro(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('registro-message');

    fetch('php/registro.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nombre, correo: email, contrasena: password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            messageEl.style.color = 'lightgreen';
            messageEl.textContent = data.message + " Redirigiendo a Login...";
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            messageEl.style.color = '#ff6b6b';
            messageEl.textContent = data.message;
        }
    })
    .catch(err => {
        messageEl.style.color = '#ff6b6b';
        messageEl.textContent = 'Error de conexión con el servidor.';
    });
}

// Función global de Logout
window.logout = function(e) {
    e.preventDefault();
    fetch('php/logout.php')
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                window.location.reload(); // Recargar para limpiar UI
            }
        });
};