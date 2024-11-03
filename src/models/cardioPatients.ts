import { CardioPatientDto } from '.';

export class CardioPatient {
  id: number;
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  ap_hi: number;
  ap_lo: number;
  cholesterol: number;
  gluc: number;
  smoke: boolean;
  alco: boolean;
  active: boolean;
  cardio: boolean;

  constructor(dto: CardioPatientDto) {
    this.id = dto.id;
    this.age = dto.age;
    this.gender = dto.gender;
    this.height = dto.height;
    this.weight = dto.weight;
    this.ap_hi = dto.ap_hi;
    this.ap_lo = dto.ap_lo;
    this.cholesterol = dto.cholesterol;
    this.gluc = dto.gluc;
    this.smoke = dto.smoke;
    this.alco = dto.alco;
    this.active = dto.active;
    this.cardio = dto.cardio;
  }
}
