const { divide } = require('./errorHandling');

// Example usage
try {
  const result = divide(10, 2);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}