'use strict';

function hello(params) {
  const name = params.name || 'World';
  console.log('log', { payload: `Hello, ${name}` });
  return { payload: `Hello, ${name}!` };
}

function soma(params) {
  const a = parseFloat(params.a) || 0;
  const b = parseFloat(params.b) || 0;

  const result = a + b;

  console.log('log', { resultado: result });
  return { resultado: result };
}

exports.hello = hello;
exports.soma = soma;
