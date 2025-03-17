let n = prompt("Nhập một số n:");
let flag = (Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n))) ? 1 : 0;
alert((flag==1) ? `${n} là số chính phương` : `${n} không phải là số chính phương`);