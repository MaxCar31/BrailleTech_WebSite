/**
 * @fileoverview Este script inicializa un teclado virtual y configura los manejadores de eventos.
 */
import './src/css/style.css';
import VirtualKeyboard from './src/components/VirtualKeyboard';
import { initializeEventHandlers } from './src/handlers/eventHandlers';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar teclado virtual
    new VirtualKeyboard(
        'inputText',
        'brailleKeyboardLettersLowercase',
        'brailleKeyboardLettersUppercase',
        'brailleKeyboardLettersAccented',
        'brailleKeyboardNumbers',
        'brailleKeyboardSigns'
    );

    // Configurar manejadores de eventos
    initializeEventHandlers();

    // Añadir funcionalidad del botón Borrar
    const clearBtn = document.getElementById('clear');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    if (clearBtn && inputText && outputText) {
        clearBtn.addEventListener('click', () => {
            inputText.value = '';
            outputText.value = '';
        });
    }
});
