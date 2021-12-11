module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  // const [ firstName, lastName ] = fullName.split(' ');
  const names = fullName.split(' ');
  if(names.length > 2) return 'Error';
  const firstName = names[0];
  const lastName = names[1];
  if(!firstName || !lastName) return 'Error';
  return firstName.charAt(0).toUpperCase + firstName.substr(1).toLowerCase() + lastName.charAt(0).toUpperCase + lastName.substr(1).toLowerCase() ;
};
