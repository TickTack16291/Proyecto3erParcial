document.addEventListener('DOMContentLoaded', () => {
    const pageName = window.location.pathname.split('/').pop().replace('.html', '');
    const forumContainer = document.getElementById('forum-container');
    const formWrapper = document.getElementById('forum-form-wrapper');
    
    if(!forumContainer || !formWrapper) return;

    // Load topics
    const loadTopics = () => {
        fetch(`php/obtener_temas.php?pagina=${pageName}&t=${Date.now()}`, { credentials: 'same-origin' })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    forumContainer.innerHTML = '';
                    if(data.temas.length === 0) {
                        forumContainer.innerHTML = '<p>No hay temas en este foro aún. ¡Inicia una discusión!</p>';
                        return;
                    }

                    data.temas.forEach(t => {
                        const article = document.createElement('article');
                        article.className = 'forum-card';
                        article.style.cursor = 'pointer'; // Make it look clickable
                        article.innerHTML = `
                            <h3>${escapeHTML(t.titulo)}</h3>
                            <p>${escapeHTML(t.mensaje)}</p>
                            <span class="forum-meta">Por ${escapeHTML(t.nombre)} · ${t.respuestas_count} respuestas · ${new Date(t.fecha_creacion).toLocaleString()}</span>
                            <div class="respuestas-container" id="respuestas-${t.id}" style="display:none; margin-top:15px; padding-top:15px; border-top:1px solid var(--border);">
                            </div>
                        `;
                        
                        // Toggle replies on click
                        article.addEventListener('click', (e) => {
                            // Prevent triggering if clicked inside replies container (like on an input)
                            if (e.target.closest('.respuestas-container')) return;
                            
                            const respContainer = document.getElementById(`respuestas-${t.id}`);
                            if (respContainer.style.display === 'none') {
                                loadReplies(t.id, respContainer);
                                respContainer.style.display = 'block';
                            } else {
                                respContainer.style.display = 'none';
                            }
                        });

                        forumContainer.appendChild(article);
                    });
                }
            });
    };

    // Load replies for a specific topic
    const loadReplies = (temaId, container) => {
        container.innerHTML = '<p style="color:var(--muted)">Cargando respuestas...</p>';
        fetch(`php/obtener_respuestas.php?tema_id=${temaId}&t=${Date.now()}`, { credentials: 'same-origin' })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    let html = '';
                    if(data.respuestas.length === 0) {
                        html += '<p style="color:var(--muted); font-size:0.9rem;">Nadie ha respondido aún.</p>';
                    } else {
                        data.respuestas.forEach(r => {
                            html += `
                                <div style="margin-bottom: 10px; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
                                    <strong>${escapeHTML(r.nombre)}</strong> <span style="font-size:0.8rem; color:var(--muted)">${new Date(r.fecha_respuesta).toLocaleString()}</span>
                                    <p style="margin:5px 0 0; font-size:0.95rem;">${escapeHTML(r.contenido)}</p>
                                </div>
                            `;
                        });
                    }

                    // Add reply form if user is logged in
                    fetch('php/sesion.php?t=' + Date.now(), { credentials: 'same-origin' })
                        .then(res => res.json())
                        .then(sessionData => {
                            if(sessionData.success) {
                                html += `
                                    <form class="reply-form" data-tema-id="${temaId}" style="margin-top:10px; display:flex; gap:10px;">
                                        <input type="text" required placeholder="Escribe una respuesta..." style="flex:1;">
                                        <button type="submit" style="padding: 8px 16px;">Responder</button>
                                    </form>
                                `;
                            } else {
                                html += `<p style="font-size:0.85rem; color:var(--accent); margin-top:10px;">Inicia sesión para responder.</p>`;
                            }
                            container.innerHTML = html;

                            // Attach event listener to new form (if exists)
                            const replyForm = container.querySelector('.reply-form');
                            if(replyForm) {
                                replyForm.addEventListener('submit', (e) => {
                                    e.preventDefault();
                                    const replyText = replyForm.querySelector('input').value;
                                    
                                    fetch('php/responder_tema.php', {
                                        method: 'POST',
                                        credentials: 'same-origin',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ tema_id: temaId, contenido: replyText })
                                    })
                                    .then(res => res.json())
                                    .then(resData => {
                                        if(resData.success) {
                                            loadReplies(temaId, container); // Reload replies
                                            loadTopics(); // Recargar topicos indirectamente también refresca el conteo, the UX could be optimized but this is safe
                                        }
                                    });
                                });
                            }
                        });
                }
            });
    };

    loadTopics();

    // Check if we need to show the logic to Create a NEW Topic
    fetch('php/sesion.php?t=' + Date.now(), { credentials: 'same-origin' })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                formWrapper.innerHTML = `
                    <form class="forum-form" id="create-topic-form" style="margin-top: 20px;">
                        <label>
                            Nuevo tema (Publicando como ${data.nombre}):
                            <input type="text" id="nuevo-tema-titulo" required placeholder="Título del tema">
                        </label>
                        <label>
                            Mensaje
                            <textarea id="nuevo-tema-mensaje" rows="4" required placeholder="Escribe tu pregunta o comentario inicial"></textarea>
                        </label>
                        <button type="submit">Crear tema</button>
                        <p id="foro-mensaje"></p>
                    </form>
                `;

                document.getElementById('create-topic-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const titulo = document.getElementById('nuevo-tema-titulo').value;
                    const mensaje = document.getElementById('nuevo-tema-mensaje').value;
                    
                    fetch('php/crear_tema.php', {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ pagina: pageName, titulo: titulo, mensaje: mensaje })
                    })
                    .then(res => res.json())
                    .then(resData => {
                        const msg = document.getElementById('foro-mensaje');
                        if(resData.success) {
                            msg.style.color = "lightgreen";
                            msg.textContent = resData.message;
                            document.getElementById('nuevo-tema-titulo').value = '';
                            document.getElementById('nuevo-tema-mensaje').value = '';
                            loadTopics();
                        } else {
                            msg.style.color = "#ff6b6b";
                            msg.textContent = resData.message;
                        }
                    });
                });
            } else {
                formWrapper.innerHTML = '<p style="color:var(--accent); margin-top:20px;"><a href="login.html">Inicia sesión</a> para crear un nuevo tema en el foro.</p>';
            }
        });

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.innerText = str;
        return div.innerHTML;
    }
});