import { PatientDto } from '.';

export class Patient {
  patient_id: number;
  patient_identifier: string | null;
  cholesterol: string;
  blood_pressure: string;
  glucose_fasting: string;
  glucose_1hr: string;
  glucose_2hr: string;
  height: string;
  weight: string;
  bmi: string;
  heart_rate: string;
  age: number;
  attending_physician: string;
  lab_technician: string;

  constructor(dto: PatientDto) {
    this.patient_id = dto.patient_id;
    this.patient_identifier = dto.patient_identifier;
    this.cholesterol = dto.cholesterol;
    this.blood_pressure = dto.blood_pressure;
    this.glucose_fasting = dto.glucose_fasting;
    this.glucose_1hr = dto.glucose_1hr;
    this.glucose_2hr = dto.glucose_2hr;
    this.height = dto.height;
    this.weight = dto.weight;
    this.bmi = dto.bmi;
    this.heart_rate = dto.heart_rate;
    this.age = dto.age;
    this.attending_physician = dto.attending_physician;
    this.lab_technician = dto.lab_technician;
  }
}
