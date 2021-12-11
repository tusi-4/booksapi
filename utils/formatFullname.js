module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  // const [ firstName, lastName ] = fullName.split(' ');
  const names = fullName.split(' ');
  if(names.length > 2) return 'Error';
  const firstName = names[0];
  const lastName = names[1];
  if(!firstName || !lastName) return 'Error';
  let firstNameInitial = firstName.charAt(0).toUpperCase();
  let firstNameRest = firstName.substring(1).toLowerCase();
  let lastNameInitial = lastName.charAt(0).toUpperCase();
  let lastNameRest = lastName.substring(1).toLowerCase();
  return firstNameInitial + firstNameRest + ' ' + lastNameInitial + lastNameRest;
};
