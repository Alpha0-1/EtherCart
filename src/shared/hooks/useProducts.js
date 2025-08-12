import { useEffect, useState } from 'react';
import { getProducts } from '../services/api/productService.js';

export function useProducts() {
  const [data, setData] = useState([]);
  useEffect(() => { getProducts().then(setData).catch(console.error); }, []);
  return data;
}

