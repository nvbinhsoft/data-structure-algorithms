// create a function reverse a string
function reverse(str: string): string {
    return str.split('').reverse().join('');
}

function reverse2(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const reverse3 = (str: string): string => str.split('').reduce((acc, char) => char + acc, '');

reverse("My name is Binh")
reverse2("My name is Binh")
reverse3("My name is Binh")
