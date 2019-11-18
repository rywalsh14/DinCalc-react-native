const DIN_TABLE = [
    [0.75,  0.75,  0.75,  0,     0,     0,     0,     0   ],
    [1,     0.75,  0.75,  0.75,  0,     0,     0,     0   ],
    [1.5,   1.25,  1.25,  1,     0,     0,     0,     0   ],
    [2,     1.75,  1.5,   1.5,   1.25,  0,     0,     0   ],
    [2.5,   2.25,  2,     1.75,  1.5,   1.5,   0,     0   ],
    [3,     2.75,  2.5,   2.25,  2,     1.75,  1.75,  0   ],
    [0,     3.5,   3,     2.75,  2.5,   2.25,  2,     0   ],
    [0,     0,     3.5,   3,     3,     2.75,  2.5,   0   ],
    [0,     0,     4.5,   4,     3.5,   3.5,   3,     0   ],
    [0,     0,     5.5,   5,     4.5,   4,     3.5,   3   ],
    [0,     0,     6.5,   6,     5.5,   5,     4.5,   4   ],
    [0,     0,     7.5,   7,     6.5,   6,     5.5,   5   ],
    [0,     0,     0,     8.5,   8,     7,     6.5,   6   ],
    [0,     0,     0,     10,    9.5,   8.5,   8,     7.5 ],
    [0,     0,     0,     11.5,  11,    10,    9.5,   9   ],
    [0,     0,     0,     0,     0,     12,    11,    10.5]
];

const ROW_NUM_TO_LETTER = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P'
};

const getColumn = (soleLength) => {
    switch(true) {
        case (soleLength <= 230):
            return 0;
        case (soleLength <= 250):
            return 1;
        case (soleLength <= 270):
            return 2;
        case (soleLength <= 290):
            return 3;
        case (soleLength <= 310):
            return 4;
        case (soleLength <= 330):
            return 5;
        case (soleLength <= 350):
            return 6;
        case (soleLength > 350):
            return 7;
        default:
            return -1;
    }
};

const getHeightRow = (heightFeet, heightInches) => {
    const totalHeightInInches = 12 * heightFeet + heightInches;
    switch (true) {
        case (totalHeightInInches) <= 58:
            return 7;
        case (totalHeightInInches) <= 61:
            return 8;
        case (totalHeightInInches) <= 65:
            return 9;
        case (totalHeightInInches) <= 70:
            return 10;
        case (totalHeightInInches) <= 76:
            return 11;
        case (totalHeightInInches) >= 77:
            return 12;
        default:
            return -1;
    }
};

const getWeightRow = (weight) => {
    switch (true) {
        case (weight) < 22:
            return -1;
        case (weight) <= 29:
            return 0;
        case (weight) <= 38:
            return 1;
        case (weight) <= 47:
            return 2;
        case (weight) <= 56:
            return 3;
        case (weight) <= 66:
            return 4;
        case (weight) <= 78:
            return 5;
        case (weight) <= 91:
            return 6;
        case (weight) <= 107:
            return 7;
        case (weight) <= 125:
            return 8;
        case (weight) <= 147:
            return 9;
        case (weight) <= 174:
            return 10;
        case (weight) <= 209:
            return 11;
        case (weight) > 209:
            return 12;
        default:
            return -1;
    }
};

const adjustRowForAge = (age, row) => {
    return (age < 10 || age > 49)
        ? row-1
        : row;
};

const adjustRowForSkierType = (skierType, row) => {
    switch(skierType) {
        case ('II'):
            return row + 1;
        case ('III'):
            return row + 2;
        default:
            return row;
    }
};

const calculateDin = (
    height,
    weight,
    age,
    soleLength,
    skierType
) => {
    const column = getColumn(soleLength);
    let row = Math.min(getHeightRow(height.feet, height.inches), getWeightRow(weight));

    row = adjustRowForAge(age, row);
    row = adjustRowForSkierType(skierType.value, row)

    return {
        value: DIN_TABLE[row][column],
        rowLetter: ROW_NUM_TO_LETTER[row]
    };
};

export default calculateDin;