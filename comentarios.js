document.addEventListener('DOMContentLoaded', () => {
    const pageName = window.location.pathname.split('/').pop().replace('.html', '');
    const commentsContainer = document.querySelector('.comments');
    const form = document.querySelector('.comment-form');
    
    if(!commentsContainer || !form) return;

    // Remove the default form inputs for unloggedIn users by checking their session
    const loadComments = () => {
        fetch(`php/obtener_comentarios.php?pagina=${pageName}`)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    commentsContainer.innerHTML = '';
                    if(data.comentarios.length === 0) {
                        commentsContainer.innerHTML = '<p>No hay comentarios aún. ¡Sé el primero!</p>';
                        return;
                    }

                    data.comentarios.forEach(c => {
                        const article = document.createElement('article');
                        article.className = 'comment-card';
                        article.innerHTML = `
                            <h3>${escapeHTML(c.nombre)}</h3>
                            <p>${escapeHTML(c.contenido)}</p>
                            <small class="forum-meta">${new Date(c.fecha_publicacion).toLocaleString()}</small>
                        `;
                        commentsContainer.appendChild(article);
                    });
                }
            });
    };

    loadComments();

    // Check if we need to let them use the add-comment form based on session
    fetch('php/sesion.php')
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                // Modificamos el form para ocultar el nombre, ya que ya sabemos quien es
                form.innerHTML = `
                    <label>
                        Comentario (como ${data.nombre}):
                        <textarea id="nuevo-comentario" rows="4" placeholder="Escribe tu comentario"></textarea>
                    </label>
                    <button type="submit">Publicar comentario</button>
                    <p id="comentario-mensaje"></p>
                `;

                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const contenido = document.getElementById('nuevo-comentario').value;
                    
                    fetch('php/comentar.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ pagina: pageName, contenido: contenido })
                    })
                    .then(res => res.json())
                    .then(resData => {
                        const msg = document.getElementById('comentario-mensaje');
                        if(resData.success) {
                            msg.style.color = "lightgreen";
                            msg.textContent = resData.message;
                            document.getElementById('nuevo-comentario').value = '';
                            loadComments(); // recargar
                        } else {
                            msg.style.color = "#ff6b6b";
                            msg.textContent = resData.message;
                        }
                    });
                });
            } else {
                form.innerHTML = '<p style="color:var(--accent)"><a href="login.html">Inicia sesión</a> para poder dejar un comentario.</p>';
            }
        });

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.innerText = str;
        return div.innerHTML;
    }
});