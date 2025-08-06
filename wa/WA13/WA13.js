//Problem 1
const John = {
    name:"John",
    department:"Tech",
    designation:"Manager",
    salary:"40000",
    raiseeligible:"true"
}

const Mary = {
    name:"Mary",
    department:"Finance",
    designation:"Trainee",
    salary:"18500",
    raiseeligible:"true"
}

const Bill = {
    name:"Bill",
    department:"HR",
    designation:"Executive",
    salary:"21200",
    raiseeligible:"false"
}

console.log(John, Mary, Bill);
//Problem 2
const company = {
    companyName:"Tech Stars",
    website:"www.techstars.site",
    employees: [John, Mary, Bill]
}

console.log(company);

//Problem 3
const Anna = {
    name:"Anna",
    department:"Tech",
    designation:"Executive",
    salary:"25600",
    raiseeligible:"false"
}

company.employees.push(Anna);

console.log(company);

//Problem 4
let totalSalary = 0;
for(let i=0; i<company.employees.length; i++){
    console.log(company.employees.at(i).salary);
    totalSalary = totalSalary + Number(company.employees.at(i).salary);
}

console.log(totalSalary);

//Problem 5
function giveRaises(anyCompany){
    for(let i=0; i<anyCompany.employees.length; i++){
        if(anyCompany.employees.at(i).raiseeligible.toLowerCase() == "true"){
            anyCompany.employees.at(i).raiseeligible = "false";
            company.employees.at(i).salary = (Number(company.employees.at(i).salary) + Number(company.employees.at(i).salary)/10).toString();
        }
    }
    return anyCompany;
}
giveRaises(company);
console.log(company);

//Problem 6
const workingFromHome = ['Anna', 'Sam'];
const nameSet = new Set(workingFromHome); //found this data structure online!
const matchedEmployees = company.employees.filter(emp => nameSet.has(emp.name));

company.employees.forEach(employee => {
    employee.wfh = nameSet.has(employee.name); //this returns true or false to set wfh to, depending on if the name exists!
});


console.log(company);