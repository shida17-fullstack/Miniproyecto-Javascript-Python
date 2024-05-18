document.addEventListener("DOMContentLoaded", function () {
    const drawButton = document.getElementById("drawButton");
    const eraseButton = document.getElementById("eraseButton");
    const canvas = document.getElementById("paintCanvas");
    const ctx = canvas.getContext("2d");
    let painting = false;
    let erasing = false;
    let lineas = [];
    let correccionX = 0;
    let correccionY = 0;
    let nuevaPosicionX = 0;
    let nuevaPosicionY = 0;

    function ajustarCorreccion() {
        const posicion = canvas.getBoundingClientRect();
        correccionX = posicion.left;
        correccionY = posicion.top;
    }

    function getMousePos(event) {
        let rect = canvas.getBoundingClientRect();
        if (event.touches) {
            return {
                x: (event.touches[0].clientX - rect.left) * (canvas.width / rect.width),
                y: (event.touches[0].clientY - rect.top) * (canvas.height / rect.height)
            };
        } else {
            return {
                x: (event.clientX - rect.left) * (canvas.width / rect.width),
                y: (event.clientY - rect.top) * (canvas.height / rect.height)
            };
        }
    }

    function empezarDibujo(event) {
        event.preventDefault();
        if (erasing) return;
        painting = true;
        lineas.push([]);
        let mousePos = getMousePos(event);
        nuevaPosicionX = mousePos.x;
        nuevaPosicionY = mousePos.y;
        guardarLinea();
    }

    function guardarLinea() {
        if (lineas.length > 0) {
            lineas[lineas.length - 1].push({
                x: nuevaPosicionX,
                y: nuevaPosicionY
            });
        }
    }

    function dibujarLinea(event) {
        event.preventDefault();
        if (!painting || erasing) return;
        let mousePos = getMousePos(event);
        nuevaPosicionX = mousePos.x;
        nuevaPosicionY = mousePos.y;
        guardarLinea();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#000000';
        ctx.beginPath();
        lineas.forEach(function (segmento) {
            if (segmento.length > 0) {
                ctx.moveTo(segmento[0].x, segmento[0].y);
                segmento.forEach(function (punto) {
                    ctx.lineTo(punto.x, punto.y);
                });
            }
        });
        ctx.stroke();
    }

    function pararDibujar(event) {
        if (!painting) return;
        painting = false;
        guardarLinea();
    }

    function borrarLienzo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lineas = [];
    }

    drawButton.addEventListener("click", () => {
        erasing = false;
        painting = true;
        canvas.style.cursor = 'crosshair';
    });

    eraseButton.addEventListener("click", () => {
        painting = false;
        erasing = true;
        borrarLienzo();
        canvas.style.cursor = 'default';
    });

    // Eventos de ratón
    canvas.addEventListener('mousedown', empezarDibujo, false);
    canvas.addEventListener('mousemove', dibujarLinea, false);
    canvas.addEventListener('mouseup', pararDibujar, false);

    // Eventos táctiles
    canvas.addEventListener('touchstart', empezarDibujo, false);
    canvas.addEventListener('touchmove', dibujarLinea, false);
    canvas.addEventListener('touchend', pararDibujar, false);

    // Ajustar corrección de la posición del canvas cuando se redimensiona la ventana
    window.addEventListener('resize', ajustarCorreccion);
    ajustarCorreccion();
});
