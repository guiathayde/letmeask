import copyImg from '../../assets/images/copy.svg';

import { Container } from './styles';

type RoomCodeProps = {
  code: string;
  theme?: 'light' | 'dark';
};

export function RoomCode({ code, theme }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container
      className={`room-code ${theme}`}
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span className={theme}>Sala #{code}</span>
    </Container>
  );
}
