const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Obtener todos los productos
app.get('/api/productos', (req, res) => {
    res.json([{ id: 1, nombre: 'Producto 1', precio: 100 }]);
});

// Agregar un nuevo producto
app.post('/api/productos', (req, res) => {
    const nuevoProducto = req.body;
    res.status(201).json({ mensaje: 'Producto agregado', producto: nuevoProducto });
});

// Actualizar un producto
app.put('/api/productos/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensaje: `Producto ${id} actualizado` });
});

// Eliminar un producto
app.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensaje: `Producto ${id} eliminado` });
});