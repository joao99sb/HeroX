import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface IIncidentsResponse {
  id: number;
  title: string;
  description: string;
  value: string;
  ngo: {
    id: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
  };
}

interface IResponse {
  loading: boolean;
  error: boolean;
  incidents: IIncidentsResponse[];
  hasMore: boolean;
  total: number;
}

export function useListSearch(pageNumber: number): IResponse {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [incidents, setIncidents] = useState<IIncidentsResponse[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api
      .get('incidents/all', {
        params: { page: pageNumber },
      })
      .then((res) => {
        setIncidents((oldIncidents) => {
          return [...oldIncidents, ...res.data];
        });
        setTotal(res.headers['x-total-count']);

        if (res.headers['x-total-count'] > incidents.length) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }

        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [pageNumber]);

  return { loading, error, incidents, hasMore, total };
}
