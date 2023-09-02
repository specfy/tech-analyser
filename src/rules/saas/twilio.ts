import { register } from '../../register.js';

register({
  tech: 'twilio',
  name: 'Twilio',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'twilio' },
    { type: 'npm', name: /^@twilio\//, example: '@twilio/cli-core' },
  ],
});