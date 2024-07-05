import brailleMap from '../data/brailleMap.js';

class VirtualKeyboard {
    constructor(inputElementId) {
        this.inputElement = document.getElementById(inputElementId);
        this.row1 = document.getElementById('row1');
        this.row2 = document.getElementById('row2');
        this.row3 = document.getElementById('row3');
        this.row4 = document.getElementById('row4');
        this.toggleCaseButton = document.getElementById('toggleCase');
        this.toggleNumbersButton = document.getElementById('toggleNumbers');
        this.brailleMap = brailleMap;
        this.isUppercase = false;
        this.isNumbers = false;
        this.qwertyLayout = {
            lowercase: [
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
                ['z', 'x', 'c', 'v', 'b', 'n', 'm']
            ],
            uppercase: [
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
                ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
            ],
            numbers: [
                ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                ['@', '#', '$', '%', '&', '*', '-', '+', '=', '/'],
                ['!', '"', "'", ':', ';', '(', ')', '?', '¿', '¡']
            ]
        };
        this.init();
    }

    createBrailleButton(char, braille) {
        const button = document.createElement('button');
        button.textContent = `${braille} [${char}]`;
        button.addEventListener('click', () => {
            this.inputElement.value += braille;
        });
        return button;
    }

    init() {
        this.toggleCaseButton.addEventListener('click', () => this.toggleCase());
        this.toggleNumbersButton.addEventListener('click', () => this.toggleNumbers());
        this.renderKeyboard();
    }

    toggleCase() {
        this.isUppercase = !this.isUppercase;
        this.renderKeyboard();
    }

    toggleNumbers() {
        this.isNumbers = !this.isNumbers;
        this.renderKeyboard();
    }

    renderKeyboard() {
        const layout = this.isNumbers ? this.qwertyLayout.numbers :
                        this.isUppercase ? this.qwertyLayout.uppercase :
                        this.qwertyLayout.lowercase;

        [this.row1, this.row2, this.row3].forEach((row, index) => {
            row.innerHTML = '';
            layout[index].forEach(char => {
                if (this.brailleMap[char]) {
                    row.appendChild(this.createBrailleButton(char, this.brailleMap[char]));
                }
            });
        });

        // Añadir botones especiales a la última fila
        this.row4.innerHTML = '';
        this.row4.appendChild(this.createBrailleButton('.', this.brailleMap['.']));
        this.row4.appendChild(this.createBrailleButton(',', this.brailleMap[',']));
    }
}

export default VirtualKeyboard;
