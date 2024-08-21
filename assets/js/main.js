import { TipoProveedor } from './tipoProveedor.js';

const proveedores = [];

// Validar que el campo solo contenga letras y espacios
const validarSoloLetras = (texto) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(texto);
};

// Validar que el campo sea un email válido
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Validar que el número de teléfono comience con un signo más y contenga solo números
const validarTelefono = (telefono) => {
    const regex = /^\+\d+$/;
    return regex.test(telefono);
};

const registrarProveedor = () => {
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const articuloProveedor = document.getElementById('articuloProveedor').value;
    const precioProveedor = parseFloat(document.getElementById('precioProveedor').value);
    const paisProveedor = document.getElementById('paisProveedor').value;
    const emailProveedor = document.getElementById('emailProveedor').value;
    const telefonoProveedor = document.getElementById('telefonoProveedor').value;
    const esInternacional = document.getElementById('internacionalProveedor').checked;

    // Validaciones
    if (!validarSoloLetras(nombreProveedor)) {
        alert('El nombre del proveedor solo puede contener letras y espacios.');
        return;
    }
    if (!validarSoloLetras(articuloProveedor)) {
        alert('El nombre del artículo solo puede contener letras y espacios.');
        return;
    }
    if (!validarEmail(emailProveedor)) {
        alert('Por favor, ingrese un email válido.');
        return;
    }
    if (!validarTelefono(telefonoProveedor)) {
        alert('El teléfono debe comenzar con "+" y contener solo números.');
        return;
    }
    if (!validarSoloLetras(paisProveedor)) {
        alert('El país solo puede contener letras y espacios.');
        return;
    }

    // Crear instancia de Proveedor
    const nuevoProveedor = new TipoProveedor(nombreProveedor, articuloProveedor, precioProveedor, paisProveedor, esInternacional);
    nuevoProveedor.email = emailProveedor;
    nuevoProveedor.telefono = telefonoProveedor;

    // Agregar el proveedor a la lista y actualizar la tabla
    proveedores.push(nuevoProveedor);
    actualizarTablaProveedores();
    document.getElementById('proveedorForm').reset();
};

// Función para mostrar los proveedores en la tabla
const actualizarTablaProveedores = () => {
    const tabla = document.getElementById('tablaProveedores').getElementsByTagName('tbody')[0];
    tabla.innerHTML = ''; // Limpiar la tabla

    proveedores.forEach((proveedor) => {
        const row = tabla.insertRow();
        row.innerHTML = `
            <td>${proveedor.nombre}</td>
            <td>${proveedor.articulo}</td>
            <td>${proveedor.precio}</td>
            <td>${proveedor.pais}</td>
            <td>${proveedor.email}</td>
            <td>${proveedor.telefono}</td>
            <td>${proveedor.esInternacional ? 'Internacional' : 'Nacional'}</td>
        `;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registroBtn').addEventListener('click', registrarProveedor);
});
