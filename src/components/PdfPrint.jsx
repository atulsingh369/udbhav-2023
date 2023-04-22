import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PdfPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Event Register",
    onafterprint: () => alert("Print Success"),
  });
  return (
    <div className="absolute grid place-items-center h-full w-screen bg-black/60 backdrop-blur-sm z-20">
      <div
        className="flex flex-col h-screen w-full bg-red-500 p-5"
        sty
        ref={componentRef}
      >
        <h1 className="font-bold text-3xl">Card</h1>
        <p onClick={() => handlePrint()}>Print this shit</p>
      </div>
    </div>
  );
};

export default PdfPrint;
