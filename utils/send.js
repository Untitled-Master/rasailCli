import axios from 'axios';

const apiUrl = 'http://10.136.140.67:5001/send';

function send(number, message) {
  if (typeof number !== 'string' || typeof message !== 'string') {
    throw new Error('Invalid input: both number and message should be strings');
  }

  return axios.post(apiUrl, {
    number,
    message
  })
  .then(response => {
    console.log('Message sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending message:', error.message);
  });
}

export default send;
