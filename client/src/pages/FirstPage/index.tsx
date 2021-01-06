import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, List, Header, Incidents } from './styles';
import { endMessage } from './endMessage';
import { useListSearch } from '../../utils/useListSearch';

export const FirstPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { hasMore, incidents, total } = useListSearch(page);
  const handleSearch = (): void => {
    setPage(page + 1);
  };
  return (
    <Container>
      <Header>
        <p>Number of cases:&nbsp; {total}</p>
        <Link to="login">Register a new case</Link>
      </Header>
      <Incidents>
        <InfiniteScroll
          dataLength={incidents.length}
          next={handleSearch}
          hasMore={hasMore}
          loader={<h4>loading...</h4>}
          height={500}
          endMessage={endMessage}
          className="scroll"
        >
          {incidents.map((i) => {
            return (
              <Link
                to={{
                  pathname: `incidents/${i.ngo.name}/${i.id}`,
                  state: { info: i },
                }}
                key={i.id}
              >
                <List style={{ marginTop: '10px' }}>
                  <div className="first">
                    <span>Ngo:&nbsp; {i.ngo.name} </span>

                    <span>
                      value:{' '}
                      {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(parseFloat(i.value))}
                    </span>
                  </div>
                  <div className="second">
                    <span>Title:&nbsp; {i.title}</span>
                  </div>
                </List>
              </Link>
            );
          })}
        </InfiniteScroll>
      </Incidents>
    </Container>
  );
};
