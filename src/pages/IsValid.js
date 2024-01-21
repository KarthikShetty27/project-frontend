// IsValid.js

const IsValid = (formData) => {
  // Implement your form validation logic here
  const errors = {};

  // Age validation
  if (!formData.age || formData.age < 19 || formData.age > 26) {
    errors.age = 'Age must be between 19 and 26';
  }

  // Socioeconomic Background validation
  if (!formData.seb) {
    errors.seb = 'Socioeconomic Background is required';
  }

  // SSC Marks validation
  if (!formData.sscMarks || isNaN(formData.sscMarks) || formData.sscMarks < 0 || formData.sscMarks > 100) {
    errors.sscMarks = 'SSC Marks must be a number between 0 and 100';
  }

  // HSC Marks validation
  if (formData.hscMarks && (isNaN(formData.hscMarks) || formData.hscMarks < 0 || formData.hscMarks > 100)) {
    errors.hscMarks = 'HSC Marks must be a number between 0 and 100';
  }

  // MHTCET Marks validation
  if (formData.mhtcetMarks && (isNaN(formData.mhtcetMarks) || formData.mhtcetMarks < 0 || formData.mhtcetMarks > 100)) {
    errors.mhtcetMarks = 'MHTCET Marks must be a number between 0 and 100';
  }

  // JEE Mains Marks validation
  if (formData.jeeMarks && (isNaN(formData.jeeMarks) || formData.jeeMarks < 0 || formData.jeeMarks > 100)) {
    errors.jeeMarks = 'JEE Mains Marks must be a number between 0 and 100';
  }

  // Log errors
  if (Object.keys(errors).length > 0) {
    console.error('Form Validation Errors:', errors);
    return false;
  }

  // If no errors, log the form data
  console.log('Form Data:', formData);

  // You can return true or false based on validation result
  return true;
};

export default IsValid;
