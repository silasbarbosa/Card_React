export interface User {
  nome: string;
  email: string;
  situacao: string;
}

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://mercadinho.top/crm3/backend/api/teste/get_users_homologacao.php');
  const data = await response.json();
  return data; // Assumindo que a API retorna um array com objetos User
}
