document.addEventListener('DOMContentLoaded', () => {
    const pageName = window.location.pathname.split('/').pop().replace('.html', '');
    const commentsContainer = document.querySelector('.comments');
    const form = document.querySelector('.comment-form');
    
    if(!commentsContainer || !form) return;

    let currentUserId = null;

    // Check session first to get currentUserId
    const initApp = () => {
        return fetch('php/sesion.php?t=' + Date.now(), { credentials: 'same-origin' })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    currentUserId = data.usuario_id; // Need to make sure session.php returns usuario_id
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
                            credentials: 'same-origin',
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
    };

    // Remove the default form inputs for unloggedIn users by checking their session
    const loadComments = () => {
        fetch(`php/obtener_comentarios.php?pagina=${pageName}&t=${Date.now()}`, { credentials: 'same-origin' })
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
                        
                        let actionButtons = '';
                        if(currentUserId && c.usuario_id === currentUserId) {
                            actionButtons = `
                                <div style="margin-top:10px;">
                                    <button class="btn-xs" style="background:var(--accent); margin-right:5px;" onclick="editComment(${c.id}, '${escapeHTML(c.contenido).replace(/'/g, "\\'")}')">Editar</button>
                                    <button class="btn-xs" style="background:#ff4d4d;" onclick="deleteComment(${c.id})">Eliminar</button>
                                </div>
                            `;
                        }

                        article.innerHTML = `
                            <h3>${escapeHTML(c.nombre)}</h3>
                            <p>${escapeHTML(c.contenido)}</p>
                            <small class="forum-meta">${new Date(c.fecha_publicacion).toLocaleString()}</small>
                            ${actionButtons}
                        `;
                        commentsContainer.appendChild(article);
                    });
                }
            });
    };

    initApp().then(() => {
        loadComments();
    });

    window.editComment = (id, oldContent) => {
        const newContent = prompt('Edita tu comentario:', oldContent);
        if(newContent !== null && newContent.trim() !== '' && newContent !== oldContent) {
            fetch('php/editar_comentario.php', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id, contenido: newContent })
            }).then(res => res.json()).then(data => {
                if(data.success) {
                    loadComments();
                } else {
                    alert(data.message);
                }
            });
        }
    };

    window.deleteComment = (id) => {
        if(confirm('¿Seguro que deseas eliminar este comentario?')) {
            fetch('php/eliminar_comentario.php', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id })
            }).then(res => res.json()).then(data => {
                if(data.success) {
                    loadComments();
                } else {
                    alert(data.message);
                }
            });
        }
    };

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.innerText = str;
        return div.innerHTML;
    }
});