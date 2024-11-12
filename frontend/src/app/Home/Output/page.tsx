"use client"

import { useEffect, useRef, useState } from 'react';
import { useFormContext } from '../../../lib/FormProvider';
import Link from 'next/link';

export default function Output() {
  const [resUrl, setResUrl] = useState("");
  const { jpName, engName, facultyName, departmentName, graduationYear, id } = useFormContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const getUrl = `https://api.qrserver.com/v1/create-qr-code/?data=https://twitter.com/${id}&size=100x100`;

    fetch(getUrl)
      .then((res) => setResUrl(res.url));

    if (resUrl) {
      const qrImage = new Image();
      qrImage.crossOrigin = "anonymous";
      qrImage.src = resUrl;
      qrImage.onload = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.fillStyle = "#F0F0F0";
        context.fillRect(0, 0, 1920, 1080);

        context.fillStyle = "#000000";
        context.font = "70px serif";
        context.fillText(jpName, 100, 200);

        context.font = "50px serif";
        context.fillText(engName, 100, 130);

        context.font = "50px serif";
        context.fillText(facultyName, 100, 270);

        context.font = "50px serif";
        context.fillText(departmentName, 100, 320);

        context.font = "40px serif";
        context.fillText(graduationYear, 100, 800);

        context.font = "50px serif";
        context.fillText("X:@" + id, 100, 860);

        context.drawImage(qrImage, 1500, 700, 200, 200);
      };
    }
  }, [jpName, engName, facultyName, departmentName, graduationYear, id, resUrl]);

  const handleSaveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "template.png";
    link.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full m-8">
        <div className="flex flex-col items-center mt-8">
          <canvas ref={canvasRef} className="border border-gray-300 mb-4" style={{ width: "500px", height: "300px" }} width={1920} height={1080}></canvas>
          <button onClick={handleSaveImage} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            保存
          </button>
          <Link href="/Home" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 text-center">
            topへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
