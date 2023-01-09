function Convert(value) {
    let Values = {
        'Kilograms': 1000,
        'Pounds': 453.59,
        'Ounces': 28.35,
        'Grams': 1,
        'Stones': 1574
    };

    let ValueConvertFrom = document.getElementById("SelectConvertFrom").value;
    let ValueInGrams = value * Values[ValueConvertFrom];
    let ValueConvertTo = document.getElementById("SelectConvertTo").value;

    document.getElementById("ConvertTo").innerHTML = +(ValueInGrams / Values[ValueConvertTo]).toFixed(4)
}