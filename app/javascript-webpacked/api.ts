import axios from 'axios'

export const api = axios.create({
  maxRedirects: 0,
  baseURL: '',
  headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')!.getAttribute('content') }
})
