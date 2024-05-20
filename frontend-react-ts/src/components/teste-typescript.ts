interface User {
    name: string;
    bio: string;
    age: number;
}

function sumAge(users: User[]) {
    let sum = 0;
    
    for (const user of users) {
        sum += user.age;
    }
    
    return sum;
}

const sumOfAllUserAges = sumAge([
    {
        name: 'Guilherme Jansen',
        bio: 'Web Developer',
        age: 31
    }
])

console.log('sumOfAllUserAges')