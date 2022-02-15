import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<div class="header">
    <button>Start</button>
    <div>Level: <span id="level"></span></button>
    <div>Record: <span id="record"></span></button>
    <button>start</button>
</div>
<div class="board">
    <div class="key key-1"></div>
    <div class="key key-2"></div>
    <div class="key key-3"></div>
    <div class="key key-4"></div>
</div>

`
const keys = {
    key1: document.querySelector<HTMLDivElement>('.key-1')!,
    key2: document.querySelector<HTMLDivElement>('.key-2')!,
    key3: document.querySelector<HTMLDivElement>('.key-3')!,
    key4: document.querySelector<HTMLDivElement>('.key-4')!
};

const values: number[] = [];
const userValues: number[] = [];

const createNewValue = () => {
    values.push(Math.floor(Math.random() * (4 - 1 + 1) + 1));
    console.log(values);
}

const inputNewValue = (input: number) => {
    userValues.push(input);
    console.log(userValues);
}

const start = document.querySelector<HTMLDivElement>('button')!
start.addEventListener('click', () => {
    createNewValue();
})

keys.key1.addEventListener('mousedown', () => {
    keys.key1.classList.add('clicked');
    inputNewValue(1);
})
keys.key1.addEventListener('mouseup', () => {
    keys.key1.classList.remove('clicked');
})

keys.key2.addEventListener('mousedown', () => {
    keys.key2.classList.add('clicked');
    inputNewValue(2);
})
keys.key2.addEventListener('mouseup', () => {
    keys.key2.classList.remove('clicked');
})

keys.key3.addEventListener('mousedown', () => {
    keys.key3.classList.add('clicked');
    inputNewValue(3);
})
keys.key3.addEventListener('mouseup', () => {
    keys.key3.classList.remove('clicked');
})

keys.key4.addEventListener('mousedown', () => {
    keys.key4.classList.add('clicked');
    inputNewValue(4);
})
keys.key4.addEventListener('mouseup', () => {
    keys.key4.classList.remove('clicked');
})

