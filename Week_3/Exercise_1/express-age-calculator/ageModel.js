// ageModel.js
/**
 * calculateAge
 * @param {string} dobString – date of birth in "YYYY-MM-DD" format
 * @returns {number} age in whole years
 */

function calculateAge(dobString){
    const today = new Date();
    const dob = new Date(dobString);

    const age = today.getFullYear() - dob.getFullYear()

     // If birthday hasn’t happened yet this year, subtract 1
    const m = today.getMonth()  - dob.getMonth();
    const d = today.getDate()   - dob.getDate();
    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    }
    
    return age
}

module.exports= {calculateAge}