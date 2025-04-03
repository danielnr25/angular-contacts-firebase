
export type ColumnKeys<T> = Array<keyof T>
//ColumnKeys<T>: Es un tipo genérico que recibe un tipo T y devuelve un arreglo de las claves T, Keyof es un operador que devuelve los tipos de las claves de un objeto T (generico)

export interface Contact{
  id:number,
  name:string,
  email:string,
  phone:number,
  country:string,
  actions:string
}
