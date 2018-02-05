import axios from 'axios';

const config = { headers: { 'Content-Type': 'multipart/form-data' } };
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

export const callClient = axios.create({});
export const callMultiPartAjax = axios.create({ config });