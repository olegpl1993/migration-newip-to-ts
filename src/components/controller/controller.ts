import AppLoader from './appLoader';
import { DataSource, DataNews } from '../../types/types';

class AppController extends AppLoader {
  getSources(callback: (data: DataSource) => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback as () => void
    );
  }

  getNews(e: MouseEvent, callback: (data: DataNews) => void) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if ((target as HTMLDivElement).classList.contains('source__item')) {
        const sourceId = (target as HTMLDivElement).getAttribute('data-source-id');
        if ((newsContainer as HTMLDivElement).getAttribute('data-source') !== sourceId) {
          (newsContainer as HTMLDivElement).setAttribute('data-source', sourceId as string);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback as () => void
          );
        }
        return;
      }
      target = (target as HTMLDivElement).parentNode;
    }
  }
}

export default AppController;
