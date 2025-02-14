/** @format */

import styled from 'styled-components';

export const MainContainer = styled.form`
  align-self: flex-start;
  margin-top: 3rem;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  input[type='text'],
  input[type='email'],
  input[type='number'],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type='submit'] {
    background-color: #04aa6d;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: #45a049;
  }
  .warning {
    padding: 0;
    margin: 0;
    color: red;
  }
`;

export const PaymentformContainer = styled.div`
  
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
