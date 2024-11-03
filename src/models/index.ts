export interface CardioPatientDto {
  id: number; // Asumiendo que el ID es un número entero
  age: number; // Edad (número entero)
  gender: 'male' | 'female'; // Género (puedes usar un tipo literal)
  height: number; // Altura (número)
  weight: number; // Peso (número)
  ap_hi: number; // Presión arterial alta (número)
  ap_lo: number; // Presión arterial baja (número)
  cholesterol: number; // Niveles de colesterol (número)
  gluc: number; // Glucosa (número)
  smoke: boolean; // Fuma (booleano)
  alco: boolean; // Consume alcohol (booleano)
  active: boolean; // Activo (booleano)
  cardio: boolean; // Condición cardíaca (booleano)
}

export interface PatientDto {
  patient_id: number; // Identificador único del paciente
  patient_identifier: string | null; // Identificador del paciente (puede ser nulo)
  cholesterol: string; // Nivel de colesterol
  blood_pressure: string; // Presión arterial
  glucose_fasting: string; // Glucosa en ayunas
  glucose_1hr: string; // Glucosa a 1 hora
  glucose_2hr: string; // Glucosa a 2 horas
  height: string; // Altura del paciente
  weight: string; // Peso del paciente
  bmi: string; // Índice de masa corporal
  heart_rate: string; // Frecuencia cardíaca
  age: number; // Edad del paciente
  attending_physician: string; // Médico que atiende al paciente
  lab_technician: string; // Técnico de laboratorio
}
