import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer, ReactPDF } from "@react-pdf/renderer";
import { RenderPdf } from "./RenderPdf";

export const RenderApp = () => {
  return (
    <PDFViewer>
      <RenderPdf />
      {/* Render:
      {ReactPDF.render(<RenderPdf />, `${__dirname}/example.pdf`)} */}
    </PDFViewer>
  );
};
