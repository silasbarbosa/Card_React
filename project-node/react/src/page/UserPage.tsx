import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import { fetchUsers, type User } from '../service/api';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((usersData) => {
        console.log('usersData bruto:', usersData);

        // Garante que é array antes de salvar no estado
        if (Array.isArray(usersData)) {
          setUsers(usersData);
        } else if (usersData && Array.isArray((usersData as any).data)) {
          // Exemplo se a API devolver algo como { data: [...] }
          setUsers((usersData as any).data);
        } else {
          console.error('Formato inesperado da resposta da API:', usersData);
          setUsers(null);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar usuários', error);
        setLoading(false);
        setUsers(null);
      });
  }, []);

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  if (!users || !Array.isArray(users)) {
    return <p>Erro: resposta da API em formato inesperado. Veja o console.</p>;
  }

  return (
    <div>
      {users.map((user) => (
        <Card
          key={user.email}
          nome={user.nome}
          email={user.email}
          situacao={user.situacao}
        />
      ))}
    </div>
  );
};

export default UsersPage;
