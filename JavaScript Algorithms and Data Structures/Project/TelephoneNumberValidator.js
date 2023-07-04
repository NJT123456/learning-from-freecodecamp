function telephoneCheck(str) {
    // Regular expression to match valid phone number patterns
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    return regex.test(str);
}
