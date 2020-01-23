const defangIPaddr = (address) => {
    let res  = address.replace(/[.]/g, "[.]");
    return res;
}

// other answer
const defangIPaddr = (address) => {
    let res = address.split('.').join('[.]');
    return res;
}

defangIPaddr("255.100.50.0");