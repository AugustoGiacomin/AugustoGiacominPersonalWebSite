import { removeBackground } from '@imgly/background-removal-node';
import { readFileSync, writeFileSync } from 'fs';

const inputPath  = './foto.jpg';
const outputPath = './foto-sem-fundo.png';

console.log('Removendo fundo...');
const imageData  = readFileSync(inputPath);
const arrayBuffer = imageData.buffer.slice(imageData.byteOffset, imageData.byteOffset + imageData.byteLength);

const blob   = await removeBackground(new Blob([arrayBuffer], { type: 'image/jpeg' }));
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(outputPath, buffer);
console.log('Concluído:', outputPath);
