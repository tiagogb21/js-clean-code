interface SchoolInfo {
    grade: number;
    numberOfAbsences: number;
}

interface CheckIfStudentPassedTheSchoolYear {
    error: boolean;
    message: string;
}

const conditionToBeApproved: SchoolInfo = {
    grade: 7,
    numberOfAbsences: 100,
};

const message = {
    error: {
        default: 'Student was not approved because of his',
        grade: 'grade was below the necessary level',
        absence: 'absences',
    },
    success: 'Student was approved :)',
};

function formatErrorMessage(reason: string): string {
    return `${message.error.default} ${reason}`;
}

function checkIfStudentPassedTheSchoolYear(student: SchoolInfo): CheckIfStudentPassedTheSchoolYear {
    if (student.grade < conditionToBeApproved.grade) {
        return { error: true, message: formatErrorMessage(message.error.grade) };
    }

    if (student.numberOfAbsences > conditionToBeApproved.numberOfAbsences) {
        return { error: true, message: formatErrorMessage(message.error.absence) };
    }

    return { error: false, message: message.success };
}

const studentInfo: SchoolInfo = {
    grade: 10,
    numberOfAbsences: 109,
};

console.log(checkIfStudentPassedTheSchoolYear(studentInfo));
