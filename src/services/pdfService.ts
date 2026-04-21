import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Dynamic } from '../data/dynamics';

export const downloadDynamicPDF = (dynamic: any) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  generateSlide(doc, dynamic);

  if (dynamic.subItems && dynamic.subItems.length > 0) {
    dynamic.subItems.forEach((subItem: any) => {
      doc.addPage();
      const subItemWithContext = {
        ...subItem,
        area: subItem.area || dynamic.area,
        id: subItem.id || dynamic.id
      };
      generateSlide(doc, subItemWithContext);
    });
  }
  
  const idPrefix = dynamic.id ? `Dinamica_${dynamic.id}_` : '';
  const sanitizedTitle = dynamic.title.replace(/[^\w\s-]/gi, '').replace(/\s+/g, '_');
  doc.save(`${idPrefix}${sanitizedTitle}.pdf`);
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

const generateSlide = (doc: jsPDF, dynamic: any) => {
  // Check if it's the right type (Dynamic-like)
  if (!dynamic || !('title' in dynamic)) return;

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // Background Header
  doc.setFillColor(16, 185, 129); // Emerald 600
  doc.rect(0, 0, width, 30, 'F');

  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  const title = dynamic.title.toUpperCase();
  const titleLines = doc.splitTextToSize(title, width - 30);
  doc.text(titleLines, 15, titleLines.length > 1 ? 12 : 20);

  // Metadata Bar
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.rect(0, 30, width, 12, 'F');
  doc.setTextColor(100, 116, 139); // Slate 500
  doc.setFontSize(9);
  const idText = dynamic.id ? `ID: #${dynamic.id} | ` : '';
  const areaText = dynamic.area ? `ÁREA: ${dynamic.area} | ` : '';
  doc.text(`${idText}${areaText}DIFICULDADE: ${dynamic.difficulty} | DURAÇÃO: ${dynamic.duration}`, 15, 38);

  // Content
  doc.setTextColor(30, 41, 59); // Slate 800
  let currentY = 50;
  
  // Objective
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('OBJETIVO:', 15, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const focusLines = doc.splitTextToSize(dynamic.focus, width - 30);
  doc.text(focusLines, 15, currentY + 7);
  currentY += (focusLines.length * 6) + 10;

  // Overview
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('VISÃO GERAL:', 15, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const overviewLines = doc.splitTextToSize(dynamic.overview, width - 30);
  doc.text(overviewLines, 15, currentY + 7);
  currentY += (overviewLines.length * 5) + 10;

  // Materials
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('MATERIAIS NECESSÁRIOS:', 15, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const materialsText = dynamic.materials && dynamic.materials.length > 0 ? dynamic.materials.join(', ') : 'Nenhum material especial necessário.';
  const materialsLines = doc.splitTextToSize(materialsText, width - 30);
  doc.text(materialsLines, 15, currentY + 7);
  currentY += (materialsLines.length * 5) + 10;

  // Execution
  if (dynamic.steps && dynamic.steps.length > 0) {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('COMO APLICAR:', 15, currentY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    currentY += 7;
    dynamic.steps.forEach((step, idx) => {
      const stepText = `${idx + 1}. ${step}`;
      const lines = doc.splitTextToSize(stepText, width - 35);
      if (currentY + (lines.length * 5) > 170) return; // Basic overflow protection
      doc.text(lines, 15, currentY);
      currentY += (lines.length * 5) + 2;
    });
  }

  // Link if exists
  if (dynamic.externalLink) {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(16, 185, 129);
    doc.text('LINK PARA MATERIAL:', 15, currentY + 5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(dynamic.externalLink, 15, currentY + 12);
    currentY += 15;
  }

  // Tip Box
  const tipY = 175;
  doc.setFillColor(236, 253, 245); // Emerald 50
  doc.setDrawColor(16, 185, 129); // Emerald 600
  doc.roundedRect(10, tipY, width - 20, 18, 2, 2, 'FD');
  
  doc.setTextColor(6, 78, 59); // Emerald 900
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('DICA DE OURO:', 15, tipY + 6);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  const tipLines = doc.splitTextToSize(`"${dynamic.tip}"`, width - 40);
  doc.text(tipLines, 15, tipY + 12);

  // Footer
  doc.setTextColor(148, 163, 184); // Slate 400
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Plataforma ENTREGÁVEL - Dinâmicas de Segurança do Trabalho', width / 2, height - 5, { align: 'center' });
};
