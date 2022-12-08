import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.up.railway.app/',/* 'https://newsapi.org/v2/', 'https://newsapi-redirect-production.up.railway.app/' */{
      apiKey: '418c2e2443aa40699febdfeb5115de86', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
