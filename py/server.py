from flask import Flask, render_template
import os

# Obtenemos la ruta al directorio actual
current_dir = os.path.dirname(os.path.abspath(__file__))
# Establecemos la ruta a la carpeta de plantillas
template_dir = os.path.join(current_dir, '../templates')

# Establecemos la ruta a la carpeta de archivos estáticos
static_dir = os.path.join(current_dir, '../static')

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
