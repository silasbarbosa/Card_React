import React from 'react';

interface CardProps {
  nome: string;
  email: string;
  situacao: string;
}

const Card: React.FC<CardProps> = ({ nome, email, situacao }) => {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>Email: {email}</p>
      <p>Situação: {situacao}</p>
    </div>
  );
};

export default Card;