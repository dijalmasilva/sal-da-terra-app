export type User = {
  id: number,
  created_at: Date,
  updated_at: Date,
  email: string,
  name?: string,
  phone?: null,
  birthdate?: null,
  roleId: number
}