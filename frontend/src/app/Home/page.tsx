"use client";

import Link from "next/link";
import { useFormContext } from "../../lib/FormProvider";
import { useState } from "react";

export default function Home() {
  const {
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
  } = useFormContext();

  const [errors, setErrors] = useState({});

  const fields = [
    { name: "jpName", label: "名前（漢字）", value: jpName, setter: setJpName, error: "名前（漢字）を入力してください。" },
    { name: "engName", label: "名前（ローマ字）", value: engName, setter: setEngName, error: "名前（ローマ字）を入力してください。" },
    { name: "facultyName", label: "学部", value: facultyName, setter: setFacultyName, error: "学部を入力してください。" },
    { name: "departmentName", label: "学科", value: departmentName, setter: setDepartmentName, error: "学科を入力してください。" },
    { name: "graduationYear", label: "卒業年数（例:26卒）", value: graduationYear, setter: setGradiationYear, error: "卒業年数を入力してください。" },
    { name: "id", label: "X:id", value: id, setter: setId, error: "X:idを入力してください。" },
  ];

  const handleValidation = () => {
    const newErrors = fields.reduce((acc, field) => {
      if (!field.value) {
        acc[field.name] = field.error;
      }
      return acc;
    }, {});
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const renderInputField = ({ name, label, value, setter }) => (
    <div className="col-span-1">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        className="w-full py-2 px-3 border border-gray-300 rounded"
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value)}
      />
      {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full m-8">
        <h1 className="text-2xl font-bold mb-6 text-center">必要な情報を入力してください</h1>
        <hr className="mb-6" />
        <div className="grid grid-cols-2 gap-6">
        {fields.map((field, index) => (
          <div key={field.name || index}>
            {renderInputField(field)}
          </div>
        ))}
        <div className="col-span-2">
          <Link
            href="Home/Output"
            className="block text-center bg-blue-500 text-white py-4 rounded mt-4 hover:bg-blue-600"
            onClick={(e) => {
              if (!handleValidation()) {
                e.preventDefault();
              }
            }}
          >
            Enter
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
