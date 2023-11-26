export type User = {
  gen_nombre?: string;
  usu_per_identificacion?: string;
  per_otros_nombres?: string;
  per_primer_apellido?: string;
  per_primer_nombre?: string;
  per_segundo_apellido?: string;
  per_tip_id?: "CC" | "TI";
  pro_nombre?: string;
  usu_email?: string;
  usu_estado?: string;
  usu_rol?: string;
  usu_usuario?: string;
  password?: string;
  usu_pro_id?: number;
  usu_clave?: string;
};

export interface Profession {
  pro_id: number;
  pro_nombre: string;
}
