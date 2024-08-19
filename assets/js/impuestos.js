// assets/js/impuestos.js
export const calcularImpuesto = (proveedor) => {
    const tasaImpuesto = 0.15; // Ejemplo de tasa de impuesto
    return proveedor.precio * tasaImpuesto;
};
