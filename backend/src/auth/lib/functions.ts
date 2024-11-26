export function calcularFechaSemestral(fechaInicio: Date): Date {
    const year = fechaInicio.getFullYear();
    
    const fechaFinPrimerSemestre = new Date(year, 7 - 1, 5);  // 5 de agosto
    const fechaFinSegundoSemestre = new Date(year, 12 - 1, 5); // 5 de diciembre
  
    if (fechaInicio <= fechaFinPrimerSemestre) {
      // Si es primer semestre, la fecha final es 5 de agosto
      return fechaFinPrimerSemestre;
    } else {
      // Si es segundo semestre, la fecha final es 5 de diciembre
      return fechaFinSegundoSemestre;
    }
  }
  