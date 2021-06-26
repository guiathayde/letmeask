import { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ilustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import darkLogoImg from '../../assets/images/dark-logo.svg';

import { Button } from '../../components/Button';

import { ToggleThemeButton } from '../../components/ToggleThemeButton';
import { database } from '../../services/firebase';

import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export function NewRoom() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <aside className={theme}>
        <img
          src={ilustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main className={theme}>
        <div className="main-content">
          <div className="toggle-button">
            <ToggleThemeButton theme={theme} />
          </div>
          <img src={theme === 'light' ? logoImg : darkLogoImg} alt="Letmeask" />
          <h2 className={theme}>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </Container>
  );
}
