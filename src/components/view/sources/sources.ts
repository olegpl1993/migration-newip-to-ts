import './sources.css';
import { ItemSource } from '../../../types/types';

class Sources {
  draw(data: Array<ItemSource>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp');

    data.forEach((item: ItemSource) => {
      const sourceClone = ((sourceItemTemp as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment);

      (sourceClone.querySelector('.source__item-name') as HTMLDivElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLDivElement).append(fragment);
  }
}

export default Sources;
