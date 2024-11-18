"use client"
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [jpName, setJpName] = useState('');
  const [engName, setEngName] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [graduationYear, setGradiationYear] = useState('');
  const [id, setId] = useState('');

  const values = {
    jpName,
    setJpName,
    engName,
    setEngName,
    facultyName,
    setFacultyName,
    departmentName,
    setDepartmentName,
    graduationYear,
    setGradiationYear,
    id,
    setId,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};
