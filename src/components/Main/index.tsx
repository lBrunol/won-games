import * as S from './styles';

const Main = ({ title = 'React', body = 'É isso ai' }) => (
  <main>
    <S.Title>{title}</S.Title>
    <p>{body}</p>
  </main>
)

export default Main
