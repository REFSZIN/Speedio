import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#fafafa', 
        secondary: '#016699', 
        background: '#212121', 
      },
    },
  },
});