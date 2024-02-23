export interface Service {
  id: number;
  user: string;
  phone: string;
}

export interface Equipment {
  id: number;
  label: string;
  address: string;
  equipment: string;
  service: Service[];
}

export interface Branch {
  id: number;
  path: string;
  label: string;
  equipments: Equipment[];
}