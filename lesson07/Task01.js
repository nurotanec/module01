'use strict';

const filter = (allStudents, failedStudents) => {
    const finalArray = [];

    for (const elem of allStudents) {
        if (!failedStudents.includes(elem)) {
            finalArray.push(elem);
        }
    }

    return finalArray;
}

const allStudents = ['Ivanov', 'Petrov', 'Sidorov', 'Kuznetsov', 'Smirnoff', 'Popov', 'Sokolov'];
const failedStudents = ['Sidorov', 'Smirnoff', 'Popov'];

console.log(filter(allStudents, failedStudents));