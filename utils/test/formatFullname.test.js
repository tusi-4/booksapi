const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(13)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if the format is wrong', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Test')).to.equal('Error');
  });

  it('should return name in correct letters case', () => {
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOhN dOe')).to.equal('John Doe');
    expect(formatFullname('jOHN dOE')).to.equal('John Doe');
  });
});