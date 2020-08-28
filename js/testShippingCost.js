import ShippingCost from "./ShippingCost.js";

QUnit.test("a basic test example", function (assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});
QUnit.test("Ontario Shipping Cost", function (assert) {
  const oShippingCost = new ShippingCost();
  assert.equal(
    oShippingCost.calculate(10, "ON"),
    30.59,
    "We expect ShippingCost to be 30.59"
  );
});
QUnit.test("Alberta Shipping Cost", function (assert) {
  const oShippingCost = new ShippingCost();
  assert.equal(
    oShippingCost.calculate(10, "AB"),
    99.57,
    "We expect ShippingCost to be $ 99.57"
  );
});
QUnit.test("Saskatchewan Shipping Cost", function (assert) {
  const oShippingCost = new ShippingCost();
  assert.equal(
    oShippingCost.calculate(10, "SK"),
    87.06,
    "We expect ShippingCost to be $87.06"
  );
});
QUnit.test("Asdf Shipping Cost", function (assert) {
  const oShippingCost = new ShippingCost();
  try {
    oHst.calculate(10, "ASdf");
    assert.equal(
      true,
      false,
      "We expect ShippingCost for asdf to throw an exception"
    );
  } catch (e) {
    assert.equal(
      e,
      "unimplemented",
      "We expect a bad province to throw an unimplemented exception"
    );
  }
  QUnit.test("Manitoba", function (assert) {
    const oShippingCost = new ShippingCost();
    assert.equal(
      oShippingCost.calculate(10, "MB"),
      66.63,
      "We expect ShippingCost to be $66.63"
    );
  });
  QUnit.test("Quebec", function (assert) {
    const oShippingCost = new ShippingCost();
    assert.equal(
      oShippingCost.calculate(10, "QC"),
     42.25,
      "We expect ShippingCost to be $42.25"
    );
  });
});
QUnit.test("NovaScotia Shipping Cost", function (assert) {
  const oShippingCost = new ShippingCost();
  assert.equal(
    oShippingCost.calculate(10, "NS"),
    66.63,
    "We expect ShippingCost to be $66.63"
  );
});
QUnit.test("PrinceEdward Shipping Cost", function (assert) {
  const oShippingCost = new ShippingCost();
  assert.equal(
    oShippingCost.calculate(10, "PE"),
    72.78,
    "We expect ShippingCost to be $72.78"
  );
});
