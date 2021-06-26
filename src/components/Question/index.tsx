import { ReactNode } from 'react';
import cx from 'classnames';

import { Container } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
  theme?: 'light' | 'dark';
};

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
  theme,
}: QuestionProps) {
  return (
    <Container
      className={cx(
        'question',
        theme,
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered },
      )}
    >
      <p
        className={cx(
          theme,
          { answered: isAnswered },
          { highlighted: isHighlighted && !isAnswered },
        )}
      >
        {content}
      </p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span
            className={cx(
              theme,
              { answered: isAnswered },
              { highlighted: isHighlighted && !isAnswered },
            )}
          >
            {author.name}
          </span>
        </div>
        <div
          className={cx(
            theme,
            { answered: isAnswered },
            { highlighted: isHighlighted && !isAnswered },
          )}
        >
          {children}
        </div>
      </footer>
    </Container>
  );
}
