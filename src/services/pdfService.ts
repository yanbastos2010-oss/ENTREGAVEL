import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Dynamic } from '../data/dynamics';

export const downloadDynamicPDF = (dynamic: Dynamic) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  generateSlide(doc, dynamic);
  
  doc.save(`Dinamica_${dynamic.id}_${dynamic.title.replace(/\s+/g, '_')}.pdf`);
};

export const downloadAllDynamicsPDF = (dynamics: Dynamic[]) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  dynamics.forEach((dynamic, index) => {
    if (index > 0) doc.addPage();
    generateSlide(doc, dynamic);
  });

  doc.save('Acervo_Completo_Dinamicas_SST.pdf');
};

const generateSlide = (doc: jsPDF, dynamic: Dynamic) => {
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // Background Header
  doc.setFillColor(16, 185, 129); // Emerald 600
  doc.rect(0, 0, width, 30, 'F');

  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.text(dynamic.title.toUpperCase(), 15, 20);

  // Metadata Bar
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.rect(0, 30, width, 15, 'F');
  doc.setTextColor(100, 116, 139); // Slate 500
  doc.setFontSize(10);
  doc.text(`ID: #${dynamic.id} | ÁREA: ${dynamic.area} | DIFICULDADE: ${dynamic.difficulty} | DURAÇÃO: ${dynamic.duration}`, 15, 40);

  // Content
  doc.setTextColor(30, 41, 59); // Slate 800
  
  // Objective
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('OBJETIVO:', 15, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  const focusLines = doc.splitTextToSize(dynamic.focus, width - 30);
  doc.text(focusLines, 15, 68);

  // Overview
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('VISÃO GERAL:', 15, 85);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const overviewLines = doc.splitTextToSize(dynamic.overview, width - 30);
  doc.text(overviewLines, 15, 93);

  // Execution
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('COMO APLICAR:', 15, 115);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  let yPos = 123;
  dynamic.steps.forEach((step, idx) => {
    const stepText = `${idx + 1}. ${step}`;
    const lines = doc.splitTextToSize(stepText, width - 30);
    doc.text(lines, 15, yPos);
    yPos += (lines.length * 5) + 2;
  });

  // Tip Box
  const tipY = 175;
  doc.setFillColor(236, 253, 245); // Emerald 50
  doc.setDrawColor(16, 185, 129); // Emerald 600
  doc.roundedRect(10, tipY, width - 20, 20, 3, 3, 'FD');
  
  doc.setTextColor(6, 78, 59); // Emerald 900
  doc.setFont('helvetica', 'bold');
  doc.text('DICA DE OURO:', 15, tipY + 8);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  const tipLines = doc.splitTextToSize(`"${dynamic.tip}"`, width - 40);
  doc.text(tipLines, 15, tipY + 15);

  // Footer
  doc.setTextColor(148, 163, 184); // Slate 400
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Plataforma ENTREGÁVEL - Dinâmicas de Segurança do Trabalho', width / 2, height - 5, { align: 'center' });
};
