
import { DEVICE_SPECS } from './src/constants/deviceSpecs';

const keys = Object.keys(DEVICE_SPECS);
const uniqueKeys = new Set(keys);
console.log(uniqueKeys.size);
