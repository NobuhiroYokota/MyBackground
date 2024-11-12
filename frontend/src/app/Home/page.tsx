"use client"

import Link from 'next/link';
import { useFormContext } from '../../lib/FormProvider';
import { useState } from 'react';

export default function Home() {
  const { jpName, setJpName, engName, setEngName, facultyName, setFacultyName, departmentName, setDepartmentName, graduationYear, setGradiationYear, id, setId } = useFormContext();
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    if (!jpName) {
      formIsValid = false;
      errors["jpName"] = "名前（漢字）を入力してください。";
    }
    if (!engName) {
      formIsValid = false;
      errors["engName"] = "名前（ローマ字）を入力してください。";
    }
    if (!facultyName) {
      formIsValid = false;
      errors["facultyName"] = "学部を入力してください。";
    }
    if (!departmentName) {
      formIsValid = false;
      errors["departmentName"] = "学科を入力してください。";
    }
    if (!graduationYear) {
      formIsValid = false;
      errors["graduationYear"] = "卒業年数を入力してください。";
    }
    if (!id) {
      formIsValid = false;
      errors["id"] = "X:idを入力してください。";
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full m-8">
        <h1 className="text-2xl font-bold mb-6 text-center">必要な情報を入力してください</h1>
        <hr className="mb-6"/>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">名前（漢字）</label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded"
              type="text"
              value={jpName}
              onChange={(e) => setJpName(e.target.value)}
            />
            {errors.jpName && <span className="text-red-500 text-sm">{errors.jpName}</span>}
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">名前（ローマ字）</label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded"
              type="text"
              value={engName}
              onChange={(e) => setEngName(e.target.value)}
            />
            {errors.engName && <span className="text-red-500 text-sm">{errors.engName}</span>}
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">学部</label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded"
              type="text"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
            />
            {errors.facultyName && <span className="text-red-500 text-sm">{errors.facultyName}</span>}
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">学科</label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded"
              type="text"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
            {errors.departmentName && <span className="text-red-500 text-sm">{errors.departmentName}</span>}
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">卒業年数（例:26卒）</label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded"
              type="text"
              value={graduationYear}
              onChange={(e) => setGradiationYear(e.target.value)}
            />
            {errors.graduationYear && <span className="text-red-500 text-sm">{errors.graduationYear}</span>}
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">X:id</label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {errors.id && <span className="text-red-500 text-sm">{errors.id}</span>}
          </div>
          <div className="col-span-2">
            <Link href="Home/Output" className="block text-center bg-blue-500 text-white py-4 rounded mt-4 hover:bg-blue-600">
              Enter
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
