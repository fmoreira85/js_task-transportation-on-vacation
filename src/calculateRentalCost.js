/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= 1) {
    return 40;
  }

   if (days >= 7) {
    return days - 50;
  }

   if (days >=  3) {
    return 20;
  }

}

module.exports = calculateRentalCost;
