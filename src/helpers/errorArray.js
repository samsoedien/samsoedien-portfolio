const errorArray = [
  { msg: 'no firstname', param: 'firstName', value: 'none' },
  { msg: 'invalid email', param: 'email', value: 'none' },
  { msg: 'no email', param: 'email', value: 'none' },
];

const errors = {
  email: '',
  firstName: '',
};

errorArray.forEach(element => {
  if (element.param === 'email') errors.email = element.msg;
  if (element.param === 'firstName') errors.firstName = element.msg;
});

console.log(errors);
