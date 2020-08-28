export default class ShippingCost {
  calculate(amount, province) {
    let nCost;
    switch (province) {
      case "ON":
        nCost = 	23.19+(amount -0.75)  * 0.8;
        break;
      case "MB":
        nCost = 	34.26+(amount -0.75)  * 3.5;
        break;
      case "AB":
        nCost = 53.32+(amount -0.75)  * 5;
        break;
      case "QC":
        nCost = 	28.37+(amount -0.75)  * 1.5;
        break;
      case "SK":
        nCost =45.44+(amount -0.75)  * 4.5;
        break;
      case "NS":
        nCost = 	34.26+ (amount -0.75)  * 3.5;
        break;
      case "PE":
        nCost =	44.11+ (amount -0.75)  * 3.1;
        break;
      default:
        throw "unimplemented";
    }
    return nCost.toFixed(2);
  }
}
