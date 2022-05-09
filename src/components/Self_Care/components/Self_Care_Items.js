const BMI = require('../../../assets/BMI.jpg');
const BMR = require('../../../assets/BMR.jpg');
const BFP = require('../../../assets/BFP.jpg');
const WHR = require('../../../assets/WHR.jpg');
const ABSI = require('../../../assets/ABSI.jpg');
const TDEE = require('../../../assets/TDEE.jpg');
export const SelfCareItems =[
    {
        title : 'Body Mass Index',
        image : BMI,
        des : 'Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.',
        url :'/Self_Care/BMI'

    },
    {
        title : 'Basal Metabolic Rate',
        image : BMR,
        des : 'BMR is a minimum number of calories required for basic functions at rest, RMR — also called resting energy expenditure (REE) — is the number of calories that your body burns while it’s at rest.',
        url :'/Self_Care/BMR'

    },
    
    {
        title : 'Body Fat Percentage',
        image : BFP,
        des : 'Body fat percentage is the percent of fat that makes up your total body weight.',
        url :'/Self_Care/BFP'

    },
    // {
    //     title : 'Total Daily Energy Expenditure',
    //     image : TDEE,
    //     des : 'It is the total energy that a person uses in a day. TDEE is hard to measure accurately and varies day by day. More often, it is estimated using factors such as a persons basal metabolic rate (BMR), activity level, and the thermic effect of food.',
    //     url :'/Self_Care/TDEE'

    // },

]